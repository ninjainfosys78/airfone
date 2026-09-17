import type { DemoCall } from './demo-call';

// Design-review only. A written script for a planned recording with
// Pathibhara Solutions, not a real call. Used only when
// PUBLIC_DEMO_FIXTURE=true; the production build fails if that flag is set
// (see scripts/make-bundle.mjs and DemoCall.astro).
export const demoCallFixture: DemoCall = {
  business: { ne: 'पाथिभरा सोलुसन्स', en: 'Pathibhara Solutions' },
  lines: [
    {
      speaker: 'caller',
      start: 0,
      ne: 'नमस्ते, तपाईंको पसल कति बजेदेखि कति बजेसम्म खुल्छ?',
      en: 'Hello, what time is your shop open from and until?',
    },
    {
      speaker: 'agent',
      start: 4,
      ne: 'नमस्ते, पाथिभरा सोलुसन्समा स्वागत छ। हामी आइतबारदेखि शुक्रबारसम्म बिहान १० बजेदेखि साँझ ६ बजेसम्म खुला हुन्छौं। शनिबार बन्द हुन्छ।',
      en: "Hello, welcome to Pathibhara Solutions. We're open Sunday to Friday, from 10am to 6pm. We're closed on Saturday.",
    },
    {
      speaker: 'caller',
      start: 12,
      ne: 'ठीक छ। GPS ट्र्याकिङ सिस्टमको मूल्य कति हो?',
      en: 'Okay. What is the price of the GPS tracking system?',
    },
    {
      speaker: 'agent',
      start: 17,
      ne: 'GPS ट्र्याकिङ सिस्टमको मूल्य रु. १२,९९९ हो।',
      en: 'The GPS tracking system costs rupees 12,999.',
    },
    {
      speaker: 'caller',
      start: 23,
      ne: 'अनि ओभरस्पीड साइरनले के गर्छ, र त्यसको मूल्य कति पर्छ?',
      en: 'And what does the overspeed siren do, and how much does it cost?',
    },
    {
      speaker: 'agent',
      start: 28,
      ne: 'ओभरस्पीड साइरनले गाडीले तोकिएको गति नाघेपछि सतर्क गराउँछ, ताकि ड्राइभरले तुरुन्तै थाहा पाओस्। यसको मूल्य रु. १९,५०० हो।',
      en: 'The overspeed siren alerts you when the vehicle goes over the speed limit, so the driver knows right away. It costs rupees 19,500.',
    },
    {
      speaker: 'caller',
      start: 38,
      ne: 'तपाईंको अफिस कहाँ पर्छ?',
      en: 'Where is your office located?',
    },
    {
      speaker: 'agent',
      start: 41,
      ne: 'हाम्रो अफिस घोडाघोडी नगरपालिका-१०, कैलालीमा छ।',
      en: 'Our office is in Ghodaghodi Municipality-10, Kailali.',
    },
    {
      speaker: 'caller',
      start: 47,
      ne: 'सामान अर्डर गरेपछि डेलिभरी हुन कति दिन लाग्छ?',
      en: 'After I order, how many days does delivery take?',
    },
    {
      speaker: 'agent',
      start: 51,
      ne: 'माफ गर्नुहोला, डेलिभरीमा कति दिन लाग्छ भन्ने जानकारी मसँग छैन।',
      en: "I'm sorry, I don't have that information.",
    },
    {
      speaker: 'caller',
      start: 60,
      ne: 'ठीक छ, धन्यवाद, पुग्यो।',
      en: "Okay, thank you, that's enough.",
    },
    {
      speaker: 'agent',
      start: 63,
      ne: 'धन्यवाद, फोन गर्नुभएकोमा। शुभदिन।',
      en: 'Thank you for calling. Have a good day.',
    },
  ],
};
