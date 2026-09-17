export type DemoLine = {
  speaker: 'caller' | 'agent';
  start: number;
  /** When the last word ends (seconds). */
  end: number;
  /** Start time of each space-separated word in `ne` (seconds). */
  words: number[];
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
// Pathibhara Solutions approved using their name, prices and this call.
export const demoCall: DemoCall = {
  business: { ne: 'पाथिभरा सोलुसन्स', en: 'Pathibhara Solutions' },
  duration: 79.75,
  lines: [
    {
      speaker: 'agent',
      start: 5.2, end: 12.96, words: [5.2, 5.84, 6.56, 6.88, 7.36, 7.68, 8.24, 8.56, 8.96, 9.44, 9.76, 10.08, 10.48],
      ne: 'पाथिभरा सोलुसनमा स्वागत छ। हामी आधुनिक आइटी सेवा दिन्छौं। के सहयोग गर्न सक्छु?',
      en: 'Welcome to Pathibhara Solutions. We provide modern IT services. How can I help?',
    },
    { speaker: 'caller', start: 13.64, end: 15.24, words: [13.64, 14.12, 14.61], ne: 'अफिस कहिले खुल्छ?', en: 'When is the office open?' },
    {
      speaker: 'agent',
      start: 16.5, end: 22.1, words: [16.5, 16.82, 17.77, 18.41, 18.89, 19.14, 19.77, 20.26, 20.49, 21.05],
      ne: 'अफिस आइतबारदेखि शुक्रबार, बिहान १० बजेदेखि बेलुका छ बजेसम्म खुल्छ।',
      en: 'The office is open Sunday to Friday, from 10 in the morning to 6 in the evening.',
    },
    {
      speaker: 'caller',
      start: 23.64, end: 31.4, words: [23.64, 24.45, 24.84, 25.64, 26.04, 26.45],
      ne: 'जीपीएस ट्र्याकिङ प्रणालीको मूल्य कति हो?',
      en: 'How much is the GPS tracking system?',
    },
    {
      speaker: 'agent',
      start: 27.95, end: 37.87, words: [27.95, 28.51, 28.99, 29.39, 30.11, 30.67, 30.99, 31.31, 31.63, 31.79, 32.19, 32.67],
      ne: 'हाम्रो जीपीएस ट्र्याकिङ प्रणालीको मूल्य बाह्र हजार नौ सय उनान्सय रुपैयाँ छ।',
      en: 'Our GPS tracking system costs Rs 12,999.',
    },
    {
      speaker: 'caller',
      start: 35.22, end: 38.5, words: [35.22, 35.54, 35.78, 36.34, 36.58, 36.82, 37.14, 37.38, 37.62],
      ne: 'ओभर स्पिड साइरनले के गर्छ? अनि यसलाई कति पर्छ?',
      en: 'What does the overspeed siren do? And how much is it?',
    },
    {
      speaker: 'agent',
      start: 40.68, end: 49.0, words: [40.68, 41.09, 41.32, 42.05, 42.36, 42.6, 43.09, 43.56, 44.12, 44.36, 44.68, 45.0, 45.48, 45.8, 46.28, 46.68],
      ne: 'ओभर स्पिड साइरनले गति बढी भएमा चेतावनी दिन्छ, र यसको मूल्य १९ हजार ५०० रुपैयाँ छ।',
      en: 'The overspeed siren warns you when the vehicle goes too fast, and it costs Rs 19,500.',
    },
    { speaker: 'caller', start: 48.5, end: 50.98, words: [48.5, 49.06, 49.38, 49.7], ne: 'तपाईंहरूको अफिस कहाँ छ?', en: 'Where is your office?' },
    {
      speaker: 'agent',
      start: 51.26, end: 61.66, words: [51.26, 51.58, 52.22, 52.78, 53.42, 53.9, 54.62, 55.1],
      ne: 'हाम्रो कार्यालय घोडाघोडी नगरपालिका १०, कैलालीमा अवस्थित छ।',
      en: 'Our office is in Ghodaghodi Municipality-10, Kailali.',
    },
    {
      speaker: 'caller',
      start: 56.76, end: 61.0, words: [56.76, 57.24, 57.64, 58.2, 58.52, 58.76, 59.0, 59.16, 59.56, 59.96],
      ne: 'तपाईंहरूले सामान डेलिभरी गर्दा खेरि कति दिन जतिमा डेलिभरी गर्नुहुन्छ?',
      en: 'When you deliver an order, how many days does it take?',
    },
    {
      speaker: 'agent',
      start: 63.76, end: 69.28, words: [63.76, 64.08, 64.64, 65.03, 65.59, 66.08, 66.72, 67.44, 67.92],
      ne: 'मलाई यसबारे विस्तृत जानकारी छैन। कृपया कार्यालयमा सम्पर्क गर्नुहोस्।',
      en: "I don't have detailed information about that. Please contact the office.",
    },
    { speaker: 'caller', start: 70.46, end: 71.5, words: [70.46, 70.78, 71.02], ne: 'ठिक छ, पुग्यो।', en: "Okay, that's all." },
    { speaker: 'agent', start: 73.14, end: 76.26, words: [73.14, 73.54, 74.34, 74.5], ne: 'हुन्छ, जानकारीको लागि धन्यवाद।', en: 'All right, thank you.' },
  ],
};
