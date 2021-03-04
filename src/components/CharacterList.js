import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  console.log(props.characters);
  if (props.characters.length === 0) {
    return <p>No hay ningún personaje que coincida con la búsqueda</p>;
  } else {
    const charElements = props.characters.map((character) => {
      return (
        <li className="card" key={character.id}>
          <CharacterCard character={character} />
        </li>
      );
    });
    return (
      <section>
        <ul className="cardList">{charElements}</ul>
      </section>
    );
  }
};

export default CharacterList;
