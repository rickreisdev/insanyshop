// "use client";

import { Button, ButtonBox } from "./styles";
import { useCart } from "@/hooks/useCart";

export function CheckoutButton() {

  return (
    <ButtonBox>
      <Button>
        Finalizar a compra
      </Button>
    </ButtonBox>
  );
}
