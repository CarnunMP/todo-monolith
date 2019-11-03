import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
      {dummyData && dummyData.map((item) => (
        item.text
      ))}
    </div>
  );
}

export default App;
