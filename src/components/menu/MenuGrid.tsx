type MenuItem = {
  name: string;
  price: number;
  veg?: boolean;
};

export default function MenuGrid({ items }: { items: MenuItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b pb-3"
        >
          {/* Left */}
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>

            {item.veg && (
              <span className="text-xs text-green-600">● Veg</span>
            )}
          </div>

          {/* Right */}
          <div className="text-lg font-medium text-gray-700">
            ₹{item.price}
          </div>
        </div>
      ))}
    </div>
  );
}