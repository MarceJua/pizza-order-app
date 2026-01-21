import { createRoot } from "react-dom/client";
import Order from "./Order.jsx";

const App = () => {
  return (
    <div>
      <h1>Welcome to the Pizza App</h1>
      <Order />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container); //method is used to create a root for rendering a React application
root.render(<App />);
