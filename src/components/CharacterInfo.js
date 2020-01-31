import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"

const CharacterInfo = () => {
  const [character, setCharacter] = useState([])
  const params = useParams()

  console.log(params, "CharacterInfo Params")

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then(response => {
        console.log(response, "useEffect CharacterInfo response")
        setCharacter(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  const CenterDiv = styled.div`
    text-align: center;
    margin: 0, auto;
  `
  return (
    <CenterDiv>
      <h1>{character.name}</h1>
      <h3>Status: {character.status}</h3>
      <p>Species: {character.species}</p>
      <img src={character.image} alt={""} />
      <div>
        <Link to={`/characters`}>
          <button>
            Back to list of characters
          </button>
        </Link>
      </div>
    </CenterDiv>
  )
}

export default CharacterInfo
