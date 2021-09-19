// Bootstrap imports
import { Modal, Button } from "react-bootstrap";

const ConfirmationModal = ({
  onDeleteRecipe,
  oneRecipe,
  showModal,
  setShowModal,
}) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(true)}>
      <Modal.Header closeButton onClick={() => setShowModal(false)}>
        <Modal.Title>Confirmation suppression</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Êtes-vous sûr de vouloir supprimer cette recette ?
      </Modal.Body>
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
          onClick={() => {
            setShowModal(false);
            onDeleteRecipe(oneRecipe);
          }}
        >
          Valider
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
