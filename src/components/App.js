import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import List from './List';

function App(props) {
  return (
    <>
      <div className="App">
        <h1 className="title">Evaluación Final!</h1>
        <button className="btn">clícame</button>
        {/* <Link to="/list">List</Link> */}
      </div>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/list" component={List} />
      </Switch>
    </>
  );
}

export default App;
