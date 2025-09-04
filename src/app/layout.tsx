import type { Metadata } from "next";
import { Inter} from "next/font/google";
import { Saira } from "next/font/google";
import Header from "@/components/Header";
import "../styles/global.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "InsanyShop",
  description: "Site de e-commerce simples desenvolvido no desafio técnico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={saira.variable}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
