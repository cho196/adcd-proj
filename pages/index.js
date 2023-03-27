import styled from "styled-components";
import Button from "../comps/Button/Button";
import Searchbar from "../comps/Searchbar/Searchbar";
import { useState } from "react";
import axios from "axios";
import Navbar from "../comps/Navbar/Navbar";
import Result from "../comps/Result/Result";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

// const Grid = styled.div`

// `;

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
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage("Please enter a different ingredient");
          setQuery();
          setSearchResults();
        });
    }
  };

  return (
    <div>
      <title>Dishcovery</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/dc_logo.svg" />

      <img className="DClogo" src="dc_logo.svg"></img>
      <Navbar />
      <div className="custom-field">
        <input
          id="search-field"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter an ingredient.."
          onKeyDown={searchQuery}
          type="text"
        ></input>
      </div>
      {/* meal db */}
      <br></br>
      <br></br>
      <h2>
        Recipes to be <img className="dcvrd" src="dishcovered.svg"></img>
      </h2>
      <div className={styles.content__area}>
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
      </div>
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
