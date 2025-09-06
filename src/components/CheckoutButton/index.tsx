"use client";

import { useRouter } from "next/navigation";

import { Button, ButtonBox } from "./styles";
import { useCart } from "@/hooks/useCart";
import { toast } from "react-toastify";

export function CheckoutButton() {
  const router = useRouter();
  const { clearCart } = useCart();

  function handleCheckout() {
    clearCart();
    toast.success("Compra finalizada! Confira o seu e-mail.")
    
    setTimeout(() => {
      router.replace("/");
    }, 1000);
  }

  return (
    <ButtonBox onClick={handleCheckout}>
      <Button>Finalizar a compra</Button>
    </ButtonBox>
  );
}
