---
title: "Open-source voice models for phone agents: what works, and what breaks on a Nepali line"
description: Ten open-source speech models compared for phone agents, with licences, languages and speed, and why a good benchmark score can still fail on a Nepali call.
date: 2026-10-08
tags: [voice-agent, guides]
faq:
  - q: Is there an open-source model that understands Nepali out of the box?
    a: Not reliably. The fastest English and European models, such as Parakeet and Canary-Qwen, do not list Nepali. Whisper and multilingual models like MMS and IndicWav2Vec can be fine-tuned on Nepali data, and published results show fine-tuning matters more than the base model.
  - q: Can I use these models in a paid product?
    a: Some yes, some no. Whisper is MIT, Kokoro is Apache 2.0 and Chatterbox is MIT. Models such as Parakeet and Moshi are CC-BY 4.0, which allows commercial use with attribution. Some popular text-to-speech models, including XTTS-v2 and F5-TTS, are reported as non-commercial. Always read the licence on the model page.
  - q: Why do models that score well fail on phone calls?
    a: Most leaderboards use clean, read speech. Phone calls are 8 kHz audio with background noise, people interrupting, and Nepali mixed with English words. Test on your own recordings.
  - q: Is a speech-to-speech model better than separate recognition, language model and voice?
    a: It can be faster to respond, but today's open ones are limited. Moshi answers in about 200 ms but is English only and cannot call tools, which an agent that books or looks things up needs.
---

Search for the best open-source voice model and you will find a dozen lists, all ranked by a number measured on a clean English recording. A phone call in Nepal is not a clean English recording. It is a compressed, noisy, interrupted conversation in Nepali with English words dropped in, and the model that wins the leaderboard is often not the one that survives it.

This guide covers ten open models people actually use to build voice agents: what each is good for, what its licence lets you do, which languages it supports, and where it stops. The facts come from each model's own page, checked in October 2026. Benchmark numbers belong to the authors who published them and will not match your calls.

## What a phone agent actually needs

A voice agent on a phone line has three jobs, and each has its own family of models.

**Hearing the caller.** Speech recognition turns the caller's audio into text. This is where Nepali is hardest, and where most of the quality is won or lost.

**Deciding what to say.** A language model reads the text, looks things up and writes the reply. This guide does not cover it, but it is the same job whichever voice models sit around it.

**Saying it back.** Text-to-speech turns the reply into a voice the caller hears, and the voice has to start quickly or the caller thinks the line has dropped.

A newer group of models does all three in one pass. This is called speech-to-speech. It can feel more natural, but today's open ones come with trade-offs that matter for a business line, covered below.

## Hearing the caller

**Whisper large-v3** is the multilingual default and covers more than 99 languages, which makes it the first thing most people try for Nepali. It is MIT licensed, so commercial use is straightforward. The cost is weight. It is a large model that processes audio in chunks rather than word by word, so it is awkward on a live call unless you give it a fast GPU and a streaming wrapper.

**Whisper large-v3-turbo** trims the decoder from 32 layers to 4, which makes it about four times faster for a small accuracy cost. It is the model most people reach for when they want Whisper quality on a live line. It does not translate, which does not matter for a phone agent.

**Distil-Whisper (distil-large-v3)** is a smaller model distilled from Whisper, about 6.3 times faster than large-v3 on its model card, and MIT licensed. The catch is a big one for this market. It is English only, so it is not a Nepali option.

**NVIDIA Parakeet TDT 0.6B v3** is fast and strong across 25 European languages, with a licence of CC-BY 4.0, which allows commercial use with attribution. Nepali and the other Indic languages are not on its list, so on a Nepali line it is not a fit as it stands. It is still worth knowing, because it often tops speed charts and people will suggest it.

**NVIDIA Canary-Qwen 2.5B** has one of the best English averages on the Open ASR leaderboard, 5.63% word error rate, and is also CC-BY 4.0. It is English only. Useful if you serve English-speaking callers, not for Nepali.

**IndicWav2Vec and MMS-1B** are the two to look at for Nepali. Both are multilingual models built to be fine-tuned on languages with less data, and in a 2026 comparison on Nepali they held their own against Whisper, covered below. Check the licence on each model page before building on them.

## Saying it back

**Kokoro (82M)** is tiny and fast, and Apache 2.0 licensed, so it is easy to ship in a product. It does not clone voices. Its model card does not state which languages it covers, so check its voice list for the language you need before relying on it.

**Chatterbox** is MIT licensed and can clone a voice from a short sample. Its multilingual version lists 23 languages, including Hindi. Nepali is not on that list, so for Nepali output you would be fine-tuning or choosing another route.

**Orpheus** produces expressive, natural-sounding speech and is built on a Llama base. Its model card lists Apache 2.0, but the Llama base may bring its own attribution terms, so read both before shipping. Its card tags English only.

Two older names come up constantly, **XTTS-v2** and **F5-TTS**. Both are widely reported as non-commercial, which makes them fine for experiments and unsuitable for a paid product. Read the licence on the model page yourself rather than trusting a summary, including this one.

## Doing it all in one model

**Moshi, from Kyutai,** listens and speaks at the same time and answers in about 200 ms, with a theoretical 160 ms. It can be interrupted and it can interrupt, which is closer to a real conversation than the usual wait-your-turn pattern. It is CC-BY 4.0.

It is also English only and cannot call tools. A business phone agent usually needs to check a booking, look up a rate or record an order, and a model that can only talk cannot do those things. That is the trade-off for speech-to-speech models today: more natural, less able to act.

## Licences, in plain words

A licence decides whether you can sell a product built on a model, so it is worth a minute.

**MIT and Apache 2.0** are permissive. You can use the model commercially and keep your own code private. This covers Whisper, Distil-Whisper, Kokoro and Chatterbox.

**CC-BY 4.0** allows commercial use as long as you credit the authors. This covers Parakeet, Canary-Qwen and Moshi.

**Community licences** such as the Llama one attach extra terms, often attribution or limits at very large scale. Read them.

**Non-commercial licences** forbid use in a product you charge for. XTTS-v2 and F5-TTS are reported as being in this group.

If a licence is unclear, treat it as restrictive until you have read it. A great model you cannot ship is not a great model for you.

## What the Nepali results actually show

A 2026 study by Paudel and Sayami fine-tuned six models on the same roughly 165-hour Nepali corpus and tested them on three sets: OpenSLR, FLEURS and Common Voice. Whisper-large-v3-turbo and IndicWav2Vec finished almost tied at the top, at about 14.8% word error. The much smaller IndicWav2Vec, with far less pretraining data, matched a model about nine times its size. CTC-style models ran up to 29 times faster than Whisper at the same accuracy. MMS-1B lost the least accuracy on out-of-domain audio, which suggests that massive multilingual training buys robustness rather than peak scores.

Earlier work on fine-tuning Whisper for Nepali found reductions in word error of 24 to 36% over the stock model, and a 2026 follow-up found that cleaning noisy subtitle-based training data improved results almost as much as changing the model.

Two lessons follow. The base model is only a starting point, and what decides how well a Nepali agent hears is the data it was tuned on. And speed counts as much as accuracy, because a model that is slightly more accurate but twice as slow will make the caller wait.

## Why a good score still fails on a call

Three things leaderboards rarely test, and all three are what a Nepali phone line is made of.

**Phone audio is narrowband.** A call is 8 kHz audio with codec compression, line noise and echo. Models trained on clean 16 kHz recordings lose accuracy straight away, and some lose a lot.

**People talk over each other.** A caller starts speaking while the agent is mid-sentence, or says "haan haan" to show they are listening. The system has to stop talking and listen without cutting the caller off or reacting to a cough or a horn outside.

**Nepali is rarely pure.** Callers mix English words for places, products and numbers into Nepali sentences, and say numbers in several ways, digit by digit, in full words or in English. A model scored on clean read Nepali tells you little about how it will cope with "mero booking number fifteen forty-two ho".

## How to choose

Do not choose from a list, including this one. Do this instead.

1. Record fifty real calls from your own line, with consent, across different times of day and a mix of speakers.
2. Write down what was actually said in each, by hand. This is your reference.
3. Run each candidate model on the same audio.
4. Count the errors that matter to you: names, phone numbers, dates, amounts. Ignore a missed "ho" or "ni".
5. Measure how long each takes to produce text, and to start speaking. Anything over a second or so feels like a dropped line.
6. Re-run it after any change, because a fix for one kind of caller can break another.

That is a week of work, and it will tell you more than any leaderboard.

## If you would rather skip that work

Building and tuning a phone voice stack is real engineering, and most businesses have a shop to run. If you would rather skip it, an [AI call agent](/products/ai-call-agent) built for Nepali lines is the shortcut, and [Can an AI really speak Nepali on the phone?](/blog/nepali-voice-ai) shows what real callers throw at one. The [AI call agent guide](/blog/ai-call-agent-guide) explains how it fits into a normal business phone line.
