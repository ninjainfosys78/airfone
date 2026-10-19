import type { Term } from '../types';

const term: Term = {
  slug: 'ccaas',
  term: 'CCaaS',
  full: 'Contact center as a service',
  aka: ['Contact center as a service', 'Cloud contact center', 'Cloud call center', 'Call center as a service'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is CCaaS? Contact center as a service explained',
  description: 'CCaaS (contact center as a service) is cloud software for running a contact centre. Meaning, features, and CCaaS vs UCaaS vs PBX.',
  short: 'CCaaS, or contact center as a service, is cloud software a business rents to run a customer contact operation, including call queues, routing, agent screens and reports, without its own equipment.',
  body: [
    'In the past, a call centre meant servers in a back room, phone hardware and a technician. CCaaS moves that into the cloud. Agents log in from a browser or app, and the provider runs the systems and charges by user or by usage.',
    'It covers voice calls and, in many products, chat, email and messaging, so one agent screen handles all customer conversations.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'CCaaS meaning and full form',
      p: [
        'CCaaS stands for contact center as a service, pronounced "see-cass". "Contact" rather than "call" signals that it covers more than phone calls. It is a type of software as a service (SaaS) built for customer-facing teams.',
      ],
    },
    {
      id: 'features',
      h: 'Core features',
      p: [
        'Most CCaaS platforms include:',
      ],
      list: [
        'Inbound and outbound calling over the internet, using [VoIP](/glossary/voip).',
        '[Call queues](/glossary/call-queue) with [ACD](/glossary/acd) and [call routing](/glossary/call-routing) by skill, language or time.',
        'An [IVR](/glossary/ivr) or AI front door.',
        'Agent desktop, supervisor tools and live monitoring.',
        '[Call recording](/glossary/call-recording), reports and metrics such as [service level](/glossary/service-level).',
        'Connections to CRM and helpdesk tools.',
        'AI features such as [agent assist](/glossary/agent-assist) and [call summarization](/glossary/call-summarization).',
      ],
    },
    {
      id: 'vs',
      h: 'CCaaS vs UCaaS vs PBX',
      p: [
        'A [PBX](/glossary/pbx) is a business phone system that connects staff phones and outside lines. UCaaS (unified communications as a service) is a cloud PBX plus team messaging and video meetings for internal staff. CCaaS is for the customer-facing side: queues, agent performance, supervision and reporting. Many businesses start with a cloud phone system and add contact-centre features when volume grows.',
      ],
    },
    {
      id: 'choose',
      h: 'What to check when choosing',
      p: [
        'Ask about these before signing:',
      ],
      list: [
        'Local numbers and call quality on Nepali networks, including how existing numbers connect over a [SIP trunk](/glossary/sip-trunk).',
        'Language support for any AI features, tested on your callers.',
        'Pricing basis: per user, per minute, or both.',
        'Where recordings are stored and for how long.',
        'Ease of change: can you add staff or queues yourself?',
      ],
    },
    {
      id: 'history',
      h: 'Why the move to the cloud',
      p: [
        'Traditional call centres needed a room of equipment, phone lines and engineers, and growing meant buying more of all three. Cloud systems turn this into a monthly service. Adding a team for a festival rush or a campaign means adding users and switching them off later. Staff can answer from home or a second office, since all they need is a browser or app and a headset. This is why newer and smaller operations in Nepal start with cloud tools.',
      ],
    },
    {
      id: 'ai',
      h: 'Where AI fits into CCaaS',
      p: [
        'Modern CCaaS platforms add AI at several points. An [AI call agent](/glossary/ai-call-agent) can answer first. [Agent assist](/glossary/agent-assist) helps staff during calls. [Sentiment analysis](/glossary/sentiment-analysis) and [call summarization](/glossary/call-summarization) work after or during calls. Ask any provider which of these are real features today and which are plans, and test them on your own calls.',
      ],
    },
    {
      id: 'metrics',
      h: 'What a CCaaS report should tell you',
      p: [
        'Reports should answer plain questions without a specialist. How many calls came in, and when? How many were answered, and how fast? How many callers gave up? Which queue or team is overloaded? Which topics drive the most calls? Numbers such as [average speed of answer](/glossary/average-speed-of-answer) and [call abandonment rate](/glossary/call-abandonment-rate) show the experience, and [first-call resolution](/glossary/first-call-resolution) shows whether problems are really solved.',
      ],
    },
    {
      id: 'security',
      h: 'Security and records',
      p: [
        'Cloud systems hold call recordings, caller numbers and notes. Ask where they are stored, who can open them, how access is logged and how long they are kept. For recorded calls, see [call recording consent in Nepal](/blog/call-recording-consent-nepal). Also ask how you can export your data if you leave, so that you are not locked in.',
      ],
    },
    {
      id: 'airfone',
      h: 'Contact centre features on AirFone',
      p: [
        'AirFone offers call queues with overflow to an [AI call agent](/products/ai-call-agent), live transcription, and supervisor listen, guide, take over and transfer. Smart bulk calls ask questions and save answers into forms. See the [phone system](/products/phone-system) and [AI phone system](/products/ai-phone-system). Read more in [call center software in Nepal](/blog/call-center-software-nepal).',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of CCaaS?', a: 'CCaaS stands for contact center as a service.' },
    { q: 'What is the difference between CCaaS and UCaaS?', a: 'UCaaS is for internal communication such as calls, messages and meetings. CCaaS is for handling customer contacts with queues, routing and supervision.' },
    { q: 'Is CCaaS the same as a cloud PBX?', a: 'No. A cloud PBX handles business phone calls. CCaaS adds contact-centre tools such as agent management and reporting.' },
    { q: 'Do I need CCaaS for a small team?', a: 'Often not at first. A cloud phone system with a call queue may be enough until volume and reporting needs grow.' },
  ],
  related: ['ai-call-center', 'pbx', 'call-queue', 'acd', 'voip'],
  product: 'phone-system',
};

export default term;
