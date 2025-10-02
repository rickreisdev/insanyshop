"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo-rickreis.png";
import {
  FooterContainer,
  LogoImage,
  FooterText,
} from "@/components/Footer/styles";

export default function Footer() {
  const pathname = usePathname();

  if (!pathname) return null;
  if (pathname.startsWith("/carrinho") || pathname.startsWith("/search")) {
    return null;
  }

  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        {year} | Desenvolvido por
        <LogoImage>
          <a
            href="https://rickreis.com.br/dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={logo} alt="Rick Reis" width={110} height={28} />
          </a>
        </LogoImage>
      </FooterText>
    </FooterContainer>
  );
}
