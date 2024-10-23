import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import { CategoriesHome } from './pages/categories/index.jsx'
import './css/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GoodEats } from './pages/categories/good-eats.jsx'
import { Parks } from './pages/categories/parks.jsx'
import { Beaches } from './pages/categories/beaches.jsx'

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
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
