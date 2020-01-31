import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function WelcomePage() {

  const CenterDiv = styled.div`
    text-align: center;
    margin: 0, auto;
  `

  return (
    <section className="welcome-page">
      <header>
        <CenterDiv>
          <h1>Welcome to the ultimate fan site!</h1>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <Link to={"/characters"}>
            <button > Info about Rick and Morty characters</button>
          </Link>
        </CenterDiv>
      </header>
    </section>
  );
}
