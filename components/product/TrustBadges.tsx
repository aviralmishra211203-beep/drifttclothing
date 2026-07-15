export default function TrustBadges() {
  const badges = [
    {
      title: "Premium Quality",
      description: "Made with carefully selected heavyweight fabrics.",
    },
    {
      title: "Free Shipping",
      description: "Free delivery on eligible orders across India.",
    },
    {
      title: "Easy Returns",
      description: "Simple return process within our return policy.",
    },
    {
      title: "Secure Payments",
      description: "Protected checkout with trusted payment partners.",
    },
  ];

  return (
    <section className="mt-12 border-t border-zinc-800 pt-8">
      <h2 className="text-xl font-semibold text-white mb-6">
        Why Shop with DRIFTT?
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-white"
          >
            <h3 className="text-lg font-semibold text-white">
              {badge.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {badge.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}