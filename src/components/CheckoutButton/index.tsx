"use client";

import { useRouter } from "next/navigation";

import { Button, ButtonBox } from "./styles";
import { useCart } from "@/hooks/useCart";

export function CheckoutButton() {
  const router = useRouter();
  const {clearCart} = useCart();

  function handleCheckout(){
    clearCart()
    router.replace("/")
  }

  return (
    <ButtonBox onClick={handleCheckout}>
      <Button>
        Finalizar a compra
      </Button>
    </ButtonBox>
  );
}
