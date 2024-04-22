import React from "react";
import withLayout from "../pages/Layout";
import ButtonWithIcon from "./ButtonWithIcon";
import { Container } from "react-bootstrap";
import CountCard from "./CountCard";

const miniCardsData = [
  { id: 1, url: "", title: "Total Websites", count: 24 },
  { id: 2, url: "", title: "Total Products", count: 144 },
  { id: 3, url: "", title: "Number of broken links", count: 412 },
];

function Dashboard() {
  return (
    <div className="main-container">
      <Container className="mt-4 mb-4">
        <div className="d-flex justify-content-between  align-items-center">
          <p className="table-title ">Retailer Summary</p>
          <ButtonWithIcon
            text={"Download as Excel"}
            iconName={"bi-download"}
            onClick={() => {}}
          />
        </div>
        {/* card section  */}
        <div className="d-flex  align-items-center justify-content-between mt-3">
          {miniCardsData.map((item, index) => (
            <CountCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default withLayout(Dashboard);
