import type { Term } from '../types';

const term: Term = {
  slug: 'virtual-phone-number',
  term: 'Virtual phone number',
  aka: ['Virtual number', 'Cloud phone number', 'Online phone number', 'VoIP number', 'Virtual landline'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is a virtual phone number? Meaning and how it works',
  description: 'A virtual phone number is a number not tied to one phone or SIM card, answered over the internet. Meaning, how it works, uses and virtual vs physical number.',
  short: 'A virtual phone number is a phone number that is not tied to one physical phone line or SIM card, so calls to it can be answered on any phone, app or computer over the internet.',
  body: [
    'A normal number belongs to a SIM or a copper line. A virtual number belongs to a phone system. When someone dials it, the system decides where the call rings: a mobile app, a browser, a desk phone, or several at once.',
    'This is how a business can have one public number answered by a whole team. It rests on [VoIP](/glossary/voip) and is usually delivered as a [DID](/glossary/did) number.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Virtual phone number meaning in simple words',
      p: [
        'Virtual means the number has no fixed device behind it. You can point it at any destination and change that destination any time. If you move offices or hire remote staff, the number stays the same.',
      ],
    },
    {
      id: 'how',
      h: 'How does a virtual phone number work?',
      p: [
        'The number is registered with a provider. Calls to it arrive at the provider phone system over the internet, using [SIP](/glossary/sip). The system applies your [call routing](/glossary/call-routing) rules and rings the chosen app, browser or phone. Outgoing calls can show the same number.',
        'Because it works over the internet, the quality depends on your connection. Delay and dropped audio are the usual causes of poor calls, so test on the networks your staff really use.',
      ],
    },
    {
      id: 'vs',
      h: 'Virtual number vs physical number',
      p: ['The main differences are about flexibility.'],
      list: [
        'A physical number is tied to a SIM or line. A virtual number is tied to a system.',
        'A virtual number can ring many devices. A SIM rings one phone.',
        'A virtual number moves with you. A line stays at an address.',
        'A virtual number can be set up for a branch or city. A SIM cannot be shared across a team.',
      ],
    },
    {
      id: 'sms',
      h: 'Can a virtual number receive SMS?',
      p: [
        'Often yes, but it depends on the provider and the number type. Some virtual numbers handle calls only. Some services that send verification codes also refuse known virtual numbers, so a code may never arrive. If you need a number for texts or bank codes, check this with the provider first.',
      ],
    },
    {
      id: 'legal',
      h: 'Are virtual numbers legal?',
      p: [
        'Using one for ordinary business is generally lawful. Rules differ by country and by how the number is used, and a business should only use numbers it can legally hold. In Nepal, check with your provider or the regulator what applies before you rely on a number.',
      ],
    },
    {
      id: 'uses',
      h: 'What businesses use virtual numbers for',
      p: ['Typical uses include:'],
      list: [
        'A single public number for a team with staff in several places.',
        'A separate number for each branch, campaign or department.',
        'Keeping the business number apart from the owner personal SIM.',
        'Handing the number from one staff member to the next without changing it.',
      ],
    },
    {
      id: 'airfone',
      h: 'Virtual numbers on AirFone',
      p: [
        'With AirFone you can bring your existing number over a SIP line, so customers keep the number they know. Staff answer from the app or a browser. See the [phone system](/products/phone-system) and [how to get a business number in Nepal](/blog/business-phone-number-nepal).',
      ],
    },
    {
      id: 'setup',
      h: 'How to get a virtual phone number',
      p: [
        'You choose a provider that offers numbers in the country you need, pick or port a number, and point it at your phone system or app. If you already have a number, ask whether it can be ported or connected over a SIP line, so you keep it. Then set the routing rules and test calls from different networks before you print the number on anything.',
      ],
    },
  ],
  faq: [
    { q: 'What is a virtual phone number?', a: 'It is a number answered by a phone system over the internet rather than tied to one SIM or line.' },
    { q: 'Do I need a SIM card for a virtual number?', a: 'No. It rings on an app, a browser or a desk phone through the internet.' },
    { q: 'Can I keep my existing number?', a: 'Often yes. A provider can connect an existing number to a phone system through a SIP line. Check with your carrier.' },
    { q: 'Is a virtual number the same as a VoIP number?', a: 'Nearly. A VoIP number is a number whose calls travel over the internet. Virtual number is the more general name.' },
    { q: 'Can a virtual number receive SMS?', a: 'Sometimes. It depends on the provider and number type, so check before relying on it for codes.' },
  ],
  related: ['did', 'voip', 'sip-trunk', 'ai-call-agent', 'toll-free-number'],
  product: 'phone-system',
};

export default term;
