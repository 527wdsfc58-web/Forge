// Forge V0.19 secure AI endpoint for a Cloudflare Worker.
// Store your OpenAI API key as a Worker secret named OPENAI_API_KEY.
// The Forge browser app should point AI_WORKOUT_ENDPOINT at this Worker URL.

const MODEL = 'gpt-5.6-luna';

const workoutSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    name: { type: 'string' },
    type: { type: 'string', enum: ['AMRAP', 'EMOM', 'Strength', 'Circuit', 'Run', 'Mobility'] },
    duration: { type: 'number' },
    exercises: {
      type: 'array',
      minItems: 1,
      maxItems: 12,
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          name: { type: 'string' },
          sets: { type: 'number' },
          target: { type: 'number' },
          metric: { type: 'string', enum: ['reps', 'kg', 'minutes', 'seconds', 'calories', 'metres', 'rounds'] },
          weight: { type: 'number' }
        },
        required: ['name', 'sets', 'target', 'metric', 'weight']
      }
    }
  },
  required: ['name', 'type', 'duration', 'exercises']
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*' }
  });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'POST, OPTIONS',
        'access-control-allow-headers': 'content-type'
      }});
    }
    if (request.method !== 'POST') return json({ error: 'POST required' }, 405);
    if (!env.OPENAI_API_KEY) return json({ error: 'OPENAI_API_KEY is not configured' }, 500);

    let brief;
    try { brief = await request.json(); }
    catch { return json({ error: 'Invalid JSON' }, 400); }

    const catalog = Array.isArray(brief.exerciseCatalog) ? brief.exerciseCatalog : [];
    if (!brief.time || !brief.workoutTypes?.length || !brief.muscleFocus?.length || !brief.equipment?.length || !catalog.length) {
      return json({ error: 'Incomplete workout request' }, 400);
    }

    const system = `You generate safe, practical workouts for Forge, a workout tracking app.
Return ONLY the structured workout requested by the schema.
Use ONLY exercises from the supplied Forge exercise catalogue. Never invent an exercise name.
Respect time, selected workout types, muscle focus, equipment and difficulty.
If the user asks to avoid something in additionalInstructions, obey it.
Do not include equipment the user did not select.
Keep the workout realistic for the requested duration.
For AMRAP and EMOM, structure exercise targets appropriately for those formats.
For Run, use running exercises from the catalogue.
For Strength, prefer sensible sets and reps rather than arbitrary high-volume circuits.
Do not prescribe dangerous, highly technical or Olympic lifts.
The returned workout must be immediately usable by the Forge tracker.`;

    const user = JSON.stringify({
      time: brief.time,
      workoutTypes: brief.workoutTypes,
      muscleFocus: brief.muscleFocus,
      equipment: brief.equipment,
      difficulty: brief.difficulty,
      goal: brief.goal,
      additionalInstructions: brief.additionalInstructions || '',
      exerciseCatalog: catalog
    });

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        input: [
          { role: 'system', content: [{ type: 'input_text', text: system }] },
          { role: 'user', content: [{ type: 'input_text', text: user }] }
        ],
        text: {
          format: {
            type: 'json_schema',
            name: 'forge_workout',
            strict: true,
            schema: workoutSchema
          }
        }
      })
    });

    if (!response.ok) {
      const detail = await response.text();
      return json({ error: 'OpenAI request failed', detail }, 502);
    }

    const data = await response.json();
    const text = data.output?.flatMap(x => x.content || []).find(x => x.type === 'output_text')?.text;
    if (!text) return json({ error: 'No structured workout returned' }, 502);

    let workout;
    try { workout = JSON.parse(text); }
    catch { return json({ error: 'AI returned invalid JSON' }, 502); }

    const allowed = new Set(catalog.map(x => x.name));
    workout.exercises = workout.exercises.filter(x => allowed.has(x.name));
    if (!workout.exercises.length) return json({ error: 'AI returned no catalogue exercises' }, 502);

    return json({ workout });
  }
};
