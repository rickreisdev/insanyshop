"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
};

type CartState = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  shippingCost: number;
};

type CartContextType = {
  cart: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  shippingCost: 40,
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartState>(initialState);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function recalc(items: CartItem[]) {
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return { items, totalItems, totalPrice, shippingCost: cart.shippingCost };
  }

  function addItem(item: CartItem) {
    setCart((prev) => {
      const existing = prev.items.find((p) => p.id === item.id);
      let updatedItems;

      if(existing){
        updatedItems = prev.items.map(p =>
          p.id === item.id
            ? {...p, quantity: Math.min(p.quantity + item.quantity, p.stock)}
            : p
        );
      } else {
        updatedItems = [...prev.items, item];
      }

      return recalc(updatedItems);
    });
  }

  function removeItem(id: number) {
    setCart(prev => {
      const updatedItems = prev.items.filter(p => p.id !== id);
      return recalc(updatedItems);
    });
  }

  function updateQuantity(id: number, quantity: number) {
    setCart(prev => {
      const updatedItems = prev.items.map(p =>
        p.id === id ? {...p, quantity: Math.min(quantity, p.stock)}: p
      );
      return recalc(updatedItems);
    });
  }

  function clearCart(){
    setCart(initialState)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
