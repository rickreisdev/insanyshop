import type { Metadata } from "next";
import { Inter} from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="pt-BR">
      <body className={inter.variable}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
