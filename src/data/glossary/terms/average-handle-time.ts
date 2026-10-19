import type { Term } from '../types';

const term: Term = {
  slug: 'average-handle-time',
  term: 'Average handle time',
  full: 'AHT',
  aka: ['AHT', 'Average handling time', 'Call handle time', 'AHT formula', 'AHT call centre'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is average handle time (AHT)? Meaning and formula',
  description: 'Average handle time (AHT) is the average time spent on one call from start to finish, including hold and wrap-up. Formula, worked example and how to lower it.',
  short: 'Average handle time (AHT) is the average time a staff member spends on one customer call, counting talk time, hold time and the wrap-up work after the call.',
  body: [
    'AHT tells you how long a typical call keeps one person busy. If AHT is five minutes and one person spends six hours a day on calls, that person can handle roughly seventy calls a day. It is one of the numbers that decides how many staff you need.',
    'It measures effort, not quality. A very low AHT can mean fast service, or rushed calls that come back as repeat calls. Read it together with [first call resolution](/glossary/first-call-resolution) and [after-call work](/glossary/after-call-work).',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Average handle time meaning in simple words',
      p: [
        'Handle time is everything one person spends on one call: the conversation, any time the caller is on hold, and the notes or follow-up done right after hanging up. Average handle time is that total, averaged over many calls.',
        'It is also called average handling time, and is often shortened to AHT.',
      ],
    },
    {
      id: 'formula',
      h: 'How to calculate average handle time',
      p: [
        'The standard formula is: AHT = (total talk time + total hold time + total after-call work) divided by the number of calls handled.',
        'Worked example. In one day a team handles 200 calls. Talk time adds up to 800 minutes, hold time to 60 minutes and after-call work to 140 minutes. The total is 1,000 minutes. Divide by 200 calls and AHT is 5 minutes.',
        'Use the same period and the same set of calls for every part of the sum. Calls that rang but were never answered do not count.',
      ],
    },
    {
      id: 'staffing',
      h: 'Using AHT to plan how many staff you need',
      p: [
        'AHT turns call counts into workload. Take the busiest hour. If 60 calls arrive and AHT is 5 minutes, that is 300 minutes of work in 60 minutes, so you need at least five people on the phone for that hour. In practice you add extra people, because calls arrive in clumps and nobody can be on a call every second.',
        'This is why festival weeks and salary days need more staff than the monthly average suggests. Count calls per hour for each busy day, multiply by AHT, and divide by 60 minutes.',
      ],
    },
    {
      id: 'parts',
      h: 'What is included in AHT',
      p: ['Three parts make up handle time.'],
      list: [
        'Talk time: the time spent speaking with the caller.',
        'Hold time: the time the caller waits while the staff member checks something. Time spent waiting in the [call queue](/glossary/call-queue) before an answer is not included. That is measured by [average speed of answer](/glossary/average-speed-of-answer).',
        'After-call work: notes, updating records, sending a message or an order slip after the call.',
      ],
    },
    {
      id: 'good',
      h: 'What is a good average handle time?',
      p: [
        'There is no universal good number. Industry write-ups commonly quote around six minutes for phone support across all industries, but those figures mix very different kinds of calls. A call about a blocked bank card is longer than a call asking opening hours. Compare your AHT with your own past figures and with the same type of call.',
        'Be careful about setting a target that staff feel they must hit. Pushing AHT down too far makes people rush, and the caller phones again.',
      ],
    },
    {
      id: 'lower',
      h: 'How to reduce average handle time',
      p: ['The fixes that work without rushing callers are mostly about tools and preparation.'],
      list: [
        'Show the caller details and past history on screen when the call arrives.',
        'Keep answers to common questions in one place that staff can search.',
        'Let an [AI call agent](/glossary/ai-call-agent) or [IVR](/glossary/ivr) handle the simple questions, so people take the longer ones.',
        'Cut the wrap-up with a [call summary](/glossary/call-summarization) instead of notes written from memory.',
        'Train staff on the five most common call types.',
      ],
    },
    {
      id: 'vs',
      h: 'AHT vs talk time vs average speed of answer',
      p: [
        'Talk time is only the conversation. AHT adds hold time and after-call work. Average speed of answer is how long the caller waited before anyone picked up. A team can have a short AHT and a long wait, if there are too few people for the calls.',
      ],
    },
    {
      id: 'airfone',
      h: 'Average handle time and AirFone',
      p: [
        'AirFone can transcribe calls, which shortens note-taking after a call. Its AI call agent can answer common questions in Nepali or English and hand over to a person with a summary, so staff do not start from zero. See the [phone system page](/products/phone-system).',
      ],
    },
  ],
  faq: [
    { q: 'What is the AHT formula?', a: 'AHT = (talk time + hold time + after-call work) divided by the number of calls handled.' },
    { q: 'Does AHT include time in the queue?', a: 'No. Waiting in the queue before someone answers is measured separately, by average speed of answer.' },
    { q: 'Is a lower AHT always better?', a: 'No. A very low AHT can mean rushed calls and repeat calls. Check it against first call resolution.' },
    { q: 'What is the difference between AHT and talk time?', a: 'Talk time is only the conversation. AHT adds hold time and after-call work.' },
    { q: 'What is a good AHT for a call centre?', a: 'Commonly cited cross-industry figures sit around six minutes, but the right number depends on your type of call. Compare against your own trend.' },
  ],
  related: ['first-call-resolution', 'after-call-work', 'average-speed-of-answer', 'call-queue', 'service-level'],
  product: 'phone-system',
};

export default term;
