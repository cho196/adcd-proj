import styled from "styled-components";

const Cont = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 0.5px solid black;
  margin: 5px;
  min-height: 100px;
  width: 400px;
  :hover {
    background-color: #ec4f41;
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
    </Cont>
  );
}
