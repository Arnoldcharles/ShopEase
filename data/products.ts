// data/products.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 79.99,
    image: "/products/headphones.jpg",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 129.99,
    image: "/products/watch.jpg",
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "/products/speaker.jpg",
  },
];
