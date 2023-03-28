import { useEffect } from "react";
import styled from "styled-components";
import styles from "../../styles/Recipe.module.css";

const Flex = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 400px;
  height: 600px;
  object-fit: cover;
  border-radius: 0px 1rem 1rem 0px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
`;

const H3 = styled.h3`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
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
    <div h1text="" src="" ptext="" className={styles.cont}>
      <Flex>
        <Img src={src} />
        <div className={styles.column}>
          <h1>{h1text}</h1>
          <H3>Sugar per recipe: {sugar}g</H3>
          <H3>Ingredients</H3>
          {ingredientList?.map((ingredient, index) => {
            if (ingredient !== "undefined") {
              return (
                <div key={index} className={styles.ingredients}>
                  {ingredient[0]} {ingredient[1]}
                </div>
              );
            }
          })}
        </div>
      </Flex>

      <h3>Steps</h3>
      <p>{ptext}</p>
    </div>
  );
}
