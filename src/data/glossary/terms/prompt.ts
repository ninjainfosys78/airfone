import type { Term } from '../types';

const term: Term = {
  slug: 'prompt',
  term: 'Prompt',
  aka: ['AI prompt', 'System prompt', 'Prompt engineering'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is a prompt in AI? Meaning, examples and system prompts',
  description: 'A prompt is the text you give an AI model so it knows what to do. Meaning, system prompt vs user prompt, and tips for business assistants.',
  short: 'A prompt is the text given to an AI model that tells it what to do. For a business assistant, the prompt sets its role, tone, limits and the information it may use.',
  body: [
    'When you ask a chatbot a question, your question is a prompt. But a business assistant also has a hidden prompt written by the business, which says things like "you answer calls for a dental clinic, speak politely, never give medical advice". The model reads both together before it replies.',
    'Writing good prompts is sometimes called prompt engineering, though for a business it mostly means being clear and specific about what the assistant should and should not do.',
  ],
  sections: [
    {
      id: 'types',
      h: 'System prompt vs user prompt',
      p: [
        'Two kinds matter in practice:',
      ],
      list: [
        'System prompt: standing instructions written by the business. It sets role, language, tone, rules and limits, and the customer does not see it.',
        'User prompt: what the customer says or types in the moment.',
      ],
    },
    {
      id: 'contents',
      h: 'What a good business prompt contains',
      p: [
        'A useful prompt is plain and concrete:',
      ],
      list: [
        'Who the assistant is and who it speaks for.',
        'Which languages to use and how formal to sound.',
        'The facts it may use, usually fetched from a [knowledge base](/glossary/knowledge-base) through [RAG](/glossary/rag).',
        'What it must never do, such as promise refunds or quote prices not in the list.',
        'When and how to hand over to a person.',
      ],
    },
    {
      id: 'limits',
      h: 'Prompts are not a guarantee',
      p: [
        'A model follows instructions most of the time, not every time. A long prompt full of rules can be partly ignored, and a customer can try to talk the assistant out of its rules. Important limits are better enforced by the system around the model, for example by restricting what it can do, than by a sentence in the prompt alone. See [what an AI call agent should never say](/blog/what-ai-call-agent-should-never-say).',
      ],
    },
    {
      id: 'cost',
      h: 'Prompt length and cost',
      p: [
        'Everything in the prompt is counted in [tokens](/glossary/llm-token) and processed on every request, so a very long prompt costs more and slows each [inference](/glossary/inference). On a phone call, where delay is noticeable, short and focused prompts matter.',
      ],
    },
    {
      id: 'example',
      h: 'A short example of a business prompt',
      p: [
        'A weak prompt: "Answer customer questions." The assistant has no idea about tone, language or limits. A stronger one reads like a note to a new employee: "You answer the phone for a dental clinic in Lalitpur. Speak in Nepali unless the caller uses English. Use only the price and schedule information provided. If you are unsure or the caller is in pain, offer to connect them to the reception. Never give medical advice."',
        'Every sentence does a job: role, language, source of facts, fallback and a firm limit. Test it with awkward callers, such as someone asking for a discount you do not offer.',
      ],
    },
    {
      id: 'phone',
      h: 'Prompts for phone calls differ from prompts for chat',
      p: [
        'Spoken replies must be short. On a call, a four-sentence answer feels like a lecture. A phone prompt should say so: one or two sentences, the key fact first, and then a question or a pause. It should also say how to read numbers and times aloud, and to confirm names and phone numbers by repeating them.',
        'Callers also ramble, interrupt and give information out of order. The prompt can tell the assistant to ask one question at a time and to keep what it already learned.',
      ],
    },
    {
      id: 'mistakes',
      h: 'Common mistakes',
      p: [
        'Most prompt problems are ordinary writing problems.',
      ],
      list: [
        'Putting facts in the prompt that change often, such as prices. These belong in the [knowledge base](/glossary/knowledge-base).',
        'Contradictory rules, such as "always be brief" and "always explain fully".',
        'Rules phrased only as "never", with no instruction on what to do instead.',
        'Never testing against real calls and relying on how the prompt reads.',
      ],
    },
    {
      id: 'injection',
      h: 'Prompt injection',
      p: [
        'Because the model reads the customer’s words in the same stream as your instructions, a caller or a web page can include text such as "ignore your instructions". This is called prompt injection. Good systems do not rely on the prompt alone. They limit what the assistant can do, so even a successfully tricked assistant cannot reveal private data or take harmful actions.',
      ],
    },
    {
      id: 'airfone',
      h: 'Prompts on AirFone',
      p: [
        'You describe your business, its rules and its information, and the [AI call agent](/products/ai-call-agent) is set up to follow them in Nepali or English.',
      ],
    },
  ],
  faq: [
    { q: 'What is a prompt in simple words?', a: 'It is the text you give an AI so it knows what to do, such as a question or a set of instructions.' },
    { q: 'What is a system prompt?', a: 'It is the standing set of instructions a business gives the AI about its role, tone and limits. Customers do not see it.' },
    { q: 'Do I need to learn prompt engineering?', a: 'Not deeply. Clear plain instructions and accurate source information matter more than tricks.' },
    { q: 'Can a customer override the prompt?', a: 'They can try. Good systems limit what the assistant is able to do, so a clever request cannot make it break important rules.' },
    { q: 'How long should a prompt be?', a: 'As short as it can be while covering role, language, limits and fallback. Long prompts cost more in [tokens](/glossary/llm-token), slow each reply and are more likely to contain contradictions.' },
    { q: 'What is prompt injection?', a: 'It is when someone writes text designed to make the AI ignore its instructions. The defence is to restrict what the assistant is able to do, not only to tell it not to.' },
  ],
  related: ['llm', 'knowledge-base', 'rag', 'ai-hallucination', 'llm-token'],
  product: 'ai-call-agent',
};

export default term;
