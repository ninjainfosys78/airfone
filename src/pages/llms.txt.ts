import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { products } from '../data/products';
import { solutions } from '../data/solutions';
import { published } from '../lib/blog';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, DEMO_NUMBER_DISPLAY, SITE_URL } from '../config/site';

// Generated from the same data as the pages, so it never drifts.
export async function GET(_: APIContext) {
  const posts = published(await getCollection('blog'));
  const out = [
    '# AirFone',
    '',
    '> AirFone answers business phone calls in Nepali with an AI agent that learns from the business\'s own price lists and notes, and hands callers to a person mid-call when needed. It also offers a business phone system (IP/PBX), outbound calling, and a voice agent and chatbot for websites.',
    '',
    `- Hear the agent: ${DEMO_NUMBER_DISPLAY}`,
    `- Contact: ${CONTACT_EMAIL}, ${CONTACT_PHONE_DISPLAY}`,
    '- Pricing: monthly plans sized to call volume; ask for a quote',
    '',
    '## Products',
    '',
    ...products.map((p) => `- [${p.name}](${SITE_URL}/products/${p.slug}): ${p.short}`),
    '',
    '## Solutions',
    '',
    ...solutions.map((s) => `- [${s.name}](${SITE_URL}/solutions/${s.slug}): ${s.short}`),
    '',
    '## Blog',
    '',
    ...(posts.length ? posts.map((p) => `- [${p.data.title}](${SITE_URL}/blog/${p.id}): ${p.data.description}`) : ['- No posts yet']),
    '',
    '## Company',
    '',
    `- [Book a demo](${SITE_URL}/demo)`,
    `- [Resellers](${SITE_URL}/resellers)`,
    `- [Contact](${SITE_URL}/contact)`,
    `- [Privacy](${SITE_URL}/privacy)`,
    `- [Terms](${SITE_URL}/terms)`,
    '',
  ];
  return new Response(out.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
