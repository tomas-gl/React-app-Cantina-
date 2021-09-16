// React imports
import { useState, useEffect } from "react";

// Axios imports
import axios from "axios";

// Components imports
import FormRecipe from "../components/FormRecipe/FormRecipe";

const AddRecipe = () => {
  const url = "http://localhost:9000/api/recipes";
  const [recettes, setRecettes] = useState(null);
  // let recetteDetails;

  // Récupération des données
  useEffect(() => {
    let isMounted = true;
    axios.get(url).then((response) => {
      if (isMounted) setRecettes(response.data);
    });
  });

  // Ajouter une recette
  const onAddRecipe = async (recette) => {
    console.log("submit:", recette);
    axios
      .post("http://localhost:9000/api/recipes", recette)
      .then((response) => {
        console.log(response);
        setRecettes(response.data);
      });
  };
  return (
    <>
      <FormRecipe
        onAddRecipe={onAddRecipe}
        recettes={recettes}
        setRecettes={setRecettes}
      />
    </>
  );
};

export default AddRecipe;
