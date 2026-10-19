import type { Term } from '../types';

const term: Term = {
  slug: 'service-level',
  term: 'Service level',
  aka: ['Call centre service level', 'Telephone service factor', 'TSF', '80/20 rule call centre', 'Service level percentage'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is service level in a call centre? Meaning and formula',
  description: 'Service level is the share of calls answered within a target time, such as 80% in 20 seconds. Formula, worked example and how to improve it.',
  short: 'Service level is the percentage of calls answered within a target time, for example 80 percent of calls answered within 20 seconds.',
  body: [
    'Service level turns a promise into a number. Instead of saying "we answer quickly", you say "80 out of every 100 calls are picked up within 20 seconds", and you can check it every day.',
    'It is the main queue target for many call centres and is read with [average speed of answer](/glossary/average-speed-of-answer) and the [call abandonment rate](/glossary/call-abandonment-rate).',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Service level meaning in simple words',
      p: [
        'A service level has two parts: a percentage and a time. "80/20" means 80 percent of calls answered in 20 seconds. "90/30" means 90 percent in 30 seconds. You choose the numbers that fit your callers.',
        'Do not confuse it with a service level agreement (SLA) in a contract. That is a promise between a supplier and a customer. The call centre service level is a measurement of your own queue. It is sometimes called the telephone service factor.',
      ],
    },
    {
      id: 'formula',
      h: 'How to calculate service level',
      p: [
        'The formula is: service level = (calls answered within the target time divided by total calls offered) x 100.',
        'Worked example. In an hour 100 calls reach the queue. 74 are answered within 20 seconds, 18 are answered later and 8 callers hang up. Service level = 74 / 100 x 100 = 74%. Against an 80/20 target, you missed it.',
        'Teams count abandoned calls differently. Some include them in the total, some remove those that hung up very quickly. Pick one rule and keep it, or last month and this month will not compare.',
      ],
    },
    {
      id: 'target',
      h: 'What is a good service level? The 80/20 rule',
      p: [
        '80/20 is the most commonly cited target in call centres. Its origin is debated and it is not backed by strong research, so treat it as a convention and not a law. The threshold is a business decision. A hospital emergency line needs a stricter target, while a back-office line can accept longer waits.',
        'Choose a target, check what staffing it needs, then review it against your abandonment rate. If callers hang up before 20 seconds, your target is too slow for them.',
      ],
    },
    {
      id: 'vs',
      h: 'Service level vs average speed of answer',
      p: [
        'ASA is an average, so a few very long waits can hide behind many short ones. Service level shows what share of callers got a fast answer. Use ASA to see the middle and service level to see whether you kept your promise. A queue can meet 80/20 while the remaining 20 percent wait several minutes, so also watch the longest current wait.',
      ],
    },
    {
      id: 'staffing',
      h: 'Why service level swings with staffing',
      p: [
        'Service level is very sensitive to the number of people on shift. One person off sick during a rush can drop it by many points, because calls pile up faster than they clear. This is why the rush hours matter more than the daily figure. Report service level by hour, not just by day, and plan staff for the worst hour of the week, such as the morning after a festival holiday.',
      ],
    },
    {
      id: 'improve',
      h: 'How to improve service level',
      p: ['Service level improves when people are available at the moments calls arrive.'],
      list: [
        'Staff by half hour, based on your own call counts, and expect rushes on salary days and festival weeks.',
        'Use [call routing](/glossary/call-routing) so callers reach the right team without transfers.',
        'Let an [AI call agent](/glossary/ai-call-agent) take simple, repeated questions.',
        'Cap the wait and send overflow to [voicemail](/glossary/voicemail) or another team.',
      ],
    },
    {
      id: 'airfone',
      h: 'Service level and AirFone',
      p: [
        'AirFone queues use longest idle or round robin, with a maximum wait and overflow to voicemail, another queue, a team or the AI call agent. Supervisors can listen to live calls and step in. See the [phone system](/products/phone-system).',
      ],
    },
  ],
  faq: [
    { q: 'What is the service level formula?', a: 'Calls answered within the target time divided by total calls offered, times 100.' },
    { q: 'What does 80/20 mean in a call centre?', a: 'It means 80 percent of calls are answered within 20 seconds. It is the most commonly cited target, not a fixed standard.' },
    { q: 'Is service level the same as an SLA?', a: 'No. An SLA is a contract promise. Service level is a measure of how fast your queue answers.' },
    { q: 'Do abandoned calls count in service level?', a: 'It depends on your rule. Many teams include them in the total, but the important part is to use the same rule every time.' },
    { q: 'Can a queue meet 80/20 and still have long waits?', a: 'Yes. The other 20 percent of callers can wait much longer, so also track the longest wait and the abandonment rate.' },
  ],
  related: ['average-speed-of-answer', 'call-abandonment-rate', 'call-queue', 'acd', 'average-handle-time'],
  product: 'phone-system',
};

export default term;
