import React, { useState, useEffect } from 'react';
import './each-chain.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EachChain(props) {

  const [chainDetails, setChainDetails] = useState({});
  const [restaurantsArray, setRestaurantsArray] = useState([]);

  useEffect(() => {
    getSpecificChain()
  }, [])

  const getSpecificChain = async () => {
    try{
      const { params } = props.match;
      let response = await axios.get(`http://localhost:5000/api/chains/${params.chainId}`);
      setChainDetails(response.data.chain);
      getRestaurants(response.data.chain.restaurants)
    }catch(err){
      console.log('Error while accessing a specific chain:', err)
    }

  }

  const getRestaurants = async (restaurantsArr) => {
    try{
        const newArr = [];
        await restaurantsArr.map(async restaurantId => {
        const restaurants = await axios.get(`http://localhost:5000/api/restaurants/${restaurantId}`)
        // return newArr.push(restaurants.data.restaurant)
        return setRestaurantsArray(restaurantsArray => [...restaurantsArray, restaurants.data.restaurant])
        // .then(response => {
        //   console.log(response.data)
        // })
        // .catch(err => console.log('error while adding to array', err))
      })
      // setRestaurantsArray(newArr)
    } catch(err){
      console.log('Error while getting restaurants array', err)
    }
  }


  // const deleteRestaurant = async (id) => {
  //   try{
  //     await axios.delete(`http://localhost:5000/api/restaurants/${id}`);
  //     console.log('deleted')
  //     .then(() => {
  //       props.history.push('/all-restaurants');
  //     })
  //     .catch(err => {
  //       console.log('Error while redirecting', err)
  //     }) 
  //   }catch(err){
  //     console.log('Error while deleting restaurant', err)
  //   }
  // }
  // onClick={() => deleteRestaurant(restaurantDetails._id)}

  console.log('rest array', restaurantsArray)

  return (
    <div className="home">
    <div>
    <h2>Name: {chainDetails.name}</h2>
    <ul>
    {restaurantsArray.map(restaurant => {
      return(
        <Link to={`/restaurant/${restaurant._id}`} key={restaurant._id}>
        <li>{restaurant.name}</li>
        </Link>
      )
    })}
    </ul>
    </div>
    <div>
    <Link to={'/all-restaurants'}>
          <Button color='red'>Delete</Button>
        </Link>
    </div>
    <div>
  <Link to={'/all-chains'}>
      <Button color='teal'>Return</Button>
    </Link>
  </div>
    </div>
  );
}

export default EachChain;