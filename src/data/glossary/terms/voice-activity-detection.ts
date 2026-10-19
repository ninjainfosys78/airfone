import type { Term } from '../types';

const term: Term = {
  slug: 'voice-activity-detection',
  term: 'VAD',
  full: 'Voice activity detection',
  aka: ['Voice activity detection', 'Speech detection', 'Endpointing', 'Turn detection'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is voice activity detection (VAD)? Meaning and use',
  description: 'Voice activity detection (VAD) tells speech apart from silence and noise in audio. How it works and why it matters for AI phone agents.',
  short: 'Voice activity detection, or VAD, is technology that decides which parts of an audio stream contain a person speaking and which are silence or background noise.',
  body: [
    'A phone call is a constant stream of audio, and most of it is not speech: pauses, breathing, traffic, a fan. An AI call agent must know when the caller has started talking, and when they have finished, so it knows when to listen and when to reply. VAD is the small, fast component that makes that call.',
    'It sits in front of [speech-to-text](/glossary/speech-to-text) and decides what audio is worth processing. It also underpins [barge-in](/glossary/barge-in), where the caller interrupts the AI.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'VAD meaning',
      p: [
        'VAD labels short slices of audio, often tens of milliseconds long, as speech or not speech. Simple versions look at loudness. Better ones use a trained model that recognises the pattern of human speech even in noise, so a passing motorbike is not mistaken for a word.',
      ],
    },
    {
      id: 'why',
      h: 'Why VAD matters for AI calls',
      p: [
        'It affects how natural a call feels:',
      ],
      list: [
        'End of turn: if the system waits too long after silence, replies feel slow. If it jumps in too early, it talks over callers who pause to think.',
        'Interruptions: when speech is detected while the AI is talking, the AI can stop and listen.',
        'Cost and accuracy: sending only speech to recognition saves processing and avoids transcribing noise.',
        'Silence handling: detecting a long silence lets the agent ask "are you still there?" or end the call.',
      ],
    },
    {
      id: 'hard',
      h: 'Why it is hard on phone lines',
      p: [
        'Callers pause mid-sentence, trail off, speak on a loud street or hold the phone away. People who think in Nepali and switch to English words may hesitate in the middle of a sentence. Compressed phone audio from a [codec](/glossary/codec) and gaps from lost packets add confusion. Tuning how long a silence counts as the end of a turn is a trade between speed and cutting callers off.',
      ],
    },
    {
      id: 'vs',
      h: 'VAD vs speech recognition',
      p: [
        'VAD only answers "is someone speaking now". It does not know what was said. Speech recognition does that part. Some newer systems also try to judge from the meaning of the words whether a sentence is finished, which helps with pauses.',
      ],
    },
    {
      id: 'example',
      h: 'What it looks like in a real call',
      p: [
        'A caller says: "Mero order... ek minute... yo number ho, nau nau..." and pauses while reading digits from a card. If the system treats a one-second pause as the end of the turn, it replies after "nau nau" and cuts the number off. If it waits three seconds every time, it feels dead on every ordinary question.',
        'This trade-off is the heart of VAD tuning. Voice agent products commonly default to a silence window of about half a second to a second. A short window cuts off slow speakers, and a long one slows every exchange.',
      ],
    },
    {
      id: 'semantic',
      h: 'Beyond silence: judging whether the thought is finished',
      p: [
        'To fix this, newer systems combine VAD with a second check that looks at the words. "My number is nine eight" is clearly unfinished, while "Thank you, that is all" is finished. Waiting longer after an incomplete sentence and answering sooner after a complete one cuts both interruptions and delay. This works better for speakers who pause mid-sentence, and it needs the [speech-to-text](/glossary/speech-to-text) to produce text quickly while the person is still talking.',
      ],
    },
    {
      id: 'uses2',
      h: 'Other jobs VAD does on a call',
      p: [
        'VAD is used for more than turn-taking.',
      ],
      list: [
        'Silence suppression: not sending audio during silence saves bandwidth on [VoIP](/glossary/voip) calls.',
        'Voicemail detection: telling a person from a recorded greeting on outbound calls, together with other signals.',
        'Cutting recordings and transcripts down to the parts where someone is speaking.',
        'Detecting a dead line: no speech from the caller for a long time.',
      ],
    },
    {
      id: 'noise',
      h: 'Noise, music and other voices',
      p: [
        'Simple energy-based detection treats any loud sound as speech. Model-based VAD is better at ignoring engines and fans, but it can still trigger on a television or another person talking in the background. In a shop or on a bus, this can make the AI respond to someone who is not the caller. Noise reduction ahead of VAD helps, as does a stricter threshold for speech.',
      ],
    },
    {
      id: 'airfone',
      h: 'On AirFone',
      p: [
        'Natural turn-taking is part of how the [AI call agent](/products/ai-call-agent) handles live Nepali and English calls, including callers who interrupt.',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of VAD?', a: 'VAD stands for voice activity detection.' },
    { q: 'What does VAD do?', a: 'It detects when someone is speaking in an audio stream, separating speech from silence and noise.' },
    { q: 'What is endpointing?', a: 'Endpointing is deciding that a speaker has finished their turn. It relies on VAD and sometimes on the meaning of the words.' },
    { q: 'Why does an AI sometimes cut me off?', a: 'It may have taken a pause as the end of your turn. The silence threshold is a trade-off between quick replies and interrupting people.' },
    { q: 'Is VAD the same as speech recognition?', a: 'No. VAD only says that someone is speaking. Speech recognition works out what they said.' },
    { q: 'Why does a voice agent wait so long before answering?', a: 'It may be waiting to be sure you have finished. A longer silence window avoids cutting people off but adds delay to every reply.' },
  ],
  related: ['barge-in', 'speech-to-text', 'text-to-speech', 'inference', 'codec'],
  product: 'ai-call-agent',
};

export default term;
