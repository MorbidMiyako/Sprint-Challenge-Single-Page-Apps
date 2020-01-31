import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  const [query, setQuery] = useState("");

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

  useEffect(() => {
    const display = characters.filter(character => character.name.toLowerCase().includes(query.toLowerCase()))
    setCharacters(display)
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  return (
    <>
      <section className="search">
        <form>
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            placeholder="search by name"
            autoComplete="off"
          />
        </form>
      </section>
      <section className="character-list">
        {characters.map(character => {
          return (
            <CharacterCard character={character} key={character.id} />
          )
        })}
      </section>
    </>
  );
}
