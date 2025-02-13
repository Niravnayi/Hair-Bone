import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainLayoutWrapper from "./Layouts/mainLayout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "pk_test_Z3VpZGluZy10cmVlZnJvZy00Ni5jbGVyay5hY2NvdW50cy5kZXYk";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Outlet />,

        children: [
          {
            path: "/",
            element: <MainLayoutWrapper />,
            children: [
              {
                index: true,
                element: <Home />,
              },
              {
                path: "Services",
                element: <Services />,
              },
              {
                path: "Contact",
                element: <Contact />,
              },
              {
                path: "About",
                element: <About />,
              },
              {
                path: "blog",
                element: <Blog />,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: (
      <div className="text-4xl font-bold text-red-600">Page not found</div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ClerkProvider>
  </React.StrictMode>
);
