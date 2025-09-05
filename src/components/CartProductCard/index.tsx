"use client";

import { useRouter } from "next/navigation";

import {
  Card,
  Image,
  Title,
  Price,
  CardBottomBox,
  CategoryInfoBox,
  CategoryPriceStockBox,
  Description,
  Stock,
  ImageContainer,
} from "./styles";

import { priceToBRL } from "@/utils/formatting";

type ProductCardProps = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  stock: number;
};

export default function CartProductCard({
  id,
  image,
  name,
  description,
  price,
  quantity,
  stock
}: ProductCardProps) {
  const router = useRouter();



  return (
    <Card>
      <ImageContainer>
        <Image
          src={image}
          alt={name}
          title={name}
        />
      </ImageContainer>

      <CardBottomBox>
        <CategoryInfoBox>
          <Title onClick={() => router.push(`/produto/${id}`)}>{name}</Title>
          <Description>{description}</Description>

          <CategoryPriceStockBox>
            <Price>{priceToBRL(price)}</Price>
            <Stock>{stock} em estoque</Stock>
          </CategoryPriceStockBox>


        </CategoryInfoBox>
      </CardBottomBox>
    </Card>
  );
}
