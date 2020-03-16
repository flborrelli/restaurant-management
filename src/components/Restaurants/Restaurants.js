import React, { useState, useEffect } from 'react';
import './restaurants.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
        <li>{restaurant.name}</li>
      )
    })}
    </ul>
  </div>
  <Link to={'/'}>
      <Button color='teal'>Return</Button>
    </Link>
  </div>
);
}

export default Restaurants;