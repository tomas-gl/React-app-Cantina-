// React imports
import { useState, useEffect } from "react";

// Axios imports
import axios from "axios";

// Components imports
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import ConfirmationModal from "../components/Modals/ConfirmationModal";

// Router-dom imports
import { useParams, useHistory } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const url = `http://localhost:9000/api/recipe/${id}`;
  const [recipe, setRecipe] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [setShowAlert] = useState(null);
  const [oneRecipe, setOneRecipe] = useState(null);
  const [setSuccessType] = useState(null);
  const history = useHistory();

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

  // Supprimer une recette
  const onDeleteRecipe = async (recipe) => {
    console.log("suppression:", recipe);
    axios
      .delete(`http://localhost:9000/api/recipe/${recipe.id}`, recipe)
      .then((response) => {
        console.log(response.data);
        setShowModal(false);
        setShowAlert(true);
        setSuccessType("supression");
      })
      .then(
        history.push({
          pathname: "/",
          state: { successType: "creation", showAlert: true },
        })
      );
  };

  // Ouverture de la modal
  function onOpenModal(recipe) {
    setShowModal(true);
    setOneRecipe(recipe);
    console.log(recipe);
  }

  if (recipe) {
    return (
      <>
        <RecipeDetails recipe={recipe} onOpenModal={onOpenModal} />
        <ConfirmationModal
          onDeleteRecipe={onDeleteRecipe}
          oneRecipe={oneRecipe}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </>
    );
  }
  return <></>;
};

export default Recipe;
