import type { Term } from '../types';

const term: Term = {
  slug: 'call-abandonment-rate',
  term: 'Call abandonment rate',
  aka: ['Abandoned call rate', 'Abandonment rate', 'Abandoned calls', 'Call abandon rate', 'Abandon rate'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is call abandonment rate? Meaning, formula, example',
  description: 'Call abandonment rate is the share of callers who hang up before anyone answers. Formula with example, common benchmarks and how to reduce it.',
  short: 'Call abandonment rate is the percentage of callers who hang up while waiting, before anyone answers, out of all the calls that reached your queue.',
  body: [
    'Every abandoned call is a customer who wanted something and gave up. Some of them ring a competitor, some ring back later, and some never do. The rate tells you how many you are losing to waiting.',
    'It belongs to the group of queue numbers with [average speed of answer](/glossary/average-speed-of-answer) and [service level](/glossary/service-level). To count it at all, you first need to know how many calls you are missing, as shown in [how to measure missed calls](/blog/measure-missed-calls-business).',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Call abandonment meaning in simple words',
      p: [
        'A call is abandoned when the caller hangs up after joining the [call queue](/glossary/call-queue) but before talking to a person. Callers who get an engaged tone never enter the queue, so they are missed calls but are not counted as abandoned in most reports.',
        'Abandoned calls are not the same as missed calls. A missed call is any call nobody answered. An abandoned call is a missed call where the caller was already waiting in line.',
      ],
    },
    {
      id: 'formula',
      h: 'How to calculate call abandonment rate',
      p: [
        'The formula is: abandonment rate = (abandoned calls divided by total calls offered to the queue) x 100.',
        'Worked example. A queue receives 400 calls in a day and 32 callers hang up before an answer. The rate is 32 / 400 x 100 = 8%.',
        'Many teams ignore very short abandons, because those are often wrong numbers or callers who hang up the moment they hear a recording. SQM Group notes that such false abandons happen in roughly the first 10 seconds, so some centres exclude them. Choose a cut-off and keep it the same every month.',
      ],
    },
    {
      id: 'good',
      h: 'What is a good abandonment rate?',
      p: [
        'SQM Group describes rates under 5 percent as generally good, and 5 to 10 percent as sometimes acceptable. Rates above 10 percent are usually called a red flag. Strong centres are often quoted at 3 percent or lower.',
        'These are commonly cited industry ranges, mostly from vendors and research firms. A line where callers pay per minute from a mobile may lose callers faster than a landline helpdesk, so watch your own trend by hour and by day.',
      ],
    },
    {
      id: 'causes',
      h: 'Why callers abandon calls',
      p: ['Most abandoned calls trace back to a few causes.'],
      list: [
        'Waiting too long with no idea how much longer.',
        'Hold music or a long advert before the call is answered.',
        'Too many menu choices in the [IVR](/glossary/ivr).',
        'Rush hours that are not staffed, such as salary days and festival weeks.',
        'Calls made when nobody is there and no voicemail is set.',
      ],
    },
    {
      id: 'reduce',
      h: 'How to reduce call abandonment',
      p: ['Shorten the wait and give the caller a reason to stay or a way out.'],
      list: [
        'Staff for the busy hours your call data shows.',
        'Set a maximum wait and move long waits to [voicemail](/glossary/voicemail) or an [AI call agent](/glossary/ai-call-agent).',
        'Keep the greeting short.',
        'Call back every abandoned number the same day. A same-day call recovers some customers who gave up.',
        'Read [how to cut hold time](/blog/reduce-call-hold-time) for more fixes.',
      ],
    },
    {
      id: 'cost',
      h: 'Putting a rupee figure on abandoned calls',
      p: [
        'Multiply abandoned calls per month by the share that would have become a sale or booking, and by the value of one. If 300 callers a month hang up, one in five would have booked, and a booking is worth 2,000 rupees, the monthly loss is 300 x 0.2 x 2,000 = 120,000 rupees. Use your own numbers, but even rough ones usually justify a fix.',
      ],
    },
    {
      id: 'airfone',
      h: 'Abandoned calls on AirFone',
      p: [
        'On AirFone you can cap the queue wait and send overflow to voicemail, another queue, a team or the AI call agent, so a caller is not left waiting. See the [phone system page](/products/phone-system).',
      ],
    },
  ],
  faq: [
    { q: 'What is the formula for call abandonment rate?', a: 'Abandoned calls divided by total calls offered to the queue, times 100.' },
    { q: 'Is a busy signal an abandoned call?', a: 'Usually not. A caller who hears a busy tone never joined the queue, so it counts as a missed call. Abandoned calls are those that hang up while waiting.' },
    { q: 'What is a good call abandonment rate?', a: 'Under 5 percent is commonly called good, 5 to 10 percent sometimes acceptable, and above 10 percent a red flag. Your type of call changes what is realistic.' },
    { q: 'Should I call back abandoned callers?', a: 'Yes. A same-day call back recovers some of the customers who gave up.' },
    { q: 'Do very short abandoned calls count?', a: 'Many teams exclude abandons in the first few seconds, since they are often wrong numbers. Pick one rule and keep it.' },
  ],
  related: ['average-speed-of-answer', 'service-level', 'call-queue', 'voicemail', 'acd'],
  product: 'phone-system',
};

export default term;
