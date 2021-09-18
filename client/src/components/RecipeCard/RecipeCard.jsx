// Bootstrap/Icons imports
import { Card, Button, Col } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

// Router-dom imports
import { Link } from "react-router-dom";

// Images import
import defaultImg from "../../images/plate.jpg";

const RecipeCard = ({ recipes, setRecipes, onDeleteRecipe, onOpenModal }) => {
  let hours;
  let minutes;

  recipes.forEach((element) => {
    if (element.tempsPreparation >= 60) {
      let time = element.tempsPreparation;
      hours = Math.floor(time / 60);
      if (hours >= 2) {
        hours = hours + " heures";
      } else {
        hours = hours + " heure";
      }
      minutes = (time % 60) + " minutes";
      element.hours = hours;
      element.minutes = minutes;
    }
  });
  return (
    <>
      {recipes &&
        recipes.map((recipe, index) => (
          <Col key={index} xl={3} lg={4} md={6} xs={12} className="mt-3">
            <Card className="card-cantina my-3">
              <Link
                to={{
                  pathname: `/recipe/${recipe.id}`,
                }}
                className="recipe-link"
              >
                <div className="img-container">
                  {recipe.photo ? (
                    <Card.Img variant="top" src={recipe.photo} />
                  ) : (
                    <Card.Img variant="top" src={defaultImg} />
                  )}
                </div>
                <Card.Body className="px-2">
                  <Card.Title>{recipe.titre}</Card.Title>
                  <Card.Text className="m-0">
                    Niveau de difficulté : {recipe.niveau}
                  </Card.Text>
                  <Card.Text className="m-0">
                    Nombre de personne{recipe.personnes > 1 && <>s</>} :{" "}
                    <span>{recipe.personnes}</span>
                  </Card.Text>
                  <Card.Text className="mb-3">
                    Temps de préparation :{" "}
                    {recipe.tempsPreparation >= 60 && (
                      <span>
                        {recipe.hours} et {recipe.minutes}
                      </span>
                    )}
                    {recipe.tempsPreparation <= 59 && (
                      <span>{recipe.tempsPreparation} minutes</span>
                    )}
                  </Card.Text>
                  <Card.Text className="hover-text">
                    Consulter la recette
                  </Card.Text>
                </Card.Body>
              </Link>
              <Card.Body className="pt-0 px-0">
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
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default RecipeCard;
