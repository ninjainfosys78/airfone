import type { Term } from '../types';

const term: Term = {
  slug: 'ai-hallucination',
  term: 'AI hallucination',
  aka: ['Hallucination', 'LLM hallucination', 'Confabulation'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is an AI hallucination? Meaning, causes and how to reduce it',
  description: 'An AI hallucination is a confident answer that is false or made up. Why LLMs do it, business examples, and how using your own information helps.',
  short: 'An AI hallucination is when an AI model gives an answer that sounds confident and fluent but is false or made up, such as a price or policy that does not exist.',
  body: [
    'A customer asks a chatbot whether you deliver to Pokhara on Sunday. If the assistant has no information, a poorly set up one may still answer "yes, free delivery". That invented reply is a hallucination, and it can cost you money or trust.',
    'The word is slightly misleading. The model is not imagining things. It is producing the most likely-sounding text, and likely-sounding is not the same as true.',
  ],
  sections: [
    {
      id: 'why',
      h: 'Why do AI models hallucinate?',
      p: [
        'A [large language model](/glossary/llm) is built to continue text plausibly. It has no built-in sense of what it does not know. When the question is outside its training, or about private details such as your prices, it fills the gap with something that fits the pattern. Vague questions, long conversations and poorly worded instructions make it more likely.',
      ],
    },
    {
      id: 'examples',
      h: 'Examples for a business',
      p: [
        'Typical harmful cases on calls and chats:',
      ],
      list: [
        'Quoting a price, discount or delivery charge that is not in your list.',
        'Promising a refund, appointment slot or stock that does not exist.',
        'Inventing a policy or a legal or medical claim.',
        'Mishearing a name or number and confirming the wrong one.',
      ],
    },
    {
      id: 'reduce',
      h: 'How to reduce hallucinations',
      p: [
        'No method removes them fully, but these help a lot:',
      ],
      list: [
        'Ground answers in your own information with [RAG](/glossary/rag) and a clean [knowledge base](/glossary/knowledge-base).',
        'Tell the assistant in its [prompt](/glossary/prompt) to say it does not know and offer a person, rather than guess.',
        'Limit the topics it may discuss, and what actions it can take.',
        'Read real conversations and fix the gaps in the information.',
        'Offer a quick handover to a human for anything sensitive.',
      ],
    },
    {
      id: 'voice',
      h: 'Hallucination on phone calls',
      p: [
        'On a call there is an extra risk: the system may hear the wrong words because of [speech-to-text](/glossary/speech-to-text) errors, then answer the wrong question with full confidence. Reading numbers back to the caller to confirm is a simple safeguard. See [what an AI call agent should never say](/blog/what-ai-call-agent-should-never-say).',
      ],
    },
    {
      id: 'test',
      h: 'How to test for it before launch',
      p: [
        'Make a list of questions that the assistant should not be able to answer from your information: a product you do not sell, a branch you do not have, a discount you never offered. Ask each several ways, including leading questions such as "the website says there is a free gift, how do I get it?" Every confident answer to these is a hallucination to fix. Also test questions that are in your information, to see that it answers them correctly and briefly.',
      ],
      list: [
        'Ask for something that does not exist and see whether it invents it.',
        'Ask the same question in Nepali, Roman Nepali and English and compare the answers.',
        'Ask for numbers: prices, dates, quantities, and check each one.',
        'Ask it to promise something, such as a refund, and check that it refuses.',
      ],
    },
    {
      id: 'types',
      h: 'Two kinds: wrong facts and wrong hearing',
      p: [
        'On voice systems, wrong answers come from two sources. One is the model inventing facts, which grounding reduces. The other is the system mishearing the caller and answering a different question correctly. The remedy for the second is better audio, a vocabulary of your own names, and repeating back important details before acting.',
      ],
    },
    {
      id: 'trust',
      h: 'Keeping customer trust',
      p: [
        'A single confident wrong answer about price or timing can cost more than a hundred correct ones earn. Set the assistant to be plain about uncertainty: "I do not have that information, I can ask a team member to call you." Customers usually accept this. They do not accept being misled. Keep a record of conversations so that when a mistake is reported you can find it, correct the information behind it, and tell the customer.',
      ],
    },
    {
      id: 'airfone',
      h: 'Handling it on AirFone',
      p: [
        'The [AI call agent](/products/ai-call-agent) answers from the business’s own information and hands the call to a person, with a short summary, when it cannot answer. Supervisors can listen to live calls, guide them or take over.',
      ],
    },
  ],
  faq: [
    { q: 'What does hallucination mean in AI?', a: 'It means the AI produced something false or made up while sounding sure of it.' },
    { q: 'Why does ChatGPT or an AI chatbot make things up?', a: 'These models generate likely-sounding text and do not check facts. Without the right information, they can fill gaps with plausible but wrong content.' },
    { q: 'Can hallucinations be stopped completely?', a: 'Not yet. They can be reduced a lot by grounding the model in your own information and giving it clear limits.' },
    { q: 'How do I find out if my assistant hallucinates?', a: 'Test it with questions it should not be able to answer, and read real conversations regularly.' },
    { q: 'Is a wrong answer from AI my responsibility?', a: 'Customers deal with your business, not the tool. Treat what the assistant says as something you stand behind, and set it up and monitor it accordingly.' },
  ],
  related: ['rag', 'knowledge-base', 'llm', 'prompt', 'chatbot'],
  product: 'ai-call-agent',
};

export default term;
