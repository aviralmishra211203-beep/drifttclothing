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

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              {product.category}
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              {product.name}
            </h1>

            <p className="mt-6 text-3xl font-semibold">
              ₹{product.price}
            </p>

            <p className="mt-8 leading-8 text-gray-400">
              Crafted with premium heavyweight cotton for maximum comfort,
              everyday wear, and timeless streetwear aesthetics.
              Designed to become an essential piece in your wardrobe.
            </p>

            {/* Size Selection */}
            <div className="mt-10">
              <h3 className="mb-4 text-lg font-semibold">
                Select Size
              </h3>

              <div className="flex flex-wrap gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-white hover:bg-white hover:text-black"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-10">
              <h3 className="mb-4 text-lg font-semibold">
                Quantity
              </h3>

              <div className="flex w-40 items-center justify-between rounded-xl border border-zinc-700 px-4 py-3">
                <button className="text-xl">−</button>
                <span>1</span>
                <button className="text-xl">+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <button className="mt-12 w-full rounded-xl bg-white py-4 text-lg font-semibold text-black transition hover:bg-gray-200">
              Add to Cart
            </button>

            <button className="mt-4 w-full rounded-xl border border-white py-4 text-lg transition hover:bg-white hover:text-black">
              Buy Now
            </button>

            {/* Trust Badges */}
            <TrustBadges />

          </div>

        </div>

      </div>
    </main>
  );
}