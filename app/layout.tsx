import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "E-commerce Store",
  description: "A beautiful, functional online store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
// This layout wraps the entire application with authentication and cart context providers, allowing access to user and cart state throughout the app.
// It also sets the metadata for the application, including the title and description.