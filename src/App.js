import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((Recipe, index) => index !== indexToDelete)
    );

  const createRecipe = (newRecipe) =>
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);

    return (
    <div className="App">
        <div style={{textAlign: "center"}}>
      <header>
        <h1 style={{fontFamily: "Garamond"}}>DELICIOUS FOOD RECIPES</h1>
      </header>
        </div>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;