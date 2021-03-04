import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  console.log('estoy en detail', props);
  return (
    <>
      <Link to="/">Volver</Link>
      <article>
        <img
          title={props.character.name}
          alt={props.character.name}
          src={props.character.image}
        />
        <section>
          <h4>{props.character.name}</h4>
          <ul>
            <li>Status: {props.character.status}</li>
            <li>Species: {props.character.species}</li>
            <li>Origin: {props.character.origin.name} Earth (c-137)</li>
            <li>Episodes: {props.character.episode.length}</li>
          </ul>
        </section>
      </article>
    </>
  );
};
export default CharacterDetail;
