import { createRoot } from "react-dom/client";
import Order from "./Order.jsx";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header.jsx";
import {StrictMode, useState} from "react";
import { CartContext } from "./contexts.jsx";

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); //method is used to create a root for rendering a React application
root.render(<App />);
