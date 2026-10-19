import type { Term } from '../types';

const term: Term = {
  slug: 'call-recording',
  term: 'Call recording',
  aka: ['Phone call recording', 'Business call recording', 'Voice logging', 'Call recorder', 'Call logging'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is call recording? Meaning, uses and how it works',
  description: 'Call recording saves the audio of phone calls for training, disputes and quality checks. Meaning, how it works, uses, consent and recording vs transcription.',
  short: 'Call recording is saving the audio of a phone call so it can be played back later, for training, quality checks, settling disputes or keeping a record.',
  body: [
    'Businesses record calls to check what was said. A customer says they were quoted one price, the staff member says another, and the recording settles it. Recordings also help train new staff by letting them hear real calls.',
    'Recording raises privacy questions, so tell callers and decide who may listen. The practical side is covered in [recording business calls in Nepal](/blog/call-recording-consent-nepal). This page explains the term and the options.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Call recording meaning in simple words',
      p: [
        'Call recording means the phone system captures the voices on a call and saves them as an audio file, usually with the date, time and the numbers involved. You can search the list later and play a call back.',
      ],
    },
    {
      id: 'how',
      h: 'How does call recording work?',
      p: [
        'On a cloud phone system, the recording is made by the system itself, because the call audio passes through it. Calls travel as [RTP](/glossary/rtp) streams over the internet, and the system copies both sides into one file. No device is needed on the desk.',
        'Recording can be set to run on every call, on chosen numbers or teams, or started and stopped by staff during a call. Many teams pause it while a caller reads out payment details or health information.',
      ],
    },
    {
      id: 'uses',
      h: 'What businesses use call recording for',
      p: ['The common reasons are practical.'],
      list: [
        'Training: new staff learn from good and bad calls.',
        'Quality checks: a manager samples calls against a checklist.',
        'Disputes: proof of what was agreed on price, delivery or complaint.',
        'Missed details: replay an order that was noted wrongly.',
        'Compliance: some regulated businesses must keep a record of calls.',
      ],
    },
    {
      id: 'consent',
      h: 'Do you need to tell callers? Is call recording legal?',
      p: [
        'Good practice is to tell callers at the start of a call, for example in the greeting, that calls may be recorded. Rules differ by country and by type of business, and some places require the consent of one party and others of everyone on the call. Check the law that applies to you. For Nepal, see the [recording and consent guide](/blog/call-recording-consent-nepal).',
      ],
    },
    {
      id: 'vs',
      h: 'Call recording vs call transcription',
      p: [
        'A recording is audio. A transcript is the words written out, made by [speech to text](/glossary/speech-to-text). A transcript can be searched and skimmed in seconds, while audio takes real time to hear. Some teams keep both, others keep only transcripts to hold less sensitive data.',
        'A transcript can also feed AI tools such as [call summarization](/glossary/call-summarization) and [sentiment analysis](/glossary/sentiment-analysis), which flag calls where the caller sounded unhappy so a manager listens to those first instead of sampling at random.',
      ],
    },
    {
      id: 'keep',
      h: 'How long to keep recordings',
      p: [
        'Keep recordings only as long as you have a reason. Decide a period, such as a few months for quality checks, delete after that, and limit who can listen. A recording is personal data. The less of it you hold, the less there is to lose.',
      ],
    },
    {
      id: 'size',
      h: 'How much storage do recordings take?',
      p: [
        'It depends on the audio [codec](/glossary/codec) and quality. As a rough guide, compressed phone-quality audio takes a few hundred kilobytes per minute, so a team recording 100 hours a month needs a few gigabytes. Check the actual file size on a sample before planning storage.',
      ],
    },
    {
      id: 'mistakes',
      h: 'Common call recording mistakes',
      p: [
        'The first mistake is recording everything and keeping it forever. That creates a store of personal data that nobody reviews, and a larger problem if it leaks. Decide in advance what you record, who may listen and when it is deleted.',
        'The second is recording without telling the caller. Even where the law is flexible, a short notice in the greeting avoids complaints and builds trust.',
        'The third is never listening. Recordings only help if a manager samples a few calls every week against a checklist and shares what they learn with the team.',
      ],
    },
  ],
  faq: [
    { q: 'What is call recording?', a: 'It is saving the audio of phone calls so you can listen to them later.' },
    { q: 'Is call recording legal?', a: 'It depends on the country and the situation. Telling callers is good practice everywhere. Check the rules that apply to your business.' },
    { q: 'What is the difference between call recording and transcription?', a: 'A recording is the audio. A transcript is the written text of the call, which is easier to search.' },
    { q: 'Can I record only some calls?', a: 'Yes. Most business systems allow recording by number or team, or starting and stopping during a call.' },
    { q: 'How long should I keep call recordings?', a: 'Only as long as you have a reason, such as a few months for quality checks. Then delete them.' },
  ],
  related: ['speech-to-text', 'call-summarization', 'voicemail', 'rtp', 'pbx'],
  product: 'phone-system',
};

export default term;
