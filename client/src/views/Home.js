// React imports
import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

// Components imports
import Recipes from "../components/Recipes/Recipes";
import ConfirmationModal from "../components/Modals/ConfirmationModal";
import SuccessAlert from "../components/Modals/SuccessAlert";

// Axios imports
import axios from "axios";

// Bootstrap/Icons imports
import { Row, Col, Modal, Button, Form } from "react-bootstrap";

const Home = () => {
  const url = "http://localhost:9000/api/recipes";
  const [recipes, setRecipes] = useState(null);
  const [title, setTitle] = useState("");
  const [foundTitles, setFoundTitles] = useState(recipes);
  const [level, setLevel] = useState("");
  const [foundLevel, setFoundLevel] = useState(recipes);
  const [personnes, setPersonnes] = useState("");
  const [foundPersonnes, setFoundPersonnes] = useState(recipes);
  const [tempsPreparation, setTempsPreparation] = useState("");
  const [foundTempsPreparation, setFoundTempsPreparation] = useState(recipes);
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
        setFoundTitles("");
        setFoundLevel("");
        setFoundPersonnes("");
        setFoundTempsPreparation("");
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

  const filter = (e) => {
    const keyword = e.target.value;
    if (e.target.id == "searchTitre") {
      setFoundLevel("");
      setFoundPersonnes("");
      setFoundTempsPreparation("");
      if (keyword !== "") {
        const results = recipes.filter((recipe) => {
          return recipe.titre.toLowerCase().startsWith(keyword.toLowerCase());
        });
        setFoundTitles(results);
      } else {
        setFoundTitles(recipes);
      }
      setTitle(keyword);
    } else if (e.target.id == "searchNiveau") {
      setFoundTitles("");
      setFoundPersonnes("");
      setFoundTempsPreparation("");
      if (keyword !== "" && keyword !== "all") {
        const results = recipes.filter((recipe) => {
          return recipe.niveau.toLowerCase().startsWith(keyword.toLowerCase());
        });
        setFoundLevel(results);
      } else if (keyword == "all") {
        setFoundLevel(recipes);
      }
      setLevel(keyword);
    } else if (e.target.id == "searchPersonnes") {
      setFoundTitles("");
      setFoundLevel("");
      setFoundTempsPreparation("");
      if (keyword !== "") {
        const results = recipes.filter((recipe) => {
          return recipe.personnes <= keyword;
        });
        setFoundPersonnes(results);
      } else {
        setFoundPersonnes(recipes);
      }
      setPersonnes(keyword);
    } else if (e.target.id == "searchTemps") {
      setFoundTitles("");
      setFoundLevel("");
      setFoundPersonnes("");
      if (keyword !== "") {
        const results = recipes.filter((recipe) => {
          return recipe.tempsPreparation <= keyword;
        });
        setFoundTempsPreparation(results);
      } else {
        setFoundTempsPreparation(recipes);
      }
      setTempsPreparation(keyword);
    }
  };

  if (recipes) {
    return (
      <>
        <Row>
          <Col md={3} xs={12} className="my-4">
            <h1
              className="mb-0 title text-start"
              style={{ fontSize: "2.25rem" }}
            >
              Liste des recettes
            </h1>
          </Col>
          <Col md={9} xs={12} className="my-4">
            <span className="d-block title-filtre">Filtrer par :</span>
            <Row className="filtre p-3 mx-auto">
              <Form.Group as={Col} md="3" className="mb-3">
                <Form.Label className="title">Titre</Form.Label>
                <Form.Control
                  type="text"
                  id="searchTitre"
                  value={title}
                  onChange={filter}
                />
              </Form.Group>
              <Form.Group as={Col} md="3" className="mb-3">
                <Form.Label className="title">Niveau de difficulté</Form.Label>
                <Form.Select id="searchNiveau" value={level} onChange={filter}>
                  <option value="all">Tous</option>
                  <option value="padawan">Padawan</option>
                  <option value="jedi">Jedi</option>
                  <option value="maitre">Maître</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="3" className="mb-3">
                <Form.Label className="title">Nombre de personnes</Form.Label>
                <Form.Control
                  type="number"
                  id="searchPersonnes"
                  value={personnes}
                  onChange={filter}
                />
              </Form.Group>
              <Form.Group as={Col} md="3" className="mb-3">
                <Form.Label className="title">
                  Temps de préparation (min)
                </Form.Label>
                <Form.Control
                  type="number"
                  id="searchTemps"
                  value={tempsPreparation}
                  onChange={filter}
                />
              </Form.Group>
            </Row>
          </Col>
          <Recipes
            recipes={recipes}
            setRecipes={setRecipes}
            foundTitles={foundTitles}
            setfoundTitles={setFoundTitles}
            foundLevel={foundLevel}
            setFoundLevel={setFoundLevel}
            foundPersonnes={foundPersonnes}
            setFoundPersonnes={setFoundPersonnes}
            foundTempsPreparation={foundTempsPreparation}
            setFoundTempsPreparation={setFoundTempsPreparation}
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
