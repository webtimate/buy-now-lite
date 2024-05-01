import React from "react";
import withLayout from "../pages/Layout";
import { Container, Col } from "react-bootstrap";
import CountCard from "./CountCard";
import OutlineButton from "./OutlineButton";
import ProductInsight from "./ProductInsight";
import Row from "react-bootstrap/Row";
import RetailerInsightTable from "./RetailerInsightTable";
import BrokenLinkInsight from "./BrokenLinkInsight";
import NumberOfClick from "./NumberOfClick";

const miniCardsData = [
  {
    id: 1,
    url: require("../assets/images/tw.png"),
    title: "Total Websites",
    count: 24,
  },
  {
    id: 2,
    url: require("../assets/images/tp.png"),
    title: "Total Products",
    count: 144,
  },
  {
    id: 3,
    url: require("../assets/images/nbl.png"),
    title: "Number of broken links",
    count: 412,
  },
];

function Dashboard() {
  return (
    <div className="main-container wrapper">
      <Container className="mt-4 mb-4">
        <div className="d-flex justify-content-between  align-items-center">
          <d className="table-title ">Dashboard</d>

          <OutlineButton text={"Download as Excel"} iconName={"bi-download"} />
        </div>
        {/* card section  */}
        <Row className="mt-3 d-flex">
          {miniCardsData.map((item, index) => (
            <Col key={index} xs={12} sm={4} md={4}>
              <CountCard item={item} index={index} />
            </Col>
          ))}
        </Row>
        {/* product insight section */}
        <div className="dashboard-content-container">
          <ProductInsight />
        </div>
        {/* retailer insight section  */}
        <div className="dashboard-content-container">
          <RetailerInsightTable />
        </div>

        {/* broken links insight section */}
        <div className="dashboard-content-container">
          <BrokenLinkInsight />
        </div>
        {/* no of clicks section */}
        <div className="dashboard-content-container">
          <NumberOfClick />
        </div>
      </Container>
    </div>
  );
}

export default withLayout(Dashboard);
