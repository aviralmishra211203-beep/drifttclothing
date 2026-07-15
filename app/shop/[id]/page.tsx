import { notFound } from "next/navigation";
import { products } from "@/data/products";

import ProductGallery from "@/components/product/ProductGallery";
import TrustBadges from "@/components/product/TrustBadges";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Product Gallery */}
          <ProductGallery />

          {/* Product Details */}
          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              {product.category}
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              {product.name}
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-4xl font-bold">
                ₹{product.price}
              </span>

              <span className="text-xl text-zinc-500 line-through">
                ₹{product.comparePrice}
              </span>
            </div>

            {product.badge && (
              <div className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-black">
                {product.badge}
              </div>
            )}

            <p className="mt-8 leading-8 text-zinc-400">
              {product.description}
            </p>

            {/* Available Colors */}
            <div className="mt-10">

              <h3 className="mb-4 text-lg font-semibold">
                Available Colors
              </h3>

              <div className="flex flex-wrap gap-3">

                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="rounded-full border border-zinc-700 px-5 py-2 text-sm"
                  >
                    {color}
                  </span>
                ))}

              </div>

            </div>

            {/* Size Selection */}
            <div className="mt-10">

              <h3 className="mb-4 text-lg font-semibold">
                Select Size
              </h3>

              <div className="flex flex-wrap gap-3">

                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-white hover:bg-white hover:text-black"
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>

            {/* Stock Status */}
            <div className="mt-8">

              {product.inStock ? (
                <span className="font-medium text-green-400">
                  ✓ In Stock
                </span>
              ) : (
                <span className="font-medium text-red-400">
                  Out of Stock
                </span>
              )}

            </div>

            {/* Quantity */}
            <div className="mt-10">

              <h3 className="mb-4 text-lg font-semibold">
                Quantity
              </h3>

              <div className="flex w-40 items-center justify-between rounded-xl border border-zinc-700 px-4 py-3">

                <button className="text-xl">
                  −
                </button>

                <span>1</span>

                <button className="text-xl">
                  +
                </button>

              </div>

            </div>

            {/* Buttons */}

            <button className="mt-12 w-full rounded-xl bg-white py-4 text-lg font-semibold text-black transition hover:bg-zinc-200">
              Add to Cart
            </button>

            <button className="mt-4 w-full rounded-xl border border-white py-4 text-lg transition hover:bg-white hover:text-black">
              Buy Now
            </button>

            <TrustBadges />

          </div>

        </div>

      </div>
    </main>
  );
}