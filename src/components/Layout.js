import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import axios from "axios";

async function addRecipe(recipe, image) {
  console.log("---Printing From Layout----");
  console.log(recipe);

  //Update value of image to send to DB
  const data = new FormData();
  data.append("file", recipe.image);
  console.log(data);
  recipe.image = data;
  console.log(recipe);

  const addedresp = await axios.post("/api/addrecipe", recipe);
  const id = addedresp.data.recipe;
  const imageResp = await axios.post("/api/addimage", { data, id });

  console.log(addedresp.data);
  console.log(imageResp.data);
  console.log("----------------------");
}
export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export { addRecipe };
