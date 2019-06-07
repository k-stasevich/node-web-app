import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './logo.svg';

import './App.css';

const App: React.FC = () => {
  const [responseData, setResponseData] = useState('');

  useEffect(() => {
    axios.get('/smth').then(response => {
      const { data } = response.data;
      setResponseData(data);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>{responseData}</p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
