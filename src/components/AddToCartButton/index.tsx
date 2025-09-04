"use client";

import { useCart } from "@/hooks/useCart";

import { ShoppingCart } from "lucide-react";
import { Button, ButtonBox } from "./styles";

type AddCartProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
};

export function AddToCartButton({
  id,
  name,
  price,
  image,
  stock,
}: AddCartProps) {
  const cart = useCart();

  function handleAddToCart() {
    cart.addItem({
      id,
      name,
      price,
      image,
      stock,
      quantity: 1,
    });
  }

  return (
    <ButtonBox onClick={handleAddToCart}>
      <Button>
        <ShoppingCart size={24} color="#FFFFFF" style={{ marginRight: 8 }} />
        Adicionar
      </Button>
    </ButtonBox>
  );
}
