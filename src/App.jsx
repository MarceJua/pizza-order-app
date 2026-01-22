import { createRoot } from "react-dom/client";
import Order from "./Order.jsx";
import PizzaOfTheDay from "./PizzaOfTheDay";

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <Order />
      <PizzaOfTheDay />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container); //method is used to create a root for rendering a React application
root.render(<App />);
