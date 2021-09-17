// React imports
import { useState } from "react";

// Bootstrap/Icons imports
import { Row, Col, Modal, Button } from "react-bootstrap";

const ConfirmationModal = ({ onDeleteRecipe, oneRecipe, show, setShow }) => {
  //   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal show={show} onHide={handleShow}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Confirmation suppression</Modal.Title>
      </Modal.Header>
      <Modal.Body>Êtes-vous sûr de vouloir supprimer cette recette?</Modal.Body>
      <Modal.Footer className="mx-auto">
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
        <Button
          variant="danger"
          onClick={handleClose}
          onClick={() => onDeleteRecipe(oneRecipe)}
        >
          Valider
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
