import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import EachRestaurant from './components/EachRestaurant/EachRestaurant';
import AddRestaurant from './components/AddRestaurant/AddRestaurant';
import Chains from './components/Chains/Chains';
import { Route, Switch } from 'react-router-dom'

function App() {

  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/all-restaurants' component={Restaurants} />
      <Route exact path='/restaurant/:restaurantId'
      render={(props) => <EachRestaurant {...props} />} />
      <Route exact path='/all-chains' component={Chains} />
      <Route exact path='/add-restaurant' component={AddRestaurant} />
    </Switch>
    </div>
  );
}

export default App;
