import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

const FailureOrSuccessModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-container"
    >
      <Modal.Body>
        <Container>
          <div
            className="fs-6 pointer-cursor d-flex justify-content-end"
            onClick={() => props.onHide()}
          >
            <i class="bi bi-x-lg"></i>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src={
                props.success
                  ? require("../assets/images/success.png")
                  : require("../assets/images/failure.png")
              }
              width="100"
              height="100"
              alt="success or failure logo"
            />
          </div>
          <div className="text-center">
            <div className="mt-3 confirm-modal-title">
              {props.success ? "Success" : "Sorry"}{" "}
            </div>
            <div className="confirm-modal-description mt-2">
              {props.success
                ? "Data saved successfully"
                : "There was an error processing your request."}
            </div>
            <div className="d-flex justify-content-center btn-container mt-3 mb-2">
              <Button
                className="submit-btn "
                style={{
                  backgroundColor: props.success ? " #191d3f" : "#EB1E25",
                }}
                onClick={() => props.onHide()}
              >
                Ok
              </Button>
            </div>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default FailureOrSuccessModal;
