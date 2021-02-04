import "./assets/main.css";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout, { addRecipe } from "./components/Layout";
import Home from "./components/Home";
import MakeRecipe from "./components/MakeRecipe";
import RecipeContainer from "./components/RecipeContainer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/makerecipe">
            <MakeRecipe addRecipe={addRecipe} />
          </Route>
          <Route path="/recipes">
            <RecipeContainer />
          </Route>
        </Layout>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your Layout, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
