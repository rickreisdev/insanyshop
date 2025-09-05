import { getProducts, getCategories } from "@/services/api";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import CategoriesSelect from "@/components/CategoriesSelect";
import SortSelect from "@/components/SortSelect";
import Pagination from "@/components/Pagination";
import MainCategoriesCard from "@/components/MainCategoriesCard";

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

type HomeProps = {
  searchParams?: { page?: string };
};

export default async function Home({ searchParams }: HomeProps) {
  let products: ProductFromApi[] = [];
  let categoriesArray: Category[] = [];
  let categoriesMap: Record<string, Category> = {};
  let pagination = {
    currentPage: 1,
    totalPages: 1,
  };

  try {
    const cats = await getCategories();
    categoriesArray = cats.categories;

    categoriesMap = categoriesArray.reduce(
      (acc: Record<string, Category>, cat: Category) => {
        acc[cat.id] = cat;
        return acc;
      },
      {} as Record<string, Category>
    );

    const page = Number(searchParams?.page) || 1;
    const data = await getProducts(undefined, page);

    products = data.products || data;
    pagination = data.pagination;
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <main
      style={{
        padding: "7rem 10rem",
        width: "100%",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CategoriesSelect categories={categoriesArray} />

        <SortSelect />
      </div>

      <div
        style={{
          paddingTop: "2.5rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <h1 style={{ paddingBottom: "1rem" }}>Todos os Produtos</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(23rem, 1fr))",
            columnGap: "1rem",
            rowGap: "2rem",
            marginTop: "2rem",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              categoryName={
                categoriesMap[product.category]?.name || product.category
              }
            />
          ))}
        </div>

        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <h1 style={{ paddingBottom: "1rem" }}>Principais categorias</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {categoriesArray.map((cat) => (
              <MainCategoriesCard
                key={cat.id}
                id={cat.id}
                name={cat.name}
                productCount={cat.productCount}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
