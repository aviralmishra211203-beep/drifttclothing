import Link from "next/link";

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

          <p className="mt-4 text-zinc-400">
            Review your order before checkout.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex flex-col gap-6 md:flex-row">
                {/* Product Image */}
                <div className="flex h-40 w-40 items-center justify-center rounded-xl bg-zinc-800">
                  Product Image
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <p className="text-sm uppercase tracking-widest text-zinc-500">
                    Oversized Tee
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Midnight Drift
                  </h2>

                  <p className="mt-3 text-zinc-400">
                    Size: L
                  </p>

                  <div className="mt-5 flex items-center gap-4">
                    <button className="rounded-lg border border-zinc-700 px-3 py-2 transition hover:border-white">
                      −
                    </button>

                    <span className="text-lg font-semibold">
                      1
                    </span>

                    <button className="rounded-lg border border-zinc-700 px-3 py-2 transition hover:border-white">
                      +
                    </button>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      ₹999
                    </span>

                    <button className="text-red-400 transition hover:text-red-300">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="text-2xl font-bold">
                Order Summary
              </h2>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹999</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>

                <hr className="border-zinc-700" />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹999</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-8 block w-full rounded-xl bg-white py-4 text-center font-semibold text-black transition hover:bg-zinc-200"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}