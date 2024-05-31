import React, { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import CustomModal from "./Modal";
import {
  DROPDOWN,
  GENERIC,
  RETAILER_SUMMARY_SCREEN,
  retailSummaryData,
} from "../constant";
import withLayout from "../pages/Layout";
import InputWithDropdown from "./InputWithDropdown";
import DeleteModal from "./DeleteModal";

const globalManagementButtons = [
  {
    id: 1,
    text: "Add",
    iconText: "bi-plus-lg",
    type: GENERIC,
  },
  { id: 2, text: "Excel to Website", iconText: "bi-upload", type: GENERIC },
  {
    id: 2,
    text: "Excel All Retailer Broken Url",
    iconText: "bi-upload",
    type: GENERIC,
  },
];
const tableData = [
  {
    id: 1,
    brand: "GHH-JP",
    isActivated: true,
    locale: "ja-jp",
    passkey: "3oobeed-1kkj",
    url: "https://www.amazon.b.co.in/en-in",
  },
  {
    id: 2,
    brand: "Naturella",
    isActivated: true,
    locale: "es-mx",
    passkey: "6chbeed-1kkj",
    url: "https://www.amazon.b.co.in/en-in",
  },
  {
    id: 3,
    brand: "Vicks",
    isActivated: true,
    locale: "co-es",
    passkey: "58cth-g1nunu",
    url: "https://www.amazon.b.co.in/en-in",
  },
  {
    id: 4,
    brand: "Pampers",
    isActivated: false,
    locale: "EN-IN",
    passkey: "8jchbeed-f1kkj",
    url: "https://www.amazon.b.co.in/en-in",
  },
];

function WebsiteManagement(props) {
  const [modalShow, setModalShow] = useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const [text, setText] = useState("");
  const [inputWithMenuText, setInputWithMenuText] = useState("");

  const handleModal = (args) => {
    if (args.id === 1) {
      setModalShow(true);
    }
  };
  return (
    <div className="main-container">
      <Container className="mt-4 mb-4">
        <div className="d-flex justify-content-between  align-items-center">
          {/* profile summary upper button section  */}
          <p className="table-title ">Website Management</p>
          <div className="d-flex ">
            {/* <SearchInputWithIcon /> */}

            <>
              {globalManagementButtons.map((item) => (
                <>
                  {item.type === DROPDOWN ? (
                    <div className="custom-dropdown " style={{ marginLeft: 5 }}>
                      <InputWithDropdown
                        text={inputWithMenuText}
                        placeholderText={item.link}
                        setTextValue={(text) => setInputWithMenuText(text)}
                      />
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
      </Container>
      {/* profile summary bottom table section  */}
      <Table className="custom-table mt-4">
        <thead>
          <tr>
            <th className="text-center ">
              <div className={"initial-spacing-table initial-padding-left"}>
                Edit
              </div>
            </th>
            <th className={"text-center"}>Brand</th>
            <th>Retailer Url</th>
            <th>Locale</th>
            <th>Passkey</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr className="custom-tr" key={item.id}>
              <td className="text-center ">
                <div className="pointer-cursor initial-padding-left">
                  <i
                    class="bi bi-pencil-fill"
                    onClick={() => setModalShow(true)}
                  ></i>
                </div>
              </td>
              <td className="text-center">
                <div>
                  <b>{item.brand}</b>
                </div>
              </td>
              <td>{item.url}</td>
              <td>{item.locale}</td>
              <td>{item.passkey}</td>
              <td>
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <div className="table-custom-btn ">
                    <div>Generate</div>
                  </div>
                  <div>
                    <div className="table-custom-btn gap-2">
                      <div className="icon">
                        <i
                          class={`bi ${
                            item.isActivated ? "bi-check2" : "bi-ban"
                          }`}
                          style={{
                            color: item.isActivated ? "#13C803" : "#C00101",
                          }}
                        />
                      </div>
                      <div>
                        {item.isActivated ? "Activated" : "DeActivated"}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
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

export default withLayout(WebsiteManagement);
