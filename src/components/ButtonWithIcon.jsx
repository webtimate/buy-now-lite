import React from "react";
import Button from "react-bootstrap/Button";

const ButtonWithIcon = ({ text, iconName }) => {
  return (
    <div className="icon-btn-wrapper">
      <Button variant="primary" className="d-flex align-items-center">
        <div className="icon-style ">
          <i class={`bi ${iconName}`} />
        </div>
        <div>{text}</div>
      </Button>
    </div>
  );
};

export default ButtonWithIcon;
