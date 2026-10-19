// Structured data. The generic builders (organisation, article, breadcrumb,
// FAQ, glossary) live in the kit; the product, service and plan markup is
// AirFone's own.
import { ADDRESS, OFFICE_MAP_URL, CONTACT_EMAIL, SITE_NAME, SITE_URL } from '../config/site';
import { ORG_ID, canonicalFor, orgJsonLd } from '@ninjainfosys/site-kit/lib/seo';

export * from '@ninjainfosys/site-kit/lib/seo';

/** No `offers`: the site carries no prices until the owner sends them. */
export function softwareJsonLd(p: { slug: string; name: string; short: string; seoTitle?: string; gets?: string[] }) {
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
    ...(p.seoTitle ? { alternateName: p.seoTitle } : {}),
    ...(p.gets?.length ? { featureList: p.gets } : {}),
    audience: { '@type': 'BusinessAudience', geographicArea: { '@type': 'Country', name: 'Nepal' } },
    provider: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

/** A solution page: the service AirFone provides to one kind of business. */
export function serviceJsonLd(s: { slug: string; name: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `AI call answering for ${s.name.toLowerCase()}`,
    serviceType: 'AI call answering and business phone system',
    description: s.description,
    url: canonicalFor(`/solutions/${s.slug}`),
    areaServed: { '@type': 'Country', name: 'Nepal' },
    audience: { '@type': 'BusinessAudience', name: s.name },
    availableLanguage: ['ne', 'en'],
    provider: { '@id': ORG_ID },
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
    address: { '@type': 'PostalAddress', streetAddress: ADDRESS.street, addressLocality: ADDRESS.locality, addressRegion: ADDRESS.region, postalCode: ADDRESS.postal, addressCountry: ADDRESS.country },
    geo: { '@type': 'GeoCoordinates', latitude: ADDRESS.lat, longitude: ADDRESS.lng },
    hasMap: OFFICE_MAP_URL,
    areaServed: { '@type': 'Country', name: 'Nepal' },
    knowsLanguage: ['ne', 'en'],
    parentOrganization: { '@id': ORG_ID },
  };
}

/** A product's published plans as offers (pricing page only). */
export function pricedProductJsonLd(p: { slug: string; name: string; short: string }, tiers: { name: string; price: number; mrp: number }[]) {
  const prices = tiers.map((t) => t.price);
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `AirFone ${p.name}`,
    description: p.short,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android',
    url: canonicalFor(`/products/${p.slug}`),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'NPR',
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: tiers.length,
      offers: tiers.map((t) => ({
        '@type': 'Offer',
        name: `${p.name} ${t.name}`,
        price: t.price,
        priceCurrency: 'NPR',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: t.price, priceCurrency: 'NPR', unitText: 'MONTH', referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' } },
        url: canonicalFor('/pricing'),
        availability: 'https://schema.org/InStock',
      })),
    },
    provider: { '@id': ORG_ID },
  };
}
