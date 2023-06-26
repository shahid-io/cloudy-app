import React, { useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";
const ShopApp = () => {
  const [items, setItems] = useState(["Banana", "Apple"]);
  return (
    <div>
      <NavBar cartItemCount={items.length} />
      <Cart cartItems={items} onClear={()=>setItems([])}/>
    </div>
  );
};

export default ShopApp;
