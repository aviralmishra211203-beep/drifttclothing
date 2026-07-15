import Link from "next/link";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  category: string;
  badge?: string;
};

export default function ProductCard({
  id,
  name,
  price,
  category,
  badge,
}: ProductCardProps) {
  return (
    <Link href={`/shop/${id}`} className="block group">
      <article className="overflow-hidden rounded-2xl bg-zinc-950 transition-all duration-300 hover:-translate-y-1">

        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">

          {badge && (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
              {badge}
            </span>
          )}

          {/* Wishlist */}
          <button
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            aria-label="Wishlist"
          >
            ♡
          </button>

          {/* Placeholder */}
          <div className="flex h-full items-center justify-center transition duration-500 group-hover:scale-105">
            <span className="text-zinc-500">
              Product Image
            </span>
          </div>

        </div>

        {/* Product Info */}
        <div className="space-y-2 p-5">

          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            {category}
          </p>

          <h3 className="text-lg font-semibold text-white">
            {name}
          </h3>

          <div className="flex items-center gap-3">

            <span className="text-xl font-bold text-white">
              ₹{price}
            </span>

            <span className="text-sm text-zinc-500 line-through">
              ₹{Math.round(price * 1.2)}
            </span>

          </div>

          <span className="inline-block text-xs uppercase tracking-wider text-zinc-400">
            Premium Streetwear
          </span>

        </div>

      </article>
    </Link>
  );
}