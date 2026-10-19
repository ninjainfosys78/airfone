import type { Term } from '../types';

const term: Term = {
  slug: 'first-call-resolution',
  term: 'First call resolution',
  full: 'FCR',
  aka: ['FCR', 'First contact resolution', 'First-call resolution rate', 'FCR formula', 'FCR call centre'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is first call resolution (FCR)? Meaning and formula',
  description: 'First call resolution (FCR) is the share of customer issues solved on the first call. Meaning, formula with a worked example, benchmarks and how to improve it.',
  short: 'First call resolution (FCR) is the share of customer problems that are solved during the first call, so the customer does not need to call again about the same issue.',
  body: [
    'A caller who has to ring three times to fix one problem is a frustrated caller, and each extra call also uses up staff time. FCR measures how often you get it right the first time.',
    'It is widely treated as the best single sign of service quality on the phone. It pairs with [average handle time](/glossary/average-handle-time): a team can make calls short by rushing, but a low FCR then shows the problem was not solved.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'First call resolution meaning in simple words',
      p: [
        'If a customer phones about a failed payment and the agent fixes it before the call ends, that call was resolved on first contact. If the customer must ring back tomorrow because nobody had the answer, it was not.',
        'You will also see "first contact resolution". It is the same idea, but it counts chat, email and messaging apps as well as phone calls.',
      ],
    },
    {
      id: 'formula',
      h: 'How to calculate first call resolution',
      p: [
        'The formula is: FCR = (calls resolved on the first call divided by total calls) x 100.',
        'Worked example. In a week your team takes 500 calls. After checking, 380 were solved without the customer calling again about the same issue. FCR = 380 / 500 x 100 = 76%.',
        'The hard part is deciding what counts as resolved. There are two common ways to find out.',
      ],
      list: [
        'Ask the customer at the end of the call, or in a short follow-up message, whether the issue is solved. This is the method the call centre research firm SQM Group uses in its benchmarks.',
        'Check whether the same number called again about the same issue within a set period, such as three days. This is easier to automate, but misses customers who give up or go elsewhere.',
      ],
    },
    {
      id: 'good',
      h: 'What is a good FCR rate?',
      p: [
        'SQM Group, whose benchmarks are the most quoted, puts a good FCR rate at 70 to 79 percent and an excellent rate at 80 percent or more. Its research across hundreds of North American centres puts the cross-industry average at about 70 percent.',
        'These are commonly cited industry ranges, not targets for every business. Simple calls such as opening hours score higher, while technical support and telecom score lower, and the method of measuring changes the result. Use them as a rough guide and track your own trend.',
      ],
    },
    {
      id: 'improve',
      h: 'How to improve first call resolution',
      p: ['Most failures come from staff lacking the information or the permission to finish the job.'],
      list: [
        'Give staff one place to find answers and the customer history while the call is live.',
        'Let them take small decisions, such as a refund up to a limit, without asking a manager.',
        'Route calls to the right team first, using a good [IVR](/glossary/ivr) or [call routing](/glossary/call-routing) setup, so the caller does not need a transfer.',
        'Read call transcripts to find the questions that cause repeat calls, then fix the answer.',
        'Use warm [call transfer](/glossary/call-transfer), where the first person explains the case to the second, so the caller does not repeat the story.',
      ],
    },
    {
      id: 'repeat',
      h: 'Why repeat calls cost more than they seem',
      p: [
        'Each repeat call costs a full handle time again, and the customer is more annoyed the second time. For a Nepali caller paying per minute from a mobile, a second call about the same problem is also money out of their pocket. If 24 of every 100 calls are repeats, nearly a quarter of your phone workload is avoidable.',
      ],
    },
    {
      id: 'vs',
      h: 'FCR vs average handle time',
      p: [
        'AHT measures how long calls take. FCR measures whether they worked. Improving one can hurt the other, so track both. A slightly longer call that solves the issue is cheaper than two short calls.',
      ],
    },
    {
      id: 'airfone',
      h: 'First call resolution on AirFone',
      p: [
        'AirFone can transcribe calls so you can see why callers phone again, and the AI call agent answers from the information you give it and hands over to a person with a summary. That helps the next person start with the full picture. See the [AI call agent](/products/ai-call-agent).',
      ],
    },
  ],
  faq: [
    { q: 'What is the formula for first call resolution?', a: 'FCR = (issues resolved on the first call divided by total issues) x 100.' },
    { q: 'What is the difference between first call and first contact resolution?', a: 'First call resolution counts only phone calls. First contact resolution counts any channel, such as chat, email or messaging apps.' },
    { q: 'How do I measure FCR?', a: 'Ask the customer if the issue is solved, or check if the same number called again about the same issue within a set number of days.' },
    { q: 'What is a good FCR rate?', a: 'SQM Group commonly cites 70 to 79 percent as good and 80 percent or more as excellent, with an average near 70 percent. Your own mix of calls changes what is realistic.' },
    { q: 'Does a high FCR mean happy customers?', a: 'Usually, but not always. Combine it with a short customer survey.' },
  ],
  related: ['average-handle-time', 'call-transfer', 'call-routing', 'service-level', 'ivr'],
  product: 'ai-call-agent',
};

export default term;
