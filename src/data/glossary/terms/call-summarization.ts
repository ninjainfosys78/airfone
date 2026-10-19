import type { Term } from '../types';

const term: Term = {
  slug: 'call-summarization',
  term: 'Call summarization',
  aka: ['AI call summary', 'Call summary', 'Automatic call notes', 'Call notes'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is call summarization? Meaning and how AI call notes work',
  description: 'Call summarization uses AI to turn a phone call into a short written summary. How it works, what a good summary has, and its accuracy limits.',
  short: 'Call summarization is the use of AI to turn a phone conversation into a short written summary, covering why the person called, what was said and what happens next.',
  body: [
    'After a call, a person usually has to type notes: who called, what they wanted, what was promised. This is [after-call work](/glossary/after-call-work), and it is slow, so notes are often short or skipped. An AI can write the summary from the call itself in seconds.',
    'Summaries also make handovers smoother. When an [AI call agent](/glossary/ai-call-agent) passes a call to a person, the summary means the caller does not repeat their story.',
  ],
  sections: [
    {
      id: 'how',
      h: 'How AI call summaries are made',
      p: [
        'First, [speech-to-text](/glossary/speech-to-text) produces a transcript of the call. Then a [large language model](/glossary/llm) is given the transcript with a [prompt](/glossary/prompt) such as "write the reason for the call, key details and agreed actions in three lines". The result is saved against the caller or ticket.',
      ],
    },
    {
      id: 'good',
      h: 'What a good summary contains',
      p: [
        'Useful call notes are short and fixed in shape:',
      ],
      list: [
        'Reason for the call, in one line.',
        'Key details: names, numbers, dates, amounts.',
        'What was answered or decided.',
        'What still needs to happen, and who does it.',
        'Mood or urgency, if relevant.',
      ],
    },
    {
      id: 'limits',
      h: 'Accuracy and limits',
      p: [
        'A summary can only be as good as the transcript. If a name or amount was misheard, the summary repeats the error. The model may also leave out something important or state something not said, which is a form of [AI hallucination](/glossary/ai-hallucination). For anything that matters, such as payments or promises, keep the recording or transcript available and check key details. Nepali and mixed-language calls need extra testing.',
      ],
    },
    {
      id: 'benefits',
      h: 'Why it matters',
      p: [
        'Less typing means shorter [handle time](/glossary/average-handle-time) and more consistent records. Managers can scan summaries of a day of calls in minutes, instead of listening. Summaries are also searchable, which helps when a customer calls back. Keep [recordings](/glossary/call-recording) and summaries according to your consent and retention rules; see [call recording consent in Nepal](/blog/call-recording-consent-nepal).',
      ],
    },
    {
      id: 'example',
      h: 'Before and after: the same call',
      p: [
        'A caller to a pharmacy says they want to reorder tablets, that the last delivery came a day late, and that they can only receive them after 5 pm. Without a summary, the staff member types a few words, such as "reorder, late". With a summary, the record reads: reason for the call, reorder of the usual tablets; complaint, last delivery one day late; request, delivery after 5 pm; action, staff to confirm the order today.',
        'The second version means the next person who answers this customer knows the situation before saying hello.',
      ],
    },
    {
      id: 'structured',
      h: 'Free-text summary vs structured fields',
      p: [
        'A summary can be a paragraph or a set of fields such as reason, outcome, amount, date and follow-up. Fields are easier to search and report on, and they feed other tools. A paragraph is easier to read. Many teams use both: a three-line paragraph and a few fields filled in automatically.',
        'Saving answers as data rather than prose is also how smart bulk calls fill forms from a conversation.',
      ],
    },
    {
      id: 'check',
      h: 'Checking summaries',
      p: [
        'Summaries are drafts that can contain errors. They tend to fail in specific ways, which tells you what to check.',
      ],
      list: [
        'Misheard numbers, names, amounts and addresses, because these come from the transcript.',
        'Missing a promise made in passing, such as "we will call you back tomorrow".',
        'Merging two topics into one, or giving a customer’s suggestion as a decision.',
        'Sounding more certain than the call was.',
      ],
    },
    {
      id: 'retention',
      h: 'Keeping summaries and recordings',
      p: [
        'A summary may contain personal details, so it needs the same care as the call itself: restrict who can read it, set how long it is kept and delete it on schedule. The recording remains the authority if a summary and a customer disagree.',
      ],
    },
    {
      id: 'airfone',
      h: 'On AirFone',
      p: [
        'When the [AI call agent](/products/ai-call-agent) hands a call to a person, it passes a short summary. Calls are also transcribed live.',
      ],
    },
  ],
  faq: [
    { q: 'What is call summarization?', a: 'It is AI writing a short summary of a phone call, including the reason for the call and the next steps.' },
    { q: 'Is an AI call summary accurate?', a: 'Usually good for the main points, but errors in the transcript or omissions can occur. Check important details against the recording.' },
    { q: 'Does it replace call recording?', a: 'No. A summary is a shortcut. The recording or transcript remains the record if there is a dispute.' },
    { q: 'Can it summarise Nepali calls?', a: 'Yes, if the speech recognition handles Nepali well. Test with your own call recordings.' },
    { q: 'How long does an AI call summary take?', a: 'Typically seconds after the call ends, though live systems can build the summary while the call is still going on.' },
    { q: 'Can an AI summary be used as proof of what was agreed?', a: 'Treat it as a note. For disputes, rely on the recording or full transcript, and follow your consent and retention rules.' },
  ],
  related: ['after-call-work', 'speech-to-text', 'agent-assist', 'call-recording', 'ai-call-center'],
  product: 'ai-phone-system',
};

export default term;
