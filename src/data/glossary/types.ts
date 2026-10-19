export interface Term {
  slug: string;
  term: string;
  /** Full name, when the term is an abbreviation. */
  full?: string;
  short: string;
  body: string[];
  related: string[];
  /** Product page this term leads to. */
  product?: string;
  /** Other names people search for, marked up as alternate names. */
  aka?: string[];
  /** Day the term goes live (YYYY-MM-DD). Builds before this day leave it out; no date means always live. */
  published?: string;
  /** Date the long-form content was last revised (YYYY-MM-DD). */
  updated?: string;
  /** Search title, when the default "meaning and how it works" undersells the page. */
  title?: string;
  /** Meta description, when `short` is not the best search snippet. */
  description?: string;
  /** Long-form sections under their own headings, for terms people search in depth. */
  sections?: { id: string; h: string; p: string[]; list?: string[] }[];
  /** Questions people ask about the term, shown on the page and marked up as FAQ. */
  faq?: { q: string; a: string }[];
}
