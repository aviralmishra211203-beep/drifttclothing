import ProductCard from "../ProductCard";
import { products } from "@/data/products";

export default function NewArrivals() {
  const newArrivals = products.filter(
    (product) => product.newArrival
  );

  return (
    <section className="bg-zinc-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            Latest Drop
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            New Arrivals
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Fresh pieces designed with premium fabrics, oversized silhouettes,
            and timeless streetwear aesthetics.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </section>
  );
}