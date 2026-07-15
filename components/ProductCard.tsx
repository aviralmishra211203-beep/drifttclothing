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
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-white">

      {/* Product Image */}
      <div className="relative flex h-80 items-center justify-center bg-zinc-900">

        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
            {badge}
          </span>
        )}

        <span className="text-zinc-500 transition duration-300 group-hover:scale-105">
          Product Image
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">

        <p className="text-sm uppercase tracking-wider text-zinc-500">
          {category}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white">
          {name}
        </h3>

        <p className="mt-4 text-2xl font-bold text-white">
          ₹{price}
        </p>

        <Link href={`/shop/${id}`}>
          <button className="mt-6 w-full rounded-full border border-white py-3 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-black">
            View Product
          </button>
        </Link>

      </div>

    </div>
  );
}