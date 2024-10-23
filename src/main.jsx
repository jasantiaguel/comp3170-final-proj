import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from 'react-router-dom';
import App from './App.jsx'
import TestPage from "./testpage.jsx"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <TestPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
