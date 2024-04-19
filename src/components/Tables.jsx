import React from "react";
import { Container } from "react-bootstrap";

const Tables = () => {
  return (
    <Container className="m-4">
      <div className="d-flex justify-content-between">
        <p className="table-title">Broken Link Summary</p>
        <div className="d-flex ">
          <p className="table-subTitle titleSpacing">
            Primary Broken Links <b>12</b>{" "}
          </p>
          <p className="table-subTitle">
            Secondary Broken Links <b>8</b>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Tables;
