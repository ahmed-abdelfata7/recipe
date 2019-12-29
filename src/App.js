import React, { useEffect, useState } from "react";
import axios from "axios";
import APIconfig from "./config/APIconfig";
import Search from "./Components/Search/Search";
import "./App.css";

function App() {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    getAllRecipes();
  }, []);
  const getAllRecipes = async (search = "chicken") => {
    const recipes = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APIconfig.APP_ID}&app_key=${APIconfig.APP_KEY}`
    );
    setRecipe(recipes.data.hits);
  };
  const recipeImage = recipe.map(element => {
    return <img src={element.recipe.image} alt="" />;
  });
  return (
    <div className="App">
      <Search />

      {recipeImage}
    </div>
  );
}

export default App;
