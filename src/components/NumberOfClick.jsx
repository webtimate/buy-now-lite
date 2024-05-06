import React, { useRef, useState } from "react";
import OutlineButton from "./OutlineButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


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
