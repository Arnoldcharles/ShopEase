'use client';

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "@/styles/navbar.css";

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">ShopEase</Link>

        <div className={`nav-links ${open ? "active" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </nav>
  );
}
