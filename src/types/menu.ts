export type MenuItem = {
  id?: string; // optional for flexibility
  name: string;
  price: number;
  veg?: boolean;

  // 🔥 Added fields (won’t break old code)
  description?: string;
  image?: string;
  category?: string;
};

export type MenuCategory = {
  [key: string]: MenuItem[];
};
