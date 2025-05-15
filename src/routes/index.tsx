import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

import { Home } from "../pages/HomePage";
import { Services } from "../pages/ServicesPage";
import { AboutUs } from "../pages/AboutUsPage";
import { ContactPage } from "../pages/ContactPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
