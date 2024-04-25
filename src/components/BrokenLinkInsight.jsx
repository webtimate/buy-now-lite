import React, { useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import OutlineButton from "./OutlineButton";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";

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

const BrokenLinkInsight = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const [isChevronDown, setIsChevronDown] = useState(true);
  const [text, setText] = useState("");
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const handleModal = (args) => {
    if (args.id === 1) {
      setModalShow(true);
    }
  };
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
    <div className="mt-3 bg-white product-insight-container">
      <div></div>
      <p className="product-insight-title ">Broken Links Insight</p>

      {/* product  table section  */}

      <div>
        <div
          className="horizontal-scroll-container"
          ref={containerRef}
          style={{ overflowX: "auto", cursor: "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <Table className="custom-table mt-4">
            <thead>
              <tr>
                <th>
                  <OutlineButton text={"Websites"} iconName={"bi-plus-lg"} />
                </th>

                <th>
                  <div className="table-head-title">Number of retailers</div>
                </th>
                <th>
                  <div className="table-head-title">Number of links (all)</div>
                </th>
                <th>
                  <div className="table-head-title">
                    Number of unique links (all)
                  </div>
                </th>
                <th>
                  <div className="table-head-title">
                    Number of primary retailer links
                  </div>
                </th>
                <th>
                  <div className="table-head-title">
                    Number of secondary retailer links
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr className="custom-tr" key={item.id}>
                  <td>
                    <b>{item.title}</b>
                  </td>
                  <td>
                    <b>{item.noOfRetailers}</b>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div>
                        <b>{item.noOfLinks}</b>
                      </div>
                      <div className="d-flex progress-bar">
                        <ProgressBar now={40} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div>
                        <b>{item.noOfUniqueLinks}</b>
                      </div>
                      <div className="d-flex progress-bar">
                        <ProgressBar now={40} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div>
                        <b>{item.noOfPrimaryLinks}</b>
                      </div>
                      <div className="d-flex progress-bar">
                        <ProgressBar now={40} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div>
                        <b>{item.noOfSecondaryLinks}</b>
                      </div>
                      <div className="d-flex progress-bar">
                        <ProgressBar now={40} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default BrokenLinkInsight;
