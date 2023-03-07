import styled from "styled-components";

const Cont = styled.div`
  background-color: white;
  border-radius: 25px;
  border: .5px solid black;
  min-height: 100px;
  width: 500px;
  :hover {
    background-color: #EC4F41;
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
