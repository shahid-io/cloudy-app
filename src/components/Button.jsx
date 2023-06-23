import React from "react";

const Button = (props) => {
  const { children, color, onClick } = props;
  return (
    <div>
      <button
        type="submit"
        onClick={onClick}
        className={"mt-2 btn btn-" + color}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
