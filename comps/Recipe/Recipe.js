import { useEffect } from "react";
export default function Recipe({
  h1text = "",
  src = "",
  ptext = "",
  ingredientData = {},
}) {
  return (
    <div h1text="" src="" ptext="">
      <h1>{h1text}</h1>
      <img src={src} />
      <h3>Ingredients</h3>
      {ingredientData.map((ingredient, index) => {
        if (ingredient !== "undefined") {
          return (
            <span key={index}>
              <p>{ingredient}</p>
            </span>
          );
        }
      })}
      <h3>Steps</h3>
      <p>{ptext}</p>
    </div>
  );
}
