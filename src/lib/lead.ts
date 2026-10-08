// Demo and reseller leads, sent to the live waitlist endpoint
// (airfone/backend/crates/api/src/routes/waitlist.rs). That endpoint has no
// name or city field, so they travel in `source` (max 200 characters).

export interface LeadInput {
  name: string;
  phone: string;
  business: string;
  consent: boolean;
  type?: string;
  city?: string;
}

export type LeadErrors = Partial<Record<'name' | 'phone' | 'business' | 'consent', string>>;

const BUSINESS_TYPES = ['shop', 'online_store', 'clinic', 'school', 'restaurant', 'other'];

export const normalisePhone = (raw: string) => raw.replace(/[\s\-().]/g, '').replace(/^(\+?977)/, '');

/** Nepali mobile (97/98 + 8 digits) or landline (0 + area + number). */
export const validPhone = (raw: string) => /^(9[78]\d{8}|0\d{7,9})$/.test(normalisePhone(raw));

export function validateLead(f: LeadInput): LeadErrors {
  const e: LeadErrors = {};
  if (!f.name.trim()) e.name = 'Enter your name.';
  if (!f.phone.trim()) e.phone = 'Enter a phone number.';
  else if (!validPhone(f.phone)) e.phone = 'Enter a Nepali mobile or landline number, like 98XXXXXXXX.';
  if (f.business.trim().length > 120) e.business = 'Keep the business name under 120 characters.';
  if (!f.consent) e.consent = 'Tick the box so we can call you.';
  return e;
}

export function buildBody(f: LeadInput, kind: 'demo' | 'reseller', utm: Record<string, string> = {}) {
  const parts = [kind, `name: ${f.name.trim()}`];
  if (f.city?.trim()) parts.push(`city: ${f.city.trim()}`);
  return {
    phone: normalisePhone(f.phone),
    business_name: f.business.trim() || undefined,
    business_type: f.type && BUSINESS_TYPES.includes(f.type) ? f.type : f.type ? 'other' : undefined,
    locale: 'en',
    source: parts.join(' · ').slice(0, 200),
    consent: f.consent,
    ...utm,
  };
}

export type LeadResult =
  | { ok: true }
  | { ok: false; kind: 'rate_limited'; retryAfter: number }
  | { ok: false; kind: 'invalid'; errors: Record<string, string> }
  | { ok: false; kind: 'server' | 'network' };

export async function submitLead(url: string, body: object, fetchImpl: typeof fetch = fetch): Promise<LeadResult> {
  let res: Response;
  try {
    res = await fetchImpl(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  } catch {
    return { ok: false, kind: 'network' };
  }
  const data = await res.json().catch(() => ({}) as Record<string, unknown>);
  if (res.ok) return { ok: true };
  if (res.status === 429) return { ok: false, kind: 'rate_limited', retryAfter: Number(data.retry_after) || 60 };
  if (res.status === 422) return { ok: false, kind: 'invalid', errors: (data.errors as Record<string, string>) ?? {} };
  return { ok: false, kind: 'server' };
}
