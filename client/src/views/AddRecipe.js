// React imports
import { useState, useEffect, useContext } from "react";

// Axios imports
import axios from "axios";

// Components imports
import FormAddRecipe from "../components/FormAddRecipe/FormAddRecipe";
import SuccessAlert from "../components/Modals/SuccessAlert";

// Contexts imports
import SuccessTypeContext from "../Contexts/SuccessTypeContext";

// Router-dom imports
import { useHistory } from "react-router-dom";

const AddRecipe = () => {
  const [recipes, setRecipes] = useState(null);
  const [successType, setSuccessType] = useState(null);
  const [showAlert, setShowAlert] = useState(null);
  const history = useHistory();

  // let creation = "creation";

  // Ajouter une recette
  const onAddRecipe = async (recipe) => {
    console.log("ajout:", recipe);
    axios
      .post("http://localhost:9000/api/recipes", recipe)
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
        setShowAlert(true);
        setSuccessType("creation");
      })
      .then(history.push({
        pathname: '/',
        state: { successType :"creation",
        showAlert : true,
       }
      }));
  };
  return (
    <>
      <FormAddRecipe onAddRecipe={onAddRecipe} />
    </>
  );
};

export default AddRecipe;
