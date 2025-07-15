'use client';

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import "@/styles/home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        <h1>Featured Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
// This is the main page of the ecommerce application, displaying a list of featured products using the ProductCard component.