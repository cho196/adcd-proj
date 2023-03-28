import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  color: black;
  :hover {
    color: #8b3e2a;
    font-weight: bold;
  }
`;

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navmenu">
          <li className="navitem">
            <Link href="/">Home</Link>
          </li>

          <li className="navitem">
            <Link href="/feelinglucky">Feeling Lucky?</Link>
          </li>

          <li className="navitem">
            <Link href="/about">About us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
