import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Static-site build. The eShasan route-bundle pipeline ingests `dist/`
// as a tarball and serves it from R2 behind nginx.
const HMR_PORT = Number.parseInt(process.env.ASTRO_DEV_PORT ?? '4321', 10);

const REPO_ROOT = path.resolve(fileURLToPath(import.meta.url), '../../../../..');

const SDK_EXTERNALS = [
  '@radix-ui/react-accordion',
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-collapsible',
  '@radix-ui/react-dialog',
  '@radix-ui/react-label',
  '@radix-ui/react-popover',
  '@radix-ui/react-radio-group',
  '@radix-ui/react-select',
  '@radix-ui/react-slot',
  '@radix-ui/react-switch',
  'sonner',
  'cmdk',
  'react-hook-form',
  '@hookform/resolvers/zod',
  'zod',
  '@dnd-kit/core',
  '@dnd-kit/sortable',
  '@dnd-kit/utilities',
  'qrcode.react',
  'bikram-sambat-js',
  'nunjucks',
  'zustand',
  '@tiptap/core',
  '@tiptap/react',
  '@tiptap/starter-kit',
  '@tiptap/extension-text-style',
  '@tiptap/extension-text-align',
  '@tiptap/extension-table',
  '@tiptap/extension-table-row',
  '@tiptap/extension-table-cell',
  '@tiptap/extension-table-header',
  '@lingui/macro',
  '@lingui/react',
  '@lingui/core',
];

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  base: '/',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'ne',
    locales: ['ne', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true },
  },
  integrations: [react()],
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    resolve: {
      dedupe: [
        'react',
        'react-dom',
        'react-router',
        'react-router-dom',
        '@tanstack/react-query',
        '@lingui/react',
        '@lingui/core',
      ],
      alias: {
        '@lingui/macro': fileURLToPath(new URL('./src/lingui-macro-runtime-shim.ts', import.meta.url)),
        '@lingui/react': fileURLToPath(new URL('./node_modules/@lingui/react', import.meta.url)),
        '@lingui/core':  fileURLToPath(new URL('./node_modules/@lingui/core',  import.meta.url)),
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env': '{}',
      'process.platform': JSON.stringify(process.platform),
      'process.version': JSON.stringify(process.version),
      'process.versions': JSON.stringify(process.versions),
      'process.versions.node': JSON.stringify(process.versions.node),
      'process.browser': 'true',
      global: 'globalThis',
    },
    server: {
      port: HMR_PORT,
      allowedHosts: true,
      fs: {
        allow: [REPO_ROOT],
      },
      hmr: {
        clientPort: 443,
        protocol: 'wss',
      },
    },
    optimizeDeps: {
      include: [
        '@eshasan/sdk',
        ...SDK_EXTERNALS,
      ],
      esbuildOptions: {
        alias: {
          '@lingui/react': fileURLToPath(new URL('./node_modules/@lingui/react', import.meta.url)),
          '@lingui/core':  fileURLToPath(new URL('./node_modules/@lingui/core',  import.meta.url)),
        },
        plugins: [{
          name: 'externalize-lingui-from-deps',
          setup(build) {
            build.onResolve({ filter: /^@lingui\/(react|core)$/ }, (args) => {
              if (args.kind === 'entry-point') return null;
              return { path: args.path, external: true };
            });
          },
        }],
      },
    },
    ssr: {
      external: ['nunjucks'],
      noExternal: [
        '@eshasan/sdk',
        /^@eshasan\/sdk\//,
        'react-router-dom',
        'react-router',
        '@tanstack/react-query',
        'sonner',
        'lucide-react',
        'react-hook-form',
        '@hookform/resolvers',
        'zod',
        'cmdk',
        'qrcode.react',
        'bikram-sambat-js',
        'zustand',
        /^@radix-ui\//,
        /^@dnd-kit\//,
        /^@tiptap\//,
        /^@lingui\//,
      ],
    },
  },
});
