import React from "react";

function CountCard(props) {
  const { url, title, count } = props.item;
  return (
    <div className="count-card d-flex bg-white">
      <div>
        <img
          src={url}
          width="34"
          height="34"
          className="d-inline-block align-top"
          alt="brand logo"
        />
      </div>
      <div className="card-title">{title}</div>
      <div className="card-numbers">{count}</div>
    </div>
  );
}

export default CountCard;
