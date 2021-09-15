// Bootstrap imports
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

import img from "../images/Cooking-icon.png";

// Router-dom imports
import { Link } from "react-router-dom";

// Bootstrap/Icons imports
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";

const Header = () => {
    return(

<Navbar>
<Container>
  <img
    src={img} 
    width="30"
    height="30"
    className="d-inline-block align-top"
    alt="Logo"
  />
  <h1>Cantina-App</h1>
          <Link
    to={{
      pathname: '/',
    }}
  >
    <Button variant="outline-secondary">
        Home
    </Button>
    </Link>
    <Link
    to={{
      pathname: '/add',
    }}
  >
    <Button variant="outline-secondary">
        Ajouter une recette
    </Button>
    </Link>
    </Container>
</Navbar>

    )
    };

export default Header;