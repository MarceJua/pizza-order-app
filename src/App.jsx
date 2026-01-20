import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Welcome to the Pizza App</h1>
      <Pizza 
        name="Pepperoni" 
        description="A classic American taste! Relish the delectable flavor of Pepperoni, topped with extra cheese" 
        image={"/public/pizzas/pepperoni.webp"} 
      />
      <Pizza 
        name="Hawaiian" 
        description="A tropical delight with ham and pineapple" 
        image="/public/pizzas/hawaiian.webp" 
      />
      <Pizza 
        name="Americano" 
        description="A bold and spicy flavor with a kick" 
        image="/public/pizzas/big_meat.webp" 
      />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container); //method is used to create a root for rendering a React application
root.render(<App />);
