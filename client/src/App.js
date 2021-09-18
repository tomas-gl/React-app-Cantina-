// Components imports
import Header from "./components/Header/Header";

// Views imports
import Home from "./views/Home";
import Recipe from "./views/Recipe";
import AddRecipe from "./views/AddRecipe";
import EditRecipe from "./views/EditRecipe";

//CSS imports
import "./App.css";

// Router-dom imports
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

function App() {
  // const [recipes, setRecipes] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:9000/api/recipes")
  //     .then((res) => res.json())
  //     .then((recipes) => {
  //       setRecipes(recipes);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <div className="App pb-5">
        <Header />
        <Container>
          {/* Home */}
          <Switch>
            <Route path="/" comp={Home} exact>
              <Home></Home>
            </Route>
            {/* Add Recipe */}
            <Route path="/add" comp={AddRecipe} exact>
              <AddRecipe></AddRecipe>
            </Route>
            {/* Edit Recipe */}
            <Route path="/recipe/:id/edit/" comp={EditRecipe} exact>
              <EditRecipe></EditRecipe>
            </Route>

            {/* Recipe */}
            <Route path="/recipe/:id" comp={Recipe} exact>
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
