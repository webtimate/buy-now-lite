import React from "react";
import Button from "react-bootstrap/Button";

const OutlineButton = ({ text, iconName, type, className }) => {
  return (
    <div className={`outline-btn-wrapper `}>
      <Button
        variant="primary"
        className={`d-flex align-items-center ${className}`}
      >
        {iconName && (
          <div className="icon-style ">
            <i class={`bi ${iconName}`} />
          </div>
        )}

        <div>{text}</div>
      </Button>
    </div>
  );
};

export default OutlineButton;
