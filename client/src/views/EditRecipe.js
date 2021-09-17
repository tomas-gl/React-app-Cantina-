// React imports
import { useState, useEffect } from "react";

// Components imports
import FormEditRecipe from "../components/FormEditRecipe/FormEditRecipe";

// Axios imports
import axios from "axios";

// Router-dom imports
import { useParams } from "react-router-dom";

const EditRecipe = () => {
  const { id } = useParams();
  const url = `http://localhost:9000/api/recipe/${id}`;
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState(null);

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
  // Modifier une recette
  const onEditRecipe = async (recipe) => {
    console.log("modification:", recipe);
    axios
      .put(`http://localhost:9000/api/recipe/${id}`, recipe)
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
      });
  };
  return (
    <>
      <FormEditRecipe recipe={recipe} setRecipe={setRecipe} onEditRecipe={onEditRecipe}/>
    </>
  );
};

export default EditRecipe;
