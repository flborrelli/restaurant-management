import React, { useState, useEffect } from 'react';
import './each-restaurant.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EachRestaurant(props) {

  const [restaurantDetails, setRestaurantDetails] = useState({});

  const getSpecificRestaurant = async () => {
    try{
      const { params } = props.match;
      let response = await axios.get(`http://localhost:5000/api/restaurants/${params.restaurantId}`);
      setRestaurantDetails(response.data.restaurant);
      console.log('response', response)
    }catch{
      console.log('Error while accessing a specific restaurant')
    }

  }

  useEffect(() => {
    getSpecificRestaurant()
  }, [])


  return (
    <div className="home">
    <h2>{restaurantDetails.name}</h2>
    <h3>{restaurantDetails.location}</h3>
    <h4>{restaurantDetails.chain}</h4>
    </div>
  );
}

export default EachRestaurant;