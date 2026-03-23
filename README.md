# PixelScout – Unsplash Image Search Gallery

PixelScout is a responsive web application that lets users search and explore high‑quality photos from the Unsplash API using JavaScript and `fetch`. The app focuses on clean UI, client‑side searching, filtering, and sorting using array higher‑order functions.

## Project Purpose

This project is built as part of the JavaScript API & UI assignment.  
It demonstrates:

- Integration with a public REST API (Unsplash Image API)
- Dynamic data fetching with `fetch` and JSON handling
- Search, filtering, and sorting implemented using array HOFs
- Responsive UI and interactive user experience with modern CSS

## Public API Used

**API**: Unsplash JSON API – Search Photos endpoint  

Key details:

- Endpoint: `https://api.unsplash.com/search/photos`
- Method: `GET`
- Important query parameters:
  - `query` – keyword to search photos
  - `page` – page number for pagination
  - `per_page` – number of results per page
  - `order_by` – sort order (`relevant`, `latest`)
- Authorization:
  - Uses `Authorization: Client-ID YOUR_ACCESS_KEY` header

All images are displayed using the original image URLs returned by the Unsplash API, following their API guidelines and attribution rules.

## Planned Features (Milestones)

### Milestone 1 – Planning (current)

- Decide project idea (image search gallery)
- Choose Unsplash API and read documentation
- Create GitHub repository and initial project structure
- Add this README with project description and setup plan

### Milestone 2 – API Integration

- Implement `fetch` requests to Unsplash Search Photos endpoint
- Display search results as image cards in a responsive grid
- Show loading state while fetching data
- Handle basic API errors and empty results gracefully
- Ensure layout is responsive across mobile, tablet, and desktop

### Milestone 3 – Core Interactivity (Array HOFs)

Implement at least three of:

- **Search**: Search photos by keyword using client‑side array methods where applicable
- **Filtering**: Filter results with array HOFs (`filter`)  
  Examples:
  - Filter by orientation (landscape, portrait, squarish)
  - Filter by color (e.g., black_and_white, blue, green)
- **Sorting**: Sort results with array HOFs (`sort`)  
  Examples:
  - Sort by likes (ascending/descending)
  - Sort by latest vs. relevant
- **Button Interactions**:
  - “View more” button to open full photo or details
  - “Favorite” button (stored in localStorage)
- **Dark / Light Mode**:
  - Theme toggle button
  - Persist user preference in localStorage

All search, filter, and sort logic will be implemented using array higher‑order functions (`map`, `filter`, `sort`, etc.) instead of `for`/`while` loops.

### Milestone 4 – Documentation & Deployment

- Refactor and clean up JavaScript and CSS
- Add final screenshots and usage instructions to README
- Deploy the app (Netlify/Vercel/GitHub Pages)
- Verify mobile responsiveness and fix UI issues

## Technologies

- HTML5
- CSS3 (or Tailwind CSS / Bootstrap)
- Vanilla JavaScript (ES6+)
- `fetch` API for network requests
- Git & GitHub for version control
- Netlify / Vercel (planned) for deployment

## Project Setup & Run Instructions

(Milestone 1 – basic instructions, will be expanded later.)

1. Clone the repository:
   ```bash
   https://github.com/dhruvchhabra29/PixelScout.git
   cd PixelScout
