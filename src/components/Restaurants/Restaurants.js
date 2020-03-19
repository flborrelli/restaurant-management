import React, { useState, useEffect } from 'react';
import './restaurants.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Restaurants() {

const [restaurantList, setRestaurantList] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/api/restaurants')
  .then(res => res.json())
  .then(restaurants => setRestaurantList(restaurants))
}, [])

return (
  <div>
  <div>
    <ul>
    {restaurantList.map(restaurant => {
      return(
        <Link to={`/restaurant/${restaurant._id}`} key={restaurant._id}>
        <li>{restaurant.name}</li>
        </Link>
      )
    })}
    </ul>
  </div>
  <>
  <div>
  <Link to={'/add-restaurant'}>
      <Button color='green'>Add a Restaurant</Button>
    </Link>
  </div>

  <div>
  <Link to={'/'}>
      <Button color='teal'>Return</Button>
    </Link>
  </div>
  </>
  </div>
);
}

export default Restaurants;