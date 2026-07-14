export default function Newsletter() {
  return (
    <section className="bg-zinc-950 text-white py-24 px-6 border-t border-zinc-800">
      <div className="max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-3">
          Stay Connected
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join the DRIFTT Community
        </h2>

        <p className="text-gray-400 mb-10 leading-7">
          Be the first to know about exclusive drops, limited collections,
          early access, and special offers.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-black border border-zinc-700 px-5 py-4 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition"
          />

          <button
            type="submit"
            className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}