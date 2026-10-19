import type { Term } from '../types';

const term: Term = {
  slug: 'call-transfer',
  term: 'Call transfer',
  aka: ['Warm transfer', 'Cold transfer', 'Blind transfer', 'Attended transfer', 'Transfer a call'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is call transfer? Warm vs cold transfer explained',
  description: 'Call transfer passes a live call from one person to another. Meaning, warm (attended) vs cold (blind) transfer, transfer vs forwarding and best practice.',
  short: 'Call transfer is moving a call you have already answered to another person, extension or team, so the caller reaches who they need without hanging up and redialling.',
  body: [
    'A caller reaches reception but needs accounts. Instead of giving a new number, the receptionist transfers the call. The caller stays connected and the second person picks up.',
    'Transfers are normal in any [PBX](/glossary/pbx) or cloud phone system. Done well, they save time. Done badly, they send callers round in circles, which hurts [first call resolution](/glossary/first-call-resolution).',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Call transfer meaning in simple words',
      p: [
        'Transfer means "pass this call on". The person who answered pushes the call to another extension, a team, or an outside number, and then drops out of the call.',
      ],
    },
    {
      id: 'warm-vs-cold',
      h: 'Warm transfer vs cold transfer vs blind transfer',
      p: [
        'There are two ways to do it, and the difference matters to the caller. "Cold" and "blind" mean the same thing. "Warm" is also called attended or consultative.',
      ],
      list: [
        'Cold (blind or unattended) transfer: you send the call without speaking to the next person. It is fast, but if they do not answer, the caller may end up in voicemail.',
        'Warm (attended or consultative) transfer: you first speak to the next person, tell them the caller and the reason, and only then connect the caller. If that person is not available, you can take the caller back.',
      ],
    },
    {
      id: 'how',
      h: 'How to transfer a call, step by step',
      p: ['The exact buttons differ by phone or app, but the steps are the same.'],
      list: [
        'Tell the caller you are going to transfer them, and why.',
        'Press transfer. The caller is put on hold.',
        'For a cold transfer, enter the destination and complete the transfer. You are disconnected and the destination rings.',
        'For a warm transfer, enter the destination, wait for them to answer, explain the case, then complete the transfer.',
        'If the person does not answer on a warm transfer, cancel and return to the caller.',
      ],
    },
    {
      id: 'which',
      h: 'When to use which',
      p: [
        'Use a cold transfer for simple cases where the right desk is always staffed, such as sending a billing question to the accounts line. Use a warm transfer when the case is complex, upsetting or high value, so the caller does not have to repeat the story. The trade-off is context against speed: a warm transfer takes more of the first person time.',
      ],
    },
    {
      id: 'vs',
      h: 'Call transfer vs call forwarding vs call park',
      p: [
        '[Call forwarding](/glossary/call-forwarding) is a rule that sends calls elsewhere before they are answered. Transfer is a manual act during a call. With [call park](/glossary/call-park), you leave the call in a slot for a colleague to pick up from any phone, which helps when you do not know where the person is.',
      ],
    },
    {
      id: 'tips',
      h: 'Call transfer best practice',
      p: ['A few habits make transfers painless.'],
      list: [
        'Tell the caller who you are transferring them to and why.',
        'Give the caller your own number or the extension in case the call drops.',
        'Keep the number of transfers per call to one if you can.',
        'Check the extension list is current, so nobody transfers to a person who left.',
        'Fix the [IVR](/glossary/ivr) if many callers need a transfer. It usually means the menu sends them to the wrong place.',
      ],
    },
    {
      id: 'airfone',
      h: 'Call transfer on AirFone',
      p: [
        'On AirFone, staff can transfer calls from the app or a browser. A supervisor watching a live call can also listen, guide, take over or transfer it. The AI call agent hands over to a person with a summary, so the staff member starts informed. See the [AI call agent](/products/ai-call-agent).',
      ],
    },
  ],
  faq: [
    { q: 'What is a warm transfer?', a: 'A warm transfer is when you speak to the next person first, explain the caller and the issue, and then connect the caller.' },
    { q: 'What is a cold transfer?', a: 'A cold or blind transfer sends the call without speaking to the receiving person first.' },
    { q: 'Is a blind transfer the same as a cold transfer?', a: 'Yes. Both mean passing the call on without briefing the next person.' },
    { q: 'Is call transfer the same as call forwarding?', a: 'No. Transfer is done by a person during an answered call. Forwarding is an automatic rule applied to calls before they are answered.' },
    { q: 'Can I transfer a call to a mobile number?', a: 'Most business phone systems can transfer to an outside number, including mobiles, though the extra leg is billed as a call.' },
  ],
  related: ['call-forwarding', 'call-park', 'ivr', 'first-call-resolution', 'call-routing'],
  product: 'phone-system',
};

export default term;
