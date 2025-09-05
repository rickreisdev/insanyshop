"use client";

import Link from "next/link";
import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  HeaderContainer,
  Logo,
  SearchBox,
  CartButton,
  SearchWrapper,
  SearchIconWrapper,
  SearchAndCartWrapper,
} from "./styles";
import { Search } from "lucide-react";
import shoppingBag from "../../assets/svg/shopping-bag.svg";
import { useCart } from "@/hooks/useCart";

export default function Header() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const {cart} = useCart();

  const cartItensCount = cart.totalItems


  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search)}`);
    }
  }

  function linkToCartPage() {
    router.push("/carrinho");
  }

  return (
    <HeaderContainer>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Logo>InsanyShop</Logo>
      </Link>

      <SearchAndCartWrapper>
        <form onSubmit={handleSearch}>
          <SearchWrapper>
            <SearchBox
              type="text"
              placeholder="Procurando por algo específico?"
              value={search}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setSearch(e.target.value)
              }
              aria-label="Procurar produtos"
            />
            <SearchIconWrapper onClick={handleSearch}>
              <Search size={24} color="#737380" />
            </SearchIconWrapper>
          </SearchWrapper>
        </form>

        <div onClick={linkToCartPage} title="Acessar carrinho">
          <CartButton>
            <Image src={shoppingBag} alt="Carrinho de compras" />
            <span>{cartItensCount}</span>
          </CartButton>
        </div>
      </SearchAndCartWrapper>
    </HeaderContainer>
  );
}
