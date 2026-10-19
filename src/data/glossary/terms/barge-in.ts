import type { Term } from '../types';

const term: Term = {
  slug: 'barge-in',
  term: 'Barge-in',
  aka: ['Interruption handling', 'Talk-over', 'Caller interruption'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is barge-in? Meaning for IVR and AI voice agents',
  description: 'Barge-in lets a caller interrupt a prompt or AI voice and be heard. Meaning, why it matters for natural calls, how it works, and common problems like echo.',
  short: 'Barge-in is the ability of a caller to interrupt a recorded menu or an AI voice while it is still speaking, and have the system stop and listen.',
  body: [
    'In a normal conversation people interrupt each other all the time: "yes, yes, I know, my order number is..." A phone system that insists on finishing a long sentence before it listens feels slow and rude. Barge-in lets the caller cut in.',
    'It matters in old [IVR](/glossary/ivr) menus, where it lets a caller press a key early, and much more in an [AI call agent](/glossary/ai-call-agent), where callers expect to talk like they would to a person.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Barge-in meaning',
      p: [
        'The word comes from "barging in" on someone. In telephony there are two forms. With keypad barge-in, pressing a [DTMF](/glossary/dtmf) key stops the prompt. With speech barge-in, the caller simply starts talking and the system detects it using [voice activity detection](/glossary/voice-activity-detection).',
        'Do not confuse it with supervisor barge, a call-centre feature where a manager joins a live call.',
      ],
    },
    {
      id: 'how',
      h: 'How barge-in works',
      p: [
        'While the system plays audio, it keeps listening on the caller’s side. When it detects speech, it stops or fades its own audio, discards the unplayed rest, and starts recognising what the caller said. For an AI voice, the unspoken part of the reply is dropped and the model is given what was actually said, so it does not assume the caller heard everything.',
      ],
    },
    {
      id: 'problems',
      h: 'Common problems',
      p: [
        'Barge-in has a few well-known weak points:',
      ],
      list: [
        'Echo: the AI voice leaks back into the caller’s microphone, especially on speakerphone, and the system hears itself and stops talking.',
        'Noise: a cough, a horn or someone else in the room triggers a false interruption.',
        'Short acknowledgements: a caller saying "hmm" or "ha" to show they are listening should not always stop the agent.',
        'Delay: if the AI keeps talking for a second after being interrupted, it feels unresponsive.',
      ],
    },
    {
      id: 'design',
      h: 'Design tips',
      p: [
        'Keep spoken answers short so there is less to interrupt. Put the key fact first. Test with real speakerphone calls, not just clean headsets. Delay in the voice pipeline from [inference](/glossary/inference) makes bad interruptions worse.',
      ],
    },
    {
      id: 'example',
      h: 'A call that goes wrong, and right',
      p: [
        'Without barge-in: the AI says, "Thank you for calling Himal Traders. Our opening hours are from nine in the morning until six in the evening on all days except Saturday, and you can also..." The caller says "Saturday?" three times and hears nothing, then hangs up.',
        'With barge-in: the caller says "Saturday?" after the third word of the list. The agent stops mid-sentence, hears "Saturday", and replies "Saturday is closed. We open again on Sunday at nine." The call took seconds, and the caller felt heard.',
      ],
    },
    {
      id: 'technical',
      h: 'What happens inside the system',
      p: [
        'Several parts must work together. The phone line carries the caller’s audio even while the AI speaks. [Voice activity detection](/glossary/voice-activity-detection) listens on that line. An echo canceller removes the AI’s own voice from what is heard, so it does not interrupt itself. When real speech is detected, the playback is cut within a fraction of a second and the audio of the caller is passed to [speech-to-text](/glossary/speech-to-text).',
        'Next the system has to decide what the interruption was. A real question changes the plan. A short "ha" or "hunchha" is an acknowledgement, so a good agent keeps talking or pauses briefly. Newer systems separate true interruptions from these small signals.',
      ],
    },
    {
      id: 'ivr',
      h: 'Barge-in in older IVR menus',
      p: [
        'In a keypad [IVR](/glossary/ivr), barge-in means pressing a digit before the menu has finished, which regular callers do to skip long lists. The system must stop playing the menu and collect the [DTMF](/glossary/dtmf) digit. Menus without barge-in force every caller to hear every option, which is a common source of complaints.',
      ],
    },
    {
      id: 'settings',
      h: 'Settings that change how it feels',
      p: [
        'Providers expose a few controls, and the right values depend on your callers.',
      ],
      list: [
        'How much speech counts as an interruption: a very short sound or a full word.',
        'Whether barge-in is allowed at all for a given message. Legal wording is often protected.',
        'How quickly the voice stops. Fading out over a fraction of a second sounds more natural than a hard cut.',
        'What the AI does next: resume, repeat the sentence or answer the new question.',
      ],
    },
    {
      id: 'airfone',
      h: 'On AirFone',
      p: [
        'The [AI call agent](/products/ai-call-agent) is built for live conversation in Nepali or English, where callers talk over the agent and expect it to stop and listen.',
      ],
    },
  ],
  faq: [
    { q: 'What is barge-in in a phone system?', a: 'It is when a caller interrupts a recorded or AI voice, and the system stops speaking and listens.' },
    { q: 'Is barge-in the same as call barge?', a: 'No. Call barge is a supervisor joining an active call. Barge-in is the caller interrupting the system’s speech.' },
    { q: 'Why does an AI voice sometimes stop talking by itself?', a: 'It may have mistaken noise or its own echo for the caller speaking. Speakerphone calls are especially prone to this.' },
    { q: 'Should every prompt allow barge-in?', a: 'Usually yes, but for legal notices or important instructions some systems disable it so the caller hears the whole message.' },
    { q: 'Does barge-in work on speakerphone?', a: 'It is harder, because the AI voice leaks into the microphone. Systems need echo cancellation, and you should test speakerphone calls specifically.' },
    { q: 'Can I stop callers interrupting an important message?', a: 'Yes. Most systems let you turn barge-in off for a message, such as a legal notice. Use it sparingly, because it frustrates callers.' },
  ],
  related: ['voice-activity-detection', 'ivr', 'dtmf', 'ai-call-agent', 'text-to-speech'],
  product: 'ai-call-agent',
};

export default term;
