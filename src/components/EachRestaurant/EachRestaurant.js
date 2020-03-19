import React, { useState, useEffect } from 'react';
import './each-restaurant.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EachRestaurant(props) {

  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [chainName, setChainName] = useState({});

  useEffect(() => {
    getSpecificRestaurant()
  }, [])

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


  const deleteRestaurant = async (id) => {
    try{
      await axios.delete(`http://localhost:5000/api/restaurants/${id}`)
      .then(() => {
        props.history.push('/all-restaurants');
      })
      .catch(err => {
        console.log('Error while redirecting', err)
      }) 
    }catch(err){
      console.log('Error while deleting restaurant', err)
    }
  }

  return (
    <div className="home">
    <div>
    <h2>Name: {restaurantDetails.name}</h2>
    <h3>Location: {restaurantDetails.location}</h3>
    <h4>Chain: {chainName.name}</h4>
    </div>
    <div>
    <Link to={'/'}>
          <Button onClick={() => deleteRestaurant(restaurantDetails._id)} color='red'>Delete</Button>
        </Link>
    </div>
    <div>
  <Link to={'/all-restaurants'}>
      <Button color='teal'>Return</Button>
    </Link>
  </div>
    </div>
  );
}

export default EachRestaurant;