import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function MakeRecipe({ addRecipe }) {
  const [title, setTitle] = useState("");
  let [image, setImage] = useState({});
  const [category, setCategory] = useState("No Specific Category");
  const [tod, setToD] = useState("No Specific Time");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [redirect, setRedirect] = useState(false);

  function renderRedirect(value) {
    setRedirect(value);
    if (redirect) <Redirect to="/recipes" />;
  }

  return (
    <div>
      <h1 className="flex w-full mx-6 my-4 text-2xl items-center justify-center ">
        Make Your Recipe
      </h1>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Add Recipe to Global State
          const recdetails = {
            title,
            image,
            category,
            tod,
            ingredients,
            directions,
          };
          console.log(recdetails);

          //--------PROBLEM------
          // addRecipe(recdetails);
          addRecipe(recdetails, image);
          //--------------------
          setTitle("");
          setImage("");
          setCategory("");
          setToD("");
          setIngredients("");
          setDirections("");

          renderRedirect(true);
        }}
      >
        <span className="mx-6 my-4 text-2xl ">Title:</span>
        <input
          name="title"
          type="text"
          className="mx-4 border-2 px-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <span className="mx-6 my-4 text-2xl ">Image: </span>
        <input
          type="file"
          className="mx-4 border-2 px-2"
          name="image"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <span className="mx-6 my-4 text-2xl ">Category: </span>
        <select
          name="category"
          className="mx-4 border-2 px-2"
          id=""
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option>Please Choose an Option Below...</option>
          <option value="sweets">Sweets</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="japanese">Japanese</option>
          <option value="italian">Italian</option>
          <option value="seafood">Seafood</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="chinese">Chinese</option>
          <option value="african">African</option>
          <option value="vietnamese">Vietnamese</option>
          <option value="korean">Korean</option>
          <option value="indian">Indian</option>
          <option value="spanish">Spanish</option>
          <option value="american">American</option>
        </select>
        <br />
        <span className="mx-6 my-4 text-2xl ">Time of Day: </span>
        <select
          name="tod"
          className="mx-4 border-2 px-2"
          id=""
          value={tod}
          onChange={(e) => {
            setToD(e.target.value);
          }}
        >
          <option>Please Choose an Option Below...</option>
          <option value="snack">Snack</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <br />
        <span className="mx-6 my-4 text-2xl ">Ingredients: </span>
        <input
          type="textarea"
          className="mx-4 border-2 px-2"
          value={ingredients}
          name="ingredients"
          rows="10"
          cols="75"
          onChange={(e) => {
            setIngredients(e.target.value);
          }}
        />
        <br />
        <span className="mx-6 my-4 text-2xl ">Directions: </span>
        <input
          type="textarea"
          className="mx-4 border-2 px-2"
          value={directions}
          name="directions"
          rows="10"
          cols="75"
          onChange={(e) => {
            setDirections(e.target.value);
          }}
        />
        <br />
        <button
          value="submit"
          className="hover:bg-indigo-300 ml-6 bg-purple-500 px-3 py-1"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
