# PixelScout – Image Search Gallery

PixelScout is a responsive web application that lets users search and explore high‑quality photos using the Unsplash API with JavaScript and the `fetch` API. The focus of the project is on clean UI, client‑side searching, filtering, and sorting with array higher‑order functions.

---

## 🎯 Project Purpose

This project is built as part of a JavaScript API & UI assignment.

It demonstrates:

- Integration with a public REST API (Unsplash Image API)
- Dynamic data fetching with `fetch` and JSON handling
- Search, filtering, and sorting implemented using array higher‑order functions
- Responsive, accessible UI built with modern CSS
- Basic error handling and loading states for API calls

---

## 🌐 Public API Used

**API**: Unsplash JSON API – Search Photos endpoint  
**Docs**: https://unsplash.com/documentation [web:16]  
**Developer Portal**: https://unsplash.com/developers [web:17]  

Key details:

- **Endpoint**:  
  `GET https://api.unsplash.com/search/photos`
- **Important query parameters**:  
  - `query` – keyword to search photos  
  - `page` – page number for pagination  
  - `per_page` – number of results per page  
  - `order_by` – sort order (`relevant`, `latest`) [web:16][web:20]
  - `orientation` – filter by photo orientation (landscape, portrait, squarish)  
  - `color` – filter by dominant color (e.g., `black_and_white`, `blue`, `green`) [web:20]

**Authentication**

Requests to the Unsplash API require an access key:

```http
Authorization: Client-ID YOUR_ACCESS_KEY
```

In this project, the access key is kept outside of the public repository (for example in a separate config file or environment variable) so that it is not exposed in version control. [web:16][web:17]

**API Guidelines & Attribution**

This project follows Unsplash’s API guidelines:

- Uses the hotlinked image URLs from the `photo.urls` properties. [web:18][web:67]
- Displays proper attribution for each photo: photographer name and link back to their Unsplash profile. [web:34]
- Uses `utm_source=pixelscout&utm_medium=referral` in links back to Unsplash where applicable. [web:34]

For more information, see:

- API Guidelines: https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines [web:18]
- Attribution: https://help.unsplash.com/en/articles/2511315-guideline-attribution [web:34]
- Hotlinking Images: https://help.unsplash.com/en/articles/2511271-guideline-hotlinking-images [web:67]
- API Terms: https://unsplash.com/api-terms [web:21]

---

## 🧩 Planned Features (Milestones)

### Milestone 1 – Planning & Setup (current)

- Decide project idea: **image search gallery (PixelScout)**
- Choose public API: **Unsplash Search Photos endpoint**
- Create GitHub repository and initial project structure
- Add this `README.md` describing:
  - Project purpose
  - API details
  - Planned features
  - Technologies and setup

### Milestone 2 – API Integration

- Implement `fetch` requests to the Unsplash Search Photos endpoint
- Display search results as image cards in a responsive grid layout
- Show loading state while fetching data
- Handle basic API errors (network issues, rate limit, empty results)
- Ensure layout works well on mobile, tablet, and desktop screens

### Milestone 3 – Core Interactivity (Array HOFs)

Implement at least three of the following features using array higher‑order functions (HOFs) like `map`, `filter`, `sort`, and `find` (no `for`/`while` loops):

- **Search**:
  - Search photos by keyword and update the gallery dynamically
- **Filtering** (`filter`):
  - Filter by orientation (landscape, portrait, squarish)
  - Filter by color (e.g., black_and_white, blue, green)
- **Sorting** (`sort`):
  - Sort by likes (ascending/descending)
  - Sort by date (latest vs. older) using available metadata
- **Button Interactions**:
  - “View more” button to open full photo or Unsplash details page
  - “Favorite” button to save selected images to a favorites list (using `localStorage`)
- **Dark / Light Mode**:
  - Theme toggle button
  - Persist user preference in `localStorage`

All search, filter, and sort logic will be implemented using array higher‑order functions instead of traditional loops.

### Milestone 4 – Documentation & Deployment

- Refactor and clean up JavaScript and CSS for readability
- Organize code into smaller, reusable modules/functions
- Add final screenshots and detailed usage instructions to the README
- Deploy the app (Netlify, Vercel, or GitHub Pages)
- Verify responsiveness and fix any remaining UI issues

---

## 🛠️ Technologies

- **HTML5** – structure and markup
- **CSS3** (optionally Tailwind CSS or Bootstrap) – styling and layout
- **Vanilla JavaScript (ES6+)** – application logic and interactivity
- **Fetch API** – network requests to Unsplash
- **Git & GitHub** – version control and hosting
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
  │   └─ api.js        // Unsplash API configuration & helper functions
  ├─ assets/
  │   └─ icons/        // icons for theme toggle, loader, etc.
  └─ README.md
```

This structure separates API logic, UI logic, styles, and static assets for better maintainability.

---

## 🚀 Project Setup & Run Instructions

> Note: For Milestone 1, a basic setup and this README are sufficient. The steps below describe how to run the project locally once API integration is implemented.

1. **Clone the repository**

   ```bash
   git clone https://github.com/dhruvchhabra29/PixelScout.git
   cd PixelScout
   ```

2. **Configure Unsplash access key**

   - Create a small config file (for example `src/config.js`) that exports your Unsplash access key.
   - Add this file to `.gitignore` to avoid committing secrets.
   - Example:

   ```js
   export const UNSPLASH_ACCESS_KEY = "your_access_key_here";
   ```

   - In `api.js`, import and use this key instead of hard‑coding it.

3. **Open the app**

   - Open `index.html` directly in your browser, or
   - Use a simple local development server (e.g., Live Server extension in VS Code).

4. **Use PixelScout**

   - Enter a keyword in the search bar to fetch photos.
   - Use filter and sort controls (once implemented) to refine the results.
   - Click “View” or similar buttons to see the photo on Unsplash.

Detailed setup and usage instructions will be updated after API integration (Milestone 2) and interactivity (Milestone 3) are complete.

---

## 📌 Project Status

- Milestone 1: **Planning & setup**
- Milestone 2: **Pending** – API integration and basic gallery view
- Milestone 3: **Pending** – search, filter, sort, favorites, and theme toggle
- Milestone 4: **Pending** – refactor, documentation, and deployment

---

## 📄 License

This project is for educational purposes.  
Photos and media are provided by **Unsplash** and are subject to Unsplash’s license and API terms. [web:21][web:34]