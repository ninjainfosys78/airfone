import type { Term } from '../types';

const term: Term = {
  slug: 'conversational-ai',
  term: 'Conversational AI',
  aka: ['Conversational artificial intelligence', 'Dialogue AI'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is conversational AI? Meaning, examples and how it works',
  description: 'Conversational AI lets software talk with people in natural language by text or voice. How it works, how it differs from a chatbot, and business uses.',
  short: 'Conversational AI is software that talks with people in everyday language, by typing or by voice, and understands what they mean instead of matching fixed keywords.',
  body: [
    'A customer writes "do you open on Saturday?" or says it on the phone. Conversational AI works out what was asked, finds the answer, and replies in plain language. It can keep track of the conversation, so a follow-up such as "and until what time?" still makes sense.',
    'It is a broad label covering [chatbots](/glossary/chatbot), voice assistants and [AI call agents](/glossary/ai-call-agent). What they share is that a person can say things in their own words and the software copes.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Conversational AI meaning in simple words',
      p: [
        'The key idea is two-way dialogue in natural language. Older systems made the user adapt: press 1 for sales, type a single keyword, pick from a list. Conversational AI makes the software adapt to the user.',
        'It is called AI because it handles variety. "What is the price", "how much is it" and "rate kati ho" can all be understood as the same question.',
      ],
    },
    {
      id: 'how-it-works',
      h: 'How does conversational AI work?',
      p: [
        'A text conversation has fewer steps than a spoken one. A voice conversation chains several technologies together:',
      ],
      list: [
        'Speech recognition ([speech-to-text](/glossary/speech-to-text)) turns the caller’s voice into text. A text chat skips this step.',
        'Language understanding ([natural language processing](/glossary/natural-language-processing)) works out the meaning and the [intent](/glossary/intent-recognition).',
        'A [large language model](/glossary/llm) or dialogue logic decides the reply, using your [knowledge base](/glossary/knowledge-base).',
        'Speech synthesis ([text-to-speech](/glossary/text-to-speech)) speaks the reply. A text chat just shows it.',
      ],
    },
    {
      id: 'vs-chatbot',
      h: 'Conversational AI vs chatbot',
      p: [
        'People use the words loosely, but there is a useful difference. A basic chatbot follows a script of buttons and keywords, and fails when a user says something unexpected. Conversational AI uses language models to understand free wording and can carry context between turns.',
        'Today most new chatbots are built on conversational AI, so the gap is narrowing. The better question is what the tool is allowed to do and what information it answers from.',
      ],
    },
    {
      id: 'vs-ivr',
      h: 'Conversational AI vs IVR',
      p: [
        'An [IVR](/glossary/ivr) is a phone menu: "press 1 for sales". It routes calls but does not hold a conversation. A conversational voice agent lets the caller simply say what they need. For a closer comparison read [IVR vs AI call agent](/blog/ivr-vs-ai-call-agent).',
      ],
    },
    {
      id: 'uses',
      h: 'Where businesses use conversational AI',
      p: [
        'Common uses in Nepal and elsewhere:',
      ],
      list: [
        'Answering routine questions about prices, hours, locations and bookings.',
        'Answering calls when every line is busy or the office is closed.',
        'Collecting details such as name, address and the reason for the call.',
        'Handing the conversation to a person when it needs judgment, with a short summary.',
      ],
    },
    {
      id: 'limits',
      h: 'Limits to plan for',
      p: [
        'Conversational AI can mishear, especially on noisy lines and with Nepali mixed with English. It can also state something wrong if it lacks the right information, which is an [AI hallucination](/glossary/ai-hallucination). Good design gives it your verified information and an easy way to reach a person. See [what an AI call agent should never say](/blog/what-ai-call-agent-should-never-say).',
      ],
    },
    {
      id: 'context',
      h: 'Memory and context in a conversation',
      p: [
        'The difference people notice most is memory within a conversation. If a caller says "I want to book a table for four", and later "make it Friday", the system must connect the second sentence to the booking. It does this by keeping the conversation so far as part of what the model reads. If the conversation gets long, older parts may be summarised or dropped to save space and time, which is why very long chats can lose track of early details.',
      ],
    },
    {
      id: 'voice-vs-text',
      h: 'Why voice is harder than text',
      p: [
        'A text chat gives the system clean written words and unlimited time to think. A phone call gives noisy audio, no pause for reading, and a human expectation that the reply arrives in about a second. On top of recognition and writing, the system must decide when the caller has finished speaking ([voice activity detection](/glossary/voice-activity-detection)) and let the caller interrupt ([barge-in](/glossary/barge-in)).',
        'These timing details separate an agent that feels like a conversation from one that feels like a slow menu. They are also where most differences between providers show up in real use.',
      ],
    },
    {
      id: 'nepali',
      h: 'Conversational AI in Nepali',
      p: [
        'A Nepali conversation can include formal and informal forms of address, Devanagari and Roman spelling in chat, and English words for things like "appointment", "delivery" or "recharge". People may start a sentence in one language and finish it in another. Systems must cope with all of this, and also with place names, person names and product names that general models have rarely seen.',
        'The practical advice is to test with real examples from your customers. Gather recordings or chat logs, remove personal details, and see where the system fails. Fix those cases with better information and instructions before launch.',
      ],
    },
    {
      id: 'design',
      h: 'Designing a good conversation',
      p: [
        'Good conversational design is mostly restraint. Ask one question at a time. Confirm important details such as phone numbers and dates by repeating them. Keep replies short. Say when you do not know. Make it easy to reach a person. These habits matter more than any model choice.',
      ],
      list: [
        'Greet and say what the assistant can help with, in one sentence.',
        'Answer the question first, then offer the next step.',
        'Repeat back numbers, names and dates before acting on them.',
        'If the caller seems upset or confused, offer a person immediately.',
      ],
    },
    {
      id: 'airfone',
      h: 'Conversational AI on AirFone',
      p: [
        'AirFone offers it in three places: an [AI call agent](/products/ai-call-agent) that answers phone calls in Nepali or English, a [website chatbot](/products/website-chatbot) and a [website voice agent](/products/website-voice-agent). All answer from the business’s own information.',
      ],
    },
  ],
  faq: [
    { q: 'What is conversational AI in simple words?', a: 'It is software that can hold a conversation with a person in normal language, by text or voice, and understand what they mean.' },
    { q: 'Is conversational AI the same as a chatbot?', a: 'Not exactly. A chatbot is one kind of tool. Conversational AI is the wider technology, which also powers voice assistants and AI phone agents.' },
    { q: 'What are examples of conversational AI?', a: 'A website chat assistant, a voice assistant on a phone, and an AI agent that answers a business phone line are all examples.' },
    { q: 'Can conversational AI speak Nepali?', a: 'Yes, but quality varies. Nepali has less training data than English, so test with real customer speech, including mixed Nepali and English.' },
    { q: 'Does conversational AI replace staff?', a: 'It handles routine questions and passes harder ones to people. Staff spend their time on calls that need judgment.' },
    { q: 'Is Siri or Alexa conversational AI?', a: 'They are examples of voice assistants that use conversational AI, though they are general consumer products, not tools trained on one business’s information.' },
    { q: 'How is conversational AI different from machine learning?', a: 'Machine learning is the wider method of training programs from data. Conversational AI is an application built with machine learning and other techniques, for holding conversations.' },
  ],
  related: ['chatbot', 'ai-call-agent', 'natural-language-processing', 'llm', 'ivr'],
  product: 'ai-call-agent',
};

export default term;
