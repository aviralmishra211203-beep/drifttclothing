import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Page Header */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm">
            DRIFTT
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Shop
          </h1>

          <p className="mt-6 max-w-2xl leading-7 text-gray-400">
            Discover premium oversized streetwear designed for everyday comfort,
            confidence, and timeless style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              badge={product.badge}
            />
          ))}
        </div>

      </div>
    </main>
  );
}