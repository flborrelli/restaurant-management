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

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]


function AddRestaurant() {

  const postRestaurant = async () => {
    const response = await axios.post('http://localhost:5000/api/restaurants');

  }

  const handleSubmit = () => {

}

  return (
    <div className="add-restaurant">
  <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='Name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Location'
          />
          <Form.Field
            control={Select}
            label='Gender'
            options={options}
            placeholder='Chain'
          />
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    </div>
  );
}

export default AddRestaurant;
