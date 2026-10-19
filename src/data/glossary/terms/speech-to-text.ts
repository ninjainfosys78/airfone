import type { Term } from '../types';

const term: Term = {
  slug: 'speech-to-text',
  term: 'Speech-to-text',
  full: 'Automatic speech recognition (ASR)',
  aka: ['STT', 'ASR', 'Automatic speech recognition', 'Speech recognition', 'Voice recognition'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is speech-to-text (ASR)? Meaning and how it works',
  description: 'Speech-to-text turns spoken words into written text. How ASR works, why phone audio and Nepali are harder, how accuracy is measured, and business uses.',
  short: 'Speech-to-text, also called automatic speech recognition (ASR), is technology that listens to spoken words and writes them as text. It is the first step when an AI listens to a phone call.',
  body: [
    'When a caller says "mero order kahile pugcha" to an AI call agent, software must first turn that sound into written words before anything can understand it. That step is speech-to-text. If it gets the words wrong, every later step works from the wrong input.',
    'The same technology produces live call transcripts, searchable recordings and automatic notes. It is one of three parts of a voice AI, alongside a [language model](/glossary/llm) that decides the reply and [text-to-speech](/glossary/text-to-speech) that speaks it.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Speech-to-text meaning and full form',
      p: [
        'Speech-to-text is often shortened to STT. The technical name is automatic speech recognition, or ASR. People also say "speech recognition" or "voice recognition", though voice recognition sometimes means identifying who is speaking, which is a different task.',
        'The output is plain text, often with timestamps, and in some systems with labels showing which speaker said what.',
      ],
    },
    {
      id: 'how-it-works',
      h: 'How does speech-to-text work?',
      p: [
        'The audio is cut into very short slices and turned into a numeric description of the sound. A trained model then maps those sounds to likely words, using knowledge of the language to choose between similar-sounding options. Modern systems use neural networks trained on many hours of recorded speech with matching text.',
        'For live calls, recognition must run as a stream. Words appear as the caller speaks, and the system must decide when they have finished. That decision is helped by [voice activity detection](/glossary/voice-activity-detection).',
      ],
    },
    {
      id: 'phone-audio',
      h: 'Why phone calls are harder',
      p: [
        'Phone audio is narrower and noisier than a studio recording. Calls are compressed with a [codec](/glossary/codec), and packets can be lost on a poor connection. Add street noise, a speakerphone, or two people talking at once and accuracy drops.',
        'Many speech models are trained on clean, wide-band audio. A model that scores well in a demo can still struggle on a real phone line, so test with real call recordings.',
      ],
    },
    {
      id: 'nepali',
      h: 'Speech-to-text for Nepali',
      p: [
        'Nepali is harder for recognition than English for practical reasons. There are far fewer hours of labelled Nepali speech to train on. The script is Devanagari, accents differ across regions, and people routinely mix English words into Nepali sentences, which is called code-mixing. Names of places, medicines and products add more trouble.',
        'Accuracy is usually reported as word error rate, the share of words wrong compared with a correct transcript. Lower is better, and the figure only means something when measured on audio like your own. Read more in [Nepali voice AI](/blog/nepali-voice-ai) and the [open-source voice model comparison](/blog/open-source-voice-models-phone-agents).',
      ],
    },
    {
      id: 'uses',
      h: 'What businesses use it for',
      p: [
        'Uses beyond AI agents include:',
      ],
      list: [
        'Live transcripts so a supervisor can read a call as it happens.',
        'Searchable [call recordings](/glossary/call-recording) and [voicemail](/glossary/voicemail) written out as text.',
        'Automatic [call summaries](/glossary/call-summarization) and notes.',
        'Spotting keywords or complaints across many calls.',
      ],
    },
    {
      id: 'wer',
      h: 'How accuracy is measured',
      p: [
        'Word error rate, or WER, compares the system’s text with a correct transcript made by a person. It counts words that were replaced, left out or added, and divides by the number of words in the correct transcript. A WER of 10 percent means about one word in ten is wrong. It says nothing about which words, and a system with a low WER can still get every phone number wrong.',
        'For a business, the errors that matter are names, numbers, prices and places. A useful test counts mistakes only on those, using recordings of your own callers. Ask a provider to run that test, not only to quote a general figure.',
      ],
    },
    {
      id: 'streaming',
      h: 'Live recognition vs recorded files',
      p: [
        'Recognition comes in two modes. In batch mode the system takes a finished recording and returns a transcript, usually with better accuracy because it can look at the whole conversation. In streaming mode it works while the caller is still speaking and updates its guess as more audio arrives. A phone agent needs streaming. Reports and archives can use batch.',
        'Streaming results change as they arrive. The first guess for a word may be corrected a moment later, so systems wait for a stable result before acting.',
      ],
    },
    {
      id: 'tips',
      h: 'Getting better results on your own calls',
      p: [
        'Some improvements are in the audio and the setup, not the model.',
      ],
      list: [
        'Keep the line quality good: a modern [codec](/glossary/codec) and a stable network reduce dropped sounds.',
        'Provide a list of your own words, such as product names, branch names and staff names, if the system allows custom vocabulary.',
        'Ask callers to confirm numbers by repeating them.',
        'Route poor-quality calls to a person when recognition confidence is low.',
        'Review a sample of transcripts weekly and note the repeated mistakes.',
      ],
    },
    {
      id: 'speakers',
      h: 'Who said what',
      p: [
        'On a call there are at least two speakers. Systems can label them either by separate audio channels, so the caller and the agent are recorded apart, or by diarization, which estimates speaker changes from one mixed recording. Separate channels are more reliable, which is one reason business phone systems that record each side separately give better transcripts.',
      ],
    },
    {
      id: 'airfone',
      h: 'Speech-to-text on AirFone',
      p: [
        'AirFone transcribes calls live, so supervisors can read, listen, guide or take over a call in progress. The [AI call agent](/products/ai-call-agent) uses speech recognition to understand callers in Nepali or English. Because AirFone is model-agnostic, the recognition model can change as better ones appear.',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of ASR?', a: 'ASR stands for automatic speech recognition. It is the technical name for speech-to-text.' },
    { q: 'What is the difference between speech-to-text and voice recognition?', a: 'Speech-to-text writes down what was said. Voice recognition, in the strict sense, identifies who is speaking. People often use the words loosely.' },
    { q: 'How accurate is speech-to-text?', a: 'It depends on the language, audio quality and accents. Clear English is usually much more accurate than noisy Nepali phone audio. Test on your own recordings.' },
    { q: 'What is word error rate?', a: 'It is the share of words a system gets wrong compared with a correct transcript, counting replaced, missed and extra words. Lower is better.' },
    { q: 'Can speech-to-text handle Nepali mixed with English?', a: 'Some models can, but code-mixing is a known weak point. Check performance on calls where speakers switch between the two.' },
    { q: 'Can speech-to-text recognise multiple languages in one call?', a: 'Some systems can handle a language switch, but accuracy often drops at the switch. Test with calls where people mix Nepali and English.' },
    { q: 'Is speech-to-text free?', a: 'Some tools offer limited free use. Business systems usually charge per audio minute or hour, and the price varies by provider and by whether you need live or batch recognition.' },
  ],
  related: ['text-to-speech', 'natural-language-processing', 'voice-activity-detection', 'call-recording', 'ai-call-agent'],
  product: 'ai-call-agent',
};

export default term;
