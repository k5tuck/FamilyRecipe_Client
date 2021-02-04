import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import FindRecipe from "./FindRecipe";
import Recipe from "./Recipe";
import RecipeData from "./RecipeData";

export default function RecipeContainer() {
  const { path, url } = useRouteMatch();
  const [recipes, setRecipes] = useState([]);
  const [detailedRecipe, setDetailedRecipe] = useState({});

  async function getFood() {
    const resp = await axios.get("/api/recipes");
    setRecipes(...recipes, resp.data.recipes);
    console.log("------Original Response---------");
    console.log(resp);
    console.log("---------------");
    console.log(resp.data);

    console.log(...recipes, resp.data.recipes);
  }

  //function to pick specific recipe by id
  // loop through recipes get specific recipe return data
  function getDetails(recipeid) {
    const recipeDetails = recipes.find((r) => r.id == recipeid);
    setDetailedRecipe(recipeDetails);
  }

  useEffect(() => {
    getFood();
  }, []);

  console.log(recipes);
  console.log(`URL is: ${url}`);
  console.log(`PATH is: ${path}`);

  return (
    <div>
      <Route exact path={path}>
        <h1 className=" flex justify-center font-bold text-2xl">Recipes</h1>
        <FindRecipe />
        <section className="flex justify-around flex-wrap">
          {recipes.map((recipe) => {
            return (
              <Link to={`${url}/${recipe.id}`}>
                <Recipe
                  key={recipe.id}
                  getDetails={getDetails}
                  path={`${url}/${recipe.id}`}
                  recipedata={recipe}
                />
              </Link>
            );
          })}
        </section>
      </Route>

      <Route exact path={`${url}/:id`}>
        <RecipeData detailedRecipe={detailedRecipe} />
      </Route>
    </div>
  );
}
