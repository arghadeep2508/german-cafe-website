import { MenuItem as Item } from "@/types/menu";

export default function MenuItem({ item }: { item: Item }) {
  return (
    <div className="card">

      {/* Image */}
      <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden mb-4">
        {item.image ? (
          <img
            src={item.image}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-sm text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-500">₹{item.price}</p>

      {/* Button */}
      <button className="btn-primary mt-3 text-sm">
        Order Now
      </button>
    </div>
  );
}