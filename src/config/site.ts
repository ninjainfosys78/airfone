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

// AirFone is run by its US company (legal address below) and has an office in
// Kathmandu (ADDRESS), which is what the site shows for local search.
export const COMPANY = 'Ninja Infosys LLC';
// Registered address of the company that runs AirFone.
export const LEGAL_ADDRESS = { street: '1500 N Grant St, Ste R', locality: 'Denver', region: 'CO', postal: '80203', country: 'US' } as const;
export const LEGAL_ADDRESS_LINE = `${LEGAL_ADDRESS.street}, ${LEGAL_ADDRESS.locality}, ${LEGAL_ADDRESS.region} ${LEGAL_ADDRESS.postal}, ${LEGAL_ADDRESS.country}`;
/** The Kathmandu office: shown on the site and used for local search. Must match
 *  the Google Business Profile exactly. */
export const ADDRESS = { street: 'Bulbule Marga, Anamnagar', locality: 'Kathmandu', region: 'Bagmati', country: 'NP', countryName: 'Nepal', lat: 27.6932429, lng: 85.3301396 } as const;
/** Short office line for the footer and contact page: "Denver, CO 80203, US". */
export const OFFICE_LINE = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.countryName}`;
/** The office's Google Maps place (listed as Ninja Infosys Pvt. Ltd.). */
export const OFFICE_MAP_URL = 'https://www.google.com/maps/place/Ninja+Infosys+Pvt.+Ltd./@27.6932429,85.3301396,17z/data=!4m6!3m5!1s0xa8783ce7a30f3c2f:0xfb91b2dfbc0c1f56!8m2!3d27.6932429!4d85.3301396';

/** AirFone's official profiles. Sent as `sameAs` so search engines link them to the site. */
export const SOCIAL_PROFILES = [
  'https://www.facebook.com/airfoneapp',
  'https://www.instagram.com/airfoneapp',
  'https://www.tiktok.com/@airfone8',
  'https://www.linkedin.com/company/airfone',
] as const;
