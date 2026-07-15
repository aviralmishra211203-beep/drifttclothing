import Link from "next/link";
import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.id}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-white"
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">

        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
            {product.badge}
          </span>
        )}

        <div className="flex h-full items-center justify-center text-zinc-500 transition duration-500 group-hover:scale-105">
          Product Image
        </div>

      </div>

      {/* Product Info */}
      <div className="space-y-3 p-5">

        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          {product.category}
        </p>

        <h3 className="text-xl font-semibold text-white">
          {product.name}
        </h3>

        <div className="flex items-center gap-3">

          <span className="text-2xl font-bold">
            ₹{product.price}
          </span>

          <span className="text-sm text-zinc-500 line-through">
            ₹{product.comparePrice}
          </span>

        </div>

        <p className="line-clamp-2 text-sm leading-6 text-zinc-400">
          {product.description}
        </p>

      </div>
    </Link>
  );
}