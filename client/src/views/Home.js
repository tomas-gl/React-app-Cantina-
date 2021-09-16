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
  const [recettes, setRecettes] = useState(null);
  // let recetteDetails;

  // Récupération des données
  useEffect(() => {
    let isMounted = true;
    axios.get(url).then((response) => {
      if (isMounted) setRecettes(response.data);
    });
    return () => {
      isMounted = false;
    };
  });

  return (
    <>
      <Row>
        <Col xs={12} className="my-4">
          <h1 className="mb-0" style={{ color: "#ffffff" }}>Liste des recettes</h1>
        </Col>
        <Recipe recettes={recettes} />
      </Row>
    </>
  );
  // }
};

export default Home;
