import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navmenu">
          <li className="navitem">
            <a href="/">Home</a>
          </li>

          <li className="navitem">
            <a href="/feelinglucky">Feeling Lucky?</a>
          </li>

          <li className="navitem">
            <a href="/about">About us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
