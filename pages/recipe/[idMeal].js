import { useEffect, useState } from "react";
import styled from "styled-components";
import Recipe from "../../comps/Recipe/Recipe";
import axios from "axios";

export default function RecipePage() {
  const [recipe, setRecipe] = useState("");
  const ingredientsObj = {};
  const [ingredientsArray, setIngredientsArray] = useState([]);
  var pathArray = window.location.pathname.split("/");
  var idMeal = pathArray[2];
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => {
        console.clear();
        console.log(response.data);
        setRecipe(response.data.meals[0]);
        // console.log(recipe);
        for (let i = 0; i < 20; i++) {
          if (response.data.meals[0][`strIngredient${i}`] !== "") {
            ingredientsObj[response.data.meals[0][`strMeasure${i}`]] =
              response.data.meals[0][`strIngredient${i}`];
          }
          setIngredientsArray([Object.entries(ingredientsObj)]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Recipe
        h1text={recipe.strMeal}
        src={recipe.strMealThumb}
        ptext={recipe.strInstructions}
        ingredientData={ingredientsArray}
      ></Recipe>
    </>
  );
}
