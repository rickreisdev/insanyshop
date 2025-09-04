import { useEffect, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
};

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addItem(item: CartItem) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        if (existing.quantity + item.quantity <= item.stock) {
          return prev.map((p) =>
            p.id === item.id
              ? { ...p, quantity: p.quantity + item.quantity }
              : p
          );
        }
        return prev;
      }

      return [...prev, item];
    });
  }

  function removeItem(id: number) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function updateQuantity(id: number, quantity: number) {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.min(quantity, p.stock) } : p
      )
    );
  }

  return { cart, addItem, removeItem, updateQuantity };
}
