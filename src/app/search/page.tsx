import { searchProducts, getCategories } from "@/services/api";
import ProductCard from "@/components/ProductCard";

type ProductFromApi = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  stock: number;
};

type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";
  let products: ProductFromApi[] = [];
  let categories: Record<string, Category> = {};

  if (query) {
    try {
      const data = await searchProducts(query);
      products = data.products || data;

      const cats = await getCategories();
      categories = cats.categories.reduce(
        (acc: Record<string, Category>, cat: Category) => {
          acc[cat.id] = cat;
          return acc;
        },
        {} as Record<string, Category>
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main
      style={{
        padding: " 10rem",
        width: "100%",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontFamily: "Inter, sans-serif" }}>
        Exibindo resultados para: &quot;{query}&quot;
      </h1>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(23rem, 1fr))",
            columnGap: "1rem",
            rowGap: "2rem",
            marginTop: "1rem",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {products.map((p) => (
            <ProductCard
              key={p.id}
              {...p}
              categoryName={categories[p.category]?.name || p.category}
            />
          ))}
        </div>
      )}
    </main>
  );
}
