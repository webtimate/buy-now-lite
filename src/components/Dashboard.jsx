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
      <Container className="pt-4 pb-4">
        <div className="d-flex justify-content-between  align-items-center">
          <p className="table-title ">Retailer Summary</p>

          <OutlineButton text={"Download as Excel"} iconName={"bi-download"} />
        </div>
        {/* card section  */}
        <Row className="mt-3 d-flex">
          {miniCardsData.map((item, index) => (
            <Col key={index} xs={12} sm={4} md={4}>
              <CountCard item={item} />
            </Col>
          ))}
        </Row>
        {/* product insight section */}
        {/* <ProductInsight /> */}
        {/* retailer insight section  */}
        <div style={{ backgroundColor: "white", borderRadius: 20 }}>
          <RetailerInsightTable />
        </div>

        {/* broken links insight section */}

        {/* <BrokenLinkInsight /> */}
        {/* no of clicks section */}
        {/* <NumberOfClick /> */}
      </Container>
    </div>
  );
}

export default withLayout(Dashboard);
