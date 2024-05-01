import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import OutlineButton from "./OutlineButton";

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
          <div className="d-flex align-items-center gap-4 p-2">
            <img
              src={require("../assets/images/warning-icon.png")}
              width="41"
              height="36"
              alt="warning "
            />
            <div className="confirm-modal-subtitle">
              Are you sure you want to delete selected <br />
              records? You won't be able to revert this
            </div>
          </div>

          <div className="d-flex align-item-right justify-content-end btn-container mt-4 mb-2">
            <OutlineButton
              text={"Cancel"}
              onClick={() => props.onHide()}
              className="confirm-modal-btn"
            />
            <Button className="submit-btn ">Yes, Delete</Button>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default DeleteModal;
