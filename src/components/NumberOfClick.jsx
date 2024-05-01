import React, { useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import OutlineButton from "./OutlineButton";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const tableData = [
  {
    id: 1,
    title: "Pampers",
    noOfRetailers: 22,
    noOfLinks: 14,
    noOfUniqueLinks: 44,
    noOfPrimaryLinks: 40,
    noOfSecondaryLinks: 40,
  },
  {
    id: 2,
    title: "Pampers",
    noOfRetailers: 24,
    noOfLinks: 16,
    noOfUniqueLinks: 47,
    noOfPrimaryLinks: 43,
    noOfSecondaryLinks: 43,
  },
  {
    id: 3,
    title: "Pampers",
    noOfRetailers: 27,
    noOfLinks: 18,
    noOfUniqueLinks: 48,
    noOfPrimaryLinks: 46,
    noOfSecondaryLinks: 46,
  },
  {
    id: 4,
    title: "Pampers",
    noOfRetailers: 18,
    noOfLinks: 11,
    noOfUniqueLinks: 24,
    noOfPrimaryLinks: 32,
    noOfSecondaryLinks: 32,
  },
  {
    id: 5,
    title: "Pampers",
    noOfRetailers: 32,
    noOfLinks: 22,
    noOfUniqueLinks: 49,
    noOfPrimaryLinks: 48,
    noOfSecondaryLinks: 48,
  },
];

const NumberOfClick = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - containerRef.current.offsetLeft;
    const scrollOffset = x - startX;
    containerRef.current.scrollLeft = scrollLeft - scrollOffset;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div className="retailer-insight-container">
      {/* product  table section  */}
      <div
        className="horizontal-scroll-container"
        ref={containerRef}
        style={{ overflowX: "auto", cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div>
          <div className="mt-5 px-4">
            <p className="product-insight-title px-3">Number Of Clicks</p>
          </div>

          <div className="retailer-insight-table py-1">
            <Row className="mt-3 d-flex align-items-baseline">
              <Col xs={2} md={2}>
                <div className="px-1">
                  <OutlineButton text={"Websites"} iconName={"bi-plus-lg"} />
                </div>

                <div className="insight-title p-4">Pampers</div>
              </Col>
              <Col xs={10} md={8}>
                <div className="table-head-title">Number of clicks</div>
                <div className="insight-title p-4">117</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberOfClick;
