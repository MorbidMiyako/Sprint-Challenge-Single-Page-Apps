import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res, "axios full response")
        console.log(res.data.results, "throwing into setCharacters")
        setCharacters(res.data.results)
      })
      .catch(err => console.log(err))
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return (
          <CharacterCard character={character} key={character.id} />
        )
      })}
    </section>
  );
}
