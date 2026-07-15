export default function CartPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            DRIFTT
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Shopping Cart
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Review your selected products before proceeding to checkout.
          </p>
        </div>

        {/* Empty Cart */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-12 text-center">

          <h2 className="text-2xl font-semibold">
            Your cart is empty
          </h2>

          <p className="mt-4 text-zinc-400">
            Looks like you haven't added any products yet.
          </p>

          <a
            href="/shop"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:bg-zinc-200"
          >
            Continue Shopping
          </a>

        </div>

      </div>
    </main>
  );
}