import React, { useState } from "react";
import Item from "./Item";
import Cart from "./Cart";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  function handleChange(event) {
    const filterValue = event.target.value;
    setSelectedCategory(filterValue);
  }

  const selectedItems = items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </ul>
      <Cart cart={cart} />
    </div>
  );
}

export default ShoppingList;
