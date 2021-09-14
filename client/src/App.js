// React imports
import { useEffect, useState } from "react";

//CSS imports
import "./App.css";

// Router-dom imports
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

// Views imports
import Home from "./views/Home";
import Recipe from "./views/Recipe";

function App() {
  const [recettes, setRecettes] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/api/recipes")
      .then((res) => res.json())
      .then((recipes) => {
        setRecettes(recipes);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <header className="mb-5">
            <Navbar bg="dark" variant="dark">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "orange" }}
                to="/"
                exact
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                activeStyle={{ color: "orange" }}
                to="/recherche"
                exact
              >
                Liste des recettes
              </NavLink>
            </Navbar>
          </header>

          {/* Home */}
          <Switch>
            <Route path="/" component={Home} exact>
              <Home></Home>
            </Route>

            {/* Recipe */}
            <Route path="/recipe/:id" component={Recipe} exact>
              <Recipe></Recipe>
            </Route>

            <Redirect to="/" />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
