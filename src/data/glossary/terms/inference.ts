import type { Term } from '../types';

const term: Term = {
  slug: 'inference',
  term: 'Inference',
  aka: ['AI inference', 'Model inference'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is AI inference? Meaning, cost and latency explained',
  description: 'AI inference is running a trained model to get an answer. How it differs from training, why it sets cost and delay, and why it matters on live calls.',
  short: 'Inference is the step where a trained AI model is run to produce an answer for a real request. Training teaches the model once. Inference happens every time someone asks it something.',
  body: [
    'Every time a chatbot replies, a caller’s speech is turned into text, or an AI voice speaks a sentence, a model is being run to produce that output. That act of running a finished model on new input is inference. It is the part of AI you pay for each time you use it.',
    'For a phone business the key point is that inference takes time and money on every single request. A reply that arrives two seconds late is fine in a chat window, but on a live call it feels like the line has gone dead.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Inference meaning in simple words',
      p: [
        'Think of a student. Training is the years of study. Inference is sitting the exam and writing an answer to a question never seen before. The studying is finished; now the knowledge is being used.',
        'In AI the same split applies. A [large language model](/glossary/llm) is trained once by its maker on a very large amount of data. When you use it, the model does not learn anything new from your question. It simply computes an answer from what it already has, plus whatever you give it in the [prompt](/glossary/prompt).',
      ],
    },
    {
      id: 'training-vs-inference',
      h: 'Training vs inference',
      p: [
        'The two stages differ in who does the work and how often.',
      ],
      list: [
        'Training: done once (or occasionally) by the model maker, takes very large computing power, and changes the model itself.',
        'Inference: done every time the model is used, takes much less computing per request, and does not change the model.',
        'A business that uses an AI call agent pays for and waits on inference, not training.',
      ],
    },
    {
      id: 'cost',
      h: 'What inference costs',
      p: [
        'Inference needs computers with specialised chips, and someone has to pay for them while they work. Most AI providers charge by the amount of text processed, counted in [tokens](/glossary/llm-token), for both what goes in and what comes out. Longer prompts and longer answers cost more.',
        'Voice adds more. A call may need speech recognition, a language model and a voice generator for every turn of conversation, so one phone call can mean many inference requests. This is why a plain-text chatbot is usually cheaper per conversation than a spoken call.',
      ],
    },
    {
      id: 'latency',
      h: 'Latency: why speed matters on a call',
      p: [
        'Latency is the delay between a request and its answer. In human conversation the gap between one person finishing and the other starting is very short. If an AI call agent pauses for several seconds, callers repeat themselves, talk over it or hang up.',
        'The delay on a call is the sum of the steps: [speech-to-text](/glossary/speech-to-text), the model deciding what to say, and [text-to-speech](/glossary/text-to-speech). Good systems start speaking before the whole answer is written, and they handle the caller interrupting, called [barge-in](/glossary/barge-in).',
      ],
    },
    {
      id: 'cloud-vs-own',
      h: 'Where inference runs',
      p: [
        'Inference can run in a provider’s cloud, on a rented server, or on a computer the business owns. Running far from the caller adds network delay, and a model that is too large for its hardware answers slowly. Smaller models are faster and cheaper but may be less accurate, especially in Nepali.',
        'Choosing the right model is a trade between quality, speed and cost. A system that is not tied to one vendor can change that choice over time.',
      ],
    },
    {
      id: 'batching',
      h: 'Why the same question can take different times',
      p: [
        'Response time depends on more than the model. A long [prompt](/glossary/prompt) must be read before the first word of the answer can appear. A long answer takes longer to write because the model produces it one piece at a time. A busy server may make your request wait. And the distance between the caller, the server and the voice service adds a small delay at each hop.',
        'Engineers talk about two measures. Time to first token is how long until the answer starts. Tokens per second is how fast it then flows. For a phone call the first matters most, because the caller is waiting in silence until the voice begins.',
      ],
    },
    {
      id: 'tricks',
      h: 'How systems keep calls fast',
      p: [
        'Several ordinary techniques keep delays down without changing the model.',
      ],
      list: [
        'Streaming: the voice starts speaking the first sentence while the model is still writing the rest.',
        'Short replies: a phone answer of two sentences is faster to produce and easier to follow than a paragraph.',
        'Smaller models for simple steps, such as deciding which topic the caller is asking about.',
        'Keeping the prompt short, and sending only the passages of information that are relevant.',
        'Servers placed close to the caller’s network, so audio does not travel far.',
      ],
    },
    {
      id: 'cost-example',
      h: 'A cost example in plain terms',
      p: [
        'Suppose a call has eight exchanges. Each exchange sends the instructions, some business information and the conversation so far, then receives a short reply. The model is run eight times, and the later runs carry more history. Add the cost of recognising the caller’s speech and of generating the voice. The total for the call is the sum of all of these, which is why providers quote cost per minute or per conversation and why a long, chatty call costs more than a short one. Ask any provider for a worked example using your expected call length.',
      ],
    },
    {
      id: 'private',
      h: 'Inference and privacy',
      p: [
        'Each request sends text to wherever the model runs. If that is a provider’s cloud, the content of the call leaves your premises, subject to the provider’s terms on storage and reuse. Read those terms, and ask whether data is kept, for how long, and whether it is used to improve their models. Where data must stay inside the country or the company, running a model on your own server is an option, at the cost of managing it.',
      ],
    },
    {
      id: 'airfone',
      h: 'Inference on AirFone',
      p: [
        'AirFone is model-agnostic, so the models behind the [AI call agent](/products/ai-call-agent) are not locked to one AI vendor. That lets the speed, cost and Nepali quality of each step be tuned without changing how you use the product.',
      ],
    },
  ],
  faq: [
    { q: 'What is inference in simple terms?', a: 'It is running an already trained AI model to get an answer or result for a new request, such as replying to a message or turning speech into text.' },
    { q: 'What is the difference between training and inference?', a: 'Training builds the model from large amounts of data and happens before use. Inference uses the finished model on each new request and does not change it.' },
    { q: 'Why does inference have a cost?', a: 'Each request uses computer time on specialised hardware. Providers usually charge per token processed, so longer inputs and outputs cost more.' },
    { q: 'What is inference latency?', a: 'It is the delay between sending a request to a model and receiving the answer. On a phone call, high latency creates awkward silences.' },
    { q: 'Does the AI learn from my customers’ calls during inference?', a: 'Not by itself. Running a model does not change it. Whether a provider stores or reuses your data is a separate policy question you should check.' },
    { q: 'Is inference done on my phone or on a server?', a: 'For business phone systems it usually runs on servers, either a provider’s cloud or the company’s own. Some small models can run on a phone, but call agents normally need larger ones.' },
    { q: 'Why is AI sometimes slow to answer on a call?', a: 'The delay is the total of speech recognition, the model, and voice generation, plus network travel. Long prompts, long answers and busy servers all add to it.' },
  ],
  related: ['llm', 'llm-token', 'speech-to-text', 'text-to-speech', 'barge-in'],
  product: 'ai-call-agent',
};

export default term;
