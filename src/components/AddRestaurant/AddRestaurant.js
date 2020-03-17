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
  Select,
  TextArea,
} from 'semantic-ui-react';



function AddRestaurant() {

  const [inputs, setInputs] = useState([{
    name: '',
    location: '',
    chain: ''
  }])

  useEffect(() => {
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post('http://localhost:5000/api/restaurants', inputs)
    // .then(response => {
    //   setInputs({
    //   name: '',
    //   location: '',
    //   chain: ''
    // })
    // })
    // .catch(error => {
    //   console.log('Error while posting', error)
    // })
}

const handleChange = (e) => {
  e.preventDefault();
  const { name, value } = e.target;
  setInputs({
    [name]: value
  })
}

console.log(inputs)

  return (
    <div className="add-restaurant">
  <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='Name'
            name='name'
            value={inputs.name}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Location'
            name='location'
            value={inputs.location}
            onChange={handleChange}
          />
          <Form.Field
            control={Select}
            label='Gender'
            // options={options}
            placeholder='Chain'
            name='chain'
            value={inputs.chain}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Field control={Button} type='submit' value='Submit'>Submit</Form.Field>
      </Form>
    </div>
  );
}

export default AddRestaurant;
