// React imports
import { useState, useEffect } from "react";

// Components imports
import FormRecipe from "../components/FormRecipe/FormRecipe";

// Axios imports
import axios from "axios";

// Router-dom imports
import { useParams } from "react-router-dom";

// Bootstrap/Icons imports
import { Row, Col } from "react-bootstrap";

const EditRecipe = () => {
      const { id } = useParams();
  const url = `http://localhost:9000/api/recipe/${id}`;
  const [recette, setRecette] = useState(null);

  let recetteDetails = null;

  // Récupération des données
  useEffect(() => {
    axios.get(url).then((response) => {
      setRecette(response.data);
    });
  }, [url]);
  if (recette) {
    recetteDetails = recette;
    console.log(recetteDetails);
  }
  return (
    <>
      <FormRecipe recette={recette} />
    </>
  );
};

export default EditRecipe;
