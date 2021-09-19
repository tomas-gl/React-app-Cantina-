// Bootstrap/Icons imports
import { Card, Button, Col } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

// Router-dom imports
import { Link } from "react-router-dom";

// Images import
import defaultImg from "../../images/plate.jpg";

// Components imports
import RecipeCard from "../Recipes/RecipeCard";

const Recipes = ({
  recipes,
  setRecipes,
  foundTitles,
  setFoundTitles,
  foundLevel,
  setFoundLevel,
  foundPersonnes,
  setFoundPersonnes,
  foundTempsPreparation,
  setFoundTempsPreparation,
  onOpenModal,
}) => {
  let hours;
  let minutes;

  function convertTime(e) {
    e.forEach((element) => {
      if (element.tempsPreparation >= 60) {
        let time = element.tempsPreparation;
        hours = Math.floor(time / 60);
        if (hours >= 2) {
          hours = hours + " h";
        } else {
          hours = hours + " h";
        }
        minutes = (time % 60) + " min";
        element.hours = hours;
        element.minutes = minutes;
      }
    });
  }

  if (recipes) {
    convertTime(recipes);
  } else if (foundTitles) {
    convertTime(foundTitles);
  } else if (foundLevel) {
    convertTime(foundLevel);
  }

  if (foundTitles) {
    return (
      <>
        {foundTitles.length > 0 ? (
          foundTitles.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} onOpenModal={onOpenModal} />
          ))
        ) : (
          <span style={{ fontSize: "2rem", color: "#ffffff" }}>
            Aucun résultat
          </span>
        )}
      </>
    );
  }
  if (foundLevel) {
    return (
      <>
        {foundLevel.length > 0 ? (
          foundLevel.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} onOpenModal={onOpenModal} />
          ))
        ) : (
          <span style={{ fontSize: "2rem", color: "#ffffff" }}>
            Aucun résultat
          </span>
        )}
      </>
    );
  }
  if (foundPersonnes) {
    return (
      <>
        {foundPersonnes.length > 0 ? (
          foundPersonnes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} onOpenModal={onOpenModal} />
          ))
        ) : (
          <span style={{ fontSize: "2rem", color: "#ffffff" }}>
            Aucun résultat
          </span>
        )}
      </>
    );
  }
  if (foundTempsPreparation) {
    return (
      <>
        {foundTempsPreparation.length > 0 ? (
          foundTempsPreparation.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} onOpenModal={onOpenModal} />
          ))
        ) : (
          <span style={{ fontSize: "2rem", color: "#ffffff" }}>
            Aucun résultat
          </span>
        )}
      </>
    );
  }
  if (recipes) {
    return (
      <>
        <div style={{ color: "white" }}>Ta mère la pute recipes</div>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} onOpenModal={onOpenModal} />
        ))}
      </>
    );
  }
};

export default Recipes;
