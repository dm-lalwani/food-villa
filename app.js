import React from "react";
import ReactDOM from "react-dom/client";

const heading2 = React.createElement(
  "h1",
  { className: "greeting" },
  "Namaste Everyone from React!!"
);
const heading3 = React.createElement(
  "h2",
  { className: "greeting" },
  "Namaste 2 Everyone from React!!"
);
console.log(heading2);
// We can have only one root and one render method throughtout the app
const container = React.createElement(
  "div",
  { className: "container", id: "containerID" },
  [heading2, heading3]
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// passing a react element into the root
root2.render(container);
