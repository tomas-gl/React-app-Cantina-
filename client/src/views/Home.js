// React imports
import { useState, useEffect } from "react";

// Components imports
import Recipe from "../components/Recipe/Recipe";

// Axios imports
import axios from "axios";

// Bootstrap/Icons imports
import { Row, Col } from "react-bootstrap";

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

  return (
    <>
      <Row>
        <Col xs={12} className="my-4">
          <h1 className="mb-0 title">Liste des recettes</h1>
        </Col>
        <Recipe recipes={recipes} />
      </Row>
    </>
  );
  // }
};

export default Home;
