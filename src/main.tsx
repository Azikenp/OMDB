import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetail from "./components/MovieDetail.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  { path: "/movie/:id", element: <MovieDetail /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
