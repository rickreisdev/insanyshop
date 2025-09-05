"use client";

import { notFound } from "next/navigation";
import { useCart } from "@/hooks/useCart";

import { BackButton } from "@/components/BackButton";
import { CheckoutButton } from "@/components/CheckoutButton";
import {
  CartArea,
  Container,
  InfoLine,
  Links,
  SemiBoldTotalLine,
  Summary,
} from "./styles";
import CartProductCard from "@/components/CartProductCard";
import { priceToBRL } from "@/utils/formatting";

type ProductFromCart = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  stock: number;
  brand: string;
};

export default function CartPage() {
  const { cart } = useCart();

  const totalPrice = cart.totalPrice;
  const totalItems = cart.totalItems;
  const shippingCost = cart.shippingCost;

  const totalPriceShipping = totalPrice + shippingCost;

  try {
    console.log("Carrinho", cart);
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <main
      style={{
        padding: "7rem 10rem",
        width: "100%",
        boxSizing: "border-box",
        alignItems: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <BackButton />
      </div>

      <Container>
        <CartArea>
          <h2
            style={{
              color: "#41414D",
              fontSize: "1.5rem",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            Seu carrinho
          </h2>

          <h3>
            Total &#40;{totalItems} produto
            {totalItems === 1 ? "" : "s"}&#41; {priceToBRL(totalPrice)}
          </h3>

          {cart.items.map((product) => (
            <CartProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              stock={product.stock}
            />
          ))}
        </CartArea>

        <Summary>
          <h2
            style={{
              color: "#41414D",
              fontSize: "1.25rem",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            Resumo do Pedido
          </h2>

          <InfoLine>
            <span>Subtotal de produtos</span>
            <span>{priceToBRL(totalPrice)}</span>
          </InfoLine>

          <InfoLine>
            <span>Entrega</span>
            <span>{priceToBRL(shippingCost)}</span>
          </InfoLine>

          <SemiBoldTotalLine>
            <span>Total</span>
            <span>{priceToBRL(totalPriceShipping)}</span>
          </SemiBoldTotalLine>

          <CheckoutButton />

          <Links>
            <a href="#">Ajuda</a>
            <a href="#">Reembolsos</a>
            <a href="#">Entregas e Fretes</a>
            <a href="#">Trocas e Devoluções</a>
          </Links>
        </Summary>
      </Container>
    </main>
  );
}
