'use client';

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import "@/styles/product.css";

export default function ProductCard({ product }: { product: Product }) {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [adding, setAdding] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleAddToCart = () => {
    if (!user) {
      setShowOverlay(true);
      return;
    }

    setAdding(true);
    setTimeout(() => {
      addToCart(product);
      setAdding(false);
    }, 1000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart} disabled={adding}>
        {adding ? "Adding..." : "Add to Cart"}
      </button>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-box">
            <p>You must be logged in to add items to cart.</p>
            <button onClick={() => (window.location.href = "/login")}>Login</button>
            <span className="close" onClick={() => setShowOverlay(false)}>✕</span>
          </div>
        </div>
      )}
    </div>
  );
}
// This component displays a product card with an image, name, price, and an "Add to Cart" button.
// If the user is not logged in, it shows an overlay prompting them to log in before