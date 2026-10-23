// What the site-kit package reads from this site beyond the constants in
// config/site.ts: header, footer, share cards, llms.txt and blog wording.
import type { SiteKit } from '@ninjainfosys/site-kit/contract';
import fontInter from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
import font500 from '@fontsource/poppins/files/poppins-latin-500-normal.woff2?url';
import font600 from '@fontsource/poppins/files/poppins-latin-600-normal.woff2?url';
import { products } from '../data/products';
import { solutions } from '../data/solutions';
import { footerColumns } from '../data/nav';
import { APP_URL, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, DEMO_NUMBER_DISPLAY, DEMO_NUMBER_TEL, SITE_URL } from './site';

export const kit: SiteKit = {
  blog: {
    label: 'Insights',
    name: 'AirFone blog',
    description: 'Guides for Nepali businesses on answering every call: AI call agents, business phone systems, website voice agents and chatbots.',
    rssDescription: 'Guides for Nepali businesses on answering every call.',
    pageDescription: (n, last) => `Older AirFone guides for Nepali businesses on calls, phone systems and website agents. Page ${n} of ${last}.`,
    tagDescription: (label) => `AirFone articles about ${label.toLowerCase()} for Nepali businesses: practical guides on answering calls, phone systems and website agents.`,
    about: 'Business phone calls in Nepal',
    imageCredit: 'AirFone',
  },
  seo: {
    hreflang: 'en-np',
    ogLocale: 'en_US',
    logo: '/brand/airfone-mark.png',
    contactPoint: { contactType: 'sales', areaServed: 'NP', availableLanguage: ['en', 'ne'] },
  },
  head: {
    preloadFonts: [fontInter, font500, font600],
    icons: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
    manifest: '/manifest.json',
  },
  header: {
    homeLabel: 'AirFone home',
    logo: { light: '/brand/airfone-lockup.svg', dark: '/brand/airfone-lockup-light.svg', alt: 'AirFone', width: 140, height: 29 },
    utility: {
      lead: { href: DEMO_NUMBER_TEL, text: 'Hear the agent: ', mono: DEMO_NUMBER_DISPLAY },
      links: [
        { href: '/resellers', label: 'Resellers' },
        { href: '/contact', label: 'Contact' },
        { href: `${APP_URL}/login`, label: 'Sign in' },
      ],
    },
    groups: [
      {
        id: 'products',
        label: 'Products',
        base: '/products',
        links: products.map((p) => ({ href: `/products/${p.slug}`, label: p.name })),
        feature: { title: 'Hear the agent on a real call', href: DEMO_NUMBER_TEL, cta: `Call ${DEMO_NUMBER_DISPLAY}` },
      },
      {
        id: 'solutions',
        label: 'Solutions',
        base: '/solutions',
        links: solutions.map((s) => ({ href: `/solutions/${s.slug}`, label: s.name })),
        feature: { title: 'Sell AirFone in your city', href: '/resellers', cta: 'Become a reseller' },
      },
    ],
    plain: [
      { href: '/blog', label: 'Insights' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/contact', label: 'Contact' },
    ],
    action: { href: `${APP_URL}/welcome`, label: 'Continue with Google', google: true },
    mobileLinks: [
      { href: '/resellers', label: 'Resellers' },
      { href: `${APP_URL}/login`, label: 'Sign in' },
    ],
    mobileCall: { href: DEMO_NUMBER_TEL, label: 'Call us' },
  },
  footer: {
    mark: { src: '/brand/airfone-mark.svg', width: 96, height: 59 },
    columns: footerColumns,
  },
  cta: {
    heading: 'Hear AirFone answer your calls',
    actions: [
      { href: '/demo', label: 'Book a demo', class: 'btn-lime' },
      { href: DEMO_NUMBER_TEL, label: `Call ${DEMO_NUMBER_DISPLAY}`, class: 'btn-secondary' },
    ],
  },
  og: {
    background: '#2F4F08',
    ink: '#FFFFFF',
    muted: '#C9D6B8',
    mark: { file: 'brand/cloud-outline.svg', from: 'fill="#000"', fill: 'fill="#8BC53E"', width: 96, height: 59 },
    pages: () => [
      { slug: 'index', title: 'Every call answered, in Nepali' },
      { slug: 'demo', title: 'Book a demo' },
      { slug: 'resellers', title: 'Sell AirFone in your city' },
      { slug: 'contact', title: 'Contact AirFone' },
      { slug: 'pricing', title: 'A monthly plan sized to your calls' },
      { slug: 'thanks', title: 'Thanks, we have your details' },
      { slug: 'blog', title: 'AirFone blog' },
      { slug: 'terms', title: 'Terms of service' },
      { slug: 'privacy', title: 'Privacy policy' },
      { slug: 'delete-account', title: 'Delete your account' },
      { slug: 'support', title: 'Help and support' },
      { slug: '404', title: 'Page not found' },
      { slug: 'orb-pick', title: 'Orb pick' },
      ...products.map((p) => ({ slug: `products/${p.slug}`, title: p.headline })),
      ...solutions.map((s) => ({ slug: `solutions/${s.slug}`, title: s.headline })),
    ],
  },
  glossary: {
    name: 'AirFone glossary of telecom and voice AI terms',
    ogTitle: 'Telecom and voice AI glossary',
    indexTitle: 'Glossary: SIP, PBX, IVR, VoIP and AI call agent terms explained',
    indexDescription: 'Plain definitions of the telecom and voice AI terms businesses meet when choosing a phone system: SIP, SIP trunk, PBX, IVR, DID, codec, RTP and VoIP.',
  },
  llms: {
    description: "AirFone answers business phone calls in Nepali with an AI agent that learns from the business's own price lists and notes, and hands callers to a person mid-call when needed. It also offers a business phone system (IP/PBX), outbound calling, and a voice agent and chatbot for websites.",
    facts: [
      `- Hear the agent: ${DEMO_NUMBER_DISPLAY}`,
      `- Contact: ${CONTACT_EMAIL}, ${CONTACT_PHONE_DISPLAY}`,
      '- Pricing: monthly plans sized to call volume; ask for a quote',
    ],
    before: () => [
      { title: 'Products', items: products.map((p) => `- [${p.name}](${SITE_URL}/products/${p.slug}): ${p.short}`) },
      { title: 'Solutions', items: solutions.map((s) => `- [${s.name}](${SITE_URL}/solutions/${s.slug}): ${s.short}`) },
    ],
    after: () => [
      {
        title: 'Company',
        items: [
          `- [Book a demo](${SITE_URL}/demo)`,
          `- [Resellers](${SITE_URL}/resellers)`,
          `- [Contact](${SITE_URL}/contact)`,
          `- [Privacy](${SITE_URL}/privacy)`,
          `- [Terms](${SITE_URL}/terms)`,
        ],
      },
    ],
  },
  dashain: { enabled: false, greetingUrl: 'https://cdn.airfone.app/samples/landing/dashain-greeting.mp3', ctaHref: `${APP_URL}/bulk-calls/new` },
};
