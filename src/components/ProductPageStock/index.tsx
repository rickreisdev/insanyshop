"use client";

import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { AddToCartButton } from "@/components/AddToCartButton";

type ProductPageStockProps = {
  productId: number;
  stock: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export function ProductPageStock({
  productId,
  stock,
  name,
  description,
  price,
  image,
}: ProductPageStockProps) {
  const { cart } = useCart();
  const [stockAvailable, setStockAvailable] = useState(true);

  useEffect(() => {
    const cartItem = cart.items.find((item) => item.id === productId);
    const inStock = cartItem ? stock - cartItem.quantity : stock;
    setStockAvailable(inStock > 0);
  }, [cart, productId, stock]);

  return (
    <AddToCartButton
      id={productId}
      name={name}
      description={description}
      price={price}
      image={image}
      stock={stock}
      stockAvailable={stockAvailable}
    />
  );
}
