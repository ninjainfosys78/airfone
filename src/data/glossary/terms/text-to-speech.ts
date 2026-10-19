import type { Term } from '../types';

const term: Term = {
  slug: 'text-to-speech',
  term: 'Text-to-speech',
  aka: ['TTS', 'Speech synthesis', 'Voice synthesis', 'AI voice'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is text-to-speech (TTS)? Meaning and how AI voices work',
  description: 'Text-to-speech (TTS) turns written text into spoken audio. How synthetic voices work, what makes them sound natural, Nepali voices and call use.',
  short: 'Text-to-speech, or TTS, is technology that turns written text into spoken audio. It is the voice of an AI call agent, reading out the answer the system has written.',
  body: [
    'After an AI call agent works out what to say, the answer is still just text. Text-to-speech turns it into sound so the caller can hear it. The quality of this voice decides whether callers trust the call or hang up on a robot.',
    'TTS is also used for announcements, appointment reminders and bulk notification calls. It is the opposite of [speech-to-text](/glossary/speech-to-text), which turns sound into writing.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Text-to-speech meaning',
      p: [
        'TTS is also called speech synthesis, and the audio it makes is a synthetic or AI voice. Old systems joined recorded sound fragments and sounded flat and choppy. Modern neural voices generate the audio directly and can reproduce natural rhythm, pauses and emphasis.',
      ],
    },
    {
      id: 'how-it-works',
      h: 'How does TTS work?',
      p: [
        'The system first reads the text and decides how it should be spoken: how to say numbers, dates and abbreviations, where sentences break and which words to stress. A neural model then produces the sound wave, which is sent to the caller over the phone line.',
        'Speed matters on a call. Good systems stream audio, starting to speak the first words while the rest is still being produced. This keeps [inference](/glossary/inference) delay low.',
      ],
    },
    {
      id: 'natural',
      h: 'What makes a voice sound natural',
      p: [
        'Listeners judge a voice on several things:',
      ],
      list: [
        'Pronunciation of names, numbers, amounts and places.',
        'Rhythm and pauses that match how people actually talk.',
        'A tone that fits the business, calm for a clinic and brisk for a delivery line.',
        'Consistency, so the voice does not change mid-call.',
        'Clarity after phone compression by the [codec](/glossary/codec).',
      ],
    },
    {
      id: 'nepali',
      h: 'Nepali voices',
      p: [
        'Good Nepali synthetic voices are harder to make than English ones, because there is less recorded, well-labelled speech to learn from. Common failure points are number and currency reading, English words inside Nepali sentences, and regional accent. The accent an AI voice uses is a real choice: a voice that sounds like a Kathmandu speaker may feel odd to a caller from elsewhere.',
        'Always listen to samples of real sentences from your business, with your product names and prices, before choosing a voice. See [Nepali voice AI](/blog/nepali-voice-ai) for what to listen for.',
      ],
    },
    {
      id: 'uses',
      h: 'Where businesses use TTS',
      p: [
        'Typical uses are an [AI call agent](/glossary/ai-call-agent) answering calls, a [website voice agent](/glossary/conversational-ai), reminders for appointments and payments, and bulk calls that read the same message to many people. Because the text can change at any time, you do not need to re-record anything when a price or date changes, unlike a recorded [auto attendant](/glossary/auto-attendant) greeting.',
      ],
    },
    {
      id: 'choice',
      h: 'Choosing a voice for your business',
      p: [
        'The voice is part of your brand. A bank wants calm and clear. A delivery firm may want quick and friendly. Choose by listening to your own sentences, not the provider’s demo script. Include a price in rupees, a phone number, a date, a street name and a sentence with an English word in it. Play them on a phone speaker, because that is how most callers will hear them.',
      ],
      list: [
        'Check that numbers are read the way a Nepali speaker would say them.',
        'Check that English words inside Nepali sentences are not mangled.',
        'Check the pace. Phone callers need slower, clearer speech than a video narrator.',
        'Check how the voice sounds after phone compression.',
        'Ask whether the voice stays the same over time, since providers update models.',
      ],
    },
    {
      id: 'cloning',
      h: 'Voice cloning and consent',
      p: [
        'Some providers can copy a real person’s voice from a short recording. This can be useful, for example for a business owner’s own greeting, but only with that person’s clear permission. Never clone someone’s voice without consent, and avoid voices that imitate public figures. Tell callers when they are speaking to an AI, and do not let the voice pretend to be a named human.',
      ],
    },
    {
      id: 'control',
      h: 'Controlling how it speaks',
      p: [
        'Most systems let you adjust speed, pitch and pauses. Many also accept markup that tells the voice how to say a word, such as spelling out an abbreviation or reading digits one at a time. For phone numbers and order numbers, reading in groups with small pauses is much easier to follow than a long run of digits. Customising the pronunciation of your business name and of local place names is worth the effort.',
        'Delay matters too. The voice should begin as soon as the first sentence is ready, not after the whole answer is written. This depends on [inference](/glossary/inference) speed and on streaming audio to the caller.',
      ],
    },
    {
      id: 'cost',
      h: 'What it costs',
      p: [
        'Voice generation is usually priced by the number of characters or by audio time. Short answers cost little, but a long call with many replies adds up. Premium voices cost more than basic ones. Pre-recording fixed phrases, such as a standard greeting, is cheaper than generating them each time, and keeps the greeting identical on every call.',
      ],
    },
    {
      id: 'airfone',
      h: 'Text-to-speech on AirFone',
      p: [
        'The [AI call agent](/products/ai-call-agent) speaks answers in Nepali or English, and smart bulk calls use a voice to ask questions and save the answers into forms. The voice model is not tied to one AI vendor.',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of TTS?', a: 'TTS stands for text-to-speech. It converts written text into spoken audio.' },
    { q: 'Is text-to-speech the same as an AI voice?', a: 'An AI voice is the output of a text-to-speech system. The words are the same idea described from two sides: the technology and the sound it produces.' },
    { q: 'Can text-to-speech sound like a real person?', a: 'Modern neural voices can sound very natural, but listeners can often still tell, especially on long or emotional sentences. Honest businesses do not pretend a call agent is a human.' },
    { q: 'Does TTS work in Nepali?', a: 'Yes, but quality differs between providers. Test numbers, prices and mixed Nepali and English sentences before choosing.' },
    { q: 'What is the difference between TTS and a recorded greeting?', a: 'A recorded greeting is fixed audio. TTS speaks any text on demand, so it can say changing information such as a balance or appointment time.' },
    { q: 'Can text-to-speech read Nepali numbers and rupee amounts?', a: 'The better voices can, but number reading is a common weak point. Test amounts, dates and phone numbers specifically.' },
    { q: 'Do callers mind talking to an AI voice?', a: 'Many accept it if the answer is quick and correct and they can reach a person when needed. Being honest that it is an AI helps trust.' },
  ],
  related: ['speech-to-text', 'ai-call-agent', 'conversational-ai', 'barge-in', 'auto-attendant'],
  product: 'ai-call-agent',
};

export default term;
