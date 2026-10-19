import type { Term } from '../types';

const term: Term = {
  slug: 'chatbot',
  term: 'Chatbot',
  aka: ['Chat bot', 'AI chatbot', 'Virtual assistant'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is a chatbot? Meaning, types and how businesses use it',
  description: 'A chatbot is a program that chats with customers in text. Learn how rule-based and AI chatbots differ, how they work, and what a business should check.',
  short: 'A chatbot is a program that holds a text conversation with a person, usually on a website or messaging app, and answers questions without a human typing each reply.',
  body: [
    'A visitor opens your website at midnight and asks whether a product is in stock or what a room costs. A chatbot replies straight away, instead of the message waiting until the office opens. Many visitors who do not get a quick answer simply leave, so this matters.',
    'Chatbots range from simple button menus to assistants built on a [large language model](/glossary/llm) that understand free wording. A chatbot is the text version of what an [AI call agent](/glossary/ai-call-agent) does on the phone.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Chatbot meaning in simple words',
      p: [
        'The word joins "chat" and "robot". It is a program that chats. The person types, the bot answers, and the exchange looks like messaging with a colleague. The bot may live in a chat bubble on a website, in an app, or inside a messaging app.',
      ],
    },
    {
      id: 'types',
      h: 'Types of chatbot',
      p: [
        'Two broad kinds exist, and the difference matters for what your customers experience.',
      ],
      list: [
        'Rule-based chatbot: follows a flow you draw in advance, with buttons and fixed keywords. Predictable, but it fails on wording you did not plan for.',
        'AI chatbot: uses [natural language processing](/glossary/natural-language-processing) and a language model to understand free wording, and writes its own replies from your information. Flexible, but needs good source information to stay accurate.',
      ],
    },
    {
      id: 'how-it-works',
      h: 'How does an AI chatbot work?',
      p: [
        'When a visitor sends a message, the chatbot finds the [intent](/glossary/intent-recognition), looks up the relevant facts in a [knowledge base](/glossary/knowledge-base), and the language model writes a reply from those facts. The method of fetching facts first and then writing is called [RAG](/glossary/rag).',
        'Because the reply comes from your information and not from the model’s memory, there is less risk of an [AI hallucination](/glossary/ai-hallucination).',
      ],
    },
    {
      id: 'vs',
      h: 'Chatbot vs live chat vs voice agent',
      p: [
        'Live chat means a human types each reply. A chatbot answers automatically. Many businesses combine the two: the bot handles routine questions and passes the chat to a person when asked or when it is unsure.',
        'A voice agent does the same job by speaking, not typing. See [conversational AI](/glossary/conversational-ai) for the wider picture, or the [website voice agent](/blog/website-voice-agent) for the spoken version.',
      ],
    },
    {
      id: 'good-chatbot',
      h: 'What a business should check',
      p: [
        'Before you put a chatbot in front of customers, check these points:',
      ],
      list: [
        'It answers only from information you gave it, and says so when it does not know.',
        'A person can take over easily, with the chat history visible.',
        'It handles Nepali, Roman Nepali and English if your customers use all three.',
        'You can read the conversations, to find questions your site does not answer well.',
        'It does not promise discounts, dates or policies you did not approve.',
      ],
    },
    {
      id: 'history',
      h: 'From keyword bots to language models',
      p: [
        'The first chatbots in the 1960s, such as ELIZA, matched patterns in typed sentences and echoed them back. Website bots of the 2010s used decision trees with buttons. Since language models arrived, a chatbot can read an unplanned sentence and write its own reply, which changed what they can do. A shopper no longer has to find the right button. They can type "kal parcel pugcha?" and be understood.',
      ],
    },
    {
      id: 'channels',
      h: 'Where chatbots run',
      p: [
        'The channel changes how you design the bot.',
      ],
      list: [
        'Website chat: visitors are browsing and may be comparing you with a competitor, so quick answers about price, stock and delivery matter most.',
        'Messaging apps: customers already use them, and expect answers in a casual style, often in Roman Nepali.',
        'In-app chat: the bot can see who the customer is and answer about their own order.',
        'Voice: the same logic can speak, which is how a website voice agent or a phone agent works.',
      ],
    },
    {
      id: 'flow',
      h: 'A conversation, step by step',
      p: [
        'A customer writes to a furniture shop at 11 pm: "Do you deliver a sofa to Bhaktapur, and how long?" The chatbot recognises two questions, delivery area and delivery time. It looks in the [knowledge base](/glossary/knowledge-base), finds that Bhaktapur is in the delivery area and that delivery takes three to five working days. It replies in one short message.',
        'The customer then asks for a discount. The bot has no authority to promise one, so it says that a team member will reply in the morning, and it collects a phone number. The next day the staff member sees the whole conversation and can continue. Nothing was lost overnight, and nothing was promised that the business did not approve.',
      ],
    },
    {
      id: 'measure',
      h: 'How to tell if a chatbot is working',
      p: [
        'Reading conversations is the best measure. Beyond that, track a few numbers.',
      ],
      list: [
        'Share of conversations that ended with the customer getting an answer, without a person.',
        'Share handed to a person, and the reasons why.',
        'Questions the bot could not answer, which are gaps in your information.',
        'Visitors who left their contact details or placed an order after chatting.',
        'Complaints about wrong answers, which should be near zero and each one investigated.',
      ],
    },
    {
      id: 'mistakes',
      h: 'Mistakes to avoid',
      p: [
        'The common failures are not technical. Bots are launched with an incomplete price list, so they dodge the questions people ask most. They hide the option to reach a person. They claim to be a human. They are never checked after launch, so a policy changes and the bot keeps quoting the old one. A short weekly read of real conversations prevents most of these.',
      ],
    },
    {
      id: 'airfone',
      h: 'Chatbot on AirFone',
      p: [
        'AirFone has a [website chatbot](/products/website-chatbot) that answers from your own price lists, schedules and notes. Visitors can also talk instead of type through the [website voice agent](/products/website-voice-agent). The system does not depend on one AI vendor.',
      ],
    },
  ],
  faq: [
    { q: 'What is a chatbot in simple words?', a: 'It is a program that chats with people in text and answers their questions automatically.' },
    { q: 'What is the difference between a chatbot and an AI chatbot?', a: 'A basic chatbot follows a fixed script of buttons and keywords. An AI chatbot understands free wording and writes replies from your information.' },
    { q: 'Can a chatbot work in messaging apps?', a: 'Yes. Chatbots can run on websites, apps and messaging apps, if the business connects the channel.' },
    { q: 'Will a chatbot give wrong answers?', a: 'It can if it guesses. Limiting it to your verified information and letting it hand over to a person reduces wrong answers.' },
    { q: 'Do small businesses need a chatbot?', a: 'It helps when customers ask the same questions often or write outside office hours. A small shop with few messages may not need one yet.' },
    { q: 'Is a chatbot the same as a virtual assistant?', a: 'The words overlap. A virtual assistant usually means a broader helper that can do tasks, sometimes by voice. A chatbot is typically a text conversation on a website or app.' },
    { q: 'Can a chatbot take orders or bookings?', a: 'Yes, if it is connected to the systems that hold stock, calendars or order forms. Without that connection it can only collect details for staff to confirm.' },
  ],
  related: ['conversational-ai', 'llm', 'rag', 'knowledge-base', 'ai-call-agent'],
  product: 'website-chatbot',
};

export default term;
