import { useEffect, useState } from "react";
import styled from "styled-components";
import Recipe from "../../comps/Recipe/Recipe";
import axios from "axios";
import NavBar from "../../comps/Navbar/Navbar";

export default function RecipePage() {
  const [recipe, setRecipe] = useState("");
  const ingredientsObj = {};
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [sugar, setSugar] = useState("");
  var sugarArray = [];
  var pathArray = window.location.pathname.split("/");
  var idMeal = pathArray[2];
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => {
        console.clear();
        // console.log(response.data);
        setRecipe(response.data.meals[0]);
        // console.log(recipe);
        for (let i = 0; i < 20; i++) {
          if (
            response.data.meals[0][`strIngredient${i}`] !== "" &&
            response.data.meals[0][`strIngredient${i}`] !== undefined
          ) {
            ingredientsObj[response.data.meals[0][`strMeasure${i}`]] =
              response.data.meals[0][`strIngredient${i}`];
          }
          setIngredientsArray([Object.entries(ingredientsObj)]);
        }
        let str = Object.keys(ingredientsObj)
          .map((key) => `${key} ${ingredientsObj[key]}`)
          .join(", ");
        console.log(str);
        axios
          .get(`https://api.api-ninjas.com/v1/nutrition?query=${str}`, {
            headers: {
              "X-Api-Key": "PN+egjNuV73ERprjvn/T6Q==a3sRvM0NzFqd8Wr4",
            },
          })
          .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
              sugarArray.push(response.data[i].sugar_g);
            }
            console.log(sugarArray);
            let result = sugarArray.reduce((a, b) => {
              return a + b;
            }, 0);

            setSugar(result);
          })
          .catch((err) => {
            console.log(err);
            // setErrorMessage("Please enter a different ingredient");
            // setNutritionResults();
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Recipe
        h1text={recipe.strMeal}
        src={recipe.strMealThumb}
        ptext={recipe.strInstructions}
        ingredientData={ingredientsArray}
        sugar={sugar}
      ></Recipe>
    </>
  );
}
