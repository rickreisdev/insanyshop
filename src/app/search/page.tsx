import { searchProducts, getCategories } from "@/services/api";
import ProductCard from "@/components/ProductCard";
import { BackButton } from "@/components/BackButton";
import { FiltersContainer, Main, ProducCardArea } from "./styles";

type ProductFromApi = {
  id: number;
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
    <Main>
      <FiltersContainer>
        <BackButton />
      </FiltersContainer>

      <h1>Exibindo resultados para: &quot;{query}&quot;</h1>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ProducCardArea
        >
          {products.map((p) => (
            <ProductCard
              key={p.id}
              {...p}
              categoryName={categories[p.category]?.name || p.category}
            />
          ))}
        </ProducCardArea>
      )}
    </Main>
  );
}
