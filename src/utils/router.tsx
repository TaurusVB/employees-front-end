import { createBrowserRouter } from "react-router-dom";

import { Paths } from "./paths";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import Layout from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Layout />,
    children: [
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
    ],
  },
]);
