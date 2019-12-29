import React, { useEffect, useState } from "react";
import axios from "axios";
import APIconfig from "./config/APIconfig";
import Search from "./Components/Search/Search";
import List from "./Components/List/List";
import "./App.css";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, updateSearch] = useState("chicken");
  useEffect(() => {
    getAllRecipes();
  }, []);
  const getAllRecipes = async () => {
    const recipes = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APIconfig.APP_ID}&app_key=${APIconfig.APP_KEY}`
    );
    setRecipe(recipes.data.hits);
  };
  /**
   * handleSearch submit
   */
  const submitSearch = async event => {
    event.preventDefault();
    await getAllRecipes();
    updateSearch("");
  };
  /**
   * handle input change
   */
  const getSearch = event => {
    updateSearch(event.target.value);
  };
  return (
    <div className="App">
      <Search
        submitSearch={submitSearch}
        getSearch={getSearch}
        search={search}
      />
      <List recipe={recipe} />
    </div>
  );
}

export default App;
