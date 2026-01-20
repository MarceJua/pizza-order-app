import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Welcome to the Pizza App</h1>
      <Pizza name="Margherita" description="Classic delight with 100% real mozzarella cheese" />
      <Pizza name="Pepperoni" description="A classic American taste! Relish the delectable flavor of Pepperoni, topped with extra cheese" />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container); //method is used to create a root for rendering a React application
root.render(<App />);
