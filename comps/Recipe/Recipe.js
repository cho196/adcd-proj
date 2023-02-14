import { useEffect } from "react";
export default function Recipe({
  h1text = "",
  src = "",
  ptext = "",
  ingredientData = "",
}) {
  const ingredientList = ingredientData[0];
  console.log(ingredientList);
  return (
    <div h1text="" src="" ptext="">
      <h1>{h1text}</h1>
      <img src={src} />
      <h3>Ingredients</h3>
      {ingredientList.map((ingredient, index) => {
        if (ingredient !== "undefined") {
          return (
            <div key={index}>
              {ingredient[0]} {ingredient[1]}
            </div>
          );
        }
      })}
      <h3>Steps</h3>
      <p>{ptext}</p>
    </div>
  );
}
