import type { Term } from '../types';

const term: Term = {
  slug: 'sentiment-analysis',
  term: 'Sentiment analysis',
  aka: ['Opinion mining', 'Emotion detection', 'Call sentiment'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is sentiment analysis? Meaning and use in call centres',
  description: 'Sentiment analysis uses AI to judge whether text or speech is positive, neutral or negative. How it works on calls, its limits, and Nepali challenges.',
  short: 'Sentiment analysis is the use of AI to judge whether a message or a call sounds positive, neutral or negative, so a business can spot unhappy customers early.',
  body: [
    'Reading every chat and listening to every call is impossible for a manager. Sentiment analysis gives a quick signal: this customer sounds frustrated, this one is pleased. It lets a team look first at the conversations most likely to be going wrong.',
    'It is one of the tasks of [natural language processing](/glossary/natural-language-processing), usually run on the transcript produced by [speech-to-text](/glossary/speech-to-text).',
  ],
  sections: [
    {
      id: 'how',
      h: 'How sentiment analysis works',
      p: [
        'The simplest versions score words: "thank you" is positive, "useless" is negative. Better systems use a [language model](/glossary/llm) to read the whole sentence, since "not bad at all" is positive even though it contains "bad". Some call tools also look at the sound of the voice, such as volume, speed and pitch, to estimate mood.',
      ],
    },
    {
      id: 'uses',
      h: 'Uses in a call centre',
      p: [
        'Typical uses are:',
      ],
      list: [
        'Alerting a supervisor while a call is going badly, so they can listen or take over.',
        'Sorting finished calls so managers review the negative ones first.',
        'Following whether satisfaction changes after a price rise or an outage.',
        'Telling an AI agent to hand over to a person when a caller is clearly upset.',
      ],
    },
    {
      id: 'limits',
      h: 'Limits to know',
      p: [
        'Sentiment scores are estimates, not facts. Sarcasm, politeness norms and humour are hard to read. A calm customer may still be about to leave, and a loud one may simply speak loudly. In Nepali, where politeness levels change the words used and English is mixed in, models built for English often misjudge. Treat scores as a pointer to listen to the call, not as a verdict.',
        'Judging emotion from voice also raises privacy questions, so tell people what you analyse and keep the results for the minimum time.',
      ],
    },
    {
      id: 'example',
      h: 'An example on a call',
      p: [
        'A customer rings about a delayed delivery. In the first minute the transcript reads "ok, I understand, please check". The score is neutral. By minute four it reads "this is the third time I am calling and nobody told me anything". The score falls sharply, and the supervisor’s screen flags the call. They listen in, then take over or guide the agent to offer a firm delivery time.',
        'The value is in the change over the call. A single score for a whole call hides this, so many tools show the trend across the conversation as well as an overall result.',
      ],
    },
    {
      id: 'sarcasm',
      h: 'Sarcasm, politeness and context',
      p: [
        'Words alone can mislead. "Great, thanks a lot" can be warm or bitter. A customer who is very polite may still be about to leave, and in Nepali, honorific forms of speech can sound formal even when the person is angry. Some call-centre vendors say sarcasm has only a small effect on overall results, while others treat it as a known weak spot, and I found no independent accuracy figures. The safe reading is that scores show a direction, not a verdict.',
      ],
    },
    {
      id: 'trend',
      h: 'Use it as a trend, not as a judge',
      p: [
        'Sentiment works best across many calls: did customers sound happier this week than last, did one product or one team stand out? It works poorly as the sole basis for judging a single agent or a single call. Sample the flagged calls and listen before drawing conclusions about people.',
      ],
      list: [
        'Good use: sorting calls so a manager hears the worst ones first.',
        'Good use: watching the average mood after an outage or a price change.',
        'Poor use: ranking staff by score alone.',
        'Poor use: treating a score as proof of what the customer felt.',
      ],
    },
    {
      id: 'privacy',
      h: 'Privacy and consent',
      p: [
        'Analysing mood from voice is more sensitive than analysing words. Tell staff and callers what is analysed, collect only what you need, and keep results no longer than you need them. For recordings and transcripts see [call recording consent in Nepal](/blog/call-recording-consent-nepal).',
      ],
    },
    {
      id: 'airfone',
      h: 'On AirFone',
      p: [
        'Calls are transcribed live, and supervisors can listen, guide, take over or transfer a call that is going badly. The [AI call agent](/products/ai-call-agent) hands calls to a person with a short summary.',
      ],
    },
  ],
  faq: [
    { q: 'What is sentiment analysis in simple words?', a: 'It is AI judging whether a piece of text or a call sounds positive, neutral or negative.' },
    { q: 'How accurate is sentiment analysis?', a: 'It is useful as a rough signal but not exact. Sarcasm, mixed languages and accents reduce accuracy.' },
    { q: 'Can it work on phone calls?', a: 'Yes, usually on the transcript, and sometimes on the voice itself.' },
    { q: 'Is sentiment analysis the same as customer satisfaction scores?', a: 'No. Satisfaction scores come from what customers report in surveys. Sentiment analysis estimates mood from what they said or wrote.' },
    { q: 'Can AI detect anger on a phone call?', a: 'Tools can estimate it from the words and sometimes the sound of the voice, but the result is an estimate and can be wrong, especially with accents and mixed languages.' },
    { q: 'Should I score my agents with sentiment analysis?', a: 'Use it to find calls worth reviewing, not as the only measure of an agent. Listen to the calls before acting on a score.' },
  ],
  related: ['natural-language-processing', 'agent-assist', 'call-summarization', 'speech-to-text', 'ai-call-center'],
  product: 'ai-phone-system',
};

export default term;
