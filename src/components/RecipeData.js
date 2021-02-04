import React from "react";

export default function RecipeData({ detailedRecipe }) {
  //   const [detailedRecipe, setIncomingRecipe] = useState({});
  //   const id = useParams();

  //   console.log(id.id);
  //   console.log(recipe.id);

  //   function getRecipes() {
  //     if (recipe.id == id.id) {
  //       setIncomingRecipe(recipe);
  //     }
  //   }

  //   useEffect(() => {
  //     getRecipes();
  //   }, []);

  //   console.log(detailedRecipe);

  return (
    <div>
      <h1 className="text-center text-3xl">Recipe Data</h1>
      <h1>{detailedRecipe.title}</h1>
      <img src={detailedRecipe.image} alt={detailedRecipe.title} />
      <span>
        <strong>{detailedRecipe.tod}</strong> -
        <strong>{detailedRecipe.category}</strong>
      </span>
      <h4>Ingredients: </h4>
      <p>{detailedRecipe.ingredients}</p>
      <br />
      <h4>Directions: </h4>
      <p>{detailedRecipe.directions}</p>
    </div>
  );
}
