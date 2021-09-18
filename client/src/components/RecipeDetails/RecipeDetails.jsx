// Bootstrap/Icons imports
import { Row, Card, Button, Col } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

// Router-dom imports
import { Link } from "react-router-dom";

const RecipeDetails = ({ recipe, onOpenModal }) => {
  return (
    <Row className="recipe my-5 px-sm-5 px-2 py-sm-5 py-3 mx-auto row row">
      <Col lg={8} xs={12} className="px-4">
        <span className="titre d-block">{recipe.titre}</span>
        <span className="description d-block">{recipe.description}</span>
        <div
          className="recipe-header my-3"
          style={{
            backgroundImage: 'url("' + recipe.photo + '"',
          }}
        ></div>
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
      <Col lg={4} xs={12} className="p-4 right-block text-start h-100">
        <p className="recipe-info">Niveau : {recipe.niveau}</p>
        <p className="recipe-info">Nombre de personnes : {recipe.personnes}</p>
        <p className="recipe-info">
          Temps de préparation: {recipe.tempsPreparation} minutes
        </p>
        <p className="recipe-info">Ingrédients: {recipe.ingredients}</p>
        <div className="text-center">
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
        </div>
        {/* </Col>
      <Col xs={12}> */}
      </Col>
    </Row>
  );
};

export default RecipeDetails;
