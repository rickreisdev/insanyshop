"use client";

import { useRouter } from "next/navigation";
import { Undo2 } from "lucide-react";
import { Button, ButtonIconBox } from "./styles";

export function BackButton() {
  const router = useRouter();

  function handleBackRoute() {
    router.back();
  }

  return (
    <Button onClick={handleBackRoute}>
      <ButtonIconBox>
        <Undo2 size={18} color="#617480" />
      </ButtonIconBox>
      Voltar
    </Button>
  );
}
