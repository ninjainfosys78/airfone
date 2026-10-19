import type { Term } from '../types';

const term: Term = {
  slug: 'ani',
  term: 'ANI',
  full: 'Automatic Number Identification',
  aka: ['Automatic number identification', 'ANI meaning', 'Calling number', 'ANI vs caller ID', 'ANI full form'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is ANI? Automatic number identification and ANI vs caller ID',
  description: 'ANI (automatic number identification) is the caller number the network supplies for billing and routing. Meaning, how it works and ANI vs caller ID.',
  short: 'ANI (automatic number identification) is the phone number of the caller as reported by the telephone network itself, used for billing and for routing calls.',
  body: [
    'ANI answers the question "which line is this call really coming from?". It is supplied by the carrier, not typed in by the caller, so a business can rely on it more than on the number a caller chooses to show.',
    'It is often confused with [caller ID](/glossary/caller-id). Both give a number, but they serve different purposes.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'ANI meaning in simple words',
      p: [
        'ANI stands for automatic number identification. "Automatic" means it is added by the network, with no action from the caller. The result is the billing number of the line that placed the call.',
      ],
    },
    {
      id: 'how',
      h: 'How does ANI work?',
      p: [
        'When a call is set up, the carrier records the calling line and passes it on with the call. On toll-free, premium-rate and emergency services, the receiving side gets this number even if the caller blocked caller ID, because someone has to be billed or located.',
        'On internet phone systems the same idea is carried in [SIP](/glossary/sip) headers. How trustworthy the number is depends on the carriers in the path.',
      ],
    },
    {
      id: 'vs',
      h: 'ANI vs caller ID',
      p: ['Here are the differences side by side.'],
      list: [
        'Caller ID is meant for display. The caller side can usually change it or hide it.',
        'ANI is meant for billing and routing. It comes from the network.',
        'Caller ID may be a main business number. ANI may be the actual line behind it.',
        'On many mobile and VoIP services the two numbers differ, since the displayed number can be a company main line while the billing line is another.',
        'A caller can block caller ID. A business with the right service, such as a [toll-free number](/glossary/toll-free-number), can still receive ANI.',
      ],
    },
    {
      id: 'use',
      h: 'What businesses use ANI for',
      p: [
        'The number can be used to look up a customer record before the call is answered, to send the caller to their usual contact through [call routing](/glossary/call-routing), or to flag a number that calls repeatedly.',
        'Do not treat any caller number as proof of identity. Older write-ups claim ANI cannot be faked, while others disagree, and the position depends on the carriers. Ask for a second check for sensitive requests.',
      ],
    },
    {
      id: 'example',
      h: 'A worked example',
      p: [
        'A courier company runs a support line. A customer calls from a hidden number. The agent screen shows "unknown" in the caller ID field, but the ANI field, supplied by the network, shows the mobile number. The system matches it to the customer last parcel and routes the call to the team handling delivery issues. If the line had no ANI service, the agent would have started with "may I have your number?".',
      ],
    },
    {
      id: 'limits',
      h: 'Limits of ANI',
      p: [
        'ANI is not always available. It depends on the carriers that handle the call, and international calls or calls routed through several internet providers may arrive with a number that is not the true billing line. Calls through some mobile and VoIP services can also carry a shared or central number, so two different callers may show the same ANI.',
        'Because of this, use ANI as a helpful clue for routing and record lookup, not as a login. If a request is sensitive, such as a change of bank details or a refund to a new account, ask the caller for a second proof or call them back on the number already on file.',
        'For most small businesses, the practical step is to log the caller number on every call and review the repeat callers each week.',
      ],
    },
  ],
  faq: [
    { q: 'What does ANI stand for?', a: 'ANI stands for automatic number identification.' },
    { q: 'What is the difference between ANI and caller ID?', a: 'ANI is the number supplied by the network for billing and routing. Caller ID is the number displayed to the receiver, which the caller can usually change or hide.' },
    { q: 'Can ANI be blocked?', a: 'A caller can block caller ID, but the carrier still knows the line. Whether you receive it depends on your service.' },
    { q: 'Is ANI the same as CLI?', a: 'No. CLI is another name for caller ID. ANI is the billing-side number from the network.' },
    { q: 'Can ANI be spoofed?', a: 'It is generally harder to fake than caller ID, but not impossible, especially across internet phone networks. Do not use it as the only proof of identity.' },
  ],
  related: ['caller-id', 'sip', 'did', 'call-routing', 'toll-free-number'],
  product: 'phone-system',
};

export default term;
