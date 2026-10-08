import { describe, expect, it } from 'vitest';
import { products } from '../src/data/products';

const NAMES = ['AI Call Agent', 'AI Phone System', 'Cloud PBX', 'Website Voice Agent', 'Website Chatbot'];

describe('products', () => {
  it('are exactly the five agreed products', () => {
    expect(products.map((p) => p.name).sort()).toEqual([...NAMES].sort());
  });
  it('have unique slugs', () => {
    expect(new Set(products.map((p) => p.slug)).size).toBe(5);
    expect(products.map((p) => p.slug).sort()).toEqual(['ai-call-agent', 'ai-phone-system', 'phone-system', 'website-chatbot', 'website-voice-agent']);
  });
  it.each(products.map((p) => [p.slug, p] as const))('%s has a demo, 3+ FAQ and a sane description', (_, p) => {
    expect(p.demo.kind).toBeTruthy();
    if (p.demo.kind !== 'chat') expect(p.demo.clip).toBeTruthy();
    expect(p.faq.length).toBeGreaterThanOrEqual(3);
    expect(p.description.length).toBeGreaterThanOrEqual(70);
    expect(p.description.length).toBeLessThanOrEqual(160);
    expect(p.headline.split(/\s+/).length).toBeLessThanOrEqual(9);
  });
  it('never mention prices, social channels or slop', () => {
    const all = JSON.stringify(products);
    expect(all).not.toMatch(/\bRs\.?\s?\d|whatsapp|instagram|messenger|viber|social media|seamless|world-class|supercharge|—/i);
  });
});
