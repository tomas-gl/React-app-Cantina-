// React imports
import { useState, useEffect } from "react";

// Axios imports
import axios from "axios";

// Components imports
import FormAddRecipe from "../components/FormAddRecipe/FormAddRecipe";

const AddRecipe = () => {
  const [recipes, setRecipes] = useState(null);

  // Ajouter une recette
  const onAddRecipe = async (recipe) => {
    console.log("ajout:", recipe);
    axios
      .post("http://localhost:9000/api/recipes", recipe)
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
      });
  };
  return (
    <>
      <FormAddRecipe
        onAddRecipe={onAddRecipe}
      />
    </>
  );
};

export default AddRecipe;
