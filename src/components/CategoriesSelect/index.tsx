"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Chevron,
  Option,
  OptionsList,
  SelectButton,
  SelectWrapper,
} from "./styles";

import { IoIosArrowDown } from "react-icons/io";

type Category = {
  id: string;
  name: string;
};

type Props = {
  categories: Category[];
  selected?: string;
};

export default function CategoriesSelect({ categories, selected }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleOptionClick(catId: string) {
    if (catId) {
      router.push(`/categoria/${catId}`);
    } else {
      router.push("/");
    }
    setOpen(false);
  }

  const selectedCategory =
    categories.find((c) => c.id === selected)?.name || "Selecione a categoria";

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
          <Option key="all" onClick={() => handleOptionClick("")}>
            {" "}
            Selecione a categoria{" "}
          </Option>
          {categories.map((cat) => (
            <Option key={cat.id} onClick={() => handleOptionClick(cat.id)}>
              {cat.name}
            </Option>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
}
