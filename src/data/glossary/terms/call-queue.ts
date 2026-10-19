import type { Term } from '../types';

const term: Term = {
  slug: 'call-queue',
  term: 'Call queue',
  aka: ['ACD queue', 'Hold queue', 'Phone queue'],
  updated: '2026-10-19',
  title: 'What is a call queue? Meaning, how it works and settings',
  description: 'A call queue holds callers in order when every line is busy and connects each to the next free person. How it works, key settings and queue vs ring group.',
  short: 'A call queue holds incoming callers in order when everyone is busy, plays them a message, and connects each one to the next free person.',
  body: [
    'Without a queue, a caller who rings when every line is busy hears an engaged tone and usually tries someone else. With a queue, they hear a short message and wait their turn, so busy hours stop turning into lost calls.',
    'Call queues are part of a business phone system, also called a [PBX](/glossary/pbx) or cloud phone system. They are the basic building block of any call centre or help desk, but a shop with two people answering the phone benefits from one just as much as a bank with two hundred.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Call queue meaning in simple words',
      p: [
        'Think of a call queue as the line at a bank counter, but for phone calls. Callers join the line in the order they rang. When a staff member finishes a call, the system gives them the caller who has waited longest. Nobody is skipped and nobody hears a busy tone.',
        'In call centre language you may also see "ACD queue" (automatic call distribution), "hold queue" or "waiting queue". They all mean the same thing: calls waiting for a person, handed out by rules instead of by whoever grabs the phone first.',
      ],
    },
    {
      id: 'how-it-works',
      h: 'How does a call queue work?',
      p: [
        'Every call queue follows the same steps, whatever phone system runs it.',
      ],
      list: [
        'A call arrives on your number, directly or after a menu choice such as "press 2 for support".',
        'If someone in the queue is free, the call goes to them straight away.',
        'If everyone is busy, the caller hears a greeting and then music or messages while they wait. Their place in line is kept.',
        'When a staff member becomes free, the system picks the next caller and rings that person.',
        'If the caller waits longer than the limit you set, the call moves to a backup: voicemail, another team or an AI call agent.',
      ],
    },
    {
      id: 'distribution',
      h: 'How calls are shared out: longest idle and round robin',
      p: [
        'The rule that decides which staff member gets the next call is called the distribution strategy. The two most useful ones are:',
      ],
      list: [
        'Longest idle: the call goes to whoever has been free the longest. This spreads the work fairly when some calls are long and others are short.',
        'Round robin: calls go to each member in turn, one after another. This is simple and easy to explain to staff.',
      ],
    },
    {
      id: 'settings',
      h: 'Call queue settings that matter',
      p: [
        'Most phone systems offer a long list of queue options. Only a few make a real difference to callers:',
      ],
      list: [
        'Members: who answers calls from this queue. One person can be in several queues, such as sales and support.',
        'Distribution strategy: longest idle or round robin, as above.',
        'Maximum wait time: how long a caller waits before the call moves on. Without it, a caller can wait forever.',
        'Overflow destination: where the call goes after the maximum wait, such as voicemail, another queue, a team or an AI call agent.',
        'Greeting and hold audio: what the caller hears. A short, honest greeting beats a long advert.',
        'Opening hours: outside them, callers go to an after-hours message or voicemail instead of joining a queue nobody is answering.',
      ],
    },
    {
      id: 'vs',
      h: 'Call queue vs ring group, IVR and voicemail',
      p: [
        'These four are often confused because they all decide what happens to an incoming call. They do different jobs and usually work together.',
      ],
      list: [
        'Ring group (also called a hunt group or team): rings several phones at once or one after another, straight away. If nobody answers, the call goes elsewhere. Callers are not held in line.',
        'Call queue: holds callers in order and hands each one to the next free person. Good for busy lines where several people call at the same time.',
        '[IVR](/glossary/ivr): a phone menu ("press 1 for sales") that decides which queue or team a caller should reach. It sorts calls but does not answer them.',
        'Voicemail: takes a message when nobody can answer. Often used as the overflow at the end of a queue.',
      ],
    },
    {
      id: 'metrics',
      h: 'Call queue terms and numbers',
      p: [
        'Once a queue is running, these are the words you will see on reports and wallboards:',
      ],
      list: [
        'Queue depth: how many callers are waiting right now.',
        'Average speed of answer (ASA): the average time a caller waits before someone picks up.',
        'Abandoned call: a caller who hung up while waiting. The abandonment rate is these calls as a share of all queued calls.',
        'Service level: the share of calls answered within a target time, such as 80% within 30 seconds.',
        'Longest wait: the longest time any caller is waiting right now. This tells you more than any average during a rush.',
      ],
    },
    {
      id: 'when',
      h: 'When does a business need a call queue?',
      p: [
        'You need a queue as soon as two people can call at the same time and fewer people can answer. Signs you already need one: callers say your line is always busy, staff pass calls around by shouting across the room, or missed call lists grow every morning.',
        'Shops, clinics, hotels, schools, banks, cooperatives and ISPs in Nepal all get rushes: salary days, festival seasons, results day, a network outage. A queue holds those callers instead of losing them. To shorten the wait itself, see [how to cut hold time and stop losing callers](/blog/reduce-call-hold-time).',
      ],
    },
    {
      id: 'airfone',
      h: 'Call queues on AirFone',
      p: [
        'On AirFone, a queue is set up from the app like any other destination for your number. You choose who answers, longest idle or round robin, the maximum wait and where calls go after it, including an [AI call agent](/glossary/ai-call-agent) that can answer in Nepali or English. Staff answer from their phone or a browser, so the queue works wherever they are.',
        'Your existing number can come with you over a [SIP line](/glossary/sip-trunk), so callers keep dialling the number they already know.',
      ],
    },
  ],
  faq: [
    { q: 'What is the difference between a call queue and call waiting?', a: 'Call waiting lets one person know a second call is coming in while they are on the phone. A call queue holds many callers in order and shares them across a team, so each caller reaches the next free person.' },
    { q: 'How long should callers wait in a call queue?', a: 'Most callers give up within one to three minutes. A common target is to answer most calls within 30 seconds and move any call that waits more than two or three minutes to voicemail, another team or an AI call agent.' },
    { q: 'Can a small business use a call queue?', a: 'Yes. A queue helps as soon as two callers can ring at once. With a cloud phone system, a shop with two staff can run a queue from their mobile phones without any office equipment.' },
    { q: 'What happens when a call queue is full or the wait is too long?', a: 'The call follows the overflow rule you set. It can go to voicemail, another queue, a different team or an AI call agent, so the caller is never left waiting forever.' },
    { q: 'Is a call queue the same as ACD?', a: 'Nearly. ACD (automatic call distribution) is the rule that hands calls to staff. A call queue is where callers wait while ACD finds a free person. Most people use the two terms together.' },
  ],
  related: ['pbx', 'ivr', 'ai-call-agent', 'did', 'sip-trunk'],
  product: 'phone-system',
};

export default term;
