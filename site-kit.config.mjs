// Settings for the `site-kit` commands (check, sitemap, indexnow, redirects).
// Single source for every redirect on airfone.app. Old URLs had trailing
// slashes and a Nepali root with English under /en/; the new site is
// English-only with no trailing slashes.
const SITE = 'https://airfone.app';
const APP = 'https://app.airfone.app';

const AUTH = ['login', 'register', 'forgot-password', 'reset-password', 'verify', 'verify-otp', 'verify-email-otp', 'verify-phone-otp', 'verify-password-reset-otp', 'verify-password-reset-phone'];

/** Old path (exact, as it was served) -> new target. */
const exact = (() => {
  const m = new Map();
  const both = (old, to) => {
    for (const prefix of ['', '/ne', '/en']) {
      const base = `${prefix}${old}`;
      m.set(base === '' ? '/' : base, to);
      if (base !== '' && !base.endsWith('/')) m.set(`${base}/`, to);
    }
  };
  // Locale roots.
  m.set('/ne', '/'); m.set('/ne/', '/');
  m.set('/en', '/'); m.set('/en/', '/');
  // Pages that still exist under the same name.
  for (const p of ['/pricing', '/contact', '/privacy', '/terms', '/delete-account']) both(p, p);
  // Retired pages.
  for (const p of ['/features', '/platform', '/services']) both(p, '/products/ai-call-agent');
  both('/about', '/contact');
  both('/upcoming', '/');
  both('/waitlist/thanks', '/thanks');
  both('/waitlist', '/demo');
  both('/preview', '/');
  // Sitemap names the old Astro integration wrote.
  m.set('/sitemap-index.xml', '/sitemap.xml');
  m.set('/sitemap-0.xml', '/sitemap.xml');
  for (const p of ['/preview/contact', '/preview/pricing']) both(p, p.replace('/preview', ''));
  // Auth lives in the app.
  for (const a of AUTH) both(`/${a}`, `${APP}/${a}`);
  // The current site's own pages are never redirected to themselves.
  for (const [k, v] of m) if (k === v) m.delete(k);
  return m;
})();

export default {
  site: SITE,
  // The post about chat apps being blocked may name the platforms.
  check: { platformNamesAllowed: ['blog/chat-app-blocked-business-phone-line.html'] },
  // Not pages, kept out of the sitemap.
  sitemap: { notPages: ['orb-pick'] },
  redirects: {
    exact,
    nginx: {
      share: [
        '',
        '# Share links keep their token.',
        `location ~ ^/(?:ne/|en/)?share/(.+)$ { return 301 ${APP}/share/$1; }`,
        '',
        '# Invite links: sign up in the app with the code (kept 30 days there).',
        `location ~ ^/r/([A-Za-z0-9]+)$ { return 302 ${APP}/signup?ref=$1; }`,
      ],
    },
    cloudflare: {
      tail: [
        `/share/* ${APP}/share/:splat 301`,
        `/en/share/* ${APP}/share/:splat 301`,
        `/ne/share/* ${APP}/share/:splat 301`,
        // Invite links: sign up in the app with the code (kept 30 days there).
        `/r/:code ${APP}/signup?ref=:code 302`,
        // `/en` and `/ne` were indexed by Google: every URL under them goes to the same page without the prefix.
        '/en/* /:splat 301',
        '/ne/* /:splat 301',
      ],
    },
  },
};
