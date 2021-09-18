// Bootstrap/Icons imports
import { Row, Card, Button, Col } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

// Router-dom imports
import { Link } from "react-router-dom";

import { FcApproval } from "react-icons/fc";
import { GiCook } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiCookingPot } from "react-icons/gi";
import { AiOutlinePushpin } from "react-icons/ai";

const RecipeDetails = ({ recipe, onOpenModal }) => {
  return (
    <Row className="recipe my-5 px-sm-5 px-2 py-sm-5 py-3 mx-auto row row">
      <Col lg={8} xs={12} className="px-4">
        <span className="titre d-block">{recipe.titre}</span>
        <span className="description d-block">{recipe.description}</span>
      </Col>
      <Col lg={8} xs={12} className="px-4">
        <div
          className="recipe-header my-3"
          style={{
            backgroundImage: 'url("' + recipe.photo + '"',
          }}
        ></div>
        <div className="text-start mt-4">
          <span
            className="d-block mb-3"
            style={{ fontSize: "1.25rem", fontWeight: "bold" }}
          >
            Étapes :
          </span>
          {recipe.etapes.map((etape, index) => (
            <p key={index}>
              <FcApproval
                className="recipe-icon"
                style={{ fontSize: "1.5rem" }}
              />{" "}
              {etape}
            </p>
          ))}
        </div>
      </Col>
      <Col lg={4} xs={12} className="p-4 text-start h-100">
        <p className="recipe-info">
          <GiCook className="mx-1 recipe-icon" style={{ fontSize: "2rem" }} />
          Niveau : <span>{recipe.niveau}</span>
        </p>
        <p className="recipe-info">
          <BsFillPeopleFill
            className="mx-1 recipe-icon"
            style={{ fontSize: "2rem" }}
          />
          Nombre de personnes : <span>{recipe.personnes}</span>
        </p>
        <p className="recipe-info">
          <GiCookingPot
            className="mx-1 recipe-icon"
            style={{ fontSize: "2rem" }}
          />
          Temps de préparation: <span>{recipe.tempsPreparation} minutes</span>
        </p>

        <div className="recipe-info mb-3">
          <span className="d-block mb-3 mt-4">Ingrédients :</span>
          {recipe.ingredients.map((ingredient, index) => (
            <p key={index}>
              <AiOutlinePushpin
                className="recipe-icon"
                style={{ fontSize: "1.5rem" }}
              />{" "}
              {ingredient.map((subIngredient, sIndex) => (
                <span key={sIndex} className="px-1">{subIngredient}</span>
              ))}
            </p>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Button
            variant="primary"
            className="mx-2 mb-2"
            as={Link}
            to={`/recipe/${recipe.id}/edit`}
          >
            <FaPencilAlt className="m-1" />
            Modifier
          </Button>
          <Button
            variant="danger"
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
