type Props = {
  categories: string[];
  active: string;
  setActive: (val: string) => void;
  labels: Record<string, string>;
};

export default function CategoryTabs({
  categories,
  active,
  setActive,
  labels,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-full border transition ${
            active === cat
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-100"
          }`}
        >
          {labels[cat] || cat}
        </button>
      ))}
    </div>
  );
}