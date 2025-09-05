import { getProducts, getCategories } from "@/services/api";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";
import SortSelect from "@/components/SortSelect";
import Breadcrumb from "@/components/Breadcrumb";
import Pagination from "@/components/Pagination";

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

type CategoryPageProps = {
  params: { slug: string };
  searchParams?: { page?: string };
};

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = params;

  let products: ProductFromApi[] = [];
  let categoriesArray: Category[] = [];
  let categoriesMap: Record<string, Category> = {};
  let pagination = {
    currentPage: 1,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
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

    const data = await getProducts(slug, page);

    products = data.products || data;
    pagination = data.pagination;
  } catch (error) {
    console.error(error);
    notFound();
  }

  const currentCategory = categoriesMap[slug].name || slug;

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
        <Breadcrumb currentCategory={currentCategory} />

        <SortSelect />
      </div>

      <div
        style={{
          paddingTop: "2.5rem",
        }}
      >
        <h1 style={{ fontFamily: "Inter, sans-serif", paddingBottom: "1rem" }}>
          {currentCategory}
        </h1>

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
      </div>
    </main>
  );
}
