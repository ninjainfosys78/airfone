// Real customer quotes only, with the customer's written permission.
// Empty until the owner sends some; the section stays hidden while empty.
export interface Testimonial {
  quote: string;
  name: string;
  business: string;
}

export const testimonials: Testimonial[] = [];
