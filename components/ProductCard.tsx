type ProductCardProps = {
  name: string;
  price: number;
};

export default function ProductCard({
  name,
  price,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-white">
      <div className="flex h-80 items-center justify-center bg-zinc-900">
        <span className="text-zinc-500">Product Image</span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">
          {name}
        </h3>

        <p className="mt-2 text-zinc-300">
          ₹{price}
        </p>

        <button className="mt-5 w-full rounded-full border border-white py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black">
          View Product
        </button>
      </div>
    </div>
  );
}