import React, { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { Container } from "react-bootstrap";
import SearchInputWithIcon from "./SearchInputWithIcon";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import CustomModal from "./Modal";
import {
  DROPDOWN,
  GENERIC,
  options,
  RETAILER_SUMMARY_SCREEN,
  retailSummaryData,
} from "../constant";
import withLayout from "../pages/Layout";
import InputWithDropdown from "./InputWithDropdown";
import { useLocation } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import SearchInput from "./SearchInput";

const globalManagementButtons = [
  {
    id: 1,
    text: "Unblocked Retailer list",
    iconText: "bi-plus-lg",
    type: DROPDOWN,
    link: "Unblocked Retailer list",
  },
  { id: 2, text: "Excel", iconText: "bi-upload", type: GENERIC },
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

function GlobalRetailManagement(props) {
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
          <p className="table-title ">Global Retailer Management</p>
          <div className="d-flex ">
            <SearchInputWithIcon />

            <>
              {globalManagementButtons.map((item) => (
                <>
                  {item.type === DROPDOWN ? (
                    <div className="search-input" style={{ marginLeft: 5 }}>
                      <SearchInput options={options} placeholder={item.link} />
                    </div>
                  ) : (
                    <ButtonWithIcon
                      text={item.text}
                      iconName={item.iconText}
                      key={item.id}
                      onClick={() => handleModal(item)}
                    />
                  )}
                </>
              ))}
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
                  className={
                    "initial-spacing-table d-flex  justify-content-center"
                  }
                />
              </th>
              <th>Select all</th>
              <th>Retailer Name</th>
              <th>Retailer Url</th>
              <th>Site</th>
              <th>logo</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr className="custom-tr" key={item.id}>
                <td className="">
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id={`default-checkbox`}
                    label={""}
                    className={
                      "initial-spacing-table d-flex  justify-content-center"
                    }
                  />
                </td>
                <td className="d-flex   gap-4 ">
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
                  <b>Amazon</b>{" "}
                </td>
                <td>{item.url}</td>
                <td>{item.id === 1 && item.url} </td>
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

export default withLayout(GlobalRetailManagement);
