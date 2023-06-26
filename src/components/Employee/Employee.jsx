import React, { useState } from "react";

const Employee = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Shahid",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game, name: "Raza" } });
    console.log(game)
  };
  return (
    <div>
      <button onClick={handleClick}>Update name</button>
    </div>
  );
};

export default Employee;
