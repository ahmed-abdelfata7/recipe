import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
const APP_ID = "7fbe5d7f";
const APP_KEY = "1f87ac96920e8b9b590df8a6fe383692";
function App() {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    getAllRecipes();
  }, []);
  const getAllRecipes = async (search = "chicken") => {
    const recipes = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipe(recipes.data.hits);
  };
  const recipeImage = recipe.map(element => {
    console.log(element.image);
    return <img src={element.recipe.image} alt="" />;
  });
  return (
    <div className="App">
      <p onClick={() => getAllRecipes("banana")}>RecipeApp</p>
      {recipeImage}
    </div>
  );
}

export default App;
