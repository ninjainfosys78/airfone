import type { Term } from '../types';

const term: Term = {
  slug: 'llm',
  term: 'LLM',
  full: 'Large language model',
  aka: ['Large language model', 'Language model', 'Foundation model'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is an LLM? Large language model meaning explained',
  description: 'An LLM (large language model) is an AI trained on huge amounts of text to understand and write language. How it works, its limits and use on calls.',
  short: 'An LLM, or large language model, is an AI program trained on huge amounts of text so it can understand questions and write answers in everyday language. It is the part of a chatbot or AI call agent that decides what to say.',
  body: [
    'When you type a question to a chatbot and get a sensible written answer, an LLM produced it. It does not look answers up in a table. It has learned patterns of language from a very large amount of text, and it uses those patterns to write the most fitting reply to what it was just given.',
    'For a business, an LLM is the thinking step inside tools that talk to customers: a [website chatbot](/glossary/chatbot), a voice assistant, or an [AI call agent](/glossary/ai-call-agent) that answers the phone. On its own an LLM knows nothing about your prices or opening hours, so it is combined with your own information.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'LLM meaning in simple words',
      p: [
        'LLM stands for large language model. "Language model" means a program that predicts which words should come next. "Large" refers to the size: billions of adjustable values, learned from books, websites, code and other text.',
        'Because it learned from so much writing, it can answer questions, summarise, translate, fill in forms and hold a conversation, all with the same model. Older phone menus and rule-based bots needed every sentence to be planned in advance. An LLM copes with wording nobody planned for.',
      ],
    },
    {
      id: 'how-it-works',
      h: 'How does a large language model work?',
      p: [
        'Training happens once, before you use the model. It reads a huge amount of text and repeatedly guesses the next piece of text, adjusting itself each time it is wrong. After enough rounds it has absorbed grammar, facts and styles of writing.',
        'Using the model is a separate step called [inference](/glossary/inference). Your question goes in, the model produces an answer one small piece at a time, and each piece is called a [token](/glossary/llm-token). The instructions you give it are called a [prompt](/glossary/prompt).',
      ],
    },
    {
      id: 'what-it-does-not-know',
      h: 'What an LLM does not know',
      p: [
        'A model only knows what was in its training text, and that stops at some date. It has never seen your price list, today’s stock or your clinic timetable. If you ask it something it does not know, it may still write a confident answer that is wrong. This is called an [AI hallucination](/glossary/ai-hallucination).',
        'The usual fix is to give the model your own information at the moment it answers, through a [knowledge base](/glossary/knowledge-base) and a method called [RAG](/glossary/rag). Then it answers from your facts instead of guessing.',
      ],
    },
    {
      id: 'uses',
      h: 'What businesses use LLMs for',
      p: [
        'In customer contact, an LLM usually does one of these jobs:',
      ],
      list: [
        'Answering questions in a chat window or on the phone.',
        'Working out what a caller wants, called [intent recognition](/glossary/intent-recognition).',
        'Writing a short [summary of a call](/glossary/call-summarization) for staff.',
        'Suggesting replies to a human agent, called [agent assist](/glossary/agent-assist).',
        'Reading the mood of a message, called [sentiment analysis](/glossary/sentiment-analysis).',
      ],
    },
    {
      id: 'nepali',
      h: 'LLMs and the Nepali language',
      p: [
        'Most LLMs were trained mainly on English text, so they are usually stronger in English than in Nepali. Nepali has far less written material online, uses Devanagari script, and people often mix in English words mid-sentence. Quality varies a lot between models, so it is worth testing with real Nepali questions from your own customers before you trust any model.',
        'On a phone call there is a second step as well. The caller’s voice is first turned into text by [speech-to-text](/glossary/speech-to-text), the LLM writes the answer, and [text-to-speech](/glossary/text-to-speech) speaks it. A weak link anywhere in that chain shows up as a bad call.',
      ],
    },
    {
      id: 'kinds',
      h: 'Open and closed models, big and small',
      p: [
        'Some language models are offered only through a provider’s service, and you send text to them over the internet. Others have downloadable weights that a company can run on its own servers. Each has trade-offs. Provider models are easy to start with and often the strongest. Models you run yourself give you more control over where data goes, but you must look after the hardware and the updates.',
        'Size matters as well. Large models are usually better at hard reasoning and at less common languages such as Nepali, but they cost more and answer more slowly. Small models are fast and cheap, and are often good enough for narrow jobs such as sorting calls by topic. Many systems use a small model for simple steps and a larger one only when needed.',
      ],
    },
    {
      id: 'call',
      h: 'What happens to an LLM on a phone call',
      p: [
        'On a call the language model sits in the middle of a chain. The caller speaks, [speech-to-text](/glossary/speech-to-text) writes the words, and the model receives them together with the instructions and the relevant facts from your [knowledge base](/glossary/knowledge-base). It writes a short reply, and [text-to-speech](/glossary/text-to-speech) says it aloud.',
        'The model has no memory between calls unless the system gives it one. Whatever it should know about the caller, the business or the earlier conversation has to be included each time. This is why the quality of the surrounding system matters as much as the quality of the model itself.',
      ],
    },
    {
      id: 'choose',
      h: 'How to judge a model for your business',
      p: [
        'Leaderboards compare models on general tests, but your customers ask specific things in a specific mix of languages. A practical test costs little.',
      ],
      list: [
        'Collect thirty real questions from your phone or chat history, in the languages your customers use.',
        'Run each through the candidate model with your own information supplied, and read the answers.',
        'Mark each answer as correct, wrong or invented, and note the time taken.',
        'Repeat with the next model, then compare cost per conversation as well as accuracy.',
      ],
    },
    {
      id: 'airfone',
      h: 'LLMs on AirFone',
      p: [
        'AirFone is model-agnostic. It does not depend on one AI vendor, so the model behind the [AI call agent](/products/ai-call-agent) can change as better or cheaper options appear, without you rebuilding anything. The agent answers from your own price lists, schedules and notes.',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of LLM?', a: 'LLM stands for large language model. It is an AI model trained on very large amounts of text so it can understand and produce language.' },
    { q: 'Is ChatGPT an LLM?', a: 'ChatGPT is a chat product built on top of an LLM. The LLM is the model underneath. Other products, such as Claude and Gemini, work the same way: an app on the outside, a language model inside.' },
    { q: 'What is the difference between an LLM and a chatbot?', a: 'An LLM is the language engine. A chatbot is the whole tool a customer talks to, which may use an LLM plus your business information, rules and a chat window.' },
    { q: 'Does an LLM understand Nepali?', a: 'Many can read and write Nepali, but usually less well than English, especially with spoken Nepali mixed with English words. Test any model on real customer questions before relying on it.' },
    { q: 'Why does an LLM sometimes give wrong answers?', a: 'It predicts likely text and does not check facts. When it lacks the right information it can produce a believable but wrong answer. Giving it your own verified information reduces this.' },
    { q: 'Is an LLM the same as artificial intelligence?', a: 'No. AI is the broad field. An LLM is one kind of AI model, specialised in language. Speech recognition and image recognition models are other kinds.' },
    { q: 'Can I run an LLM on my own server?', a: 'Yes, if you choose a model whose weights can be downloaded. You then need suitable hardware and someone to maintain it, so many small businesses use a service instead.' },
  ],
  related: ['inference', 'llm-token', 'rag', 'ai-hallucination', 'conversational-ai'],
  product: 'ai-call-agent',
};

export default term;
