import React from "react";
import Table from "react-bootstrap/Table";
import OutlineButton from "./OutlineButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const tableData = [
  {
    id: 1,
    title: "Pampers",
    noOfClicks: 117,
  },
];

const NumberOfClick = () => {
  return (
    <div className="mt-3 bg-white product-insight-container">
      <div></div>
      <p className="product-insight-title ">Number Of Clicks</p>

      {/* product  table section  */}

      <div>
        <Row className="mt-3 d-flex align-items-baseline">
          <Col xs={2} md={2}>
            <OutlineButton text={"Websites"} iconName={"bi-plus-lg"} />
            <div>Pampers</div>
          </Col>
          <Col xs={10} md={10}>
            <div className="table-head-title">Number of clicks</div>
            <div>117</div>
          </Col>
        </Row>
      </div>

      {/* <Table className="custom-table mt-4">
        <thead>
          <tr>
            <th>
              <OutlineButton text={"Websites"} iconName={"bi-plus-lg"} />
            </th>

            <th>
              <div className="table-head-title">Number of clicks</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr className="custom-tr" key={item.id}>
              <td style={{ marginRight: 20 }}>
                <b>{item.title}dfd</b>
              </td>
              <td>
                <b>{item.noOfClicks}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </div>
  );
};

export default NumberOfClick;
