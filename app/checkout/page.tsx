export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            DRIFTT
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Checkout
          </h1>

          <p className="mt-4 text-zinc-400">
            Complete your order securely.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Checkout Form */}

          <div className="space-y-8 lg:col-span-2">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <h2 className="mb-6 text-2xl font-bold">
                Contact Information
              </h2>

              <input
                placeholder="Email Address"
                className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none"
              />

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <h2 className="mb-6 text-2xl font-bold">
                Shipping Address
              </h2>

              <div className="grid gap-4 md:grid-cols-2">

                <input
                  placeholder="First Name"
                  className="rounded-xl border border-zinc-700 bg-black p-4"
                />

                <input
                  placeholder="Last Name"
                  className="rounded-xl border border-zinc-700 bg-black p-4"
                />

                <input
                  placeholder="Phone Number"
                  className="rounded-xl border border-zinc-700 bg-black p-4 md:col-span-2"
                />

                <input
                  placeholder="Address"
                  className="rounded-xl border border-zinc-700 bg-black p-4 md:col-span-2"
                />

                <input
                  placeholder="City"
                  className="rounded-xl border border-zinc-700 bg-black p-4"
                />

                <input
                  placeholder="State"
                  className="rounded-xl border border-zinc-700 bg-black p-4"
                />

                <input
                  placeholder="Pincode"
                  className="rounded-xl border border-zinc-700 bg-black p-4 md:col-span-2"
                />

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
                  <span>Oversized Tee</span>
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

              <button className="mt-8 w-full rounded-xl bg-white py-4 font-semibold text-black transition hover:bg-zinc-200">
                Pay with Razorpay
              </button>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}