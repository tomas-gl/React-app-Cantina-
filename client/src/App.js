// React imports
import { useEffect, useState } from "react";

// Components imports
import Header from "./components/Header";

// Views imports
import Home from "./views/Home";
import Recipe from "./views/Recipe";
import AddRecipe from "./views/AddRecipe";

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

function App() {
  // const [recettes, setRecettes] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:9000/api/recipes")
  //     .then((res) => res.json())
  //     .then((recipes) => {
  //       setRecettes(recipes);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container>
          {/* Home */}
          <Switch>
            <Route path="/" component={Home} exact>
              <Home></Home>
            </Route>

            <Route path="/add" component={AddRecipe} exact>
              <AddRecipe></AddRecipe>
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
