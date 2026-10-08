import { describe, expect, it, vi } from 'vitest';
import { buildBody, normalisePhone, submitLead, validateLead } from '../src/lib/lead';

describe('validateLead', () => {
  const ok = { name: 'Ram Sharma', phone: '9841234567', business: 'Sharma Traders', consent: true };
  it('accepts a Nepali mobile', () => expect(validateLead(ok)).toEqual({}));
  it('accepts +977 and spaces', () => expect(validateLead({ ...ok, phone: '+977 984-123 4567' })).toEqual({}));
  it('accepts a Kathmandu landline', () => expect(validateLead({ ...ok, phone: '01-4123456' })).toEqual({}));
  it('rejects 7 digits', () => expect(validateLead({ ...ok, phone: '1234567' }).phone).toBeTruthy());
  it('needs a name', () => expect(validateLead({ ...ok, name: '  ' }).name).toBeTruthy());
  it('needs consent', () => expect(validateLead({ ...ok, consent: false }).consent).toBeTruthy());
  it('limits business name to 120', () => expect(validateLead({ ...ok, business: 'x'.repeat(121) }).business).toBeTruthy());
});

describe('normalisePhone', () => {
  it('strips separators and country code', () => expect(normalisePhone('+977 984-123 4567')).toBe('9841234567'));
});

describe('buildBody', () => {
  it('maps to the waitlist fields with name in source', () => {
    const b = buildBody({ name: 'Ram', phone: '9841234567', business: 'Sharma', consent: true, type: 'bank', city: 'Pokhara' }, 'reseller', { utm_source: 'x' });
    expect(b).toMatchObject({ phone: '9841234567', business_name: 'Sharma', business_type: 'other', locale: 'en', consent: true, utm_source: 'x' });
    expect(b.source).toBe('reseller · name: Ram · city: Pokhara');
  });
  it('keeps allowed business types', () => {
    expect(buildBody({ name: 'A', phone: '9841234567', business: 'B', consent: true, type: 'clinic' }, 'demo').business_type).toBe('clinic');
  });
  it('caps source at 200 characters', () => {
    expect(buildBody({ name: 'n'.repeat(300), phone: '9841234567', business: 'B', consent: true }, 'demo').source.length).toBeLessThanOrEqual(200);
  });
});

describe('submitLead', () => {
  const body = buildBody({ name: 'A', phone: '9841234567', business: 'B', consent: true }, 'demo');
  const res = (status: number, json: unknown) => Promise.resolve(new Response(JSON.stringify(json), { status }));
  it('201 created is ok', async () => expect(await submitLead('u', body, () => res(201, { status: 'created' }))).toEqual({ ok: true }));
  it('already on the list is ok', async () => expect(await submitLead('u', body, () => res(200, { status: 'already_on_list' }))).toEqual({ ok: true }));
  it('rate limited carries retry_after', async () =>
    expect(await submitLead('u', body, () => res(429, { status: 'rate_limited', retry_after: 60 }))).toEqual({ ok: false, kind: 'rate_limited', retryAfter: 60 }));
  it('422 is invalid with field errors', async () =>
    expect(await submitLead('u', body, () => res(422, { status: 'invalid', errors: { phone: 'invalid_format' } }))).toEqual({ ok: false, kind: 'invalid', errors: { phone: 'invalid_format' } }));
  it('5xx is a server error', async () => expect(await submitLead('u', body, () => res(503, { status: 'error' }))).toEqual({ ok: false, kind: 'server' }));
  it('a thrown fetch is a network error', async () =>
    expect(await submitLead('u', body, vi.fn().mockRejectedValue(new TypeError('offline')))).toEqual({ ok: false, kind: 'network' }));
});
