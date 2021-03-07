import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import GetDataFromApi from '../services/GetDataFromApi';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = (props) => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('all')

  useEffect(() => {
    GetDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (inputValue) => {
    if (inputValue.key === 'name') {
      setName(inputValue)
    }
    // setName(inputValue);
    else if (inputValue.key === 'species') {
      setSpecies(inputValue);
    }
  };

  const sortAndFilterCharacters = characters
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase())
    }).filter((character) => {
      console.log(character.species)
      if (species === "all") {
        return true;
      } else if (species === "human") {
        return character.species.human
      } else {
        return character.species.alien
      }
       
    })

    console.log(sortAndFilterCharacters)

   

  const renderDetail = (props) => {
    const id = parseInt(props.match.params.id);

    const selectChar = characters.find((character) => {
      return character.id === id;
    });

    return selectChar ? (
      <CharacterDetail character={selectChar} />
    ) : (
      <p className="msg">{`El id ${props.match.params.id} no existe`}</p>
    );
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Filters handleFilter={handleFilter} userSearch={name} />
          <CharacterList
            characters={sortAndFilterCharacters}
            userSearch={name}
          />
        </Route>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
    </div>
  );
};

export default App;
