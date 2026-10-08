// Build-time site configuration. PUBLIC_* vars are inlined by Vite.

export const SITE_URL = 'https://airfone.app';
export const SITE_NAME = 'AirFone';

export const APP_URL = import.meta.env.PUBLIC_APP_URL || 'https://app.airfone.app';
export const SIGNUP_URL = `${APP_URL}/register`;

// Leads (demo and reseller forms) go to the live waitlist endpoint with a
// `source` field (airfone/backend/crates/api/src/routes/waitlist.rs).
export const WAITLIST_API_URL =
  import.meta.env.PUBLIC_WAITLIST_API_URL || 'https://app.airfone.app/api/waitlist';

// The real recorded call (Pathibhara), used as "Real call" proof.
export const DEMO_AUDIO_URL =
  import.meta.env.PUBLIC_DEMO_AUDIO_URL ||
  'https://cdn.app.eshasan.com/airfone/landing/demo/2026-09-17/airfone-demo.mp3';

// The number visitors can ring to hear the agent themselves.
export const DEMO_NUMBER_DISPLAY = '970-269-7774';
export const DEMO_NUMBER_TEL = 'tel:+9779702697774';

export const CONTACT_EMAIL = 'info@airfone.app';
export const CONTACT_PHONE_DISPLAY = '985-1343348';
export const CONTACT_PHONE_TEL = 'tel:+9779851343348';
export const CONTACT_PHONE_JSONLD = '+977-9851343348';

// Name, address and phone must match the Google Business Profile exactly
// (ledger LO-2). Street address is an owner to-do.
export const COMPANY = 'Ninja Infosys Pvt. Ltd.';
export const ADDRESS = { locality: 'Kathmandu', region: 'Bagmati', country: 'NP', countryName: 'Nepal' } as const;
