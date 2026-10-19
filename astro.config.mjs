import { defineConfig } from 'astro/config';
import siteKit from '@ninjainfosys/site-kit/integration';

// Static build. The eShasan route-bundle pipeline ingests `dist/` as a
// tarball and serves it from R2 behind nginx (see docs/nginx-redirects.conf).
// URLs have no trailing slash; nginx 301s the slash form (see
// site-kit.config.mjs).

// The sitemap is written after the build from dist/ (site-kit sitemap).

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
  integrations: [siteKit()],
  server: { host: '0.0.0.0', port: Number(process.env.ASTRO_DEV_PORT ?? 4321) },
  vite: {
    server: { allowedHosts: true },
  },
});
