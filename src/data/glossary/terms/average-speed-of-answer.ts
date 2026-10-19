import type { Term } from '../types';

const term: Term = {
  slug: 'average-speed-of-answer',
  term: 'Average speed of answer',
  full: 'ASA',
  aka: ['ASA', 'Average answer time', 'Average time to answer', 'ASA formula', 'ASA call centre'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is average speed of answer (ASA)? Meaning and formula',
  description: 'Average speed of answer (ASA) is the average time a caller waits before a person picks up. Formula with example, ASA vs service level and how to lower it.',
  short: 'Average speed of answer (ASA) is the average time callers wait, from the moment the call reaches your queue until a person answers.',
  body: [
    'ASA is the simplest measure of how long your callers wait. If your ASA is 20 seconds, the typical answered call was picked up after about 20 seconds in line.',
    'It is a headline number for any team that uses a [call queue](/glossary/call-queue). Because it is an average, it can hide very long waits, so read it with [service level](/glossary/service-level) and the [call abandonment rate](/glossary/call-abandonment-rate).',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Average speed of answer meaning in simple words',
      p: [
        'ASA covers only the waiting part of the call. It starts when the caller joins the queue and stops when a person answers. It does not include how long the conversation lasts, which is part of [average handle time](/glossary/average-handle-time).',
        'Some systems call the same thing average answer time or average time to answer.',
      ],
    },
    {
      id: 'formula',
      h: 'How to calculate average speed of answer',
      p: [
        'The formula is: ASA = total wait time of answered calls divided by the number of answered calls.',
        'Worked example. In an hour, 60 calls are answered. Their waits add up to 1,800 seconds. ASA = 1,800 / 60 = 30 seconds.',
        'Only answered calls are counted. Callers who hung up while waiting are not in the sum, which is why you also track the abandonment rate. A queue can show a fine ASA simply because impatient callers left before they could be counted.',
      ],
    },
    {
      id: 'good',
      h: 'What is a good ASA?',
      p: [
        'A figure of around 28 seconds is often quoted as the global average, and 20 to 30 seconds as a typical target. Be careful with these. Recent measurements from some markets report much longer waits, and the right target depends on the kind of call. A clinic booking line and a bank fraud line need different goals.',
        'Callers on mobile phones paying per minute tend to hang up sooner than callers on a free landline, so for Nepali businesses shorter is better. Set your own target from your abandonment data, not from a headline average.',
      ],
    },
    {
      id: 'vs',
      h: 'ASA vs service level',
      p: [
        'ASA gives one average. Service level gives a share, such as 80 percent of calls answered within 20 seconds. An average can look fine while some callers wait several minutes, and a queue can meet an 80/20 target while its ASA still rises, because the callers who miss the cut-off may wait very long. Many teams track both, plus the longest current wait.',
      ],
    },
    {
      id: 'lower',
      h: 'How to lower ASA',
      p: ['A long ASA means calls arrive faster than people answer.'],
      list: [
        'Schedule more staff at the busy times your call records show.',
        'Use an [IVR](/glossary/ivr) or an [AI call agent](/glossary/ai-call-agent) to answer simple questions without a person.',
        'Set a maximum wait and send overflow to voicemail or another team.',
        'Reduce [after-call work](/glossary/after-call-work), so people are free sooner.',
        'See [how to cut hold time](/blog/reduce-call-hold-time) for a full list.',
      ],
    },
    {
      id: 'airfone',
      h: 'ASA on AirFone',
      p: [
        'AirFone queues share calls by longest idle or round robin, with a maximum wait and overflow to voicemail, another queue, a team or the AI call agent, so waits are capped. See the [phone system](/products/phone-system).',
      ],
    },
    {
      id: 'example',
      h: 'A worked example with a rush',
      p: [
        'Take a clinic line from 9 to 10 am. 40 calls are answered. The first 30 wait 10 seconds each, which is 300 seconds. The last 10 wait 90 seconds each, which is 900 seconds. The total wait is 1,200 seconds and ASA is 1,200 / 40 = 30 seconds. The average looks acceptable, yet 10 callers waited a minute and a half, which is why the longest wait and service level matter too.',
      ],
    },
  ],
  faq: [
    { q: 'What is the ASA formula?', a: 'ASA = total wait time of answered calls divided by the number of answered calls.' },
    { q: 'Does ASA include abandoned calls?', a: 'No. Only answered calls are counted. Abandoned calls are tracked in the abandonment rate.' },
    { q: 'What is a good average speed of answer?', a: 'Targets of 20 to 30 seconds are commonly cited, but real averages vary widely and the right target depends on the type of call.' },
    { q: 'Is ASA the same as hold time?', a: 'Close. ASA is the wait before the first answer. Hold time is when a caller is put on hold during the call.' },
    { q: 'What is the difference between ASA and service level?', a: 'ASA is an average wait. Service level is the share of calls answered within a target time, like 80 percent in 20 seconds.' },
  ],
  related: ['service-level', 'call-abandonment-rate', 'call-queue', 'average-handle-time', 'acd'],
  product: 'phone-system',
};

export default term;
