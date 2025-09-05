import { getCategories, getProduct } from "@/services/api";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import {
  CategoryNamePriceWrapper,
  DescriptionWrapper,
  Image,
  InfoDescriptionWrapper,
  InfoWrapper,
  SingleProductCard,
} from "./styles";
import { priceToBRL } from "@/utils/formatting";
import { BackButton } from "@/components/BackButton";

type ProductFromApi = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  stock: number;
  brand: string;
};

type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
};

type ProductPageProps = {
  params: { id: number };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  let product: ProductFromApi | null = null;
  let categoryArray: Category[] = [];
  let categoriesMap: Record<string, Category> = {};
  let productCategory: Category | null = null;

  try {
    const cats = await getCategories();
    categoryArray = cats.categories;

    categoriesMap = categoryArray.reduce(
      (acc: Record<string, Category>, cat: Category) => {
        acc[cat.id] = cat;
        return acc;
      },
      {} as Record<string, Category>
    );

    const data = await getProduct(id);

    product = data.product || data;

    if (product) {
      productCategory = categoriesMap[product.category] || null;
    }
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

      <div
        style={{
          paddingTop: "0rem",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {product && (
            <SingleProductCard>
              <Image src={product.image} alt={product.name} />

              <InfoWrapper>
                <InfoDescriptionWrapper>
                  <CategoryNamePriceWrapper>
                    <span
                      style={{
                        fontSize: "1rem",
                        fontWeight: "400",
                        color: "#41414D",
                      }}
                    >
                      {productCategory?.name}
                    </span>

                    <h1
                      style={{
                        fontSize: "2rem",
                        fontWeight: "300",
                        color: "#41414D",
                      }}
                    >
                      {product.name}
                    </h1>

                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#46AB6A",
                      }}
                    >
                      {priceToBRL(product.price)}
                    </h3>
                  </CategoryNamePriceWrapper>

                  <DescriptionWrapper>
                    <h3
                      style={{
                        fontSize: "1rem",
                        color: "#737380",
                        fontWeight: "500",
                        textTransform: "uppercase",
                      }}
                    >
                      Descrição
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        color: "#41414D",
                        marginTop: "1.5rem",
                      }}
                    >
                      {product.description}
                    </p>
                  </DescriptionWrapper>
                </InfoDescriptionWrapper>

                <AddToCartButton
                  id={id}
                  name={product.image}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  stock={product.stock}
                />
              </InfoWrapper>
            </SingleProductCard>
          )}
        </div>
      </div>
    </main>
  );
}
