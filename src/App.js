import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import Chains from './components/Chains/Chains';
import { Route, Switch } from 'react-router-dom'

function App() {

  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/api/restaurants' component={Restaurants} />
      <Route exact path='/api/chains' component={Chains} />
    </Switch>
    </div>
  );
}

export default App;
