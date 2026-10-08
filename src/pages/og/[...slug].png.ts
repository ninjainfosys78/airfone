// One 1200x630 share image per page: the page's title on the AirFone green
// stage with the cloud mark. Built at build time with satori and resvg.
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { products } from '../../data/products';
import { solutions } from '../../data/solutions';

const font = (w: number) => readFileSync(`node_modules/@fontsource/poppins/files/poppins-latin-${w}-normal.woff`);
const cloud = `data:image/svg+xml;base64,${Buffer.from(readFileSync('public/brand/cloud-outline.svg', 'utf8').replace('fill="#000"', 'fill="#8BC53E"')).toString('base64')}`;

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  const pages: { slug: string; title: string }[] = [
    { slug: 'index', title: 'Every call answered, in Nepali' },
    { slug: 'demo', title: 'Book a demo' },
    { slug: 'resellers', title: 'Sell AirFone in your city' },
    { slug: 'contact', title: 'Contact AirFone' },
    { slug: 'pricing', title: 'A monthly plan sized to your calls' },
    { slug: 'thanks', title: 'Thanks, we have your details' },
    { slug: 'blog', title: 'AirFone blog' },
    { slug: 'terms', title: 'Terms of service' },
    { slug: 'privacy', title: 'Privacy policy' },
    { slug: 'delete-account', title: 'Delete your account' },
    { slug: '404', title: 'Page not found' },
    { slug: 'orb-pick', title: 'Orb pick' },
    ...products.map((p) => ({ slug: `products/${p.slug}`, title: p.headline })),
    ...solutions.map((s) => ({ slug: `solutions/${s.slug}`, title: s.headline })),
    ...posts.map((p) => ({ slug: `blog/${p.id}`, title: p.data.title })),
    ...[...new Set(posts.flatMap((p) => p.data.tags))].map((t) => ({ slug: `blog/tag/${t}`, title: `${t.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase())} articles` })),
  ];
  const n = Math.ceil(posts.length / 10);
  for (let i = 2; i <= n; i++) pages.push({ slug: `blog/page/${i}`, title: `AirFone blog, page ${i}` });
  return pages.map((p) => ({ params: { slug: p.slug }, props: { title: p.title } }));
}

export async function GET({ props }: APIContext) {
  const { title } = props as { title: string };
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: { width: 1200, height: 630, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#2F4F08', color: '#FFFFFF', fontFamily: 'Poppins' },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: 20 },
              children: [
                { type: 'img', props: { src: cloud, width: 96, height: 59 } },
                { type: 'div', props: { style: { fontSize: 40, fontWeight: 600 }, children: 'AirFone' } },
              ],
            },
          },
          { type: 'div', props: { style: { fontSize: title.length > 40 ? 64 : 80, fontWeight: 600, lineHeight: 1.1, maxWidth: 1000 }, children: title } },
          { type: 'div', props: { style: { fontSize: 30, color: '#C9D6B8' }, children: 'airfone.app' } },
        ],
      },
    },
    { width: 1200, height: 630, fonts: [{ name: 'Poppins', data: font(400), weight: 400 }, { name: 'Poppins', data: font(600), weight: 600 }] },
  );
  const png = new Resvg(svg).render().asPng();
  return new Response(png, { headers: { 'content-type': 'image/png' } });
}
