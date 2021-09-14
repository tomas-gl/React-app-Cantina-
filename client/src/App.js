// React imports
import { useEffect, useState } from "react";

//CSS imports
import "./App.css";

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
           
          </header>


        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
