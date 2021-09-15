// React imports
import { useState, useEffect } from "react";

// Axios imports
import axios from "axios";

// Router-dom imports
import { Link, useParams } from "react-router-dom";

// Bootstrap/Icons imports
import { Button, Row, Col, Spinner } from "react-bootstrap";

const Recipe = () => {
  const { id } = useParams();
  const url = `http://localhost:9000/api/recipe/${id}`;
  const [recette, setRecette] = useState(null);

  let recetteDetails = null;

  // Récupération des données
  useEffect(() => {
    axios.get(url).then((response) => {
      setRecette(response.data);
    });
  }, [url]);
  if (recette) {
    recetteDetails = recette;
    console.log(recetteDetails);
  }

  if (recette) {
    return (
      <>
        <Row>
          <Col lg={8} xs={12}>
            <div
              className="recette-header"
              style={{
                backgroundImage: 'url("' + recette.photo + '"',
              }}
            ></div>
            <h2>{recette.titre}</h2>
            <h3>{recette.description}</h3>
            <p className="text-start mt-4">
              <span
                className="d-block"
                style={{ fontSize: "1.25rem", fontWeight: "bold" }}
              >
                Étapes :
              </span>
              {recette.etapes}
            </p>
          </Col>
          <Col lg={4} xs={12} className="p-4 right-block text-start">
            <p className="recette-info">Niveau : {recette.niveau}</p>
            <p className="recette-info">
              Nombre de personnes : {recette.personnes}
            </p>
            <p className="recette-info">
              Temps de préparation: {recette.tempsPreparation} minutes
            </p>
            <p className="recette-info">Ingrédients: {recette.ingredients}</p>
          </Col>
        </Row>
      </>
    );
  }
  return <></>;
};

export default Recipe;
