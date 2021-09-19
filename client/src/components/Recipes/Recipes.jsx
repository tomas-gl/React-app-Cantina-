// Components imports
import RecipeCard from "../Recipes/RecipeCard";

const Recipes = ({
  recipes,
  foundTitles,
  foundLevel,
  foundPersonnes,
  foundTempsPreparation,
  onOpenModal,
}) => {
  let hours;
  let minutes;

  // Convertir le temps en h/m
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
  } else if (foundPersonnes) {
    convertTime(foundPersonnes);
  } else if (foundTempsPreparation) {
    convertTime(foundTempsPreparation);
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
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} onOpenModal={onOpenModal} />
        ))}
      </>
    );
  }
};

export default Recipes;
