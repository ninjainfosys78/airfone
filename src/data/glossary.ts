// Telecom and voice AI terms, one page each under /glossary. `short` is the
// one-or-two sentence definition that search engines and AI tools quote, so
// it must stand on its own. `body` explains it plainly for a business owner.
export interface Term {
  slug: string;
  term: string;
  /** Full name, when the term is an abbreviation. */
  full?: string;
  short: string;
  body: string[];
  related: string[];
  /** Product page this term leads to. */
  product?: string;
}

export const glossary: Term[] = [
  {
    slug: 'sip',
    term: 'SIP',
    full: 'Session Initiation Protocol',
    short: 'SIP is the standard way phone calls are set up and ended over the internet. It handles ringing, answering, transferring and hanging up, while the voice itself travels separately.',
    body: [
      'When you dial a number on an internet phone system, SIP is the conversation that happens before anyone says hello. One side asks to start a call, the other side rings, and when it is picked up SIP confirms the call so the audio can start flowing. When someone hangs up, SIP closes it again.',
      'SIP does not carry the voice. Once the call is set up, the sound travels as a separate stream, usually using RTP, encoded with a codec. That is why a call can connect fine but still sound choppy: the setup worked, the audio stream did not.',
      'For a business, SIP matters because it is what lets an existing phone number work with an online phone system. Your number connects through a SIP line, and from then on calls can reach an app, a browser or an AI call agent instead of one desk phone.',
    ],
    related: ['sip-trunk', 'rtp', 'voip', 'pbx'],
    product: 'phone-system',
  },
  {
    slug: 'sip-trunk',
    term: 'SIP trunk',
    short: 'A SIP trunk is a connection from a phone provider that carries a business\'s calls over the internet instead of physical phone lines. One trunk can carry many calls at once.',
    body: [
      'Traditional business lines were physical: one copper pair, one call at a time, so a business that needed five simultaneous calls needed five lines. A SIP trunk replaces those wires with an internet connection that carries as many calls as it is set up for.',
      'The trunk connects your phone numbers to your phone system. Calls to your number arrive through it, and outgoing calls leave through it. Because it is software, adding capacity or another number does not need a technician to run a new cable.',
      'When people say "connect your existing number through a SIP line", this is usually what they mean: your provider delivers your number as a SIP trunk to a system such as a cloud PBX.',
    ],
    related: ['sip', 'did', 'pbx', 'voip'],
    product: 'phone-system',
  },
  {
    slug: 'pbx',
    term: 'PBX',
    full: 'Private Branch Exchange',
    short: 'A PBX is a business phone system that gives an office its own extensions, transfers, call menus and queues, so many people can share a few outside lines.',
    body: [
      'A PBX is what turns a phone line into an office phone system. It decides which phone rings when someone calls, lets the receptionist transfer a caller to accounts, plays the "press one for sales" menu and holds callers in a queue when everyone is busy.',
      'Traditionally a PBX was a box in a cupboard, wired to desk phones. An IP PBX, often called a cloud PBX, does the same job in software. Staff answer from an app or a browser, and the menus, queues and opening hours are changed online instead of by a technician.',
      'Whether to keep an old box or move online depends on how your business works. We go through the signs in "Should you replace the PBX box in your office?"',
    ],
    related: ['ivr', 'sip-trunk', 'sip', 'call-queue'],
    product: 'phone-system',
  },
  {
    slug: 'ivr',
    term: 'IVR',
    full: 'Interactive Voice Response',
    short: 'IVR is an automated phone menu that lets callers choose options by pressing keys or speaking, such as "press one for sales", before they are routed to the right place.',
    body: [
      'An IVR answers a call with a recorded message and a list of choices. The caller presses a key or says a word, and the system sends them to a department, a queue or another recording.',
      'A short IVR works well when callers already know what they want and calls split cleanly, such as sales or support. Long menus with many levels are where callers get lost, wait, and often hang up.',
      'An AI call agent is a different approach: the caller simply says what they need in their own words and gets an answer or the right person, with no menu to work through. Many businesses use both, a short menu for clear choices and an agent behind it.',
    ],
    related: ['pbx', 'call-queue', 'ai-call-agent', 'did'],
    product: 'ai-call-agent',
  },
  {
    slug: 'did',
    term: 'DID',
    full: 'Direct Inward Dialing',
    short: 'A DID is a phone number that rings straight through to a particular person, team or system inside a business phone system, without going through a main reception line.',
    body: [
      'With only one main number, every call lands at reception and has to be transferred. DIDs give extra numbers that route directly: a number that goes straight to the support team, one for a branch, or one printed on a single advert.',
      'On an online phone system, a DID is just another number pointed at a destination you choose. That makes it easy to give a branch its own number while keeping it on the same system as head office, or to track how many calls a campaign brought in.',
    ],
    related: ['sip-trunk', 'pbx', 'ivr'],
    product: 'phone-system',
  },
  {
    slug: 'codec',
    term: 'Codec',
    short: 'A codec is the method used to compress voice into data for an internet call and decode it at the other end. The codec affects call quality and how much bandwidth a call uses.',
    body: [
      'Sound on an internet call is chopped into small pieces, compressed, sent across the network and rebuilt on the other side. The codec is the rulebook for that compression.',
      'Some codecs keep more detail and sound clearer but use more data. Others squeeze harder and cope better with weak connections. Opus is a modern codec that adapts to the connection, while G.711 is an older, widely supported one used across traditional phone networks.',
      'When a call sounds robotic or clipped, the cause is usually packet loss or a congested connection rather than the codec itself, but the codec decides how gracefully a call degrades when the network struggles.',
    ],
    related: ['rtp', 'voip', 'sip'],
  },
  {
    slug: 'rtp',
    term: 'RTP',
    full: 'Real-time Transport Protocol',
    short: 'RTP is the protocol that carries the actual voice of an internet call, in small timed packets, once SIP has set the call up.',
    body: [
      'If SIP is the part that rings and connects a call, RTP is the part that carries what people say. Voice is encoded by a codec, split into packets a few milliseconds long, and sent continuously in both directions.',
      'Because the packets are timed, the receiving side can put them back in order and smooth out small delays. When packets arrive late or not at all, you hear gaps, echoes or a robotic sound.',
    ],
    related: ['sip', 'codec', 'voip'],
  },
  {
    slug: 'voip',
    term: 'VoIP',
    full: 'Voice over Internet Protocol',
    short: 'VoIP means making phone calls over an internet connection instead of traditional phone lines. Business phone systems, SIP trunks and app-based calling all use VoIP.',
    body: [
      'VoIP is the umbrella term. Any call that travels as data over the internet, whether it starts on an app, a desk IP phone or an online phone system, is a VoIP call. SIP, RTP and codecs are the pieces that make it work.',
      'For businesses the main gain is flexibility. A number is no longer tied to a wire in one building, so calls can reach staff wherever they are, be recorded, queued and answered by an AI call agent.',
    ],
    related: ['sip', 'rtp', 'codec', 'sip-trunk'],
    product: 'phone-system',
  },
  {
    slug: 'call-queue',
    term: 'Call queue',
    short: 'A call queue holds incoming callers in order when everyone is busy, plays them a message, and connects each one to the next free person.',
    body: [
      'Without a queue, a caller who rings when every line is busy hears an engaged tone and usually tries someone else. With a queue, they hear a short message and wait their turn, so busy hours stop turning into lost calls.',
      'Queues can follow rules: send callers to a particular team, play a different message after hours, or let an AI call agent answer the simple questions so fewer people need to wait at all.',
    ],
    related: ['pbx', 'ivr', 'ai-call-agent'],
    product: 'phone-system',
  },
  {
    slug: 'ai-call-agent',
    term: 'AI call agent',
    short: 'An AI call agent is software that answers phone calls in natural speech, answers callers from a business\'s own information, and hands the call to a person when needed.',
    body: [
      'An AI call agent picks up a business\'s phone line, listens to what the caller says, and replies out loud. It works from what the business gives it, such as price lists, schedules and notes, rather than from guesswork.',
      'Unlike an IVR menu, the caller does not press keys. They speak as they would to a receptionist, in Nepali or English. When a question needs a person, such as a complaint or a question about someone\'s account, the agent transfers the call with a short summary.',
      'Our AI call agent guide explains how it works on a real business line, and where a person should still answer.',
    ],
    related: ['ivr', 'call-queue', 'voip'],
    product: 'ai-call-agent',
  },
];

export const termBySlug = (slug: string) => glossary.find((t) => t.slug === slug);
