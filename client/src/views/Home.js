// React imports
import { useState, useEffect } from "react";

// Components imports
import RecipeCard from "../components/RecipeCard/RecipeCard";

// Axios imports
import axios from "axios";

// Bootstrap/Icons imports
import { Row, Col, Modal, Button } from "react-bootstrap";

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
  // function Example() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
          <RecipeCard recipes={recipes} setRecipes={setRecipes} onDeleteRecipe={onDeleteRecipe}/>
        </Row>
        
        <Modal show={show} onHide={handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  return <></>
};

export default Home;
