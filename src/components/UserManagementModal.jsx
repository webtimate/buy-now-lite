import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextInput from "./TextInput";
import Container from "react-bootstrap/Container";
import {
  CHIPS,
  DROPDOWN,
  options,
  PRODUCT_SUMMARY_SCREEN,
  RETAILER_SUMMARY_SCREEN,
} from "../constant";
import InputWithDropdown from "./InputWithDropdown";
import ActionButton from "./ActionButton";
import ReactChipInput from "react-chip-input";
import SearchInput from "./SearchInput";

const UserManagementModal = (props) => {
  const [inputWithMenuText, setInputWithMenuText] = useState("");
  const [chips, setChips] = useState([]);

  const addChip = (value) => {
    setChips([...chips, value]); // Add new chip using spread operator
  };

  const removeChip = (index) => {
    const updatedChips = [...chips]; // Create a copy using spread operator
    updatedChips.splice(index, 1); // Remove chip at the specified index
    setChips(updatedChips);
  };

  const renderDynamicContent = (item) => {
    switch (item.type) {
      case DROPDOWN:
        return (
          <div className="search-input">
            <SearchInput options={options} placeholder={item.link} />
          </div>
        );
      case CHIPS:
        return (
          <>
            <div className="modal-text-area-container">
              {item.chips.length > 0 &&
                item.chips.map((chip) => (
                  <div
                    key={chip.id}
                    className={item.chips.length > 1 && "mb-3"}
                  >
                    <ReactChipInput
                      classes="class1 class2"
                      chips={chips}
                      onSubmit={addChip}
                      onRemove={removeChip}
                    />
                  </div>
                ))}
            </div>
            {item.manageButtons && (
              <div className="mt-3 d-flex">
                <ActionButton title="Select All" onClick={() => {}} />
                <ActionButton title="Deselect All" onClick={() => {}} />
              </div>
            )}
          </>
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
          submitBtn: "Assign",
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
                  <Col xs={12} md={2}>
                    <p className="modal-body-text">{item.title}</p>
                  </Col>
                  <Col xs={6} md={10}>
                    {renderDynamicContent(item)}
                  </Col>
                </Row>
              </div>
            ))}
          {/* submit button layout is diff for admin cases so hiding buttons */}

          <Row className=" align-items-baseline">
            <Col xs={12} md={3}></Col>

            <Col xs={6} md={9}>
              <div className=" btn-container mt-3 mb-4">
                <Button className="submit-btn">
                  {renderDynamicBtnTitle().submitBtn}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default UserManagementModal;
