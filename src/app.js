import { searchMealsByName, listCategories, listAreas, getMealById } from "./api.js";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const categorySelect = document.getElementById("category-select");
const areaSelect = document.getElementById("area-select");
const sortSelect = document.getElementById("sort-select");

const statusEl = document.getElementById("status");
const statusTextEl = document.getElementById("status-text");
const galleryEl = document.getElementById("gallery");

let allMeals = [];
let filteredMeals = [];

function showStatus(message, type = "info") {
  statusEl.classList.remove("hidden");
  statusTextEl.textContent = message;
  statusEl.style.borderColor = type === "error" ? "#b91c1c" : "#1e293b";
  statusEl.style.color = type === "error" ? "#fecaca" : "#e5e7eb";
}

function hideStatus() {
  statusEl.classList.add("hidden");
  statusTextEl.textContent = "";
}

function setLoading(isLoading) {
  searchForm.querySelector("button[type='submit']").disabled = isLoading;
  if (isLoading) showStatus("Loading recipes...", "info");
}

function applyFilters(meals) {
  const category = categorySelect.value;
  const area = areaSelect.value;

  return meals
    .filter((meal) => (!category ? true : meal.strCategory === category))
    .filter((meal) => (!area ? true : meal.strArea === area));
}

function applySorting(meals) {
  const sortValue = sortSelect.value;
  if (!sortValue) return meals;

  const copy = [...meals];

  if (sortValue === "name-asc") return copy.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
  if (sortValue === "name-desc") return copy.sort((a, b) => b.strMeal.localeCompare(a.strMeal));
  if (sortValue === "area-asc") return copy.sort((a, b) => (a.strArea || "").localeCompare(b.strArea || ""));
  if (sortValue === "area-desc") return copy.sort((a, b) => (b.strArea || "").localeCompare(a.strArea || ""));

  return meals;
}

function renderMeals(meals) {
  galleryEl.innerHTML = "";

  if (!meals || meals.length === 0) {
    showStatus("No recipes found. Try another search.", "info");
    return;
  }

  hideStatus();

  meals.forEach((meal) => {
    const card = document.createElement("article");
    card.className = "card";

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "card-img-wrapper";

    const img = document.createElement("img");
    img.className = "card-img";
    img.src = meal.strMealThumb;
    img.alt = meal.strMeal;
    img.loading = "lazy";
    imgWrapper.appendChild(img);

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = meal.strMeal;

    const meta = document.createElement("p");
    meta.className = "card-meta";
    meta.textContent = `${meal.strCategory || "—"} • ${meal.strArea || "—"}`;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const viewBtn = document.createElement("button");
    viewBtn.className = "btn btn-primary";
    viewBtn.textContent = "View Recipe";
    viewBtn.addEventListener("click", () => {
      window.open(`https://www.themealdb.com/meal/${meal.idMeal}`, "_blank", "noopener");
    });

    actions.appendChild(viewBtn);
    body.appendChild(title);
    body.appendChild(meta);
    body.appendChild(actions);
    card.appendChild(imgWrapper);
    card.appendChild(body);
    galleryEl.appendChild(card);
  });
}

function refreshView() {
  const filtered = applyFilters(allMeals);
  filteredMeals = applySorting(filtered);
  renderMeals(filteredMeals);
}

async function initFilters() {
  try {
    const [categories, areas] = await Promise.all([listCategories(), listAreas()]);

    categories
      .map((c) => c.strCategory)
      .sort()
      .forEach((cat) => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        categorySelect.appendChild(option);
      });

    areas
      .map((a) => a.strArea)
      .sort()
      .forEach((area) => {
        const option = document.createElement("option");
        option.value = area;
        option.textContent = area;
        areaSelect.appendChild(option);
      });
  } catch (err) {
    console.error(err);
    showStatus("Failed to load filter options.", "error");
  }
}

async function loadAllMeals() {
  setLoading(true);
  try {
    const categories = await listCategories();

    const results = await Promise.all(
      categories.map((c) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(c.strCategory)}`
        )
          .then((r) => r.json())
          .then((d) =>
            (d.meals || []).map((meal) => ({ ...meal, strCategory: c.strCategory }))
          )
          .catch(() => [])
      )
    );

    const seen = new Set();
    const stubs = results.flat().filter((meal) => {
      if (!meal || seen.has(meal.idMeal)) return false;
      seen.add(meal.idMeal);
      return true;
    });

    const BATCH = 20;
    const enriched = [];

    for (let i = 0; i < stubs.length; i += BATCH) {
      const batch = stubs.slice(i, i + BATCH);
      const full = await Promise.all(
        batch.map((m) => getMealById(m.idMeal).catch(() => m))
      );
      enriched.push(...full.filter(Boolean));
      showStatus(`Loading recipes... ${enriched.length} / ${stubs.length}`, "info");
    }

    allMeals = enriched;
    refreshView();
  } catch (err) {
    console.error(err);
    showStatus("Failed to load recipes. Please try again.", "error");
  } finally {
    setLoading(false);
  }
}

async function performSearch(query) {
  if (!query.trim()) {
    await loadAllMeals();
    return;
  }

  setLoading(true);
  try {
    const meals = await searchMealsByName(query);
    allMeals = meals;
    refreshView();
  } catch (err) {
    console.error(err);
    showStatus("Failed to load recipes. Please try again.", "error");
  } finally {
    setLoading(false);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  performSearch(searchInput.value.trim());
});

categorySelect.addEventListener("change", refreshView);
areaSelect.addEventListener("change", refreshView);
sortSelect.addEventListener("change", refreshView);

// Init
searchInput.value = "";
initFilters();
loadAllMeals();
