// React imports
import { useState } from "react";

// Bootstrap/Icons imports
import { Row, Col, Modal, Button } from "react-bootstrap";

const ConfirmationModal = ({
  onDeleteRecipe,
  oneRecipe,
  showModal,
  setShowModal,
}) => {
  //   const [show, setShow] = useState(false);

  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);
  return (
    <Modal show={showModal} onHide={() => setShowModal(true)}>
      <Modal.Header closeButton onClick={() => setShowModal(false)}>
        <Modal.Title>Confirmation suppression</Modal.Title>
      </Modal.Header>
      <Modal.Body>Êtes-vous sûr de vouloir supprimer cette recette ?</Modal.Body>
      <Modal.Footer className="mx-auto">
        <Button
          className="mx-3"
          variant="secondary"
          onClick={() => setShowModal(false)}
        >
          Fermer
        </Button>
        <Button
          className="mx-3"
          variant="danger"
          onClick={() => setShowModal(false)}
          onClick={() => onDeleteRecipe(oneRecipe)}
        >
          Valider
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
