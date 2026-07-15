export default function ProductGallery() {
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="flex h-[650px] items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800">
        <span className="text-xl text-zinc-500">
          Main Product Image
        </span>
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((image) => (
          <div
            key={image}
            className="flex aspect-square items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition hover:border-white"
          >
            <span className="text-xs text-zinc-500">
              {image}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}