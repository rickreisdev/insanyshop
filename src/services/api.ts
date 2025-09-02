const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(page = 1, limit = 10) {
  const res = await fetch(
    `${BASE_URL}/api/products?page=${page}&limit=${limit}`
  );
  return res.json();
}

export async function getProduct(id: string) {
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
  const res = await fetch(`${BASE_URL}/api/products?search=${encodeURIComponent(term)}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  const data = await res.json();
  console.log(data);
  return data;
}
