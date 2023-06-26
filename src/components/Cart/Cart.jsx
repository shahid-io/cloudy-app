import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Apple", quantity: 1 },
      { id: 2, title: "Mango", quantity: 1 },
    ],
  });
  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    console.log(cart)
  };
  return (
    <div>
      <button onClick={handleClick}>update quantity</button>
    </div>
  );
};

export default Cart;
