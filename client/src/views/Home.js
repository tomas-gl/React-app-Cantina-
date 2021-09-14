// React imports
import { useState, useEffect } from "react";

// Axios imports
import axios from "axios";

// Router-dom imports
import { Link } from "react-router-dom";

// Bootstrap/Icons imports
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";

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
        {recettes && (
          <>
            {recettes.map((recette, index) => (
              <Col key={index} lg={3} md={6} xs={12} className="mt-3">
                <Link
                  to={{
                    pathname: `/recipe/${recette.id}`,
                  }}
                  className="recette-link"
                >
                  <Card>
                    <Card.Img variant="top" src={recette.photo} />
                    <Card.Body className="px-2">
                      <Card.Title>{recette.titre}</Card.Title>
                      <Card.Text className="m-0">
                        Niveau de difficulté: {recette.niveau}
                      </Card.Text>
                      <Card.Text className="m-0">
                        Nombre de personnes: {recette.personnes}
                      </Card.Text>
                      <Card.Text className="mb-3">
                        Temps de préparation: {recette.tempsPreparation} minutes
                      </Card.Text>
                      <Button variant="primary" className="mx-2 mb-2">
                        Modifier
                      </Button>
                      <Button variant="danger" className="mx-2 mb-2">
                        Supprimer
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </>
        )}
      </Row>
    </>
  );
  // }
};

export default Home;
