// Build-time site configuration, read from import.meta.env.
// All PUBLIC_* vars are inlined by Vite at build time.

const asBool = (value: string | undefined, fallback: boolean): boolean => {
  if (value === undefined || value === '') return fallback;
  return value === 'true' || value === '1';
};

export const LAUNCHED = asBool(import.meta.env.PUBLIC_LAUNCHED, false);

// 'teaser': pre-launch page only ("Your AI Call Agent is on its way" + waitlist).
// 'full': the complete site. Set PUBLIC_SITE_MODE=full to switch.
export const SITE_MODE: 'teaser' | 'full' = import.meta.env.PUBLIC_SITE_MODE === 'full' ? 'full' : 'teaser';
export const TEASER = SITE_MODE === 'teaser';

export const APP_URL = import.meta.env.PUBLIC_APP_URL || 'https://app.airfone.app';

export const WAITLIST_API_URL =
  import.meta.env.PUBLIC_WAITLIST_API_URL || 'https://app.airfone.app/api/waitlist';

export const DEMO_AUDIO_URL =
  import.meta.env.PUBLIC_DEMO_AUDIO_URL ||
  'https://cdn.app.eshasan.com/airfone/landing/demo/2026-09-17/airfone-demo.mp3';

export const LAUNCH_DATE = '2026-09-28';

export const CONTACT_EMAIL = 'info@airfone.app';

export const CONTACT_PHONE = '+9779851343348';
export const CONTACT_PHONE_TEL = 'tel:+9779851343348';
export const CONTACT_PHONE_DISPLAY = { ne: '९८५१३४३३४८', en: '985-1343348' } as const;
export const CONTACT_PHONE_JSONLD = '+977-9851343348';

export const SITE_URL = 'https://airfone.app';
