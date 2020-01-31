import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {

  const CenterDiv = styled.div`
    text-align: center;
    margin: 0, auto;
  `
  return (
    <header className="ui centered">
      <CenterDiv>
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        <Link to={"/"}>
          <button>Return to the homepage</button>
        </Link>
      </CenterDiv>
    </header>
  );
}
