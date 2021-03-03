import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const charElements = props.characters.map((character) => {
    console.log('personaje mapeado en lista:', character);
    return (
      <li className="card" key={character.id}>
      <CharacterCard character={character} />
    </li>
    )
    
  });
  return (
    <section>
      <ul className="cardList">{charElements}</ul>
    </section>
  );
};

export default CharacterList;
