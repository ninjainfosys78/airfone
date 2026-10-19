---
title: Can an AI really speak Nepali on the phone?
description: How well a Nepali voice AI copes with real callers, from accents and English words mixed in to bad lines, and what still trips it up on a business phone line.
date: 2026-09-25
updated: 2026-10-19
tags: [ai-call-agent, voice-agent]
draft: false
cover: ../../assets/blog/nepali-voice-ai/hanuman-dhoka-kathmandu-square.jpg
coverAlt: Hanuman Dhoka royal palace complex in Kathmandu with its brick towers and pagoda roofs under a blue sky
takeaways:
  - "Real Nepali phone calls mix English nouns into Nepali grammar, which older systems could not follow."
  - "Current speech models are trained on everyday mixed speech and understand words like price, stock and delivery."
  - "Nepali voices now pause in natural places, though callers are still told it is an assistant."
  - "Bad lines, unusual names and regional dialects are the weak spots, and the agent only knows what the business gave it."
credits:
  - file: hanuman-dhoka-kathmandu-square.jpg
    title: "Hanumandhok general by Sunil Dongol"
    author: "User:Sunil Dongol"
    source: "https://commons.wikimedia.org/wiki/File:Hanumandhok_general_by_Sunil_Dongol.jpg"
    licence: CC BY-SA 3.0
    changes: "Resized and cropped"
  - file: kathmandu-women-using-laptops.jpg
    title: "Wiki Women edit-a-thon 2018 2"
    author: "Poonampahari"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Poonampahari"
    source: "https://commons.wikimedia.org/wiki/File:Wiki_Women_edit-a-thon_2018_2.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
  - file: studio-ribbon-microphone.jpg
    title: "ShinyBox 46MXC Ribbon Microphone, LowSwing studio, Berlin, 2011-01-25 22 29 45"
    author: "Marc Wathieu from Huy, Belgium"
    authorUrl: "https://www.flickr.com/people/88133570@N00"
    source: "https://commons.wikimedia.org/wiki/File:ShinyBox_46MXC_Ribbon_Microphone,_LowSwing_studio,_Berlin,_2011-01-25_22_29_45.jpg"
    licence: CC BY 2.0
    changes: "Resized and cropped"
---

It's the first thing almost everyone asks, usually with some doubt in their voice. They've used voice assistants that understood English fine and Nepali barely at all. Why would a phone agent be any different?

It's a fair question, and the honest answer is that it depends a lot on which Nepali you mean.

## How people actually talk on the phone

Nobody calls a shop and speaks textbook Nepali. A real caller says something like "laptop ko price kati ho, i5 wala, stock ma cha?" Half the nouns are English. The grammar is Nepali. The accent depends on whether they grew up in Kathmandu, Biratnagar or Butwal, and the line might be a weak mobile signal from a moving bus.

That mix is what a Nepali voice agent has to handle, and until recently it couldn't. Older systems were trained mostly on formal, read-aloud speech, so they did fine with news readers and badly with customers.

![Woman in Kathmandu typing on a laptop at a table in front of a stone wall](../../assets/blog/nepali-voice-ai/kathmandu-women-using-laptops.jpg "Written Nepali is often typed with English words mixed in, and spoken Nepali is no different. Photo: Poonampahari, CC BY-SA 4.0")

## What has changed

The speech models available now are trained on far more varied audio, including everyday mixed speech. In practice that means the agent understands "price", "stock", "delivery" and "EMI" dropped into a Nepali sentence, because that's how the training data talks too.

The voice that answers has improved just as much. Earlier Nepali text-to-speech sounded flat and robotic, with odd stress on every word. Current voices pause in natural places and sound like someone speaking, not reading. Callers still notice it's an assistant, and AirFone tells them so, but it doesn't grate.

![Studio condenser microphone in a shock mount in front of a perforated acoustic wall](../../assets/blog/nepali-voice-ai/studio-ribbon-microphone.jpg "Voices are recorded in a studio, but a phone line squeezes them into a narrow band, which is part of why natural pacing matters. Photo: Marc Wathieu, CC BY 2.0")

You can judge this yourself on the [AI call agent page](/products/ai-call-agent), which has a real recorded call with a Kathmandu business.

## What still trips it up

It isn't perfect, and it's better to know where it struggles.

Very bad lines are hard, for the agent and for people. When the audio breaks up, it asks the caller to repeat, the way a person would. Names and addresses are tricky too, especially unusual spellings, so for bookings it reads details back to confirm. And strong regional dialects, or languages other than Nepali and English, are less reliable. If many of your callers speak Maithili or Newari, tell us before you start so we can test with real calls.

The other limit is knowledge, not language. The agent only knows what your business has given it. When a question goes beyond that, it says so and hands the call to your team, which is what you'd want a new employee to do.

## What listening costs

Understanding speech is billed per minute of audio. OpenAI lists gpt-4o-transcribe at $0.006 per minute and gpt-4o-mini-transcribe at $0.003, according to [the OpenAI pricing summary](https://diyai.io/ai-tools/speech-to-text/openai-whisper-api-pricing-2026/) (checked October 2026). Google Cloud's [Speech-to-Text pricing page](https://cloud.google.com/speech-to-text/pricing) lists standard recognition from $0.016 per minute at low volume, falling with usage (checked October 2026). Prices say nothing about how well a model hears Nepali, so test on your own calls. For what AirFone charges, see [pricing](/pricing).

## Try it in your own words

Reading about speech only gets you so far. Ring 970-269-7774 and talk to it the way your customers would, mixed English and all. That's the real test.
