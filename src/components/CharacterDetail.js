import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  const { name, status, species, origin, image, episode } = props.character;
  return (
    <div className="detail">
      <div className="detailWrapper">
        <Link className="detailLink" to="/">
          Volver
        </Link>
        <article className="detailCard">
          <img className="detailCard__img" title={name} alt={name} src={image} />
          <section className="detailCard__sec">
            <h4 className="detailCard__name">{name}</h4>
            <ul className="detailCard__list">
              <li className="detailCard__item">
                Status: <span>{status}</span>
              </li>
              <li className="detailCard__item">
                Species: <span>{species}</span>
              </li>
              <li className="detailCard__item">
                Origin: <span>{origin}</span>
              </li>
              <li className="detailCard__item">
                Episodes: <span>{episode.length}</span>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  character: PropTypes.object,
};

export default CharacterDetail;
