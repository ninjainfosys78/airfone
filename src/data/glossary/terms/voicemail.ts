import type { Term } from '../types';

const term: Term = {
  slug: 'voicemail',
  term: 'Voicemail',
  aka: ['Voice mail', 'Voicemail box', 'Visual voicemail', 'Voicemail to email', 'VM'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is voicemail? Meaning, how it works and business use',
  description: 'Voicemail records a message when nobody answers a call. Meaning, how it works, business voicemail vs missed call, greeting tips and voicemail transcription.',
  short: 'Voicemail is a phone feature that records a spoken message from a caller when nobody can answer, so the person can listen to it later.',
  body: [
    'A caller rings, nobody picks up, and instead of silence they hear a greeting and leave a message. The message is saved, and the owner can play it back when free.',
    'For a business, voicemail is the safety net at the end of every route: after hours, when all staff are busy, or when a [call queue](/glossary/call-queue) wait gets too long.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Voicemail meaning in simple words',
      p: [
        'Voicemail is an answering service built into the phone system. It plays a greeting, records the caller, and stores the audio in a mailbox for a person or a team.',
      ],
    },
    {
      id: 'how',
      h: 'How does voicemail work?',
      p: ['The steps are the same on most systems.'],
      list: [
        'A call rings and no one answers within a set time, or the line is busy, or it is outside opening hours.',
        'The system plays the greeting for that mailbox.',
        'The caller speaks after the tone, and the system records the message.',
        'The message is saved with the caller number and time. The owner is told there is a new message.',
        'The owner listens, and calls back.',
      ],
    },
    {
      id: 'business',
      h: 'Business voicemail vs a missed call',
      p: [
        'With no voicemail, a missed call leaves only a number on a list, and many callers never ring again. With voicemail, you get the reason for the call and a name. That helps you call back prepared, which matters when callers pay per minute from a mobile and do not want to try twice. To size the loss, see [how to measure missed calls](/blog/measure-missed-calls-business).',
        'Voicemail is still second best. Many people dislike leaving messages, so a good setup answers with a person or an [AI call agent](/glossary/ai-call-agent) first and uses voicemail only when neither is possible.',
      ],
    },
    {
      id: 'greeting',
      h: 'Writing a good voicemail greeting',
      p: ['Keep it short and useful.'],
      list: [
        'Say the business name.',
        'Say when you will call back, and keep that promise.',
        'Ask for name, number and reason.',
        'Do not read your whole price list.',
        'Use a different greeting for after hours and holidays, with the opening time.',
      ],
    },
    {
      id: 'transcription',
      h: 'Voicemail transcription and voicemail to email',
      p: [
        'Many systems turn a message into text with [speech to text](/glossary/speech-to-text) and send it by email or message. That lets you skim ten messages in a minute rather than playing each one. The text can be wrong with names and numbers, so keep the audio too.',
      ],
    },
    {
      id: 'overflow',
      h: 'Voicemail as the end of a call route',
      p: [
        'Voicemail works best as the last step in a chain. A call rings a [ring group](/glossary/ring-group), waits in a queue for a set time, and only then goes to voicemail. Without a limit, callers wait forever. With voicemail too early, you send away callers who would have waited 30 more seconds. The right point comes from your [abandonment data](/glossary/call-abandonment-rate).',
      ],
    },
    {
      id: 'airfone',
      h: 'Voicemail on AirFone',
      p: [
        'AirFone has voicemail, and a queue can overflow to it after the maximum wait. A number can also go to the AI call agent instead, which answers in Nepali or English. See the [phone system](/products/phone-system).',
      ],
    },
    {
      id: 'mistakes',
      h: 'Common voicemail mistakes',
      p: [
        'The most common mistake is a mailbox that is full, so callers hear nothing useful and hang up. Check mailboxes daily, delete old messages and make sure someone owns each one.',
        'The second is a greeting that is out of date, such as one that still names a staff member who left or promises a call back "within the hour" when nobody listens until the next day. Update the greeting whenever hours or staff change, and call your own number from a mobile once a month to hear what a customer hears.',
      ],
    },
  ],
  faq: [
    { q: 'What is voicemail?', a: 'It is a feature that records a message from a caller when nobody answers.' },
    { q: 'What is the difference between voicemail and a missed call?', a: 'A missed call shows only the number. Voicemail adds a recorded message explaining why the person rang.' },
    { q: 'What should a business voicemail say?', a: 'The business name, when you will call back, and a request for name, number and reason.' },
    { q: 'Can voicemail be sent to email?', a: 'Many business phone systems can send the audio or a text version of the message to email.' },
    { q: 'Can an AI answer instead of voicemail?', a: 'Yes. An AI call agent can answer, help with common questions and take the details, which many callers prefer to leaving a message.' },
  ],
  related: ['call-queue', 'auto-attendant', 'call-forwarding', 'speech-to-text', 'call-abandonment-rate'],
  product: 'phone-system',
};

export default term;
