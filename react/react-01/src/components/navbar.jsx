import React from "react";
import "./navbar.css";

function Navbar() {

    function handleClick() {
        alert("Button clicked!");
    }

    return (
        <nav>
            <h1>Navbar</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <button onClick={handleClick}>Click me</button>
            </ul>
        </nav>
    )
}

export default Navbar