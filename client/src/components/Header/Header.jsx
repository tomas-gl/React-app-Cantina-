// Bootstrap imports
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";

// Images import
import img from "../../images/Cooking-icon.png";

// Router-dom imports
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="px-sm-5 px-2 nav-cantina">
      <Navbar.Brand>
        <img src={img} width="60" className="nav-image" alt="logo" />
        <span className="d-md-inline-block d-none px-4 nav-title">
          Cantina Application
        </span>
      </Navbar.Brand>
      <Nav className="ms-auto navbar-nav">
        <NavLink
          className="nav-link mx-2"
          activeClassName="selected-nav"
          to="/"
          exact
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link mx-2"
          activeClassName="selected-nav"
          to="/add"
          exact
        >
          Ajouter une recette
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default Header;
