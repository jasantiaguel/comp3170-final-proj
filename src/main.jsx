import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import { CategoriesHome } from './pages/categories/index.jsx'
import './css/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GoodEats } from './pages/categories/goodEats.jsx'
import { Parks } from './pages/categories/parks.jsx'
import { Beaches } from './pages/categories/beaches.jsx'
import { Saved } from './pages/Saved.jsx'

import Results from './pages/results.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories",
    element: <CategoriesHome />
  },
  {
    path: "/categories/good-eats",
    element: <GoodEats />
  },
  {
    path: "/categories/parks",
    element: <Parks />
  },
  {
    path: "/categories/beaches",
    element: <Beaches />
  },
  {
    path: "/saved",
    element: <Saved />
  },
  {
    path: "/results",
    element: <Results />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
