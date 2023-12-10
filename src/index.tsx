import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import { Paths } from "./utils/paths";
import "./index.css";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <HomePage />,
  },
  {
    path: Paths.login,
    element: <LoginPage />,
  },
  {
    path: Paths.register,
    element: <RegisterPage />,
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
