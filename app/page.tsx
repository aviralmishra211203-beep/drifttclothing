import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-[0.3em]">
            DRIFTT
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Premium Luxury Streetwear
          </p>

          <button className="mt-10 rounded-full border border-white px-8 py-3 transition hover:bg-white hover:text-black">
            Shop Collection
          </button>
        </div>
      </section>
    </main>
  );
}
