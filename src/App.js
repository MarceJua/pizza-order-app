import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Welcome to Padre Gino's!"), // To create and stamp out a reusable component instance, similar to creating a stamp that can be used multiple times
    React.createElement(Pizza, {
      name: "Margherita",
      description: "Classic delight with 100% real mozzarella cheese",
    }), // Using the Pizza component inside the App component
    React.createElement(Pizza, {
      name: "pepperoni",
      description: "A classic pepperoni pizza with mozzarella cheese",
    }), // Reusing the Pizza component
    React.createElement(Pizza, {
      name: "Veggie",
      description: "Loaded with fresh vegetables and mozzarella cheese",
    }), // Reusing the Pizza component
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container); //method is used to create a root for rendering a React application
root.render(React.createElement(App));
