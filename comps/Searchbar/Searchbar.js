import styled from "styled-components";
import Button from "../Button/Button";

const Cont = styled.form``;

export default function Searchbar() {
  return (
    <Cont>
      <input id="search" type="text" placeholder="search"></input>
      <Button text="Search" handleClick=""></Button>
    </Cont>
  );
}
