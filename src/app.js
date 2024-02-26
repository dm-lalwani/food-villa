import React, { lazy, Suspense, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestMenu from "./components/RestMenu";
import ProfileClass from "./components/ProfileClass";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";

const About = lazy(() => import("./components/About"));
const InstaMart = lazy(() => import("./components/InstaMart"));

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
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    const navbar = document.getElementById("navBarId");
    const height = navbar.offsetHeight;
    setNavBarHeight(height + 20);

    // Make a API call send username & password
    const data = {
      name: "DML",
      email: "dml@gmail.com",
    };
    setUser(data);
  }, []);
  // console.log(user);
  return (
    <>
      <userContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <div className="container" style={{ marginTop: `${navBarHeight}px` }}>
          <Outlet />
        </div>
        <Footer />
      </userContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);
// We can have only one root and one render method throughtout the app
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element into the root
// root2.render(heading2);
root.render(<RouterProvider router={appRouter} />);

/**
 *
 *
 */
