import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import GetDataFromApi from '../services/GetDataFromApi';
import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

// import dataJs from '../data/data.json';

const App = (props) => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  // const [isLoading, setIsLoading] = useState(true);
  console.log(name);

  useEffect(() => {
    GetDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (inputValue) => {
    setName(inputValue);
  };
  const filterCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });

  const renderDetail = (props) => {
    const id = parseInt(props.match.params.id);

    const selectChar = characters.find((character) => {
      return character.id === id;
    });

    return selectChar ? (
      <CharacterDetail character={selectChar} />
    ) : (
      <p>no existe</p>
    );
  };

  // isLoading ? <p>loading...</p> :

  //BORRAR! datos en data/data.json
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

      <Switch>
        <Route path="/" exact>
          <Filters handleFilter={handleFilter} userSearch={name} />
          <CharacterList characters={filterCharacters} userSearch={name} />
        </Route>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
    </>
  );
};

export default App;
