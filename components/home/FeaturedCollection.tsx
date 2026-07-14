import CollectionCard from "../CollectionCard";

const collections = [
  { title: "Oversized Tees" },
  { title: "Hoodies" },
  { title: "Caps" },
  { title: "Accessories" },
];

export default function FeaturedCollection() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-4xl font-bold">
          Featured Collection
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.title}
              title={collection.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}