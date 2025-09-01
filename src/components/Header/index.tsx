"use client"; // necessário no App Router do Next 13+

import Link from "next/link";
import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { HeaderContainer, Logo, SearchBox, CartButton } from "./styles";

export default function Header() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search)}`);
    }
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>InsanyShop</Logo>
      </Link>

      <form onSubmit={handleSearch}>
        <SearchBox
          type="text"
          placeholder="Buscar produtos..."
          value={search}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSearch(e.target.value)}
        />
      </form>

      <Link href="/carrinho">
        <CartButton>
          🛒 <span>0</span>
        </CartButton>
      </Link>
    </HeaderContainer>
  );
}
