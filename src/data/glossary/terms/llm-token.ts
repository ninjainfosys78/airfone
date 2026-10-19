import type { Term } from '../types';

const term: Term = {
  slug: 'llm-token',
  term: 'Token',
  aka: ['LLM token', 'AI token', 'Tokens in AI', 'Context window'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is a token in AI? Meaning, pricing and context window',
  description: 'A token is a small chunk of text an AI model reads and writes. Meaning, how tokens set price and limits, and why Nepali often uses more tokens.',
  short: 'A token is a small piece of text, often a short word or part of a word, that an AI language model reads and writes. AI providers usually charge by the number of tokens processed.',
  body: [
    'A language model does not read letters or whole words. It splits text into tokens first. A common English word may be one token, a long or rare word may be several, and a space or punctuation mark can count too. As a rough guide for English, OpenAI’s help centre gives one token as about four characters, or about three quarters of a word. The ratio is only an estimate.',
    'Tokens matter to a business for two reasons: they set the bill, and they set how much the model can read at once.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Token meaning with an example',
      p: [
        'The sentence "What time do you open?" might split into about six tokens, one for each word and the question mark. A word such as "unbelievable" might split into pieces. Different models split text differently, so the same sentence can have different token counts on different models.',
      ],
    },
    {
      id: 'pricing',
      h: 'Tokens and pricing',
      p: [
        'Providers commonly charge per million tokens, with one rate for input (what you send, including the [prompt](/glossary/prompt) and retrieved documents) and usually a higher rate for output (commonly a few times the input rate) (what the model writes). Every turn of a conversation re-sends earlier context, so long chats cost more. This is part of the cost of [inference](/glossary/inference).',
        'Exact prices change often and vary by provider and model, so check the current rate card before budgeting.',
      ],
    },
    {
      id: 'context',
      h: 'Tokens and the context window',
      p: [
        'The context window is the maximum number of tokens a model can consider at one time, covering the instructions, the conversation so far, any retrieved information and the reply. When it fills up, older content must be dropped or summarised. Keeping the [prompt](/glossary/prompt) and the [knowledge base](/glossary/knowledge-base) passages short and relevant keeps cost and delay down.',
      ],
    },
    {
      id: 'nepali',
      h: 'Why Nepali can use more tokens',
      p: [
        'Many models split text using patterns learned mostly from English. Devanagari script is often broken into smaller pieces, so the same meaning can take more tokens than in English. Studies of Hindi, which uses the same script, report roughly two to five times as many tokens on some tokenizers, with newer ones narrowing the gap. I found no published Nepali figure, so assume a similar effect and measure with your own text.',
      ],
    },
    {
      id: 'voice',
      h: 'Tokens and voice',
      p: [
        'Voice systems add their own units. Speech recognition and voice generation are often priced by audio minutes or characters, not text tokens, while the [LLM](/glossary/llm) in the middle is priced by tokens. A call cost is the sum of these.',
      ],
    },
    {
      id: 'example2',
      h: 'A rough calculation',
      p: [
        'Take a chat in which the prompt and your retrieved price information total 800 tokens, the customer message is 30 tokens and the reply is 80 tokens. That is about 910 tokens for one turn. After ten turns, because earlier messages are sent again each time, the total processed is several times larger. This is why trimming the prompt and keeping answers short lowers the bill and the delay.',
      ],
    },
    {
      id: 'tips',
      h: 'Ways to use fewer tokens',
      p: [
        'Reducing tokens lowers cost and speeds up replies, with no loss of quality if done carefully.',
      ],
      list: [
        'Keep the standing instructions short and remove rules that never matter.',
        'Send only the few relevant passages of information, not the whole document.',
        'Ask for short replies, which also suit phone conversations.',
        'Summarise old turns of long conversations instead of sending them in full.',
        'Use a smaller model for simple steps such as sorting messages by topic.',
      ],
    },
    {
      id: 'speech',
      h: 'Tokens are not minutes',
      p: [
        'People often confuse token counts with call length. A one-minute call may contain only about a hundred and fifty spoken words, which is a modest number of text tokens, yet cost more in total because recognition and voice are billed separately and the model runs on each turn. When comparing quotes, ask for the price of a whole call of your typical length, not just a price per million tokens.',
      ],
    },
  ],
  faq: [
    { q: 'What is a token in simple words?', a: 'It is a small chunk of text, like a short word or part of one, that an AI model reads and writes.' },
    { q: 'How many words is a token?', a: 'In English, a token is roughly three quarters of a word, or about four characters. The ratio varies by language and model.' },
    { q: 'What is a context window?', a: 'It is the maximum amount of text, counted in tokens, that a model can consider at once, including your instructions, the chat and its reply.' },
    { q: 'Do tokens affect how fast an AI answers?', a: 'Yes. More tokens to read and write generally means a longer wait, which matters on live calls.' },
    { q: 'Are tokens the same in every model?', a: 'No. Each model has its own way of splitting text, so counts differ.' },
  ],
  related: ['llm', 'inference', 'prompt', 'rag', 'text-to-speech'],
  product: 'ai-call-agent',
};

export default term;
