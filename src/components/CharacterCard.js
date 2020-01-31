import React from "react";
import { Link } from "react-router-dom"

const CharacterCard = (props) => {
  console.log(props, "CharacterCard props")
  return (
    <>
      <h1>{props.character.name}</h1>
      <h3>Status: {props.character.status}</h3>
      <p>Species: {props.character.species}</p>
      <img src={props.character.image} alt={""} />
      <div>
        <Link to={props.character.url}>
          <button>
            More info about {props.character.name}
          </button>
        </Link>
      </div>
    </>
  )
}

export default CharacterCard
