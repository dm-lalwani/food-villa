import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
      <Body />
      <Footer />
    </>
  );
};
// We can have only one root and one render method throughtout the app
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element into the root
// root2.render(heading2);
root.render(<AppLayout />);
