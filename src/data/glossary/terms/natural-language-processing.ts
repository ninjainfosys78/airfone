import type { Term } from '../types';

const term: Term = {
  slug: 'natural-language-processing',
  term: 'NLP',
  full: 'Natural language processing',
  aka: ['Natural language processing', 'Natural language understanding', 'NLU'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is NLP? Natural language processing explained simply',
  description: 'NLP (natural language processing) lets computers read, understand and write human language. Tasks, how it relates to LLMs, and use on calls.',
  short: 'NLP, or natural language processing, is the field of computing that helps software read, understand and write human language such as English or Nepali.',
  body: [
    'People do not speak in commands. They say "can I come tomorrow morning" and expect to be understood. NLP is the set of techniques that lets software turn such free wording into something it can act on, such as a booking request for tomorrow before noon.',
    'Today most NLP is done by a [large language model](/glossary/llm). The older term still matters because it names the tasks: finding intent, pulling out names and dates, judging mood and summarising.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'NLP meaning and full form',
      p: [
        'NLP stands for natural language processing. "Natural language" means the way humans really talk and write, as opposed to code. NLP is sometimes split into understanding (NLU, working out what text means) and generation (NLG, writing text).',
        'It is not about speech sounds. Turning audio into text is [speech-to-text](/glossary/speech-to-text); NLP starts once there are words.',
      ],
    },
    {
      id: 'tasks',
      h: 'What NLP does in customer contact',
      p: [
        'The common tasks are:',
      ],
      list: [
        '[Intent recognition](/glossary/intent-recognition): what does the person want?',
        'Entity extraction: pulling out names, dates, phone numbers, amounts and places.',
        '[Sentiment analysis](/glossary/sentiment-analysis): is the person happy, neutral or upset?',
        '[Call summarization](/glossary/call-summarization): reducing a long conversation to a few lines.',
        'Translation and language detection: telling Nepali, Roman Nepali and English apart.',
      ],
    },
    {
      id: 'how',
      h: 'How NLP works',
      p: [
        'Early NLP used hand-written rules and word lists, which broke easily. Later methods learned from labelled examples. Current systems learn from very large text collections and can handle many tasks with one model. You give the task in a [prompt](/glossary/prompt) and the model performs it.',
      ],
    },
    {
      id: 'nepali',
      h: 'NLP challenges in Nepali',
      p: [
        'Nepali has complex word endings, flexible word order, Devanagari script and a lot of English mixed in. Roman Nepali, where Nepali is typed in English letters with no fixed spelling, is common in chat and is especially hard. Tools built for English often need testing and tuning before they work for Nepali customers.',
      ],
    },
    {
      id: 'example',
      h: 'A worked example',
      p: [
        'A customer messages: "Kal bholi 3 baje Lazimpat ko branch ma aauna milcha? Mero naam Sita ho." NLP breaks this into parts. Intent: check availability. Date: tomorrow. Time: 3 pm. Place: the Lazimpat branch. Name: Sita. The message is also in Roman Nepali, a style with no fixed spelling, which the system has to recognise as Nepali.',
        'Each part can then be used: look up the branch timetable, answer in the same style the customer used, and save the name and time for the booking.',
      ],
    },
    {
      id: 'history',
      h: 'From rules to language models',
      p: [
        'NLP has changed in stages. First came rule-based systems with word lists and grammar rules written by hand. They were precise but broke on any phrase the writers had not imagined. Then came statistical methods that learned from labelled examples, and later neural networks that learned from much larger text collections. Today’s [language models](/glossary/llm) can perform many NLP tasks from a plain-language instruction, with no special training for each.',
        'For a business this means that tasks which once needed a specialist team, such as sorting messages by topic, can be done by describing the sort you want in a [prompt](/glossary/prompt) and checking the results.',
      ],
    },
    {
      id: 'limits',
      h: 'Where NLP still struggles',
      p: [
        'Ambiguity is the main problem. "Can you send it to the bank?" might mean a riverbank or a financial one, and spoken Nepali adds further ambiguity through dropped words and context. Negation, sarcasm, and very short messages are also hard. Names of people, shops and places are often unknown to general models. Treat output as a good first pass and check important results.',
      ],
    },
    {
      id: 'airfone',
      h: 'NLP on AirFone',
      p: [
        'The [AI call agent](/products/ai-call-agent) and [website chatbot](/products/website-chatbot) use language understanding to work out what customers want and answer from the business’s own information. Call transcripts and short summaries come from the same kind of processing.',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of NLP?', a: 'In this context NLP means natural language processing. In other fields NLP can also mean neuro-linguistic programming, which is unrelated.' },
    { q: 'Is NLP the same as an LLM?', a: 'No. NLP is the field and its tasks. An LLM is one powerful tool used today to do many NLP tasks.' },
    { q: 'What is the difference between NLP and speech recognition?', a: 'Speech recognition turns audio into text. NLP works on the text to understand or write language.' },
    { q: 'Where is NLP used every day?', a: 'Spam filters, search engines, translation, chatbots, voice assistants and automatic call summaries all use NLP.' },
    { q: 'Does NLP work for Nepali?', a: 'Yes, with less maturity than English. Quality depends on the model and on testing with real Nepali and mixed-language examples.' },
  ],
  related: ['intent-recognition', 'llm', 'sentiment-analysis', 'speech-to-text', 'conversational-ai'],
  product: 'ai-call-agent',
};

export default term;
