export type Locale = 'ne' | 'en';

export const t = {
  ne: {
    pricing: 'मूल्य',
    contact: 'सम्पर्क',
    privacy: 'गोपनीयता',
    langSwitchLabel: 'English',
    langSwitchLang: 'en',
    cta: 'सूचीमा नाम लेखाउनुहोस्',
    ctaLaunched: 'निःशुल्क सुरु गर्नुहोस्',
    menu: 'मेनु',
    copyright: '© 2026 AirFone',
  },
  en: {
    pricing: 'Pricing',
    contact: 'Contact',
    privacy: 'Privacy',
    langSwitchLabel: 'नेपाली',
    langSwitchLang: 'ne',
    cta: 'Join the waitlist',
    ctaLaunched: 'Try it free',
    menu: 'Menu',
    copyright: '© 2026 AirFone',
  },
} as const;

// Given a locale-relative path like "/pricing/" (no leading /en), return the
// full site path for a given locale ("ne" -> "/pricing/", "en" -> "/en/pricing/").
export function localePath(locale: Locale, relPath: string): string {
  if (locale === 'ne') return relPath;
  return relPath === '/' ? '/en/' : `/en${relPath}`;
}

// The other locale's path for the language switch, given this page's relPath.
export function otherLocalePath(locale: Locale, relPath: string): { locale: Locale; href: string } {
  const other: Locale = locale === 'ne' ? 'en' : 'ne';
  return { locale: other, href: localePath(other, relPath) };
}
