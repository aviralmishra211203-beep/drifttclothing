export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold tracking-[0.3em]">
          DRIFTT
        </h1>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="rounded-full border border-white px-5 py-2 text-sm transition hover:bg-white hover:text-black">
          Cart
        </button>
      </div>
    </header>
  );
}