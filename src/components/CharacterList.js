import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {

  if (props.characters.length === 0) {
    return (
      <p>{`No hay ningún personaje que coincida con la palabra:  ${props.userSearch}`}</p>
    );
  } else {
    const charElements = props.characters.map((character) => {
      return (
        <li key={character.id}>
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
