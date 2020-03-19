import React, { useState, useEffect } from 'react';
import './add-restaurant.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Dropdown,
  Select,
  TextArea,
} from 'semantic-ui-react';



function AddRestaurant() {

  const [userInputs, setInputs] = useState({
    name: '',
    location: '',
    chain: ''
  });

  const [chainInfos, setChainInfos] = useState([{}]);

  useEffect(() => {
    chainData()
  }, [])

  const chainData = async () => {
    try{
      const response = await axios.get('http://localhost:5000/api/chains');
      setChainInfos(response.data)
    } catch(err){
      console.log('Error while getting Chain Infos:', err)
    }
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInputs)
    axios.post('http://localhost:5000/api/restaurants', userInputs)
    .then(response => {
      console.log(response)
      setInputs({
      name: '',
      location: '',
      chain: ''
    })
    })
    .catch(error => {
      console.log('Error while posting', error)
    })
}

const handleChange = (e, result) => {
  e.preventDefault();
  const { name, value } = result || e.target;
    setInputs({ ...userInputs, [name]: value });
};

console.log(chainInfos);

  return (
    <div className="add-restaurant">
  <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='Insert Restaurant Name'
            name='name'
            value={userInputs.name}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            label='Location'
            placeholder='Add Restaurant Address'
            name='location'
            value={userInputs.location}
            onChange={handleChange}
          />
          <Form.Field
            control={Select}
            label='Chain'
            options={chainInfos.map(chain => ({text: chain.name, value: chain._id}))}
            placeholder='Chain'
            name='chain'
            value={userInputs.chain}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Field control={Button} type='submit' value='Submit'>Submit</Form.Field>
      </Form>
      <Link to={'/all-restaurants'}>
      <Button color='teal'>Return</Button>
    </Link>
    </div>
  );
}

export default AddRestaurant;
