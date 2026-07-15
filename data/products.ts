export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Essential Oversized Tee",
    price: 999,
    image: "/images/products/tee-black.jpg",
    category: "Oversized Tees",
    badge: "New",
  },
  {
    id: 2,
    name: "Classic Street Hoodie",
    price: 2499,
    image: "/images/products/hoodie-black.jpg",
    category: "Hoodies",
  },
  {
    id: 3,
    name: "DRIFTT Signature Cap",
    price: 799,
    image: "/images/products/cap-black.jpg",
    category: "Caps",
  },
];