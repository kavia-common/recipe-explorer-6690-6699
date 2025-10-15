# RecipeIngredient Page (Figma 100:2323)

This page implements a pixel-accurate version of the Recipe/Ingrident screen using modular React components and the Pure White theme.

## How to view

- Start the app: `npm start`
- Navigate to: `http://localhost:3000/recipe/ingredient`

The app conditionally renders this page when `window.location.pathname === "/recipe/ingredient"`.

## Adding proper routes (optional)

If you want to use React Router:

1. Install: `npm install react-router-dom`
2. Wrap the app in `BrowserRouter` (in `src/index.js`):

```jsx
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

3. In `src/App.js`, add:

```jsx
import { Routes, Route } from "react-router-dom";
import RecipeIngredient from "./pages/RecipeIngredient";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/ingredient" element={<RecipeIngredient />} />
    </Routes>
  );
}
```

## Accessibility

- ARIA roles for tabs/tabpanel
- Keyboard support: Left/Right/Home/End to navigate tabs
- Focus-visible outlines for keyboard users
- Respects `prefers-reduced-motion`

## Assets

All images are referenced via `/assets/figmaimages/*`. These have been copied into `public/assets/figmaimages/` to avoid 404s.
