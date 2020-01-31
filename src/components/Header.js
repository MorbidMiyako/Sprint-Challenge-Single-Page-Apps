import React from "react";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to={"/"}>
        <button>Return to the homepage</button>
      </Link>
    </header>
  );
}
