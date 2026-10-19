import type { Term } from '../types';

const term: Term = {
  slug: 'agent-assist',
  term: 'Agent assist',
  aka: ['Real-time agent assist', 'Live agent assistance', 'Agent copilot'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is agent assist? Meaning and how it helps call agents',
  description: 'Agent assist is AI that supports a human agent during a live call with transcripts, suggested answers and prompts. Meaning, benefits and limits.',
  short: 'Agent assist is AI that helps a human agent during a live call, for example by showing a live transcript, suggesting answers and finding information, while the person stays in charge.',
  body: [
    'In a busy call centre, an agent must listen, find the right page, type notes and stay polite all at once. Agent assist takes some of that load. The AI listens to the call, shows what was said, and puts relevant information on screen at the right moment.',
    'The customer still speaks to a person. This differs from an [AI call agent](/glossary/ai-call-agent), where the AI talks to the customer directly.',
  ],
  sections: [
    {
      id: 'features',
      h: 'What agent assist does',
      p: [
        'Common features are:',
      ],
      list: [
        'Live transcript of the conversation, produced by [speech-to-text](/glossary/speech-to-text).',
        'Suggested replies or facts from the [knowledge base](/glossary/knowledge-base), based on what the caller just said.',
        'Reminders, such as required wording or questions not yet asked.',
        'Mood indication from [sentiment analysis](/glossary/sentiment-analysis).',
        'An automatic [call summary](/glossary/call-summarization) when the call ends, which cuts [after-call work](/glossary/after-call-work).',
      ],
    },
    {
      id: 'supervisor',
      h: 'Agent assist vs supervisor tools',
      p: [
        'Agent assist helps the agent. Supervisor tools help a manager watch several calls. In many systems a supervisor can listen to a live call, speak to the agent privately (whisper or guide), or take the call over. Both rely on the same live transcript.',
      ],
    },
    {
      id: 'benefits',
      h: 'Benefits and cautions',
      p: [
        'Done well, it shortens [handle time](/glossary/average-handle-time), helps new staff, and makes answers more consistent. The cautions are real too. Suggestions can be wrong, so the agent must stay responsible for what is said. A cluttered screen distracts more than it helps. Staff and callers should know when calls are transcribed; see [call recording consent in Nepal](/blog/call-recording-consent-nepal).',
      ],
    },
    {
      id: 'example',
      h: 'A call, step by step',
      p: [
        'A customer rings an internet provider: "My connection drops every evening." As they speak, the screen in front of the agent shows the live transcript. The system recognises a connection complaint and shows the troubleshooting steps and the customer’s plan and last ticket. The agent does not need to search three screens while the customer waits.',
        'Ten minutes later the customer mentions they want to cancel. The assist panel reminds the agent of the retention offer approved by the manager and of the wording required for cancellations. The agent chooses whether to use any of it. When the call ends, a draft summary is ready for them to check and save.',
      ],
    },
    {
      id: 'vs-bot',
      h: 'Agent assist vs chatbot and AI call agent',
      p: [
        'The difference is who talks to the customer. A [chatbot](/glossary/chatbot) or [AI call agent](/glossary/ai-call-agent) speaks to the customer directly. Agent assist is invisible to the customer and works only for the staff member, who stays in control and decides what to use.',
        'It is also different from post-call analytics, which reviews calls after they end and cannot help during the call. Many operations use all three: an AI agent for routine calls, agent assist for the calls that reach people, and analytics afterwards.',
      ],
    },
    {
      id: 'risks',
      h: 'What can go wrong',
      p: [
        'Assist tools fail in predictable ways, and it is worth asking about each before you buy.',
      ],
      list: [
        'Too many suggestions. A busy panel makes agents slower, not faster, because they read instead of listen.',
        'Wrong or outdated suggestions, usually from an out-of-date [knowledge base](/glossary/knowledge-base).',
        'Transcript errors with Nepali names, addresses and mixed Nepali and English speech, which then feed wrong suggestions.',
        'Staff feeling watched. Be clear whether the tool is for helping or for scoring, and say so.',
        'Delay. Suggestions that arrive after the customer has moved on are noise.',
      ],
    },
    {
      id: 'nepal',
      h: 'Fit for Nepali call handling',
      p: [
        'Agents in Nepal often switch between Nepali and English within a sentence, and customers do the same. A tool that only transcribes clean English will miss much of the call. Test it on recordings of your own calls and judge by whether agents would actually use the suggestions.',
      ],
    },
    {
      id: 'airfone',
      h: 'Live help on AirFone',
      p: [
        'AirFone transcribes calls live. Supervisors can listen in, guide the agent, take over or transfer the call. When the [AI call agent](/products/ai-call-agent) hands a call to a person, it passes a short summary so the caller does not have to start again.',
      ],
    },
  ],
  faq: [
    { q: 'What is agent assist?', a: 'It is AI that supports a human call agent during a live call with transcripts, suggestions and reminders.' },
    { q: 'What is the difference between agent assist and a voice bot?', a: 'With agent assist a human talks to the customer and the AI helps them. A voice bot talks to the customer directly.' },
    { q: 'Does agent assist reduce handle time?', a: 'It can, by finding information faster and writing the call notes. Measure it on your own calls.' },
    { q: 'Is a live transcript the same as recording?', a: 'Not necessarily, but both capture what was said. Treat them with the same care about consent and storage.' },
    { q: 'How is agent assist different from call monitoring?', a: 'Call monitoring lets a supervisor listen to or review a call. Agent assist gives the agent help in the moment, usually on screen. They can share the same live transcript.' },
    { q: 'Does agent assist work for small teams?', a: 'It can, but the benefit is largest where agents handle many different topics or are new. A small team that knows its answers by heart may gain more from good call summaries.' },
  ],
  related: ['ai-call-center', 'call-summarization', 'sentiment-analysis', 'average-handle-time', 'after-call-work'],
  product: 'ai-phone-system',
};

export default term;
