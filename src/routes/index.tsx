import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

import { Home } from "../pages/HomePage";
import { Services } from "../pages/ServicesPage";
import { AboutUs } from "../pages/AboutUsPage";
import { ContactPage } from "../pages/ContactPage";
import BlogsPage from "../pages/BlogsPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import FAQsPage from "../pages/FAQsPage";

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
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/blogs/:slug",
        element: <BlogDetailPage />,
      },
      {
        path: "/faqs",
        element: <FAQsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
