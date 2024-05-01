import React, { useState, useRef } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { Container } from "react-bootstrap";
import SearchInputWithIcon from "./SearchInputWithIcon";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import CustomModal from "./Modal";
import { PRODUCT_SUMMARY_SCREEN, productSummaryData } from "../constant";
import withLayout from "../pages/Layout";
import DeleteModal from "./DeleteModal";
import FailureOrSuccessModal from "./FailureOrSuccessModal";

const buttons = [
  { id: 1, text: "Add", iconText: "bi-plus-lg" },
  { id: 2, text: "Excel", iconText: "bi-upload" },
  { id: 3, text: "Feed", iconText: "bi-upload" },
  { id: 4, text: "Template", iconText: "bi-download" },
  { id: 5, text: "Export", iconText: "bi-download" },
];

function ProductSummary() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showFailureModal, setShowFailureModal] = useState(false)

  const [isChevronDown, setIsChevronDown] = useState(true);
  const [text, setText] = useState("");
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const handleModal = (args) => {
    if (args.id === 1) {
      setModalShow(true);
    }
    if(args.id ===2){
      setShowSuccessModal(true)
    }
    if(args.id ===3){
      setShowFailureModal(true);
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
    <div className="main-container">
      <Container className="mt-4 mb-4">
        <div className="d-flex justify-content-between  align-items-center">
          {/* profile summary upper button section  */}
          <p className="table-title ">Product Summary</p>
          <div className="d-flex ">
            <SearchInputWithIcon />
            {buttons.map((item) => (
              <ButtonWithIcon
                text={item.text}
                iconName={item.iconText}
                key={item.id}
                onClick={() => handleModal(item)}
              />
            ))}
          </div>
        </div>
        {/* profile summary bottom table section  */}
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
                    <Form.Check // prettier-ignore
                      type="checkbox"
                      id={`default-checkbox`}
                      label={""}
                      className="initial-spacing-table"
                    />
                  </th>
                  <th>Select all</th>
                  <th>Status</th>
                  <th onClick={() => setIsChevronDown(!isChevronDown)}>
                    <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                      SKU GTINS
                    </span>
                  </th>
                  <th onClick={() => setIsChevronDown(!isChevronDown)}>
                    <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                      Product Names
                    </span>
                  </th>
                  <th onClick={() => setIsChevronDown(!isChevronDown)}>
                    <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                      Retailer Name
                    </span>
                  </th>
                  <th onClick={() => setIsChevronDown(!isChevronDown)}>
                    <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                      Primary Links
                    </span>
                  </th>
                  <th onClick={() => setIsChevronDown(!isChevronDown)}>
                    <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                      Secondary Links
                    </span>
                  </th>
                  <th>Created date</th>
                  <th>Last updated date</th>
                  <th>Updated by</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <tr className="custom-tr" key={index}>
                    <td className="text-center ">
                      <Form.Check // prettier-ignore
                        type="checkbox"
                        id={`default-checkbox`}
                        label={""}
                        className="initial-spacing-table"
                      />
                    </td>
                    <td className="d-flex justify-content-around">
                      <div className="pointer-cursor">
                        <i
                          class="bi bi-pencil-fill"
                          onClick={() => setModalShow(true)}
                        ></i>
                      </div>
                      <div
                        className="pointer-cursor"
                        onClick={() => setConfirmModalShow(true)}
                      >
                        <i class="bi bi-trash3"></i>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <div
                          className={
                            index % 2 === 0
                              ? "active-circle"
                              : "inActive-circle"
                          }
                        ></div>
                      </div>
                    </td>
                    <td className="text-center">4902430725675</td>
                    <td className="text-center">
                      <b>Pamper - Baby Dry Dispers N..</b>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center">
                        Amazon{" "}
                        {index % 4 === 0 && (
                          <img
                            src={require("../assets/images/warning.png")}
                            width="16px"
                            height="16px"
                            className="image-spacing"
                            alt="warning logo"
                          />
                        )}
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center">
                        Amazon{" "}
                        {index % 3 === 0 && (
                          <img
                            src={require("../assets/images/warning.png")}
                            width="16px"
                            height="16px"
                            className="image-spacing"
                            alt="warning logo"
                          />
                        )}
                      </div>
                    </td>
                    <td className="text-center">Amazon</td>
                    <td className="text-center">11 April 2024</td>
                    <td className="text-center">11 April 2024</td>
                    <td className="text-center"></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
      {/* modal  */}
      <CustomModal
        modalTitle="ADD RETAILER"
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalData={productSummaryData}
        screen={PRODUCT_SUMMARY_SCREEN}
        setText={setText}
      />
      <DeleteModal
        modalTitle="DELETE CONFIRMATION"
        show={confirmModalShow}
        onHide={() => setConfirmModalShow(false)}
      />
      <FailureOrSuccessModal
        modalTitle="Success"
        description={"success"}
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        success={true}
      />
      <FailureOrSuccessModal
        modalTitle="Success"
        description={"success"}
        show={showFailureModal}
        onHide={() => setShowFailureModal(false)}
        success={false}
      />
    </div>
  );
}

export default withLayout(ProductSummary);
