"use client";

import { ShoppingCart } from "lucide-react";
import { Button, ButtonBox } from "./styles";

export function AddToCartButton() {
  return (
    <ButtonBox>
      <Button>
        <ShoppingCart size={24} color="#FFFFFF" style={{ marginRight: 8 }} />
        Adicionar
      </Button>
    </ButtonBox>
  );
}
