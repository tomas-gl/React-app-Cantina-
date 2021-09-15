// Bootstrap/Icons imports
import { Card, Button, Col } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

// Router-dom imports
import { Link } from "react-router-dom";

const Recipe = ({ recettes }) => {
  return (
    <>
      {recettes &&
        recettes.map((recette, index) => (
          <Col key={index} xl={3} lg={4} md={6} xs={12} className="mt-3">
            <Link
              to={{
                pathname: `/recipe/${recette.id}`,
              }}
              className="recette-link"
            >
              <Card className="card-cantina my-3">
                <div className="img-container">
                  <Card.Img variant="top" src={recette.photo} />
                </div>
                <Card.Body className="px-2">
                  <Card.Title>{recette.titre}</Card.Title>
                  <Card.Text className="m-0">
                    Niveau de difficulté: {recette.niveau}
                  </Card.Text>
                  <Card.Text className="m-0">
                    Nombre de personnes: {recette.personnes}
                  </Card.Text>
                  <Card.Text className="mb-3">
                    Temps de préparation: {recette.tempsPreparation} minutes
                  </Card.Text>
                  <Button variant="outline-primary" className="mx-2 mb-2">
                    <FaPencilAlt className="m-1" />
                    Modifier
                  </Button>
                  <Button variant="outline-danger" className="mx-2 mb-2">
                    <FaTrashAlt className="m-1" />
                    Supprimer
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
    </>
  );
};

export default Recipe;
