import React from "react";

function CountCard(props) {
  const { url, title, count } = props.item;
  return (
    <div className="count-card d-flex">
      <div>
        <img
          src={url}
          width={props.index === 1 ? 47 : "34"}
          height={props.index === 1 ? 47 : "34"}
          alt="brand logo"
        />
      </div>
      <div className="card-title">{title}</div>
      <div className="card-numbers">{count}</div>
    </div>
  );
}

export default CountCard;
