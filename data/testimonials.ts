/**
 * Client testimonials. Proper nouns (author, hotel) live here; the quote and
 * role resolve to messages → Testimonials.items.<key>.{quote,role}.
 * Placeholder content — replace with real, consented client quotes.
 */
export interface Testimonial {
  key: string;
  author: string;
  hotel: string;
}

export const testimonials: Testimonial[] = [
  { key: "oceanview", author: "María Fernández", hotel: "Oceanview Resort & Spa" },
  { key: "palmas", author: "James Carter", hotel: "Las Palmas Boutique Hotel" },
  { key: "celeste", author: "Sofía Reyes", hotel: "Hotel Celeste Tulum" },
];
