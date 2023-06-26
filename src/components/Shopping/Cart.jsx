import React from "react";

const Cart = (props) => {
  const { cartItems, onClear } = props;
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default Cart;
