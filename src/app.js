import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestMenu from "./components/RestMenu";
import ProfileClass from "./components/ProfileClass";
import Profile from "./components/Profile";

/**
    Header
        - Logo
        - Nav Item (right)
        - Cart
    Body
        - Search Bar
        - Restauraunt List
        - Cards
            - Image
            - Name
            - Rating
            - Cuisine
    Footer
        - Links
        - Copyright
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestMenu />,
      },
    ],
  },
]);
// We can have only one root and one render method throughtout the app
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element into the root
// root2.render(heading2);
root.render(<RouterProvider router={appRouter} />);
