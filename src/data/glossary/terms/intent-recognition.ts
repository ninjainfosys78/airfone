import type { Term } from '../types';

const term: Term = {
  slug: 'intent-recognition',
  term: 'Intent recognition',
  aka: ['Intent detection', 'Intent classification', 'Caller intent'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is intent recognition? Meaning and examples for calls',
  description: 'Intent recognition is how AI works out what a customer wants from what they say or type. Meaning, examples, how it differs from keywords, and call routing.',
  short: 'Intent recognition is the step where software works out what a customer actually wants, such as booking, complaining or asking a price, from their own words.',
  body: [
    'A caller may say "I want to change my appointment", "can we move Thursday" or "kahile aaune ho, arko din milcha". The wording differs, but the intent is the same: reschedule. Intent recognition maps many ways of saying something to one meaning the system can act on.',
    'It is the decision point of any [chatbot](/glossary/chatbot) or [AI call agent](/glossary/ai-call-agent). Once the intent is known, the system can answer, ask for missing details, or send the caller to the right person.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Intent recognition meaning',
      p: [
        'An intent is the goal behind a message. Typical intents for a business are: ask price, check opening hours, book, cancel, track an order, report a problem and speak to a person. Details inside the message, such as a date or order number, are called entities and are pulled out separately.',
      ],
    },
    {
      id: 'how',
      h: 'How it works',
      p: [
        'Older systems matched keywords, so "cancel" triggered the cancel flow even in "do not cancel". Later ones were trained on example sentences for each intent. Current systems use a [large language model](/glossary/llm) given a list of possible intents in a [prompt](/glossary/prompt), which copes better with unexpected wording and with mixed Nepali and English.',
        'A good system also has an "I am not sure" outcome. When confidence is low it asks a clarifying question or hands over, instead of guessing.',
      ],
    },
    {
      id: 'vs-ivr',
      h: 'Intent recognition vs IVR menus',
      p: [
        'An [IVR](/glossary/ivr) asks the caller to do the sorting by pressing keys ([DTMF](/glossary/dtmf) tones). Intent recognition lets the caller just say what they need and does the sorting itself. This avoids long menus, and callers who press the wrong option. See [IVR vs AI call agent](/blog/ivr-vs-ai-call-agent).',
      ],
    },
    {
      id: 'routing',
      h: 'Using intent to route calls',
      p: [
        'Once the intent is known, [call routing](/glossary/call-routing) can act on it:',
      ],
      list: [
        'Billing questions go to the accounts team.',
        'Urgent problems go to the front of the [call queue](/glossary/call-queue).',
        'Simple questions are answered directly from the [knowledge base](/glossary/knowledge-base).',
        'Anything unclear goes to a person with a summary of what was said.',
      ],
    },
    {
      id: 'example',
      h: 'A worked example on a pharmacy line',
      p: [
        'Four callers say: "Do you have paracetamol?", "Is Dolo available?", "Paracetamol cha?", "I need fever medicine". All four have one intent, check stock, with different details. A fifth says "My father has chest pain and needs medicine now". This is a different intent, an emergency, that should not be answered from the stock list at all.',
        'Good intent design includes high-risk intents with clear rules: emergencies go to a person at once or to emergency advice, and complaints go to a manager.',
      ],
    },
    {
      id: 'design',
      h: 'Designing the list of intents',
      p: [
        'A short list that covers most calls beats a long list that overlaps. Start by reading a week of real calls and counting the reasons for them. Merge intents that lead to the same action, and split those that need different answers. Add an "other" intent that always leads to a person.',
      ],
    },
    {
      id: 'metrics',
      h: 'Checking that it works',
      p: [
        'Take a sample of two hundred real messages or calls and label the correct intent for each yourself. Run the system on the same sample and compare. Look at which intents get confused with each other, because those often need to be merged or described more clearly. Repeat each month, since customers’ reasons for calling change with seasons, offers and festivals.',
      ],
    },
    {
      id: 'nepali',
      h: 'Intent in Nepali and mixed language',
      p: [
        'The same request can arrive as "refund chahiyo", "mero paisa pheri paunu paryo" or "I want my money back". A system that learned intents from English examples may handle only the third. Test each intent with Devanagari, Roman Nepali and English wording, and add the missing styles to your examples or instructions.',
        'On a phone call the words first pass through [speech-to-text](/glossary/speech-to-text). A misheard word can change the intent, so a good system looks at the whole sentence and asks for confirmation before acting on something important.',
      ],
    },
    {
      id: 'airfone',
      h: 'Intent recognition on AirFone',
      p: [
        'The [AI call agent](/products/ai-call-agent) works out what each caller needs, answers from the business’s own information when it can, and hands the call to a person with a short summary when it should.',
      ],
    },
  ],
  faq: [
    { q: 'What is an intent in AI?', a: 'It is the goal behind what a person says or types, such as booking, cancelling or asking for a price.' },
    { q: 'What is the difference between intent and entity?', a: 'The intent is what the person wants. Entities are the details inside the message, such as a date, a name or an order number.' },
    { q: 'How is intent recognition different from keyword matching?', a: 'Keyword matching looks for exact words. Intent recognition looks at meaning, so different wording with the same goal is understood.' },
    { q: 'What happens when the AI cannot tell the intent?', a: 'A well-built system asks a clarifying question or hands the conversation to a person instead of guessing.' },
  ],
  related: ['natural-language-processing', 'ivr', 'call-routing', 'chatbot', 'ai-call-agent'],
  product: 'ai-call-agent',
};

export default term;
