import React from "react";

function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.length === 0 ? (
          <li>Your cart is empty</li>
        ) : (
          // map over the cart array and display each item in the cart
          cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Cart;
