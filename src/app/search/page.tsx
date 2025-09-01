import { searchProducts } from "@/services/api";
import ProductCard from "@/components/ProductCard";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";
  let products: Product[] = [];

  if (query) {
    try {
      const data = await searchProducts(query);
      products = data.products || data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Resultados para: &quot;{query}&quot;</h1>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </main>
  );
}
