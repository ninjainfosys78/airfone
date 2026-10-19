import type { Term } from '../types';

const term: Term = {
  slug: 'knowledge-base',
  term: 'Knowledge base',
  aka: ['KB', 'Help centre', 'Business knowledge'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is a knowledge base? Meaning and use with AI assistants',
  description: 'A knowledge base is the organised information a business keeps to answer questions. What goes in it, how AI assistants use it, and how to keep it accurate.',
  short: 'A knowledge base is the collection of information a business keeps to answer questions, such as price lists, schedules, policies and notes. An AI assistant answers from it.',
  body: [
    'Every business already has one, even if it lives in a notebook, a spreadsheet and the owner’s head. A knowledge base is that information written down in one place so that staff and AI can find it.',
    'For a [chatbot](/glossary/chatbot) or [AI call agent](/glossary/ai-call-agent), it is the source of truth. The assistant looks things up there, using a method called [RAG](/glossary/rag), instead of guessing.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Knowledge base meaning',
      p: [
        'The term started with help centres: pages of answers customers can search. In AI, it means any body of text the assistant is allowed to answer from. It can be documents, a table of prices, web pages or short notes.',
      ],
    },
    {
      id: 'contents',
      h: 'What to put in it',
      p: [
        'Start with what customers ask most. Useful content includes:',
      ],
      list: [
        'Prices, packages and what each includes.',
        'Opening hours, holidays and locations with directions.',
        'Booking, cancellation, refund and delivery rules.',
        'Common questions with the exact answer you want given.',
        'What the assistant must not answer, and who to pass those to.',
      ],
    },
    {
      id: 'quality',
      h: 'Keeping it accurate',
      p: [
        'AI repeats what it finds. If your price list has two versions, the answer may use either. Give each fact one home, write in plain sentences, and put the date or season on anything that changes. Review the questions customers actually ask and add the ones that were missed.',
        'This is the strongest protection against an [AI hallucination](/glossary/ai-hallucination).',
      ],
    },
    {
      id: 'vs',
      h: 'Knowledge base vs prompt',
      p: [
        'The [prompt](/glossary/prompt) tells the model how to behave: tone, language, limits. The knowledge base holds the facts. Keeping the two separate means you can update a price without touching the instructions.',
      ],
    },
    {
      id: 'example',
      h: 'A phone example: one question, three answers',
      p: [
        'A caller asks a clinic line: "Is Dr. Sharma there on Saturday, and how much is the first visit?" Two facts are needed. The doctor’s weekly schedule is one document, and the fee list is another. A good knowledge base keeps each fact in one place, so the assistant finds both and combines them in one short spoken answer.',
        'If the schedule lists Saturday in one file and "closed on weekends" in another, the assistant may pick either one. Contradictions are the most common cause of confident wrong answers, and they are easy to fix once someone reads the files side by side.',
      ],
    },
    {
      id: 'format',
      h: 'How to write entries the AI can use',
      p: [
        'Write for a stranger who has never visited your business. Use full sentences, spell out what each price includes, and put the unit next to every number. Avoid "see above" and "as discussed", because the AI may only be shown one passage at a time.',
        'Write the way customers ask. If people say "rate", "price" and "kati parcha", say so in the entry or in a question-and-answer line, so the search finds it. Add both Nepali and English names for products and places, and note common spellings of names.',
      ],
      list: [
        'Price entries: item, price in rupees, what is included, what costs extra, date last checked.',
        'Rules: cancellation, refund, delivery area and delivery time, written as plain conditions.',
        'Question and answer pairs for the twenty things people ask most.',
        'Escalation notes: which topics go to a person, such as complaints, discounts and medical advice.',
      ],
    },
    {
      id: 'sources',
      h: 'Where the information comes from',
      p: [
        'Most small businesses already hold the facts in price lists, brochures, a website, messages to staff and the owner’s habits. The first job is collecting these into one tidy set. The second is deciding who owns each part, because a knowledge base that nobody updates slowly becomes a source of wrong answers.',
        'A simple routine works: when a price, hour or rule changes, update the document that same day, and once a month read ten real conversations to see which questions the information failed to answer.',
      ],
    },
    {
      id: 'airfone',
      h: 'Your information on AirFone',
      p: [
        'AirFone’s [AI call agent](/products/ai-call-agent) answers from the business’s own information: price lists, schedules and notes. The same information serves the website chatbot and website voice agent.',
      ],
    },
  ],
  faq: [
    { q: 'What is a knowledge base in simple words?', a: 'It is the organised information a business keeps so questions can be answered correctly and consistently.' },
    { q: 'How is a knowledge base used with AI?', a: 'The AI searches it for the relevant facts and writes an answer from them, instead of relying on what it learned in training.' },
    { q: 'How big does it need to be?', a: 'Not big. A clear price list, hours and a page of common questions is a good start. Quality matters more than size.' },
    { q: 'How often should I update it?', a: 'Whenever a price, hour or rule changes. Also review it regularly against the questions customers really ask.' },
    { q: 'Does the AI learn from my knowledge base permanently?', a: 'No. It looks the passages up when it answers, using [RAG](/glossary/rag). The model itself is not retrained, so removing or changing a document changes the next answer.' },
    { q: 'What happens when the answer is not in the knowledge base?', a: 'A well-set-up assistant says it does not have that information and offers a person or a callback. It should not guess.' },
  ],
  related: ['rag', 'chatbot', 'prompt', 'ai-hallucination', 'ai-call-agent'],
  product: 'website-chatbot',
};

export default term;
