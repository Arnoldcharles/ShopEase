'use client';

import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import "@/styles/cart.css";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <h1>Your Cart</h1>

        {cart.length === 0 ? (
          <p className="empty">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Qty: {item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <p>Total: <strong>${total.toFixed(2)}</strong></p>
              <button onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
// This page displays the user's shopping cart, allowing them to view items, remove them, and clear the entire cart.
// It uses the CartContext to manage cart state and provides a summary of the total price.