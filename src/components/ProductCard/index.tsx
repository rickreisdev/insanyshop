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
  ImageContainer,
} from "./styles";

import { priceToBRL } from "@/utils/formatting";

import { AddToCartButton } from "../AddToCartButton";

type ProductCardProps = {
  id: number;
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
    <Card>
      <ImageContainer>
        <Image
          onClick={() => router.push(`/produto/${id}`)}
          src={image}
          alt={name}
          title={name}
        />
      </ImageContainer>

      <CardBottomBox>
        <CategoryRattingBox>
          <span>{categoryName}</span>
          <span>⭐ {rating}</span>
        </CategoryRattingBox>

        <CategoryInfoBox>
          <Title onClick={() => router.push(`/produto/${id}`)}>{name}</Title>
          <Description>{description}</Description>

          <CategoryPriceStockBox>
            <Price>{priceToBRL(price)}</Price>
            <Stock>{stock} em estoque</Stock>
          </CategoryPriceStockBox>

          <AddToCartButton
            id={id}
            name={name}
            description={description}
            price={price}
            image={image}
            stock={stock}
          />
        </CategoryInfoBox>
      </CardBottomBox>
    </Card>
  );
}
