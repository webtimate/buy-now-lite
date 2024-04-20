import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextInput from "./TextInput";

function MyVerticallyCenteredModal(props) {
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
          UPDATE PRODUCTS
        </Modal.Title>
        <p className="h6" onClick={() => props.onHide()}>
          <i class="bi bi-x-lg"></i>
        </p>
      </Modal.Header>
      <Modal.Body>
        <Row className="mt-3 d-flex align-items-baseline">
          <Col xs={12} md={4}>
            <p className="modal-body-text">Buy Now Url</p>
          </Col>
          <Col xs={6} md={7}>
            <TextInput text={"https://www.oral-b.co.in/en-in"} />
          </Col>
        </Row>
        <Row className="mt-3 d-flex align-items-baseline">
          <Col xs={12} md={4}>
            <p className="modal-body-text">Secondary Buy Now Url</p>
          </Col>
          <Col xs={6} md={7}>
            <TextInput text={"https://www.oral-b.co.in"} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}></Col>
          <Col xs={6} md={8}>
            <p className="fs-7 mt-4 modal-text">
              Update successfully and changes will reflect after next run
            </p>
          </Col>
        </Row>

        <div className="d-flex align-item-center justify-content-center btn-container mt-3 mb-4">
          <Button className="submit-btn">Submit</Button>{" "}
          <Button
            variant="Link"
            className="close-btn"
            onClick={() => props.onHide()}
          >
            Close
          </Button>{" "}
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
