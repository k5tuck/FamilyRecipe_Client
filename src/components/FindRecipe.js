import React from "react";

export default function FindRecipe() {
  return (
    <div>
      <div className="mx-4 border-2 border-black py-2 px-2 rounded w-4/5">
        <span>Category: </span>
        <span>
          <select
            name="category"
            id=""
            className="w-3/5"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          >
            <option defaultValue>Please Choose an Option Below...</option>
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
        </span>
      </div>
      <br />
      <div className="mx-4 border-2 border-black py-2 px-2 rounded w-4/5">
        <span>Time of Day: </span>
        <span>
          <select
            name="ToD"
            id=""
            className="w-3/5"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          >
            <option defaultValue>Please Choose an Option Below...</option>
            <option value="snack">Snack</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </span>
      </div>
    </div>
  );
}
