type CollectionCardProps = {
  title?: string;
  image?: string;
};

export default function CollectionCard({
  title = "Oversized Tees",
}: CollectionCardProps) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-10 text-white">
      <h3 className="text-2xl font-bold">{title}</h3>

      <button className="mt-4 rounded-full border border-white px-5 py-2">
        Shop Now
      </button>
    </div>
  );
}