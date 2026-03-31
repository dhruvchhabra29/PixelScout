const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchMealsByName(query) {
  const url = `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`TheMealDB error: ${res.status}`);
  }
  const data = await res.json();
  return data.meals || [];
}

export async function listCategories() {
  const url = `${BASE_URL}/list.php?c=list`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to load categories");
  const data = await res.json();
  return data.meals || [];
}

export async function listAreas() {
  const url = `${BASE_URL}/list.php?a=list`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to load areas");
  const data = await res.json();
  return data.meals || [];
}