// Build-time site configuration, read from import.meta.env.
// All PUBLIC_* vars are inlined by Vite at build time.

const asBool = (value: string | undefined, fallback: boolean): boolean => {
  if (value === undefined || value === '') return fallback;
  return value === 'true' || value === '1';
};

export const LAUNCHED = asBool(import.meta.env.PUBLIC_LAUNCHED, false);

export const APP_URL = import.meta.env.PUBLIC_APP_URL || 'https://app.airfone.app';

export const WAITLIST_API_URL =
  import.meta.env.PUBLIC_WAITLIST_API_URL || 'https://app.airfone.app/api/waitlist';

export const DEMO_AUDIO_URL = import.meta.env.PUBLIC_DEMO_AUDIO_URL || '';

export const DEMO_FIXTURE = asBool(import.meta.env.PUBLIC_DEMO_FIXTURE, false);

export const LAUNCH_DATE = '2026-09-28';

export const CONTACT_EMAIL = 'info@airfone.app';

export const SITE_URL = 'https://airfone.app';
