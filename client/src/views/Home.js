// React imports
import { useState, useEffect } from "react";

// Components imports
import RecipeCard from "../components/RecipeCard/RecipeCard";

// Axios imports
import axios from "axios";

// Bootstrap/Icons imports
import { Row, Col } from "react-bootstrap";

const Home = () => {
  const url = "http://localhost:9000/api/recipes";
  const [recipes, setRecipes] = useState(null);
  // let recipeDetails;

  // Récupération des données
  useEffect(() => {
    let isMounted = true;
    axios.get(url).then((response) => {
      if (isMounted) setRecipes(response.data);
    });
    return () => {
      isMounted = false;
    };
  });

  // Supprimer une recette
  const onDeleteRecipe = async (recipe, id) => {
    console.log("suppression:", recipe);
    axios
      .delete(`http://localhost:9000/api/recipe/${id}`, recipe)
      .then((response) => {
        console.log(response.data);
        // setRecipes(response.data);
        const newRecipes = recipes.filter((index) => index !== recipe);
        setRecipes(newRecipes);
      });
  };

  return (
    <>
      <Row>
        <Col xs={12} className="my-4">
          <h1 className="mb-0 title">Liste des recettes</h1>
        </Col>
        <RecipeCard recipes={recipes} setRecipes={setRecipes} onDeleteRecipe={onDeleteRecipe} />
      </Row>
    </>
  );
  // }
};

export default Home;
