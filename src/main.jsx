import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainLayoutWrapper from "./Layouts/mainLayout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import AuthLayouts from "./Layouts/AuthLayouts.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Blog from "./pages/Blog";

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
      {
        path: "auth",
        element: <AuthLayouts />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
  {
    path: "forgot-password",
    // element: <ForgotPassword />,
  },
  {
    path: "*",
    element: (
      <div className="text-4xl font-bold text-red-600">Page not found</div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
