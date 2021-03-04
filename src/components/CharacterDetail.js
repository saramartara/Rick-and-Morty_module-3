import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <div className="detailWrapper">
      <Link to="/">Volver</Link>
      <article className="detailCard">
        <img
          className="detailCard__img"
          title={props.character.name}
          alt={props.character.name}
          src={props.character.image}
        />
        <section className="detailCard__sec">
          <h4 className="detail__name">{props.character.name}</h4>
          <ul className="detail__list">
            <li className="detail__item">Status: <span>{props.character.status}</span></li>
            <li className="detail__item">Species: <span>{props.character.species}</span></li>
            <li className="detail__item">
              Origin: <span>{props.character.origin.name}</span>
            </li>
            <li className="detail__item">
              Episodes: <span>{props.character.episode.length}</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};
export default CharacterDetail;
