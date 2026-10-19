import type { Term } from '../types';

const term: Term = {
  slug: 'rag',
  term: 'RAG',
  full: 'Retrieval-augmented generation',
  aka: ['Retrieval-augmented generation', 'Retrieval augmented generation', 'Grounded generation'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is RAG? Retrieval-augmented generation explained simply',
  description: 'RAG (retrieval-augmented generation) makes an AI look up your own documents before it answers. How it works, why it cuts wrong answers, RAG vs fine-tuning.',
  short: 'RAG, or retrieval-augmented generation, is a method where an AI first looks up relevant facts in your own documents and then writes its answer from them, instead of relying on memory alone.',
  body: [
    'A [large language model](/glossary/llm) knows nothing about your shop. Ask it your delivery charge and it may invent one. With RAG, the system first searches your price list and policies, hands the matching passages to the model, and the model writes a reply based on them.',
    'This is the main way businesses make AI answer about their own products and rules. It is also the main defence against an [AI hallucination](/glossary/ai-hallucination).',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'RAG meaning and full form',
      p: [
        'RAG stands for retrieval-augmented generation. Retrieval means finding relevant text. Generation means the model writing the answer. Augmented means the answer is boosted by what was retrieved. The name comes from a 2020 paper, "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", by Patrick Lewis and colleagues at Facebook AI Research, University College London and New York University.',
      ],
    },
    {
      id: 'how',
      h: 'How does RAG work?',
      p: [
        'The steps are simple, and happen in a fraction of a second for each question:',
      ],
      list: [
        'Your documents are prepared once and stored in a searchable [knowledge base](/glossary/knowledge-base).',
        'A customer asks a question.',
        'The system searches the knowledge base and picks the few passages most related to the question.',
        'Those passages are placed in the [prompt](/glossary/prompt) with the question.',
        'The model writes an answer using only that material, and can say when the material does not cover the question.',
      ],
    },
    {
      id: 'vs-finetune',
      h: 'RAG vs fine-tuning',
      p: [
        'Fine-tuning means training a model further so it absorbs information or style. It is slow to update and does not reliably store exact facts such as prices. RAG keeps facts outside the model, so changing a price means editing a document, with no retraining. Most business assistants use RAG for facts and, at most, light tuning for tone.',
      ],
    },
    {
      id: 'limits',
      h: 'Limits of RAG',
      p: [
        'RAG is only as good as the documents behind it. Outdated, contradictory or missing information leads to bad answers. Search can also fetch the wrong passage. On a phone call there is a time cost as well, since the lookup adds delay to [inference](/glossary/inference). Short, clear, current source information works best.',
        'For short facts like opening hours, many phone systems put them directly in the prompt instead of searching.',
      ],
    },
    {
      id: 'steps',
      h: 'A worked example with a price list',
      p: [
        'Your price list says "Haircut 500 rupees, beard trim 300 rupees, both together 700 rupees". A caller asks "How much for haircut and shave?" The search finds the passage about haircut and beard trim and may find nothing about "shave". A good prompt tells the assistant to say it has no price for a shave and offer the nearest options, and not to invent one. This is exactly the situation where RAG helps and where wording in the documents matters.',
      ],
    },
    {
      id: 'quality',
      h: 'What makes retrieval work',
      p: [
        'Documents are split into short passages. The system compares the meaning of the question with each passage and picks the closest few. Short, self-contained passages with the question words customers use retrieve best. Tables pasted from spreadsheets often retrieve poorly unless each row is written out as a sentence.',
      ],
    },
    {
      id: 'example2',
      h: 'What it looks like when it goes wrong',
      p: [
        'A shop owner uploads last year’s Dashain offer sheet and this year’s. A customer asks about the offer and the system retrieves the old passage. The reply is fluent and wrong. The fix is not a smarter model but tidy documents: remove expired material, date what remains, and test with the questions customers will really ask.',
      ],
    },
    {
      id: 'airfone',
      h: 'Answering from your own information on AirFone',
      p: [
        'The [AI call agent](/products/ai-call-agent), [website chatbot](/products/website-chatbot) and [website voice agent](/products/website-voice-agent) answer from the business’s own price lists, schedules and notes, and can hand over to a person when the information does not cover a question.',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of RAG?', a: 'RAG stands for retrieval-augmented generation.' },
    { q: 'Why is RAG used?', a: 'It lets an AI answer from current, specific information such as your price list, and reduces made-up answers.' },
    { q: 'Does RAG train the AI on my data?', a: 'No. RAG looks up your documents at answer time. The model itself is not changed.' },
    { q: 'Does RAG remove hallucinations completely?', a: 'No, it reduces them. The model can still misread a passage or answer when nothing relevant was found, so good instructions and human handover still matter.' },
    { q: 'What do I need to use RAG?', a: 'Mainly accurate, organised documents. The technical parts are handled by the platform you use.' },
    { q: 'Is RAG the same as giving the AI a document?', a: 'Close. Pasting the whole document into the [prompt](/glossary/prompt) also works for small sets. RAG is for when there is too much to paste, since it picks only the relevant parts.' },
  ],
  related: ['knowledge-base', 'llm', 'ai-hallucination', 'prompt', 'chatbot'],
  product: 'website-chatbot',
};

export default term;
