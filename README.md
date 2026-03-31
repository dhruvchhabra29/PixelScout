# PixelScout – Recipe Finder

PixelScout is a responsive web application that lets users search and explore recipes from around the world using **TheMealDB** public API. The app is built with vanilla JavaScript and the `fetch` API, and focuses on clean UI plus client‑side searching, filtering, and sorting using array higher‑order functions.

---

## 🎯 Project Purpose

This project is built as part of a JavaScript API & UI assignment.

It demonstrates:

- Integration with a public REST API (TheMealDB Recipe API)
- Dynamic data fetching with `fetch` and JSON handling
- Search, filtering, and sorting implemented using array higher‑order functions
- Responsive, user‑friendly UI created with modern CSS
- Basic error handling and loading states for API calls

---

## 🌐 Public API Used

**API**: TheMealDB – Free Recipe API  
**Base URL**: `https://www.themealdb.com/api/json/v1/1`  
**Docs**: https://www.themealdb.com/api.php [web:51][web:59]

Key endpoints used in this project:

- **Search meals by name**

  ```text
  GET https://www.themealdb.com/api/json/v1/1/search.php?s={query}
  ```

  Returns meals whose name matches the search query (e.g., `chicken`, `pasta`). [web:51][web:42]

- **List categories**

  ```text
  GET https://www.themealdb.com/api/json/v1/1/list.php?c=list
  ```

  Provides all available meal categories (e.g., Beef, Chicken, Dessert). [web:51]

- **List areas (cuisines)**

  ```text
  GET https://www.themealdb.com/api/json/v1/1/list.php?a=list
  ```

  Provides all areas/cuisines (e.g., Italian, Indian, Mexican). [web:51]

- **Lookup full meal details by ID**

  ```text
  GET https://www.themealdb.com/api/json/v1/1/lookup.php?i={idMeal}
  ```

  Returns complete instructions, ingredients, and extra details for a single recipe. [web:51][web:45]

The API returns JSON with a `meals` array, where each meal includes fields such as `idMeal`, `strMeal`, `strCategory`, `strArea`, `strInstructions`, and `strMealThumb` (image URL). [web:45]

The free test key is built into the URL (`/api/json/v1/1/`), so **no extra authentication or secret key is required**, and the endpoints can safely be used directly in the code. [web:51][web:63]

---

## 🧩 Planned Features (Milestones)

### Milestone 1 – Planning & Setup (current)

- Decide project idea: **Recipe Finder (PixelScout)**
- Choose public API: **TheMealDB free recipe API**
- Create GitHub repository and initial project structure
- Add this `README.md` describing:
  - Project purpose
  - API being used
  - Planned features
  - Technologies and setup

### Milestone 2 – API Integration

- Use `fetch` to call TheMealDB search endpoint (`search.php?s=`) to search recipes by name
- Display search results as recipe cards in a responsive grid
- Show loading state while fetching data
- Handle API errors (network issues or no results)
- Ensure layout is responsive on mobile, tablet, and desktop

### Milestone 3 – Core Interactivity (Array HOFs)

Implement at least three of the following features using array higher‑order functions such as `map`, `filter`, `sort`, and `find` (no `for`/`while` loops):

- **Search**:
  - Search recipes by name (e.g., “pasta”, “chicken”) and update the gallery dynamically

- **Filtering** (`filter`):
  - Filter recipes by **category** (e.g., Beef, Chicken, Dessert)
  - Filter recipes by **area/cuisine** (e.g., Italian, Indian, Mexican)

- **Sorting** (`sort`):
  - Sort recipes alphabetically by name (A–Z / Z–A)
  - Sort recipes by area (group cuisines together, A–Z / Z–A)

- **Button Interactions**:
  - “View Recipe” button to open the full recipe page on TheMealDB
  - Later enhancement: “Favorite” button to save recipes to a favorites list (using `localStorage`)

- **Dark / Light Mode**:
  - Theme toggle button to switch between dark and light themes
  - Persist user preference in `localStorage`

All search, filter, and sort logic will be implemented using array higher‑order functions instead of traditional loops.

### Milestone 4 – Documentation & Deployment

- Refactor and clean up JavaScript and CSS
- Break logic into smaller, reusable functions/modules
- Add final screenshots and detailed usage instructions to the README
- Deploy the app (Netlify, Vercel, or GitHub Pages)
- Verify responsiveness and fix any remaining UI or UX issues

---

## 🛠️ Technologies

- **HTML5** – structure and markup
- **CSS3** (optionally Tailwind CSS / Bootstrap) – styling and layout
- **Vanilla JavaScript (ES6+)** – application logic and interactivity
- **Fetch API** – HTTP requests to TheMealDB
- **Git & GitHub** – version control and repository hosting
- **Netlify / Vercel / GitHub Pages** – planned deployment platforms

---

## 📁 Project Structure (Planned)

```text
PixelScout/
  ├─ index.html
  ├─ styles/
  │   └─ style.css
  ├─ src/
  │   ├─ app.js        // main application logic and UI rendering
  │   └─ api.js        // TheMealDB API helper functions
  ├─ assets/
  │   └─ icons/        // icons, loaders, etc. (optional)
  └─ README.md
```

This structure separates API logic, UI rendering, styles, and assets to keep the codebase clean and maintainable.

---

## 🚀 Project Setup & Run Instructions

> For Milestone 1, it is enough to have the repository, basic structure, and this README. The steps below describe how to run the project locally once implementation begins.

1. **Clone the repository**

   ```bash
   git clone https://github.com/dhruvchhabra29/PixelScout.git
   cd PixelScout
   ```

2. **Open the app**

   - Open `index.html` directly in your browser, or  
   - Use a simple local server (for example, the Live Server extension in VS Code).

3. **Use PixelScout (after integration)**

   - Enter a recipe name into the search bar (e.g., “chicken”, “pasta”).
   - Use category and area (cuisine) dropdowns to filter results.
   - Use sort options to order recipes by name or area.
   - Click “View Recipe” on a card to open the full recipe on TheMealDB site.

More detailed setup and usage instructions will be added after Milestone 2 and Milestone 3 are completed.

---

## 📌 Project Status

- Milestone 1: **Planning & setup**
- Milestone 2: **Pending** – API integration and basic recipe gallery
- Milestone 3: **Pending** – search, filter, sort, and interactive features
- Milestone 4: **Pending** – refactoring, documentation, and deployment

---

## 📄 License

This project is for educational purposes.  
Recipe data and images are provided by **TheMealDB** and are subject to their own terms of use. [web:51][web:59][web:63]