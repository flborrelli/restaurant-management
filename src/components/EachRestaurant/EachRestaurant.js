import React, { useState, useEffect } from 'react';
import './each-restaurant.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EachRestaurant(props) {

  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [chainName, setChainName] = useState({});

  const getSpecificRestaurant = async () => {
    try{
      const { params } = props.match;
      let response = await axios.get(`http://localhost:5000/api/restaurants/${params.restaurantId}`);
      setRestaurantDetails(response.data.restaurant);
      getChainName(response.data.restaurant.chain)
    }catch(err){
      console.log('Error while accessing a specific restaurant:', err)
    }

  }

  const getChainName = async (id) => {
    try{
      let response = await axios.get(`http://localhost:5000/api/chains/${id}`)
      setChainName(response.data.chain)
    } catch(err){
      console.log('Error while getting chain name', err)
    }
  }

  useEffect(() => {
    getSpecificRestaurant()
  }, [])

  console.log('chain', chainName)

  return (
    <div className="home">
    <div>
    <h2>Name: {restaurantDetails.name}</h2>
    <h3>Location: {restaurantDetails.location}</h3>
    <h4>Chain: {chainName.name}</h4>
    </div>
    <div>
  <Link to={'/api/restaurants'}>
      <Button color='teal'>Return</Button>
    </Link>
  </div>
    </div>
  );
}

export default EachRestaurant;