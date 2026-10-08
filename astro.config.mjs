import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static build. The eShasan route-bundle pipeline ingests `dist/` as a
// tarball and serves it from R2 behind nginx (see docs/nginx-redirects.conf).
// URLs have no trailing slash; nginx 301s the slash form (see
// scripts/redirects.mjs).

// Pages kept out of the sitemap: they carry noindex.
const NOINDEX = [/^\/404$/, /^\/pricing$/, /^\/orb-pick$/];

export default defineConfig({
  site: 'https://airfone.app',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  devToolbar: { enabled: false },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        return !NOINDEX.some((re) => re.test(path)) && !path.startsWith('/og/');
      },
    }),
  ],
  server: { host: '0.0.0.0', port: Number(process.env.ASTRO_DEV_PORT ?? 4321) },
  vite: {
    server: { allowedHosts: true },
  },
});
