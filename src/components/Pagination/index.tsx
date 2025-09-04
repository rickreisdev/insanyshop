"use client";

import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      style={{
        display: "flex",
        gap: "0.5rem",
        justifyContent: "center",
        marginTop: "2rem",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.9rem",
        color: "#737380",
      }}
    >
      <Link
        href={`/?page=${currentPage - 1}`}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "2rem",
          height: "2rem",
          borderRadius: "8px",
          background: "#E9E9F0",
          color: "#737380",
          textDecoration: "none",
          fontSize: "0.9rem",
          textAlign: "center",
        }}
      >
        &lt;
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={`/?page=${page}`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2rem",
            height: "2rem",
            borderRadius: "8px",
            background: "#E9E9F0",
            color: "#737380",
            border: page === currentPage ? "1px solid #A212DF" : "none",
            textDecoration: "none",
            fontSize: "0.9rem",
            textAlign: "center",
          }}
        >
          {page}
        </Link>
      ))}

      <Link
        href={`/?page=${currentPage + 1}`}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "2rem",
          height: "2rem",
          borderRadius: "8px",
          background: "#E9E9F0",
          color: "#737380",
          textDecoration: "none",
          fontSize: "0.9rem",
          textAlign: "center",
        }}
      >
        &gt;
      </Link>
    </nav>
  );
}
