// React imports
import { useState, useEffect } from "react";

// Components imports
import Recipe from "../components/Recipe"; 

// Axios imports
import axios from "axios";

// Router-dom imports
import { Link } from "react-router-dom";

// Bootstrap/Icons imports
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

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
        <Col xs={12}>
          <h1>Liste des recettes</h1>
        </Col>
            <Recipe recettes={recettes}/>
      </Row>
    </>
  );
  // }
};

export default Home;
