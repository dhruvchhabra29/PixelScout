const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchMealsByName(query) {
  const res = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error(`TheMealDB error: ${res.status}`);
  const data = await res.json();
  return data.meals || [];
}

export async function getMealById(id) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  if (!res.ok) throw new Error(`TheMealDB error: ${res.status}`);
  const data = await res.json();
  return data.meals ? data.meals[0] : null;
}

export async function listCategories() {
  const res = await fetch(`${BASE_URL}/list.php?c=list`);
  if (!res.ok) throw new Error("Failed to load categories");
  const data = await res.json();
  return data.meals || [];
}

export async function listAreas() {
  const res = await fetch(`${BASE_URL}/list.php?a=list`);
  if (!res.ok) throw new Error("Failed to load areas");
  const data = await res.json();
  return data.meals || [];
}
