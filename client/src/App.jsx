import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [dummyData, setDummyData] = useState(null);

  useEffect(() => {
    axios.get(`${(process.env.REACT_APP_API || '')}/api/dummy`)
      .then((res) => {
        setDummyData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code> src/App.js </code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {dummyData && dummyData.map((item) => (
            item.text
          ))}
        </a>
      </header>
    </div>
  );
}

export default App;
