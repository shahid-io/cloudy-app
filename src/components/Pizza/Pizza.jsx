import React, { useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepproni",
    toppings: ["Mushroom"],
  });
  const handleClick = () => {
    console.log(pizza);
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Margerita"] });
    console.log(pizza);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Toppings</button>
    </div>
  );
};

export default Pizza;
