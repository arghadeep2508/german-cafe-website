export type MenuItem = {
  name: string;
  price: number;
  veg?: boolean;
};

export type MenuCategory = {
  [key: string]: MenuItem[];
};