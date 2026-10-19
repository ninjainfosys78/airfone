import type { Term } from '../types';

const term: Term = {
  slug: 'after-call-work',
  term: 'After-call work',
  full: 'ACW',
  aka: ['ACW', 'Wrap-up time', 'Call wrap-up', 'After call work time', 'Post-call work'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is after-call work (ACW)? Meaning and wrap-up time',
  description: 'After-call work (ACW) is the time staff spend on notes and follow-up once a call ends. Meaning, formula, typical range, and how AI summaries cut it.',
  short: 'After-call work (ACW), also called wrap-up time, is the work a staff member does right after a call ends, such as writing notes, updating a record or sending a follow-up.',
  body: [
    'The caller has hung up, but the job is not finished. Someone has to note what was agreed, update the order or ticket, and maybe send a message. That time is after-call work.',
    'It is part of [average handle time](/glossary/average-handle-time), and it is often the easiest part to shorten. If a team spends two minutes on notes after a three-minute call, the notes cost nearly as much as the conversation.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'After-call work meaning in simple words',
      p: [
        'ACW covers anything done for a call after the conversation stops. Examples include writing a summary, booking an appointment in a diary, creating a complaint ticket, or phoning a supplier to confirm what the customer asked.',
        'It is also called wrap-up time or post-call work. Phone systems usually let a staff member go into a wrap-up state, during which they receive no new call, until they mark themselves ready.',
      ],
    },
    {
      id: 'why',
      h: 'Why after-call work matters',
      p: [
        'While someone is in wrap-up, they cannot take the next caller. When many staff are in wrap-up at once, the [call queue](/glossary/call-queue) grows and callers wait longer. So wrap-up directly affects [average speed of answer](/glossary/average-speed-of-answer) and the [abandonment rate](/glossary/call-abandonment-rate).',
        'It also hides in plain sight. Talk time shows on every phone report, but wrap-up often happens in a second screen or a notebook, and nobody times it.',
      ],
    },
    {
      id: 'calculate',
      h: 'How to calculate average after-call work time',
      p: [
        'The formula is: average ACW = total wrap-up time divided by the number of calls with wrap-up.',
        'Worked example. A team handles 150 calls in a day and spends 300 minutes in wrap-up in total. Average ACW is 300 / 150 = 2 minutes per call. If the average talk time is 4 minutes, handle time is about 6 minutes plus any hold time.',
        'If the team can cut wrap-up to 1 minute, handle time falls to about 5 minutes, and the same people can take about one more call in every six.',
      ],
    },
    {
      id: 'good',
      h: 'What is a normal ACW time?',
      p: [
        'Published ranges disagree. Many call centre guides quote about 30 seconds to 2 minutes per call, with the high end for technical or complex calls. A few sources give far higher figures, which usually reflect long case work rather than ordinary wrap-up. Treat any range as a rough guide and compare against your own past figures for the same type of call.',
      ],
    },
    {
      id: 'reduce',
      h: 'How to reduce after-call work',
      p: ['Cut the typing, not the care.'],
      list: [
        'Use short note templates with tick boxes instead of free text.',
        'Use an AI [call summary](/glossary/call-summarization) so staff check and correct a note instead of writing one.',
        'Fill in customer details automatically from the caller number.',
        'Make the follow-up system a single screen, not three.',
        'Do not set a hard wrap-up limit that rushes people into mistakes.',
      ],
    },
    {
      id: 'ai',
      h: 'How AI call summaries cut after-call work',
      p: [
        'A call transcript made with [speech to text](/glossary/speech-to-text) can be turned into a short summary, with the caller reason, what was agreed and what is still open. The staff member reads it, fixes anything wrong and moves on. This replaces the slowest part of wrap-up, which is recalling and typing the call from memory. Checking is still needed, since summaries can miss or misstate details.',
      ],
    },
    {
      id: 'vs',
      h: 'After-call work vs handle time',
      p: [
        'Handle time is talk time plus hold time plus after-call work. ACW is one piece of it. When handle time is too long, check which of the three pieces is large before changing anything.',
      ],
    },
    {
      id: 'airfone',
      h: 'After-call work on AirFone',
      p: [
        'AirFone can transcribe calls, so the record of what was said already exists when the call ends. The AI call agent also hands over to a person with a summary. See the [AI call agent](/products/ai-call-agent).',
      ],
    },
  ],
  faq: [
    { q: 'What is ACW in a call centre?', a: 'ACW stands for after-call work. It is the time spent on notes and follow-up after the caller hangs up.' },
    { q: 'Is wrap-up time the same as after-call work?', a: 'Yes. Both terms describe the same period after a call ends.' },
    { q: 'Is ACW included in average handle time?', a: 'Yes. Handle time is talk time, hold time and after-call work added together.' },
    { q: 'How long should after-call work take?', a: 'Commonly cited ranges are about 30 seconds to 2 minutes per call, depending on how complex the call is. Measure your own average.' },
    { q: 'Can AI reduce after-call work?', a: 'Yes. AI summaries of call transcripts replace most of the note writing, though staff should check them.' },
  ],
  related: ['average-handle-time', 'call-queue', 'first-call-resolution', 'average-speed-of-answer', 'service-level'],
  product: 'ai-call-agent',
};

export default term;
