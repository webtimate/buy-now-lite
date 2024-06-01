import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextInput from "./TextInput";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import {
  CHECKBOX,
  DROPDOWN,
  DROPDOWN_WITH_BTN,
  EXTERNAL_USER_MANAGEMENT_SCREEN,
  FILE_UPLOAD,
  options,
  PRODUCT_SUMMARY_SCREEN,
  RETAILER_SUMMARY_SCREEN,
  tableData,
  tableModalData,
} from "../constant";
import Form from "react-bootstrap/Form";
import ButtonWithIcon from "./ButtonWithIcon";
import SearchInput from "./SearchInput";
import CommonTable from "./CommonTable";

const CustomModal = (props) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const renderDynamicContent = (item) => {
    if (props.screen === RETAILER_SUMMARY_SCREEN) {
      switch (item.type) {
        case FILE_UPLOAD:
          return (
            <div className="d-flex align-items-center ">
              <div className="file-upload-button">
                <button onClick={handleClick}>Choose File</button>
                <input
                  ref={fileInputRef}
                  type="file"
                  style={{ display: "none" }}
                />
              </div>
              <div className="modal-upload-file-title">
                Upload file from system
              </div>
            </div>
          );
        case CHECKBOX:
          return (
            <div className="d-flex align-items-center ">
              <Form.Check // prettier-ignore
                type="checkbox"
                id={`default-checkbox`}
                label={""}
              />
            </div>
          );

        default:
          return (
            <TextInput
              placeholder={item.link}
              text={props.text}
              setText={props.setText}
            />
          );
      }
    } else if (props.screen === PRODUCT_SUMMARY_SCREEN) {
      switch (item.type) {
        case DROPDOWN_WITH_BTN:
          return (
            <div className="custom-dropdown  d-flex ">
              <div className="search-input w-100">
                <SearchInput options={options} placeholder={item.link} />
              </div>

              {/* <InputWithDropdown
                text={inputWithMenuText}
                placeholderText={item.link}
                setTextValue={(text) => setInputWithMenuText(text)}
              /> */}
              <ButtonWithIcon
                text={"Add"}
                iconName={"bi-plus-lg"}
                onClick={() => {}}
              />
            </div>
          );
        case DROPDOWN:
          return (
            <div className="search-input">
              <SearchInput
                options={options}
                placeholder={item.link}
                // width={512}
              />
            </div>
          );
        case CHECKBOX:
          return (
            <div className="d-flex align-items-center ">
              <Form.Check // prettier-ignore
                type="checkbox"
                id={`default-checkbox`}
                label={""}
              />
            </div>
          );

        default:
          return (
            <TextInput
              placeholder={item.link}
              text={props.text}
              setText={props.setText}
            />
          );
      }
    } else if (props.screen === EXTERNAL_USER_MANAGEMENT_SCREEN) {
      return (
        <div className="admin-modal-container d-flex align-item-center mb-4 gap-2 ">
          <Col xs={6} md={9}>
            <TextInput
              placeholder={item.link}
              text={props.text}
              setText={props.setText}
            />
          </Col>
          <Col xs={6} md={3}>
            <div className="btn-container ">
              <Button className="submit-btn ">
                {renderDynamicBtnTitle().submitBtn}
              </Button>
            </div>
          </Col>
        </div>
      );
    } else {
      switch (item.type) {
        case "INFO":
          return (
            <p className="fs-7  modal-text">
              Update successfully and changes will reflect after next run
            </p>
          );

        default:
          return (
            <TextInput
              placeholder={item.link}
              text={props.text}
              setText={props.setText}
            />
          );
      }
    }
  };
  const renderDynamicBtnTitle = () => {
    switch (props.screen) {
      case RETAILER_SUMMARY_SCREEN:
        return {
          submitBtn: "Add",
          closeBtn: "Cancel",
        };
      case PRODUCT_SUMMARY_SCREEN:
        return {
          submitBtn: "Add",
          closeBtn: "Cancel",
        };

      default:
        return {
          submitBtn: "Submit",
          closeBtn: "Close",
        };
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-container"
    >
      <Modal.Header className="modal-header-container">
        <Container>
          <div className="d-flex justify-content-between align-items-center modal-spacing">
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="modal-title"
            >
              {props.modalTitle}
            </Modal.Title>
            <div className="fs-6 pointer-cursor" onClick={() => props.onHide()}>
              <i class="bi bi-x-lg"></i>
            </div>
          </div>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {props.modalData &&
            props.modalData.length > 0 &&
            props.modalData.map((item, index) => (
              <div className="modal-spacing" key={index}>
                <Row className="mt-3 d-flex align-items-baseline">
                  <Col
                    xs={2}
                    md={
                      props.screen === EXTERNAL_USER_MANAGEMENT_SCREEN ? 1 : 3
                    }
                  >
                    <p className="modal-body-text">{item.title}</p>
                  </Col>
                  <Col
                    xs={10}
                    md={
                      props.screen === EXTERNAL_USER_MANAGEMENT_SCREEN ? 11 : 9
                    }
                  >
                    {renderDynamicContent(item)}
                  </Col>
                </Row>
              </div>
            ))}
        </Container>
        {/* table inside modal  */}
        {props.screen === PRODUCT_SUMMARY_SCREEN && (
          <div className="modal-table-container mb-3">
            <CommonTable />
          </div>
        )}
        <Container>
          {/* submit button layout is diff for admin cases so hiding buttons */}
          {props.screen === EXTERNAL_USER_MANAGEMENT_SCREEN ? (
            ""
          ) : (
            <div className="d-flex align-item-center justify-content-center btn-container  mb-4">
              <Button className="submit-btn">
                {renderDynamicBtnTitle().submitBtn}
              </Button>
              <Button
                variant="Link"
                className="close-btn"
                onClick={() => props.onHide()}
              >
                {renderDynamicBtnTitle().closeBtn}
              </Button>
            </div>
          )}
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default CustomModal;
