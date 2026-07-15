import { notFound } from "next/navigation";
import { products } from "@/data/products";

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
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          {product.category}
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          {product.name}
        </h1>

        <p className="mt-8 text-3xl font-semibold">
          ₹{product.price}
        </p>

        <div className="mt-12 flex h-[500px] items-center justify-center rounded-2xl bg-zinc-900">
          <span className="text-xl text-zinc-500">
            Product Image Coming Soon
          </span>
        </div>
      </div>
    </main>
  );
}