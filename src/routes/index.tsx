import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

import { Home } from "../pages/HomePage";
import { Services } from "../pages/ServicesPage";
import { AboutUs } from "../pages/AboutUsPage";
import { ContactPage } from "../pages/ContactPage";
import { StreamingTv } from "../pages/ServicesPage/StreamingTvPage";
import { TraditionalTv } from "../pages/ServicesPage/TraditionalTvPage";
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
        path: "/services/streaming-tv",
        element: <StreamingTv />,
      },
      {
        path: "/services/traditional-tv",
        element: <TraditionalTv />,
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
