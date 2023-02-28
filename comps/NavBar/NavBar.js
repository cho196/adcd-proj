import React from "react";

export default function NavBar() {
    return (
        <>
            <nav class="navbar">
                <ul class="navmenu">
                    <li class="navitem">
                        <a href="/findrecipes">Find recipes</a>
                    </li>

                    <li class="navitem">
                        <a href="/feelinglucky">Feeling lucky?</a>
                    </li>

                    <li class="navitem">
                        <a href="/about">About us</a>
                    </li>
                </ul>
            </nav>

        </>
    )
}