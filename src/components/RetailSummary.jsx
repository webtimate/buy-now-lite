import React, { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { Container } from "react-bootstrap";
import SearchInputWithIcon from "./SearchInputWithIcon";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import OutlineButton from "./OutlineButton";
import CustomModal from "./Modal";
import {
  RETAIL_SUMMARY,
  RETAIL_SUMMARY_SCREEN,
  retailSummaryData,
} from "../constant";

const buttons = [
  { id: 1, text: "Add", iconText: "bi-plus" },
  { id: 2, text: "Excel", iconText: "bi-upload" },
];
const tableData = [
  {
    id: 1,
    isActive: true,
    retailerName: "Amazon",
    url: "https://www.amazon.b.co.in/en-in",
    imageUrl: require("../assets/images/amazon.jpg"),
    createdDate: "11 April 2024",
    lastUpdateDate: "11 April 2024",
  },
  {
    id: 2,
    isActive: false,
    retailerName: "walmart",
    url: "https://www.walmart.b.co.in/en-in",
    imageUrl: require("../assets/images/wallamart.png"),
    createdDate: "11 April 2024",
    lastUpdateDate: "11 April 2024",
  },
  {
    id: 3,
    isActive: true,
    retailerName: "walgreens",
    url: "https://www.walgreens.b.co.in/en-in",
    imageUrl: require("../assets/images/walgreen.png"),
    createdDate: "11 April 2024",
    lastUpdateDate: "11 April 2024",
  },
  {
    id: 4,
    status: false,
    retailerName: "Big Basket",
    url: "https://www.bigbasket.b.co.in/en-in",
    imageUrl: require("../assets/images/bigbasket.png"),
    createdDate: "11 April 2024",
    lastUpdateDate: "11 April 2024",
  },
];

function RetailSummary() {
  const [modalShow, setModalShow] = useState(false);
  const [isChevronDown, setIsChevronDown] = useState(true);

  const handleModal = (args) => {
    if (args.id === 1) {
      setModalShow(true);
    }
  };
  return (
    <>
      {" "}
      <Container className="mt-4 mb-4">
        <div className="d-flex justify-content-between  align-items-center">
          {/* profile summary upper button section  */}
          <p className="table-title ">Retail Summary</p>
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
            <OutlineButton
              text={"Download as Excel"}
              iconName={"bi-download"}
            />
          </div>
        </div>
        {/* profile summary bottom table section  */}
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
                  Retailer Name
                </span>
              </th>
              <th>url</th>
              <th onClick={() => setIsChevronDown(!isChevronDown)}>
                <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                  logo
                </span>
              </th>
              <th>Created date</th>
              <th>Last updated date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr className="custom-tr" key={item.id}>
                <td className="text-center ">
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id={`default-checkbox`}
                    label={""}
                    className="initial-spacing-table"
                  />
                </td>
                <td className="d-flex justify-content-around">
                  <div className="pr-4">
                    <i
                      class="bi bi-pencil-fill"
                      onClick={() => setModalShow(true)}
                    ></i>
                  </div>
                  <div>
                    <i class="bi bi-trash3"></i>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-center">
                    <div
                      className={
                        item.isActive ? "active-circle" : "inActive-circle"
                      }
                    ></div>
                  </div>
                </td>
                <td className="text-center">
                  <b>Amazon</b>{" "}
                </td>
                <td className="text-center">
                  https://www.amazon.b.co.in/en-in
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.imageUrl}
                      width="60px"
                      height="15px"
                      className="image-spacing"
                      alt="warning logo"
                    />
                  </div>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center">
                    {item.createdDate}
                  </div>
                </td>
                <td className="text-center">{item.lastUpdateDate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      {/* modal  */}
      <CustomModal
        modalTitle="ADD RETAILER"
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalData={retailSummaryData}
        screen={RETAIL_SUMMARY_SCREEN}
      />
    </>
  );
}

export default RetailSummary;
