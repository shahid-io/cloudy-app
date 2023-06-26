import React from "react";

const Alert = (props) => {
  const { children, onClose } = props;
  return (
    <div>
      <div
        className="alert alert-success alert-dismissible show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Alert;
