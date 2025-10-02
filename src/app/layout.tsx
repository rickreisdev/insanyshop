import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Saira } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/global.css";
import { CartProvider } from "@/contexts/CartContext";
import { ToastContainer } from "react-toastify";

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
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={saira.variable}>
        <CartProvider>
          <Header />
          <main>
            {children}{" "}
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              theme="dark"
            />
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
