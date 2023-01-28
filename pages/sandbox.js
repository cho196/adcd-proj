import styled from "styled-components";
import Button from "../comps/Button/Button";
import Result from "../comps/Result/Result";
import Searchbar from "../comps/Searchbar/Searchbar";
import { useState } from "react";
import axios from "axios";

export default function Sandbox() {
  const [query, setQuery] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [searchResults, setSearchResults] = useState();
  const [nutritionResults, setNutritionResults] = useState();
  const searchQuery = (event) => {
    if (event.key === "Enter") {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`)
        .then((response) => {
          console.clear();
          setSearchResults(response.data.meals);
          console.log(searchResults);
          setErrorMessage("");
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage("Please enter a different ingredient");
          setQuery();
          setSearchResults();
        });
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
          <div key={index}>
            <p>{searchResult.strMeal}</p>
          </div>
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
