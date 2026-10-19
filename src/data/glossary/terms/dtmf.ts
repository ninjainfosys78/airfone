import type { Term } from '../types';

const term: Term = {
  slug: 'dtmf',
  term: 'DTMF',
  full: 'Dual-Tone Multi-Frequency',
  aka: ['Dual tone multi frequency', 'Touch tone', 'Touch-tone dialing', 'Keypad tones', 'DTMF tones'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is DTMF? Dual-tone multi-frequency tones explained',
  description: 'DTMF (dual-tone multi-frequency) is the set of tones your phone keypad sends when you press a key. Meaning, frequencies, how it works on VoIP and IVR use.',
  short: 'DTMF (dual-tone multi-frequency) is the signalling system where each phone keypad button sends a unique pair of tones, used to dial numbers and to make choices in phone menus.',
  body: [
    'When you press 2 to reach support, the phone sends a short sound that the system recognises as the digit 2. That sound is a DTMF tone. It is also called touch tone.',
    'DTMF is how callers talk to an [IVR](/glossary/ivr) or [auto attendant](/glossary/auto-attendant) by pressing keys, and how you enter a PIN or extension during a call.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'DTMF meaning in simple words',
      p: [
        'Each key plays two tones at once, one from a low group and one from a high group. The pair is unique to that key, so the receiving system can tell which key was pressed even over a noisy line. "Dual-tone" means two tones, and "multi-frequency" means there are several frequencies to choose from.',
      ],
    },
    {
      id: 'how',
      h: 'How does DTMF work? The frequency grid',
      p: [
        'The keypad is a grid of four rows and four columns. Each row has its own low frequency and each column its own high frequency. The row frequencies are 697, 770, 852 and 941 Hz, and the column frequencies are 1209, 1336, 1477 and 1633 Hz.',
        'Pressing 5 plays 770 Hz (its row) and 1336 Hz (its column) together. Pressing 2 plays 697 Hz and 1336 Hz. The fourth column (1633 Hz) belongs to the keys A, B, C and D, which most phone keypads do not have.',
      ],
    },
    {
      id: 'table',
      h: 'DTMF frequency table',
      p: ['This table shows which pair each key plays.'],
      list: [
        'Row 697 Hz: 1 (1209), 2 (1336), 3 (1477), A (1633).',
        'Row 770 Hz: 4 (1209), 5 (1336), 6 (1477), B (1633).',
        'Row 852 Hz: 7 (1209), 8 (1336), 9 (1477), C (1633).',
        'Row 941 Hz: star (1209), 0 (1336), hash (1477), D (1633).',
      ],
    },
    {
      id: 'voip',
      h: 'DTMF on internet phone calls',
      p: [
        'On [VoIP](/glossary/voip) calls, audio is compressed by a [codec](/glossary/codec), and heavy compression can blur the tones. To avoid lost key presses, systems often send the key press as a separate event inside the media stream instead of as sound. This method is defined in RFC 4733, which replaced the older RFC 2833, and gives each key an event code: 0 to 9 for the digits, 10 for star, 11 for hash and 12 to 15 for A to D. Another method is a [SIP](/glossary/sip) INFO message.',
        'If menu keys sometimes do not register, a mismatch in the DTMF method between two systems is a common cause. Check that both sides use the same one.',
      ],
    },
    {
      id: 'uses',
      h: 'What DTMF is used for',
      p: ['You meet it in many places.'],
      list: [
        'Choosing options in an IVR menu.',
        'Dialling an extension after the main number answers.',
        'Entering a PIN or code on a conference call.',
        'Confirming a message, such as "press 1 to accept".',
      ],
    },
    {
      id: 'ai',
      h: 'DTMF vs speaking to an AI agent',
      p: [
        'A menu asks callers to press keys. An [AI call agent](/glossary/ai-call-agent) understands what the caller says, so there is no need to remember which key does what. Keys are still useful for private entries, such as a PIN, where the caller does not want to say the number aloud.',
      ],
    },
    {
      id: 'testing',
      h: 'How to test your DTMF menu',
      p: [
        'Call your own number from an ordinary mobile and press every option. Try pressing keys quickly, pressing during the greeting, and waiting without pressing anything. Repeat from a second network, since a key press that works on one carrier can fail on another when the tone is carried differently.',
        'If a key is missed, note which one and when. A pattern, such as the hash key failing, often points to the DTMF method or a codec setting rather than to the menu itself.',
      ],
    },
  ],
  faq: [
    { q: 'What does DTMF stand for?', a: 'DTMF stands for dual-tone multi-frequency.' },
    { q: 'What is a DTMF tone?', a: 'It is the pair of sounds a phone keypad button plays when pressed.' },
    { q: 'What frequencies does DTMF use?', a: 'Four low frequencies (697, 770, 852, 941 Hz) and four high ones (1209, 1336, 1477, 1633 Hz). Each key plays one of each.' },
    { q: 'Why do my IVR key presses not work on VoIP?', a: 'Often the two systems use different DTMF methods. Check that both use the same one, such as RFC 4733 events.' },
    { q: 'Is DTMF the same as touch tone?', a: 'Yes. Touch tone is the older commercial name for DTMF dialling.' },
  ],
  related: ['ivr', 'auto-attendant', 'sip', 'codec', 'voip'],
  product: 'ai-phone-system',
};

export default term;
