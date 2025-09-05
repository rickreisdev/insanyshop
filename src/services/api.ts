const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(category?: string, page = 1, limit = 10) {
  const query = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (category) {
    query.append("category", category);
  }

  const res = await fetch(`${BASE_URL}/api/products?${query.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar produtos");
  }
  return res.json();
}

export async function getProduct(id: number) {
  const res = await fetch(`${BASE_URL}/api/products/${id}`);
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/api/categories`);
  if (!res.ok) throw new Error("Erro ao buscar categorias");

  const data = await res.json();

  return data;
}

export async function searchProducts(term: string) {
  const res = await fetch(
    `${BASE_URL}/api/products?search=${encodeURIComponent(term)}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  const data = await res.json();
  return data;
}
