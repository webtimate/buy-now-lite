import React from "react";

const Chips = (props) => {
  const { title, iconName, chipAction } = props;
  return (
    <div className="chip-container ">
      <div>{title}</div>
      <div className="">
        <i class={`bi ${iconName}`} onClick={() => chipAction(true)} />
      </div>
    </div>
  );
};

export default Chips;
