import React from 'react';

const CharacterCard = (props) => {
  console.log('estoy en tarjeta:', props.character)
  const { name, species, image } = props.character;
  return (
    <>
      <img
        alt={name}
        src={image}
      />
      <div className="bk container">
        <h4 className="bk name">{name}</h4>
        <p className="bk species">{species}</p>
      </div>
   </>
  );
}

export default CharacterCard;
