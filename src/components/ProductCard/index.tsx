"use client";

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
  ButtonBox,
  Button,
} from "./styles";

import { priceToBRL } from "@/utils/formatting";

import { ShoppingCart } from "lucide-react";

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
  category,
  categoryName,
  description,
  rating,
  stock,
}: ProductCardProps) {
  return (
    <Card>
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

          <ButtonBox>
            <Button>
              <ShoppingCart
                size={24}
                color="#FFFFFF"
                style={{ marginRight: 8 }}
              />
              Adicionar
            </Button>
          </ButtonBox>
        </CategoryInfoBox>
      </CardBottomBox>
    </Card>
  );
}
