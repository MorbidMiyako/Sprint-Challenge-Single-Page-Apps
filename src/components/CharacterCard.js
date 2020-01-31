import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"


const CharacterCard = (props) => {
  console.log(props, "CharacterCard props")
  const CenterDiv = styled.div`
    text-align: center;
    margin: 0, auto;
  `
  return (
    <CenterDiv>
      <h1>{props.character.name}</h1>
      <img src={props.character.image} alt={""} />
      <div>
        <Link to={`/characters/${props.character.id}`}>
          <button>
            More info about {props.character.name}
          </button>
        </Link>
      </div>
    </CenterDiv>
  )
}

export default CharacterCard
