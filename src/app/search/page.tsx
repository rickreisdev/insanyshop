import { searchProducts, getCategories } from "@/services/api";
import ProductCard from "@/components/ProductCard";
import { BackButton } from "@/components/BackButton";

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
        padding: "7rem 10rem",
        width: "100%",
        boxSizing: "border-box",
        alignItems: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <BackButton />
      </div>

      <h1>Exibindo resultados para: &quot;{query}&quot;</h1>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(23rem, 1fr))",
            columnGap: "1rem",
            rowGap: "2rem",
            marginTop: "3.5rem",
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
