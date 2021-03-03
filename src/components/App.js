import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
// import { Link, Route, Switch } from 'react-router-dom';
// import List from './List';

function App(props) {
  return (
    <>
      <h1>
        {/* <img
          src="https://fontmeme.com/permalink/210303/89204f57cba876638717858b006d3c8f.png"
          alt="fuente-get-schwifty"
          border="0"
        /> */}

        <img
          src="https://fontmeme.com/permalink/210303/18269efaf0589bdc79aaf3cea37ab67b.png"
          alt="fuente-get-schwifty"
          border="0"
        />
      </h1>
      {/* 
      <h1 className="title">Rick and Morty</h1> */}
      <form>
        <input></input>
      </form>

      <section>
        <ul className="listContainer">
          <li className="list">
            <img
              alt="Rick Sanchez"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <div className="bk container">
              <h4 className="bk name">Rick Sanchez</h4>
              <p className="bk species">Human</p>
            </div>
          </li>
          {/* <li className="list">
            <img
              alt="Rick Sanchez"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <div className="bk container">
              <h4 className="bk name">Rick Sanchez</h4>
              <p className="bk species">Human</p>
            </div>
          </li> */}
        </ul>
      </section>
    </>
  );
}

export default App;
