import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/herobanner.jpg"
        alt="DRIFTT Apparel Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <div className="mb-8 inline-flex items-center rounded-full border border-zinc-700 bg-black/40 px-4 py-2 text-sm text-zinc-300 backdrop-blur-md">
          ✦ Premium Luxury Streetwear
        </div>

        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-300">
          DRIFTT APPAREL
        </p>

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Luxury Streetwear
          <br />
          Built for the Bold.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
          Premium oversized essentials crafted from heavyweight cotton with
          timeless silhouettes and uncompromising comfort.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-8 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-zinc-200">
            Shop Collection
          </button>

          <button className="rounded-full border border-white px-8 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-black">
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-3xl text-white">
        ↓
      </div>
    </section>
  );
}