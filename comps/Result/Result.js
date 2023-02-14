import styled from "styled-components";

const Cont = styled.div`
  background-color: blue;
  border: 1px solid black;
  min-height: 100px;
  width: 500px;
  :hover {
    background-color: red;
  }
`;
const Img = styled.img`
  height: 100px;
  width: 100px;
`;

export default function Result({
  src = "",
  title = "",
  handleClick = "",
  ptext = "",
}) {
  return (
    <Cont onClick={handleClick}>
      <h1>{title}</h1>
      <Img src={src}></Img>
      <h2>Sugar</h2>
      <p ptext={ptext}></p>
    </Cont>
  );
}
