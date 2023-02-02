import styled from "styled-components";

const Cont = styled.div`
  background-color: Gray;
  min-height: 100px;
  width: 600px;
`;


export default function List({ h1text = "", ptext = "" }) {
  return (

    <Cont>
      <div h1text="" ptext="">
        <h1>{h1text}</h1>
        <p>{ptext}</p>
      </div>
    </Cont>
  );
}
