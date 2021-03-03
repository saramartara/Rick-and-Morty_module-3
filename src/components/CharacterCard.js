import React from 'react';

const CharacterCard = (props) => {
  console.log('estoy en tarjeta:', props.character)
  // const { name, species, image } = props.characters;
  return (
    <>
      <img
        alt={props.character.name}
        src={props.character.image}
      />
      <div className="bk container">
        <h4 className="bk name">{props.character.name}</h4>
        <p className="bk species">{props.character.species}</p>
      </div>
   </>
  );
}

export default CharacterCard;
