import Pizza from "./Pizza.jsx";
import { useState } from "react";



export default function Order() {
    const [pizzaType, setPizzaType] = useState("pepperoni");
    const [pizzaSize, setPizzaSize] = useState("medium");

    return (
        <div className="order">
            <h2>Create Order</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select 
                            onChange={(e) => setPizzaType(e.target.value)}
                            name="pizza-type"
                            value={pizzaType}
                        >
                            <option value="pepperoni">The Pepperoni Pizza</option>
                            <option value="hawaiian">The Hawaiian Pizza</option>
                            <option value="big_meat">The Big Meat Pizza</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                                <input 
                                    checked={pizzaSize === "S"} 
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                    name="pizza-size" 
                                    value="S"
                                    type="radio"
                                    id="pizza-s"
                                />
                                <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                                <input 
                                    checked={pizzaSize === "M"} 
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                    name="pizza-size" 
                                    value="M"
                                    type="radio"
                                    id="pizza-m"
                                />
                                <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                                <input 
                                    checked={pizzaSize === "L"}
                                    onChange={(e) => setPizzaSize(e.target.value)} 
                                    name="pizza-size" 
                                    value="L"
                                    type="radio"
                                    id="pizza-l"
                                />
                                <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit">Add to Cart</button>
                </div>
                <div className="order-pizza">
                    <Pizza 
                        name="Pepperoni" 
                        description="A classic American taste! Relish the delectable flavor of Pepperoni, topped with extra cheese" 
                        image={"/public/pizzas/pepperoni.webp"} 
                    />
                    <p>$13.37</p>
                </div>
            </form>
        </div>
    );
}