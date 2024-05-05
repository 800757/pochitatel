import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/auth";
import Reg from "../pages/reg";
import Layout from "../pages/layout";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Auth />,
      },
      {
        path: "reg",
        element: <Reg />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);
