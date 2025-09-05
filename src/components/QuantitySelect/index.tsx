"use client";

import { useState } from "react";

import {
  Chevron,
  Option,
  OptionsList,
  SelectButton,
  SelectWrapper,
} from "./styles";

import { IoIosArrowDown } from "react-icons/io";
import { useCart } from "@/hooks/useCart";

type Props = {
  productId: number;
  stock: number;
  quantity: number;
};

export default function QuantitySelect({ productId, stock, quantity }: Props) {
  const [open, setOpen] = useState(false);
  const { updateQuantity } = useCart();

  function handleOptionClick(qtd: number) {
    updateQuantity(productId, qtd);
    setOpen(false);
  }

  return (
    <SelectWrapper>
      <SelectButton onClick={() => setOpen(!open)}>
        <span>{quantity}</span>
        <Chevron open={open}>
          <IoIosArrowDown />
        </Chevron>
      </SelectButton>

      {open && (
        <OptionsList>
          {Array.from({ length: stock }, (_, i) => i + 1).map((qtd) => (
            <Option key={qtd} onClick={() => handleOptionClick(qtd)}>
              {qtd}
            </Option>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
}
