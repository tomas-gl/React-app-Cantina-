// React imports
import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

// Components imports
import RecipeCard from "../components/RecipeCard/RecipeCard";
import ConfirmationModal from "../components/Modals/ConfirmationModal";
import SuccessAlert from "../components/Modals/SuccessAlert";

// Axios imports
import axios from "axios";

// Bootstrap/Icons imports
import { Row, Col, Modal, Button } from "react-bootstrap";

const Home = () => {
  const url = "http://localhost:9000/api/recipes";
  const [recipes, setRecipes] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [showAlert, setShowAlert] = useState(null);
  const [oneRecipe, setOneRecipe] = useState(null);
  const [successType, setSuccessType] = useState(null);
  // const { state } = location;
  // let recipeDetails;
  // let oneRecipe = null;

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
  const onDeleteRecipe = async (recipe) => {
    // console.log(recipe, recipe.id);
    console.log("suppression:", recipe);
    axios
      .delete(`http://localhost:9000/api/recipe/${recipe.id}`, recipe)
      .then((response) => {
        console.log(response.data);
        // setRecipes(response.data);
        const newRecipes = recipes.filter((index) => index !== recipe);
        setRecipes(newRecipes);
        setShowModal(false);
        setShowAlert(true);
        setSuccessType("supression");
      });
  };

  // Ouverture de la modal
  function onOpenModal(recipe) {
    setShowModal(true);
    setOneRecipe(recipe);
    console.log(recipe);
  }
  // function Example() {

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // return (
  //   <>
  //     <Button variant="primary" onClick={handleShow}>
  //       Launch demo modal
  //     </Button>

  //   </>
  // );
  // }
  if (recipes) {
    return (
      <>
        <Row>
          <Col xs={12} className="my-4">
            <h1 className="mb-0 title">Liste des recettes</h1>
          </Col>
          <RecipeCard
            recipes={recipes}
            setRecipes={setRecipes}
            onOpenModal={onOpenModal}
          />
        </Row>

        <ConfirmationModal
          onDeleteRecipe={onDeleteRecipe}
          oneRecipe={oneRecipe}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <SuccessAlert
          successType={successType}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      </>
    );
  }
  return <></>;
};

export default Home;
