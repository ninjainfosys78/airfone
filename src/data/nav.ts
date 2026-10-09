import { products } from './products';
import { solutions } from './solutions';

export const productLinks = products.map((p) => ({ href: `/products/${p.slug}`, label: p.name }));
export const solutionLinks = solutions.map((s) => ({ href: `/solutions/${s.slug}`, label: s.name }));

export const footerColumns = [
  { title: 'Products', links: productLinks },
  { title: 'Solutions', links: solutionLinks },
  {
    title: 'Company',
    links: [
      { href: '/resellers', label: 'Resellers' },
      { href: '/blog', label: 'Insights' },
      { href: '/glossary', label: 'Glossary' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/contact', label: 'Contact' },
      { href: '/demo', label: 'Book a demo' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/terms', label: 'Terms' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/delete-account', label: 'Delete account' },
    ],
  },
];
