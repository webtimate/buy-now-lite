import React from "react";
import Button from "react-bootstrap/Button";

const ActionButton = (props) => {
  const { title, onClick } = props;
  return (
    <div className="action-btn-container">
      <Button
        variant="primary"
        className={`action-btn props.classes`}
        onClick={onClick}
      >
        {title}
      </Button>
    </div>
  );
};

export default ActionButton;
