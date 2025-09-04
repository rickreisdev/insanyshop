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

type Props = {
  selected?: string;
};

export default function SortSelect({ selected }: Props) {
  const [open, setOpen] = useState(false);
  //   const router = useRouter();

    function handleOptionClick() {
      setOpen(false);
    }

  const options = [
    { id: "new", label: "Novidades" },
    { id: "price_desc", label: "Preço: Maior - Menor" },
    { id: "price_asc", label: "Preço: Menor - Maior" },
    { id: "popular", label: "Mais vendidos" },
  ];

  const selectedCategory =
    options.find((c) => c.id === selected)?.label || "Organizar por";

  return (
    <SelectWrapper>
      <SelectButton onClick={() => setOpen(!open)}>
        {selectedCategory}
        <Chevron open={open}>
          <IoIosArrowDown />
        </Chevron>
      </SelectButton>
      {open && (
        <OptionsList>
          <Option key="all" onClick={() => handleOptionClick()}>
            {" "}
            Organizar por{" "}
          </Option>
          {options.map((cat) => (
            <Option key={cat.id} onClick={() => handleOptionClick()}>
              {cat.label}
            </Option>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
}
