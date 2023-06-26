import React from "react";

const NavBar = (props) => {
  const { cartItemCount } = props;
  return <div>Cart{cartItemCount}</div>;
};

export default NavBar;
