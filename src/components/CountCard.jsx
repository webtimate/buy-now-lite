import React from "react";

function CountCard(props) {
  const { url, title, count } = props.item;
  return (
    <div className="count-card">
      <div>{url}</div>
      <div className="card-title">{title}</div>
      <div>{count}</div>
    </div>
  );
}

export default CountCard;
