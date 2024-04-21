import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextInput from "./TextInput";
import Container from "react-bootstrap/Container";
import {
  CHECKBOX,
  DROPDOWN,
  DROPDOWN_WITH_BTN,
  FILE_UPLOAD,
  PRODUCT_SUMMARY_SCREEN,
  RETAILER_SUMMARY_SCREEN,
} from "../constant";
import OutlineButton from "./OutlineButton";
import Form from "react-bootstrap/Form";
import InputWithDropdown from "./InputWithDropdown";
import ButtonWithIcon from "./ButtonWithIcon";

const CustomModal = (props) => {
  const renderDynamicContent = (item) => {
    if (props.screen === RETAILER_SUMMARY_SCREEN) {
      switch (item.type) {
        case FILE_UPLOAD:
          return (
            <div className="d-flex align-items-center ">
              <OutlineButton text={"Choose file"} />
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
          return <TextInput text={item.link} />;
      }
    } else if (props.screen === PRODUCT_SUMMARY_SCREEN) {
      switch (item.type) {
        case DROPDOWN_WITH_BTN:
          return (
            <div className="custom-dropdown  d-flex">
              <InputWithDropdown
                text={item.link}
                placeholderText={""}
                setTextValue={() => {}}
              />
              <ButtonWithIcon
                text={"Add"}
                iconName={"bi-plus-lg"}
                onClick={() => {}}
              />
            </div>
          );
        case DROPDOWN:
          return (
            <div className="custom-dropdown  d-flex">
              <InputWithDropdown
                text={item.link}
                placeholderText={""}
                setTextValue={() => {}}
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
          return <TextInput text={item.link} />;
      }
    } else {
      switch (item.type) {
        case "INFO":
          return (
            <p className="fs-7  modal-text">
              Update successfully and changes will reflect after next run
            </p>
          );

        default:
          return <TextInput text={item.link} />;
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
      <Modal.Header className="d-flex justify-content-between modal-header-container">
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          {props.modalTitle}
        </Modal.Title>
        <p className="h6" onClick={() => props.onHide()}>
          <i class="bi bi-x-lg"></i>
        </p>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {props.modalData.map((item, index) => (
            <Row className="mt-3 d-flex align-items-baseline">
              <Col xs={12} md={4}>
                <p className="modal-body-text">{item.title}</p>
              </Col>
              <Col xs={6} md={8}>
                {renderDynamicContent(item)}
              </Col>
            </Row>
          ))}

          {}
          <div className="d-flex align-item-center justify-content-center btn-container mt-3 mb-4">
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
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default CustomModal;
