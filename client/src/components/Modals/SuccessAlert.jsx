// React imports
import { useState } from "react";

// Bootstrap/Icons imports
import { Row, Col, Modal, Button, Toast } from "react-bootstrap";

const SuccessAlert = ({ successType, showAlert, setShowAlert }) => {
  //   const [show, setShow] = useState(true);

  //   if(successType == "supression"){
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
          {successType == "supression" && (
            <Toast.Body>Suppression effectuée avec succès !</Toast.Body>
          )}
          {successType == "creation" && (
            <Toast.Body>Creation effectuée avec succès !</Toast.Body>
          )}
        </Toast>
      </Col>
    </Row>
  );

  //   return <></>
};

export default SuccessAlert;
