import type { Term } from '../types';

const term: Term = {
  slug: 'caller-id',
  term: 'Caller ID',
  full: 'Caller identification',
  aka: ['Calling line identification', 'CLI', 'CLID', 'CLIP', 'Calling number display', 'Caller ID spoofing'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is caller ID? Meaning, CLI and how it works',
  description: 'Caller ID shows the number, and sometimes the name, of whoever is calling. Meaning, how it works, caller ID vs ANI and showing your business number.',
  short: 'Caller ID is the feature that shows the phone number, and sometimes the name, of an incoming caller on the screen before you answer.',
  body: [
    'When your phone rings and shows a number, that is caller ID. It lets you decide whether to pick up, and lets a business greet the caller by name or open their record before saying hello.',
    'The technical name is calling line identification, or CLI. It is related to [ANI](/glossary/ani), but not the same, as explained below.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Caller ID meaning in simple words',
      p: [
        'Caller ID is information sent along with a call setup: the number that is calling, and in some networks a name. Your phone or phone system shows it on the screen.',
        'Outgoing caller ID is the number your own calls show to the person you ring. A business wants this to be its main number, so customers recognise it and call back to the right place.',
      ],
    },
    {
      id: 'how',
      h: 'How does caller ID work?',
      p: [
        'On a traditional line the number is sent between the first and second ring. On a [VoIP](/glossary/voip) system it travels inside the call signalling, as part of a [SIP](/glossary/sip) message, so it is there from the start. The receiving system shows the number it was given, and may look the name up in a contact list.',
        'The number a caller shows is set on the caller side. That is why it can be hidden, and also why it can be faked, which is called spoofing. Research on telephone networks has long noted that caller ID cannot be fully trusted, and VoIP makes it depend on the honesty of the carriers in the path.',
      ],
    },
    {
      id: 'vs-ani',
      h: 'Caller ID vs ANI',
      p: [
        'Caller ID is the number shown to the person called, and the caller can usually change or hide it. [ANI](/glossary/ani) is the number the network itself records for billing and routing. It is generally harder to forge, though not impossible, and on toll-free lines the business receives it even when caller ID is blocked. Sources from different eras disagree on the fine detail, so treat both as clues and not proof.',
      ],
    },
    {
      id: 'business',
      h: 'Why caller ID matters for a business',
      p: ['It helps in a few clear ways.'],
      list: [
        'Staff see who is calling and can open the customer record before answering.',
        'Missed calls become a call-back list you can act on.',
        'Outgoing calls show your business number, not a personal mobile.',
        'It helps spot repeat callers and spam numbers.',
      ],
    },
    {
      id: 'spoof',
      h: 'Caller ID spoofing: why you should not trust it',
      p: [
        'Spoofing means a caller sets a false number on purpose, for example to look like a bank. Never treat a displayed number as proof of who is calling. If a caller asks for a payment or a password, hang up and call the organisation back on a number you already trust. Businesses should do the same for any caller who asks to change account details.',
      ],
    },
    {
      id: 'blocked',
      h: 'Why you sometimes see no number',
      p: [
        'A caller can block their number, or the network between you can drop it. Calls from abroad may show a different number format. If many callers show as unknown, check how your provider handles the number on incoming calls.',
      ],
    },
    {
      id: 'setup',
      h: 'How to set your business caller ID',
      p: [
        'Choose the number customers should see when you call them, usually the main business number. On a cloud phone system, set it per user or per team. Do not display a number you do not own or have not been allowed to use, since carriers can block such calls.',
      ],
    },
  ],
  faq: [
    { q: 'What does caller ID show?', a: 'The phone number of the caller, and in some cases a name from a directory or your contacts.' },
    { q: 'What is CLI?', a: 'CLI stands for calling line identification. It is the technical name for caller ID.' },
    { q: 'Can caller ID be faked?', a: 'Yes. Because the sender sets it, it can be changed. This is called spoofing, so do not trust it for security.' },
    { q: 'What is the difference between caller ID and ANI?', a: 'Caller ID is shown to the receiver and can be changed or hidden. ANI is the number the network records for billing and routing.' },
    { q: 'Can I show my business number when I call from my mobile?', a: 'With a cloud phone system, yes. Calls made through the system app can show your business number.' },
  ],
  related: ['ani', 'sip', 'voip', 'did', 'virtual-phone-number'],
  product: 'phone-system',
};

export default term;
