"use client";

import { useCart } from "@/hooks/useCart";

import { BackButton } from "@/components/BackButton";
import { CheckoutButton } from "@/components/CheckoutButton";
import CartProductCard from "@/components/CartProductCard";

import { priceToBRL } from "@/utils/formatting";

import {
  CartArea,
  CartIcon,
  Container,
  EmptyContainer,
  InfoArea,
  InfoLine,
  Links,
  Main,
  FiltersContainer,
  SemiBoldTotalLine,
  Summary,
} from "./styles";

import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  const { cart } = useCart();

  const totalPrice = cart.totalPrice;
  const totalItems = cart.totalItems;
  const shippingCost = cart.shippingCost;

  const emptyCart = cart.items.length === 0;
  const totalPriceShipping = totalPrice + shippingCost;

  return (
    <Main
    >
      <FiltersContainer
      >
        <BackButton />
      </FiltersContainer>

      {!emptyCart && totalItems > 0 && (
        <Container>
          <CartArea>
            <div>
              <h2 id="page-title"
                style={{
                  color: "#41414D",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  marginTop: "2.5rem",
                }}
              >
                Seu carrinho
              </h2>

              <h3 id="page-total"
                style={{
                  fontSize: "1rem",
                  color: "#41414D",
                }}
              >
                <span
                  style={{
                    fontWeight: "300",
                  }}
                >
                  Total &#40;{totalItems} produto
                  {totalItems === 1 ? "" : "s"}&#41;
                </span>

                <span style={{ marginLeft: "1px" }}>
                  {" "}
                  {priceToBRL(totalPrice)}
                </span>
              </h3>
            </div>

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
            <InfoArea>
              <h2
                style={{
                  color: "#41414D",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
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

              <div
                style={{
                  marginTop: "1.5rem",
                }}
              >
                <CheckoutButton />
              </div>
            </InfoArea>

            <Links>
              <a href="#">Ajuda</a>
              <a href="#">Reembolsos</a>
              <a href="#">Entregas e Fretes</a>
              <a href="#">Trocas e Devoluções</a>
            </Links>
          </Summary>
        </Container>
      )}

      {emptyCart && totalItems === 0 && (
        <EmptyContainer>
          <CartIcon>
            <ShoppingCart size={42} color="#41414D" />
          </CartIcon>

          <h2
            style={{
              color: "#41414D",
              fontSize: "1.5rem",
              fontWeight: "500",
              textTransform: "uppercase",
              margin: "0",
              marginTop: "1rem",
            }}
          >
            Seu carrinho está vazio
          </h2>

          <h3
            style={{
              fontSize: "1rem",
              color: "#41414D",
              margin: "0",
            }}
          >
            <span
              style={{
                fontWeight: "300",
              }}
            >
              Adicione produtos para começar!
            </span>
          </h3>
        </EmptyContainer>
      )}
    </Main>
  );
}
