"use client";

import Link from "next/link";

type Props = {
  currentCategory: string;
};

export default function Breadcrumb({ currentCategory }: Props) {
  return (
    <nav
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "0.9rem",
        color: "#737380",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "#737380" }}>
        Produtos
      </Link>
      {" / "}
      <span style={{ color: "#161616", fontWeight: 400 }}>
        {currentCategory}
      </span>
    </nav>
  );
}
