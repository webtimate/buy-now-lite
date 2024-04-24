import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextInput from "./TextInput";
import Container from "react-bootstrap/Container";
import {
  CHECKBOX,
  CHIPS,
  DROPDOWN,
  DROPDOWN_WITH_BTN,
  EXTERNAL_USER_MANAGEMENT_SCREEN,
  FILE_UPLOAD,
  PRODUCT_SUMMARY_SCREEN,
  RETAILER_SUMMARY_SCREEN,
} from "../constant";
import OutlineButton from "./OutlineButton";
import Form from "react-bootstrap/Form";
import InputWithDropdown from "./InputWithDropdown";
import ButtonWithIcon from "./ButtonWithIcon";
import Input from "./Input";
import Chips from "./Chips";
import ActionButton from "./ActionButton";

const DeleteModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-container"
    >
      <Modal.Header className="modal-header-container ">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="confirm-modal-title">{props.modalTitle}</div>
            <div className="fs-6 pointer-cursor" onClick={() => props.onHide()}>
              <i class="bi bi-x-lg"></i>
            </div>
          </div>
        </Container>
      </Modal.Header>

      <Modal.Body>
        <Container>
          {/* <div className="modal-spacing">
            
          </div> */}
          <div className="confirm-modal-subtitle">
            Are you sure you want to delete all?
          </div>
          <div className="warning-container mt-3">
            <div className="d-flex  align-items-center">
              <img
                src={require("../assets/images/warning-icon.png")}
                width="18"
                height="18"
                alt="warning "
              />
              <span className="confirm-modal-subtitle">Warning</span>
            </div>
            <div className="mt-3">
              By deleting all, you won't be able to do undo{" "}
            </div>
          </div>

          <div className="d-flex align-item-right justify-content-end btn-container mt-4 mb-2">
            <Button className="submit-btn">Yes, Delete</Button>
            <Button
              variant="Link"
              className="close-btn"
              onClick={() => props.onHide()}
            >
              Cancel
            </Button>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default DeleteModal;
