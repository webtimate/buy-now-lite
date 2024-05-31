import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import CustomModal from "./Modal";
import { tableData, TEXT_INPUT } from "../constant";
import withLayout from "../pages/Layout";
import Pagination from "./Pagination";
import SearchInputWithIcon from "./SearchInputWithIcon";

const brokenLinkData = [
  {
    id: 1,
    title: "Buy Now Url",
    link: "https://www.oral-b.co.in/en-in",
    type: TEXT_INPUT,
  },
  {
    id: 1,
    title: "Secondary Buy Now Url",
    link: "https://www.oral-b.co.in/en-in",
    type: TEXT_INPUT,
  },
  {
    id: 3,
    title: "",
    link: "Update successfully and changes will reflect after next run",
    type: "INFO",
  },
];

const Tables = () => {
  const containerRef = useRef(null);
  const [modalShow, setModalShow] = React.useState(false);
  const [isChevronDown, setIsChevronDown] = useState(true);
  const [text, setText] = useState("");
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
    <div className="main-container">
      <Container className="mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="table-title">BROKEN LINK SUMMARY</div>
          <div className="d-flex  justify-content-between align-items-center">
            <SearchInputWithIcon placeholderText={"Search by SKU/GTINS"} />
            <div className="table-subTitle table-subTitle-spacing">
              Primary Broken Links{" "}
              <span style={{ marginLeft: 10 }}>
                <b>12</b>
              </span>{" "}
            </div>
            <div className="table-subTitle">
              Secondary Broken Links{" "}
              <span style={{ marginLeft: 10 }}>
                <b>8</b>
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="mt-3"></div>
      </Container>
      {/* table section */}
      <div
        className="horizontal-scroll-container"
        ref={containerRef}
        style={{ overflowX: "auto", cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Table className="custom-table">
          <thead>
            <tr>
              <th>
                <div className="initial-spacing-table initial-padding-left">
                  Actions
                </div>{" "}
              </th>
              <th>Status</th>
              <th>SKU GTINS</th>
              <th
                className="d-flex align-items-center"
                onClick={() => setIsChevronDown(!isChevronDown)}
              >
                <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                  Product Names
                </span>
              </th>
              <th
                className="text-center"
                onClick={() => setIsChevronDown(!isChevronDown)}
              >
                <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                  Primary Broken Links
                </span>
              </th>
              <th
                className="text-center"
                onClick={() => setIsChevronDown(!isChevronDown)}
              >
                <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                  Secondary Broken Links
                </span>
              </th>
              <th>Last updated date</th>
            </tr>
          </thead>
          <tbody className="custom-tr">
            {tableData.map((item, index) => (
              <tr className="custom-tr">
                <td className="text-center pointer-cursor ">
                  <i
                    class="bi bi-pencil-fill"
                    onClick={() => setModalShow(true)}
                  ></i>
                </td>
                <td>
                  <div className="pt-2">
                    <div
                      className={
                        item.isActive ? "active-circle" : "inActive-circle"
                      }
                    ></div>
                  </div>
                </td>
                <td>{item.gtins}</td>
                <td>
                  <b>{item.productName}</b>
                </td>
                <td className="text-center">
                  <img
                    src={item.primaryBrokenLink}
                    width="60"
                    height="15"
                    className="d-inline-block align-top"
                    alt="amazon logo"
                  />
                </td>
                <td className="text-center">
                  {(index === 0 && (
                    <img
                      src={item.primaryBrokenLink}
                      width="60"
                      height="15"
                      className="d-inline-block align-top"
                      alt="amazon logo"
                    />
                  )) ||
                    (index === 2 && (
                      <img
                        src={item.primaryBrokenLink}
                        width="60"
                        height="15"
                        className="d-inline-block align-top"
                        alt="amazon logo"
                      />
                    )) ||
                    (index === 3 && (
                      <img
                        src={item.primaryBrokenLink}
                        width="60"
                        height="15"
                        className="d-inline-block align-top"
                        alt="amazon logo"
                      />
                    ))}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Container>
        <Pagination />
      </Container>

      {/* modal  */}
      <CustomModal
        modalTitle="UPDATE PRODUCTS"
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalData={brokenLinkData}
        setText={setText}
      />
    </div>
  );
};

export default withLayout(Tables);
