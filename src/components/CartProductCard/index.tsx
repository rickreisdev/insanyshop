"use client";

import { useRouter } from "next/navigation";

import { priceToBRL } from "@/utils/formatting";

import {
  Card,
  Image,
  Title,
  Price,
  CardRightBox,
  TitleTrashBox,
  QuantityPriceBox,
  Description,
  ImageContainer,
  RemoveButton,
} from "./styles";

import { BsTrash3 } from "react-icons/bs";
import QuantitySelect from "../QuantitySelect";
import { useCart } from "@/hooks/useCart";

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
  stock,
}: ProductCardProps) {
  const router = useRouter();
  const { removeItem } = useCart();

  function handleRemoveItem(productId: number) {
    removeItem(productId);
  }

  return (
    <Card>
      <ImageContainer>
        <Image src={image} alt={name} title={name} />
      </ImageContainer>

      <CardRightBox>
        <TitleTrashBox>
          <Title onClick={() => router.push(`/produto/${id}`)}>{name}</Title>

          <RemoveButton onClick={() => handleRemoveItem(id)}>
            <BsTrash3 size={22} color="#DE3838" />
          </RemoveButton>
        </TitleTrashBox>

        <Description>{description}</Description>

        <QuantityPriceBox>
          <QuantitySelect productId={id} stock={stock} quantity={quantity} />
          <Price>{priceToBRL(price)}</Price>
        </QuantityPriceBox>
      </CardRightBox>
    </Card>
  );
}
