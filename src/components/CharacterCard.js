import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const CharacterCard = (props) => {
    const { name, species, image } = props.character;
  return (
    <Link className="card" to={`/character/${props.character.id}`}>
      
        <img className="card__img"
          title={`click to see ${name} details`}
          alt={name}
          src={image}
        />
        <div className="card__container">
          <h4 className="card__name">{name}</h4>
          <p className="card__species">{species}</p>
        </div>
    </Link>
  );
}

CharacterCard.propTypes ={
  name: PropTypes.string,
  id: PropTypes.number,
  character: PropTypes.object,
};
export default CharacterCard;