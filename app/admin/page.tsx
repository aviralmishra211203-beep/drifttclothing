export default function AdminPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">DRIFTT Admin</h1>

        <p className="mt-4 text-zinc-400">
          Welcome back, Aviral.
        </p>

        <button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-black">
          Login
        </button>
      </div>
    </main>
  );
}