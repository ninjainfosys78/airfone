import { describe, expect, it } from 'vitest';
import {
  articleJsonLd,
  breadcrumbJsonLd,
  canonicalFor,
  localBusinessJsonLd,
  orgJsonLd,
  softwareJsonLd,
  titleFor,
} from '../src/lib/seo';

describe('canonicalFor', () => {
  it('keeps the root slash', () => expect(canonicalFor('/')).toBe('https://airfone.app/'));
  it('drops a trailing slash', () => expect(canonicalFor('/blog/')).toBe('https://airfone.app/blog'));
  it('lowercases and drops query and hash', () =>
    expect(canonicalFor('/Pricing?x=1#top')).toBe('https://airfone.app/pricing'));
  it('treats empty as root', () => expect(canonicalFor('')).toBe('https://airfone.app/'));
  it('drops .html from file-format builds', () =>
    expect(canonicalFor('/products/ai-call-agent.html')).toBe('https://airfone.app/products/ai-call-agent'));
  it('maps /index to root', () => expect(canonicalFor('/index.html')).toBe('https://airfone.app/'));
});

describe('titleFor', () => {
  it('brands a page title', () => expect(titleFor('Pricing')).toBe('Pricing · AirFone'));
  it('is just the brand with no page', () => expect(titleFor()).toBe('AirFone'));
  it('does not double the brand', () => expect(titleFor('AirFone')).toBe('AirFone'));
});

describe('JSON-LD', () => {
  it('organization has an absolute logo and contact', () => {
    const o = orgJsonLd();
    expect(o['@type']).toBe('Organization');
    expect(o.logo).toMatch(/^https:\/\/airfone\.app\//);
    expect(o.contactPoint.telephone).toMatch(/^\+977/);
  });
  it('software app never carries offers', () => {
    const s = softwareJsonLd({ slug: 'ai-call-agent', name: 'AI call agent (inbound)', short: 'x' });
    expect(s).not.toHaveProperty('offers');
    expect(s.url).toBe('https://airfone.app/products/ai-call-agent');
  });
  it('breadcrumbs start at home and are absolute', () => {
    const b = breadcrumbJsonLd([{ name: 'Products', path: '/products/x' }]);
    expect(b.itemListElement[0]).toMatchObject({ position: 1, name: 'Home', item: 'https://airfone.app/' });
    expect(b.itemListElement[1].item).toBe('https://airfone.app/products/x');
  });
  it('article author is the organization', () => {
    const a = articleJsonLd({ slug: 'p', title: 'T', description: 'D', date: new Date('2026-10-01'), image: '/og/blog/p.png' });
    expect(a.author['@type']).toBe('Organization');
    expect(a.datePublished).toBe('2026-10-01');
    expect(a.image).toBe('https://airfone.app/og/blog/p.png');
  });
  it('local business has the same phone as the organization', () => {
    expect(localBusinessJsonLd().telephone).toBe(orgJsonLd().contactPoint.telephone);
  });
});
