import styled from "styled-components";

const Cont = styled.div`
  background-color: blue;
  border: 1px solid black;
  min-height: 100px;
  width: 500px;
`;

export default function Result() {
  return (
    <Cont>
      <img src="/"></img>
      <h2>Recipe Title</h2>
      <p>recipe description</p>
    </Cont>
  );
}
