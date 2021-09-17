// Bootstrap/Icons imports
import { Card, Button, Col } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

// Router-dom imports
import { Link } from "react-router-dom";

const RecipeCard = ({ recipes, setRecipes, onDeleteRecipe }) => {
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
                  <Card.Img variant="top" src={recipe.photo} />
                </div>
                <Card.Body className="px-2">
                  <Card.Title>{recipe.titre}</Card.Title>
                  <Card.Text className="m-0">
                    Niveau de difficulté: {recipe.niveau}
                  </Card.Text>
                  <Card.Text className="m-0">
                    Nombre de personnes: {recipe.personnes}
                  </Card.Text>
                  <Card.Text className="mb-3">
                    Temps de préparation: {recipe.tempsPreparation} minutes
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
                <Button variant="outline-danger" className="mx-2 mb-2"
                onClick={()=> onDeleteRecipe(recipe, recipe.id)}>
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
