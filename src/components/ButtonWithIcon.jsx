import React from "react";
import Button from "react-bootstrap/Button";

const ButtonWithIcon = ({ text, iconName }) => {
  return (
    <div className="icon-btn-wrapper">
      <Button
        variant="primary"
        className="btn-with-icon d-flex justify-content-center align-items-center"
      >
        <div className="icon-style">
          <i class={`bi ${iconName}`} />
        </div>

        {text}
      </Button>
    </div>
  );
};

export default ButtonWithIcon;
