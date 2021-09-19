// Bootstrap imports
import { Row, Col, Toast } from "react-bootstrap";

const SuccessAlert = ({ successType, showAlert, setShowAlert }) => {
  return (
    <Row
      show={showAlert}
      className="w-100"
      style={{ position: "fixed", bottom: "1%" }}
    >
      <Col xs={10} sm={12}>
        <Toast
          className="toast"
          onClose={() => setShowAlert(false)}
          show={showAlert}
          bg={"success"}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          {successType === "supression" && (
            <Toast.Body>Suppression effectuée avec succès !</Toast.Body>
          )}
          {successType === "creation" && (
            <Toast.Body>Creation effectuée avec succès !</Toast.Body>
          )}
        </Toast>
      </Col>
    </Row>
  );
};

export default SuccessAlert;
