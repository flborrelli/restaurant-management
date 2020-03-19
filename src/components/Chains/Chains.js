import React, { useState, useEffect } from 'react';
import './chains.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Chains() {

const [chainList, setChainList] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/api/chains')
  .then(res => res.json())
  .then(chains => setChainList(chains))
}, [])

return (
  <div>
  <div>
    <ul>
    {chainList.map(chain => {
      return(
        <Link to={`/chain/${chain._id}`} key={chain._id}>
        <li>{chain.name}</li>
        </Link>
      )
    })}
    </ul>
  </div>
  <>
  <div>
  <Link to={'/add-chain'}>
      <Button color='green'>Add Chain</Button>
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

export default Chains;