import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const CharacterCard = (props) => {
    const { name, species, image } = props.character;
  return (
    <Link to={`/character/${props.character.id}`}>
      
        <img
          title={name}
          alt={name}
          src={image}
        />
        <div className="bk container">
          <h4 className="bk name">{name}</h4>
          <p className="bk species">{species}</p>
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