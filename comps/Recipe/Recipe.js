import { useEffect } from "react";
import styled from "styled-components";
const Flex = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 600px;
  height: 400px;
  object-fit: cover;
  border-radius: 0px 1rem 1rem 0px;
`;

export default function Recipe({
  h1text = "",
  src = "",
  ptext = "",
  ingredientData = "",
  sugar = "",
}) {
  const ingredientList = ingredientData[0];
  // console.log(ingredientList);
  return (
    <div h1text="" src="" ptext="">
      <Flex>
        <Img src={src} />
        <h1>{h1text}</h1>
        <h3>Sugar per recipe: {sugar}g</h3>
      </Flex>
      <h3>Ingredients</h3>
      {ingredientList?.map((ingredient, index) => {
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
