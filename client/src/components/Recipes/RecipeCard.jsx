import React from "react";

// Bootstrap/Icons imports
import { Card, Button, Col } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

// Router-dom imports
import { Link } from "react-router-dom";

// Images import
import defaultImg from "../../images/plate.jpg";

const RecipeCard = (props, index, onOpenModal) => {
  // console.log(recipe)
  return (
    <>
      <Col
        key={index}
        xl={3}
        lg={4}
        md={6}
        xs={12}
        className="recipe-cantina mt-3"
      >
        <Card className="card-cantina my-3">
          <Link
            to={{
              pathname: `/recipe/${props.recipe.id}`,
            }}
            className="recipe-link"
          >
            <div className="img-container">
              {props.recipe.photo ? (
                <Card.Img variant="top" src={props.recipe.photo} />
              ) : (
                <Card.Img variant="top" src={defaultImg} />
              )}
            </div>
            <Card.Body className="px-2">
              <Card.Title className="recipe-titre" value={props.recipe.titre}>
                {props.recipe.titre}
              </Card.Title>
              <Card.Text
                className="m-0 recipe-niveau"
                value={props.recipe.niveau}
              >
                Niveau de difficulté : {props.recipe.niveau}
              </Card.Text>
              <Card.Text
                className="m-0 recipe-personnes"
                value={props.recipe.personnes}
              >
                Nombre de personne{props.recipe.personnes > 1 && <>s</>} :{" "}
                <span>{props.recipe.personnes}</span>
              </Card.Text>
              <Card.Text
                className="mb-3 recipe-tempsPreparation"
                value={props.recipe.tempsPreparation}
              >
                Temps de préparation :{" "}
                {props.recipe.tempsPreparation >= 60 && (
                  <span>
                    {props.recipe.hours} et {props.recipe.minutes}
                  </span>
                )}
                {props.recipe.tempsPreparation <= 59 && (
                  <span>{props.recipe.tempsPreparation} minutes</span>
                )}
              </Card.Text>
              <Card.Text className="hover-text">Consulter la recette</Card.Text>
            </Card.Body>
          </Link>
          <Card.Body className="pt-0 px-0">
            <Button
              variant="outline-primary"
              className="mx-2 mb-2"
              as={Link}
              to={`/recipe/${props.recipe.id}/edit`}
            >
              <FaPencilAlt className="m-1" />
              Modifier
            </Button>
            <Button
              variant="outline-danger"
              className="mx-2 mb-2"
              onClick={() => props.onOpenModal(props.recipe)}
            >
              <FaTrashAlt className="m-1" />
              Supprimer
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default RecipeCard;
