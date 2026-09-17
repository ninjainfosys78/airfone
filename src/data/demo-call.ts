export type DemoLine = {
  speaker: 'caller' | 'agent';
  start: number;
  ne: string;
  en: string;
};

export type DemoCall = {
  business: { ne: string; en: string };
  /** Recording length in seconds, shown before the audio loads. */
  duration: number;
  lines: DemoLine[];
};

// Real call recorded 2026-09-17 (audio: PUBLIC_DEMO_AUDIO_URL, CDN folder
// airfone/landing/demo/2026-09-17). Start times come from the Deepgram
// transcript. Consecutive segments from the same speaker are merged, and
// punctuation is added for reading; the words match the recording.
// Needs Pathibhara Solutions' written permission before going public.
export const demoCall: DemoCall = {
  business: { ne: 'पाथिभरा सोलुसन्स', en: 'Pathibhara Solutions' },
  duration: 79.75,
  lines: [
    {
      speaker: 'agent',
      start: 5.2,
      ne: 'पाथिभरा सोलुसनमा स्वागत छ। हामी आधुनिक आइटी सेवा दिन्छौं। के सहयोग गर्न सक्छु?',
      en: 'Welcome to Pathibhara Solutions. We provide modern IT services. How can I help?',
    },
    { speaker: 'caller', start: 13.64, ne: 'अफिस कहिले खुल्छ?', en: 'When is the office open?' },
    {
      speaker: 'agent',
      start: 16.5,
      ne: 'अफिस आइतबारदेखि शुक्रबार, बिहान १० बजेदेखि बेलुका छ बजेसम्म खुल्छ।',
      en: 'The office is open Sunday to Friday, from 10 in the morning to 6 in the evening.',
    },
    {
      speaker: 'caller',
      start: 23.64,
      ne: 'जीपीएस ट्र्याकिङ प्रणालीको मूल्य कति हो?',
      en: 'How much is the GPS tracking system?',
    },
    {
      speaker: 'agent',
      start: 27.95,
      ne: 'हाम्रो जीपीएस ट्र्याकिङ प्रणालीको मूल्य बाह्र हजार नौ सय उनान्सय रुपैयाँ छ।',
      en: 'Our GPS tracking system costs Rs 12,999.',
    },
    {
      speaker: 'caller',
      start: 35.22,
      ne: 'ओभर स्पिड साइरनले के गर्छ? अनि यसलाई कति पर्छ?',
      en: 'What does the overspeed siren do? And how much is it?',
    },
    {
      speaker: 'agent',
      start: 40.68,
      ne: 'ओभर स्पिड साइरनले गति बढी भएमा चेतावनी दिन्छ, र यसको मूल्य १९ हजार ५०० रुपैयाँ छ।',
      en: 'The overspeed siren warns you when the vehicle goes too fast, and it costs Rs 19,500.',
    },
    { speaker: 'caller', start: 48.5, ne: 'तपाईंहरूको अफिस कहाँ छ?', en: 'Where is your office?' },
    {
      speaker: 'agent',
      start: 51.26,
      ne: 'हाम्रो कार्यालय घोडाघोडी नगरपालिका-१०, कैलालीमा अवस्थित छ।',
      en: 'Our office is in Ghodaghodi Municipality-10, Kailali.',
    },
    {
      speaker: 'caller',
      start: 56.76,
      ne: 'तपाईंहरूले सामान डेलिभरी गर्दा खेरि कति दिन जतिमा डेलिभरी गर्नुहुन्छ?',
      en: 'When you deliver an order, how many days does it take?',
    },
    {
      speaker: 'agent',
      start: 63.76,
      ne: 'मलाई यसबारे विस्तृत जानकारी छैन। कृपया कार्यालयमा सम्पर्क गर्नुहोस्।',
      en: "I don't have detailed information about that. Please contact the office.",
    },
    { speaker: 'caller', start: 70.46, ne: 'ठिक छ, पुग्यो।', en: "Okay, that's all." },
    { speaker: 'agent', start: 73.14, ne: 'हुन्छ, जानकारीको लागि धन्यवाद।', en: 'All right, thank you.' },
  ],
};
