import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  const [searchCharacters, setSearchCharacters] = useState([])

  const [query, setQuery] = useState("");

  const [search, setSearch] = useState("");

  const CenterDiv = styled.div`
    text-align: center;
    margin: 0, auto;
  `

  useEffect(() => {

    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res, "axios full response")
        console.log(res.data.results, "throwing into setCharacters")
        setCharacters(res.data.results)
        setSearchCharacters(res.data.results)
      })
      .catch(err => console.log(err))
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  useEffect(() => {
    setSearchCharacters(characters)
    const display = characters.filter(character => character.name.toLowerCase().includes(query.toLowerCase()))
    setSearchCharacters(display)
  }, [search]);

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const submitForm = e => {
    e.preventDefault();
    setSearch(query);
  }
  return (
    <CenterDiv>
      <section className="search">
        <form onSubmit={submitForm}>
          <input
            type="search"
            onChange={handleInputChange}
            value={query}
            name="name"
            placeholder="search by name"
            autoComplete="off"
          />
          <button type="submit">
            Search
          </button>
        </form>
      </section>
      <section className="character-list">
        {searchCharacters.map(character => {
          return (
            <CharacterCard character={character} key={character.id} />
          )
        })}
      </section>
    </CenterDiv>
  );
}
