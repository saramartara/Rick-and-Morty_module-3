import React from 'react';
import '../stylesheets/layout/_card.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  const { name, species, image, status } = props.character;

  // Status and species ICONS: conditional rendering

  const deadStatus = () =>
    status === 'Dead' ? (
      <i
        title={`Status: ${status}`}
        className="icon--status fa fa-hackaday"
        aria-hidden="true"
      ></i>
    ) : (
      ''
    );

  const speciesIcon = () =>
    species === 'Alien' ? (
      <i title={`Specie: ${species}`} className="icon fa fa-reddit-alien"></i>
    ) : (
      <i
        title={`Specie: ${species}`}
        className="icon fa fa-universal-access"
      ></i>
    );

  return (
    <Link className="cardLink" to={`/character/${props.character.id}`}>
      <div className="card">
        <img
          className="card__img"
          title={`click to see ${name} details`}
          alt={name}
          src={image}
        />
        <div className="card__container">
          <h4 className="card__name">{name}</h4>
          <span>{speciesIcon()}</span> <span>{deadStatus()}</span>
        </div>
      </div>
    </Link>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  character: PropTypes.object,
};
export default CharacterCard;
