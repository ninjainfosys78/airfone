import { ADDRESS, COMPANY, CONTACT_EMAIL, CONTACT_PHONE_JSONLD, LEGAL_ADDRESS, SITE_NAME, SITE_URL } from '../config/site';

/** The one URL a page is known by: lowercase, no query, no .html, no trailing slash except root. */
export function canonicalFor(path: string): string {
  let p = (path || '/').split(/[?#]/)[0].toLowerCase();
  p = p.replace(/\.html$/, '').replace(/\/index$/, '/');
  if (p !== '/') p = p.replace(/\/+$/, '');
  if (!p.startsWith('/')) p = `/${p}`;
  return p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`;
}

export const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`);

export function titleFor(page?: string): string {
  if (!page || page === SITE_NAME) return SITE_NAME;
  return `${page} · ${SITE_NAME}`;
}

const ORG_ID = `${SITE_URL}/#organization`;

export function orgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    legalName: COMPANY,
    url: `${SITE_URL}/`,
    logo: abs('/brand/airfone-mark.png'),
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_JSONLD,
    address: {
      '@type': 'PostalAddress',
      streetAddress: LEGAL_ADDRESS.street,
      addressLocality: LEGAL_ADDRESS.locality,
      addressRegion: LEGAL_ADDRESS.region,
      postalCode: LEGAL_ADDRESS.postal,
      addressCountry: LEGAL_ADDRESS.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: CONTACT_PHONE_JSONLD,
      email: CONTACT_EMAIL,
      areaServed: 'NP',
      availableLanguage: ['en', 'ne'],
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const all = [{ name: 'Home', path: '/' }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: canonicalFor(it.path),
    })),
  };
}

/** No `offers`: the site carries no prices until the owner sends them. */
export function softwareJsonLd(p: { slug: string; name: string; short: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `AirFone ${p.name}`,
    description: p.short,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android',
    url: canonicalFor(`/products/${p.slug}`),
    areaServed: { '@type': 'Country', name: 'Nepal' },
    inLanguage: ['ne', 'en'],
    publisher: { '@id': ORG_ID },
  };
}

const ymd = (d: Date) => d.toISOString().slice(0, 10);

export function articleJsonLd(post: {
  slug: string;
  title: string;
  description: string;
  date: Date;
  updated?: Date;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: ymd(post.date),
    dateModified: ymd(post.updated ?? post.date),
    image: abs(post.image),
    url: canonicalFor(`/blog/${post.slug}`),
    mainEntityOfPage: canonicalFor(`/blog/${post.slug}`),
    author: { '@type': 'Organization', '@id': ORG_ID, name: SITE_NAME },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

export function localBusinessJsonLd() {
  const o = orgJsonLd();
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/contact#business`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    image: o.logo,
    email: CONTACT_EMAIL,
    telephone: o.contactPoint.telephone,
    address: { '@type': 'PostalAddress', addressLocality: ADDRESS.locality, addressRegion: ADDRESS.region, addressCountry: ADDRESS.country },
    parentOrganization: { '@id': ORG_ID },
  };
}
