import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const CharacterCard = (props) => {
    const { name, species, image, status } = props.character;

// Status and species ICONS: conditional rendering

    const deadStatus = () => status === "Dead" ? <i class="fa fa-hackaday" aria-hidden="true"></i> : "";

    const speciesIcon = () => species === "Alien" ? <i class="fa fa-reddit-alien" aria-hidden="true"></i> : <i class="fa fa-universal-access" aria-hidden="true"></i> ;



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
          <p className="card__icon">{speciesIcon()}</p>
          <p className="card__icon">{deadStatus()}</p>
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