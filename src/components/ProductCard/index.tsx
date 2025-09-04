"use client";

import { useRouter } from "next/navigation";

import {
  Card,
  Image,
  Title,
  Price,
  CardBottomBox,
  CategoryRattingBox,
  CategoryInfoBox,
  CategoryPriceStockBox,
  Description,
  Stock,
} from "./styles";

import { priceToBRL } from "@/utils/formatting";

import { AddToCartButton } from "../AddToCartButton";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  categoryName: string;
  description: string;
  rating: number;
  stock: number;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  categoryName,
  description,
  rating,
  stock,
}: ProductCardProps) {
  const router = useRouter();

  return (
    <Card onClick={() => router.push(`/produto/${id}`)}>
      <Image src={image} alt={name} />

      <CardBottomBox>
        <CategoryRattingBox>
          <span>{categoryName}</span>
          <span>⭐ {rating}</span>
        </CategoryRattingBox>

        <CategoryInfoBox>
          <Title>{name}</Title>
          <Description>{description}</Description>

          <CategoryPriceStockBox>
            <Price>{priceToBRL(price)}</Price>
            <Stock>{stock} em estoque</Stock>
          </CategoryPriceStockBox>

          <AddToCartButton />
        </CategoryInfoBox>
      </CardBottomBox>
    </Card>
  );
}
