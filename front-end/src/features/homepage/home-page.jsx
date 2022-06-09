import React, { useState, useEffect } from 'react';
import './home-page.scss';
import axios from 'axios';

export default function HomePage() {

  const[klientet, setKlientet] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5100/KlientetController/GetKlientet').then(response => {
      setKlientet(response.data);
    })
  }, [])

    return (
        <div className="base-container"> 
        
          <h1>This is our main page.</h1>

          <ul>
          {klientet.map(klienti => (
              <li key={klienti.id}>
              {klienti.emri}
              </li>
          ))}
          </ul>
         
        </div>    
    )
}