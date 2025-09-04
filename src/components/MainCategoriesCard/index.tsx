"use client"

import { useRouter } from "next/navigation";
import { Card, Name, Count } from "./styles";

type Props = {
  id: string;
  name: string;
  productCount: number;
};

export default function MainCategoriesCard({ id, name, productCount }: Props) {
  const router = useRouter();

  function handleCategoryClick(catId: string) {
    if (catId) {
      router.push(`/categoria/${catId}`);
    } else {
      router.push("/");
    }
  }

  return (
    <Card onClick={() => handleCategoryClick(id)}>
      <Name>{name}</Name>

      <Count>{productCount} produtos</Count>
    </Card>
  );
}
