import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  const { name, status, species, origin, image, episode } = props.character;
  return (
    <div className="detailWrapper">
      <Link className="detailLink" to="/">
        Volver
      </Link>
      <article className="detailCard">
        <img className="detailCard__img" title={name} alt={name} src={image} />
        <section className="detailCard__sec">
          <h4 className="detail__name">{name}</h4>
          <ul className="detail__list">
            <li className="detail__item">
              Status: <span>{status}</span>
            </li>
            <li className="detail__item">
              Species: <span>{species}</span>
            </li>
            <li className="detail__item">
              Origin: <span>{origin}</span>
            </li>
            <li className="detail__item">
              Episodes: <span>{episode.length}</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  character: PropTypes.object,
};

export default CharacterDetail;
