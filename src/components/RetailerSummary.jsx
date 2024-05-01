import React, { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { Container } from "react-bootstrap";
import SearchInputWithIcon from "./SearchInputWithIcon";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import OutlineButton from "./OutlineButton";
import CustomModal from "./Modal";
import { RETAILER_SUMMARY_SCREEN, retailSummaryData } from "../constant";
import withLayout from "../pages/Layout";
import { useLocation } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import FailureOrSuccessModal from "./FailureOrSuccessModal";

const buttons = [
  { id: 1, text: "Add", iconText: "bi-plus-lg" },
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

function RetailerSummary(props) {
  const location = useLocation();

  console.log("props", location?.state?.navigatedFrom);
  const [modalShow, setModalShow] = useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const [isChevronDown, setIsChevronDown] = useState(true);
  const [text, setText] = useState("");
  const [inputWithMenuText, setInputWithMenuText] = useState("");

  const handleModal = (args) => {
    if (args.id === 1) {
      setModalShow(true);
    }
  };
  return (
    <div className="main-container">
      {" "}
      <Container className="mt-4 mb-4">
        <div className="d-flex justify-content-between  align-items-center">
          {/* profile summary upper button section  */}
          <p className="table-title ">Retailer Summary</p>
          <div className="d-flex ">
            <SearchInputWithIcon />

            <>
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
            </>
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
              <th className="table-head-spacing">Select all</th>

              <th>Status</th>
              <th onClick={() => setIsChevronDown(!isChevronDown)}>
                <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                  Retailer Name
                </span>
              </th>
              <th>Url</th>
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
                    className={"initial-spacing-table"}
                  />
                </td>
                <td className="d-flex justify-content-around table-head-spacing">
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
                        item.isActive ? "active-circle" : "inActive-circle"
                      }
                    ></div>
                  </div>
                </td>
                <td>
                  <b>Amazon</b>{" "}
                </td>
                <td>https://www.amazon.b.co.in/en-in</td>
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
        screen={RETAILER_SUMMARY_SCREEN}
        text={text}
        setText={setText}
      />
      <DeleteModal
        modalTitle="DELETE CONFIRMATION"
        show={confirmModalShow}
        onHide={() => setConfirmModalShow(false)}
      />
    </div>
  );
}

export default withLayout(RetailerSummary);
