import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Error from "../pages/error/Error";
import Register from "../pages/register/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import Profile from "../pages/profile/Profile";
import Contact from "../pages/contact/Contact";
import Properties from "../pages/properties/Properties";
import PropertyDetails from "../pages/properties/PropertyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/property-details/:id",
        element: (
          <ProtectedRoutes>
            <PropertyDetails />
          </ProtectedRoutes>
        ),
        loader: () => fetch("/data/properties.json"),
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);
