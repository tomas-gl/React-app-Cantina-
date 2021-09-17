// React imports
import { useState, useEffect } from "react";

// Axios imports
import axios from "axios";

// Router-dom imports
import { useParams } from "react-router-dom";

// Bootstrap/Icons imports
import { Row, Col } from "react-bootstrap";

const Recipe = () => {
  const { id } = useParams();
  const url = `http://localhost:9000/api/recipe/${id}`;
  const [recipe, setRecipe] = useState(null);

  let recipeDetails = null;

  // Récupération des données
  useEffect(() => {
    axios.get(url).then((response) => {
      setRecipe(response.data);
    });
  }, [url]);
  if (recipe) {
    recipeDetails = recipe;
    console.log(recipeDetails);
  }

  if (recipe) {
    return (
      <>
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
            <p className="recipe-info">
              Nombre de personnes : {recipe.personnes}
            </p>
            <p className="recipe-info">
              Temps de préparation: {recipe.tempsPreparation} minutes
            </p>
            <p className="recipe-info">Ingrédients: {recipe.ingredients}</p>
          </Col>
        </Row>
      </>
    );
  }
  return <></>;
};

export default Recipe;
