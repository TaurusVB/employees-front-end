import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

import { Paths } from "./utils/paths";
import Layout from "./components/Layout";

import "./App.css";

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

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
