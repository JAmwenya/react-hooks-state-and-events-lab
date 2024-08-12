import React, { useState } from "react";

function Item({ name, category, cart, setCart }) {
  const [inCart, setInCart] = useState(false);

  const cartCLASS = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  function toggleCart() {
    if (inCart) {
      // Removing item from cart
      setCart(cart.filter(item => item !== name));
    } else {
      // Adding item to cart
      setCart([...cart, name]);
    }
    setInCart(!inCart);
  }

  return (
    <li className={cartCLASS}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
