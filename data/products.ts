export interface Product {
  id: number;
  slug: string;

  name: string;
  category: string;

  price: number;
  comparePrice: number;

  description: string;

  images: string[];

  sizes: string[];

  colors: string[];

  badge?: string;

  inStock: boolean;
  featured: boolean;
  newArrival: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "essential-oversized-tee",

    name: "Essential Oversized Tee",
    category: "Oversized Tees",

    price: 999,
    comparePrice: 1299,

    description:
      "Crafted using premium heavyweight cotton, the Essential Oversized Tee delivers everyday comfort with a clean streetwear aesthetic. Designed for a relaxed fit and built for daily wear.",

    images: [
      "/images/products/tee-black-front.jpg",
      "/images/products/tee-black-back.jpg",
      "/images/products/tee-black-side.jpg",
    ],

    sizes: ["S", "M", "L", "XL"],

    colors: ["Black", "White"],

    badge: "NEW",

    inStock: true,
    featured: true,
    newArrival: true,
  },

  {
    id: 2,
    slug: "classic-street-hoodie",

    name: "Classic Street Hoodie",
    category: "Hoodies",

    price: 1499,
    comparePrice: 1899,

    description:
      "Premium heavyweight hoodie designed for everyday comfort with an oversized fit and minimalist streetwear styling.",

    images: [
      "/images/products/hoodie-black-front.jpg",
      "/images/products/hoodie-black-back.jpg",
    ],

    sizes: ["M", "L", "XL"],

    colors: ["Black"],

    badge: "BESTSELLER",

    inStock: true,
    featured: true,
    newArrival: false,
  },

  {
    id: 3,
    slug: "driftt-signature-cap",

    name: "DRIFTT Signature Cap",
    category: "Caps",

    price: 799,
    comparePrice: 999,

    description:
      "Minimal premium cap with embroidered DRIFTT branding for everyday wear.",

    images: [
      "/images/products/cap-front.jpg",
      "/images/products/cap-back.jpg",
    ],

    sizes: ["Free Size"],

    colors: ["Black"],

    badge: "LIMITED",

    inStock: true,
    featured: false,
    newArrival: true,
  },
];