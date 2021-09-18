// Bootstrap/Icons imports
import { Row, Card, Button, Col } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

// Router-dom imports
import { Link } from "react-router-dom";

const RecipeDetails = ({ recipe, onOpenModal }) => {
  return (
    <Row>
      <Col lg={8} xs={12}>
        <div
          className="recipe-header"
          style={{
            backgroundImage: 'url("' + recipe.photo + '"',
          }}
        ></div>
        <h2>{recipe.titre}</h2>
        <h3>{recipe.description}</h3>
        <p className="text-start mt-4">
          <span
            className="d-block"
            style={{ fontSize: "1.25rem", fontWeight: "bold" }}
          >
            Étapes :
          </span>
          {recipe.etapes}
        </p>
      </Col>
      <Col lg={4} xs={12} className="p-4 right-block text-start">
        <p className="recipe-info">Niveau : {recipe.niveau}</p>
        <p className="recipe-info">Nombre de personnes : {recipe.personnes}</p>
        <p className="recipe-info">
          Temps de préparation: {recipe.tempsPreparation} minutes
        </p>
        <p className="recipe-info">Ingrédients: {recipe.ingredients}</p>
      </Col>
      <Col xs={12}>
        <Button
          variant="outline-primary"
          className="mx-2 mb-2"
          as={Link}
          to={`/recipe/${recipe.id}/edit`}
        >
          <FaPencilAlt className="m-1" />
          Modifier
        </Button>
        <Button
          variant="outline-danger"
          className="mx-2 mb-2"
          onClick={() => onOpenModal(recipe)}
        >
          <FaTrashAlt className="m-1" />
          Supprimer
        </Button>
      </Col>
    </Row>
  );
};

export default RecipeDetails;
