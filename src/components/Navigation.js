import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="flex justify-around w-full mx-5">
      <span className="flex w-1/2 mx-6 text-2xl">Family Recipes</span>
      <nav className=" mx-6 text-xl">
        <ul className=" flex justify-around ">
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/makerecipe">Make a Recipe</Link>{" "}
          </li>
          <li className="mx-2">
            <Link to="/recipes">Recipes</Link>
          </li>
        </ul>
        {/* <Link to="/">Home</Link>
        <Link to="/makerecipe">Make a Recipe</Link>
        <Link to="/recipes">Recipes</Link> */}
      </nav>
    </div>
  );
}
