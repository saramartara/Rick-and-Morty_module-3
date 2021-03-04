import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import GetDataFromApi from '../services/GetDataFromApi';
import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

const App = (props) => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');

  const logo = './Rick_and_Morty.png';
  const alt = 'logo';

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
      <p>{`El id ${props.match.params.id} no existe`}</p>
    );
  };

  return (
    <div className="App">
      <h1 className="title">
        <img className="logo" src={logo} alt={alt} title={alt} />
      </h1>

      <Switch>
        <Route path="/" exact>
          <Filters handleFilter={handleFilter} userSearch={name} />
          <CharacterList characters={filterCharacters} userSearch={name} />
        </Route>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
      </div>
  );
};

export default App;
