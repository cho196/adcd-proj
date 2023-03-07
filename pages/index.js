import styled from "styled-components";
import Button from "../comps/Button/Button";
import { useState } from "react";
import axios from "axios";
import Navbar from "../comps/Navbar/Navbar";
import Result from "../comps/Result/Result";
import { useRouter } from "next/router";

export default function Home() {
  const [query, setQuery] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [searchResults, setSearchResults] = useState();
  const [allIds, setAllIds] = useState([]);
  const allIngredients = [];
  const ingredientsObj = {};
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const r = useRouter();
  const searchQuery = (event) => {
    // get all results
    if (event.key === "Enter") {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`)
        .then((response) => {
          console.clear();
          setSearchResults(response.data.meals);
          console.log(response.data);
          setErrorMessage("");
          // get ingredients of results
          // for (let i = 0; i < response.data.meals.length; i++) {
          //   axios
          //     .get(
          //       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchResults[i].idMeal}`
          //     )
          //     .then((response) => {
          //       for (let k = 0; k < 20; k++) {
          //         console.clear();
          //         if (response.data.meals[0][`strIngredient${k}`] !== "") {
          //           ingredientsObj[response.data.meals[0][`strMeasure${k}`]] =
          //             response.data.meals[0][`strIngredient${k}`];
          //         }
          //         console.log(ingredientsObj);
          //       }
          //     })
          //     .catch((err) => {
          //       console.log(err);
          //     });
          // }
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage("Please enter a different ingredient");
          setQuery();
          setSearchResults();
        });

      //get nutrition of results
      // axios
      //   .get(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
      //     headers: { "X-Api-Key": "PN+egjNuV73ERprjvn/T6Q==a3sRvM0NzFqd8Wr4" },
      //   })
      //   .then((response) => {
      //     setNutritionResults(response.data);
      //     console.log(nutritionResults);
      //     setErrorMessage("");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     setErrorMessage("Please enter a different ingredient");
      //     setNutritionResults();
      //   });
    }
  };
  return (
    <div>
      <Navbar />
      <p>Type in an ingredient and click "Enter"</p>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter an ingredient.."
        onKeyDown={searchQuery}
        type="text"
      ></input>
      {/* meal db */}
      <h1>recipes</h1>
      {searchResults &&
        searchResults.map((searchResult, index) => (
          <Result
            key={index}
            src={searchResult.strMealThumb}
            title={searchResult.strMeal}
            handleClick={() => {
              r.push("/recipe/" + searchResult.idMeal);
            }}
            ptext={allIngredients[index]}
          ></Result>
        ))}
      {/* api-ninja */}
      {/* <h1>Sugar</h1>
      {nutritionResults && (
        <div>
          <p>{nutritionResults[0].sugar_g} grams of sugar</p>
        </div>
      )}
      <h1>Protein</h1>
      {nutritionResults && (
        <div>
          <p>{nutritionResults[0].protein_g} grams of protein</p>
        </div>
      )} */}
    </div>
  );
}
