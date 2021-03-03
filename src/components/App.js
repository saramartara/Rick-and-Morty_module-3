import React, { useEffect, useState } from 'react';
import GetDataFromApi from '../services/GetDataFromApi';
import '../stylesheets/App.scss';
// import { Link, Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import Filters from './Filters';
import dataJs from '../data/data.json';

const App = (props) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    GetDataFromApi().then((data) => setCharacters(data));
  }, []);
  console.log(characters);

  // const characters = [dataJs.results];
  // console.log(characters);

  return (
    <>
      <h1>
        <img
          src="https://fontmeme.com/permalink/210303/18269efaf0589bdc79aaf3cea37ab67b.png"
          alt="fuente-get-schwifty"
          border="0"
        />
      </h1>
      <Filters />
      <CharacterList characters={characters} />
    </>
  );
};

export default App;
