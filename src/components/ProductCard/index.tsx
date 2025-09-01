"use client";

import { Card, Image, Title, Price } from "./styles";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, name, price, image }: Product) {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
      <Price>R$ {price.toFixed(2)}</Price>
    </Card>
  );
}
