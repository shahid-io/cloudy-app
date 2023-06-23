import React from "react";

function Alert(props) {
  const { children } = props;
  return (
    <div>
      <div className="alert alert-success" role="alert">
        {children}
      </div>
    </div>
  );
}

export default Alert;
