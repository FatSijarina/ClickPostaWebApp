import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

const Details = (props) => {

  const [materiali, setMateriali] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5094/api/Sektoret/ShowSektori')
      .then(response => (
        setMateriali(response.data)
      ))
  })

  return (

    <>
      <div>Details</div>
      <form className="form-orders">
        <div className="form-group">
          <input 
              type="text" 
              name="clientId" 
              placeholder="Emertimi" 
              required
              onChange={(e) => props.setEmertimi(e.target.value)}
          />
          <input 
              type="text" 
              name="clientId" 
              placeholder="Detajet" 
              required
              onChange={(e) => props.setDetajet(e.target.value)}
          />
          <input 
              type="number" 
              name="clientId" 
              placeholder="Gjatesia" 
              required
              onChange={(e) => props.setGjatesia(e.target.value)}
          />
          <input 
              type="number" 
              name="clientId" 
              placeholder="Gjeresia" 
              required
              onChange={(e) => props.setGjeresia(e.target.value)}
          />
          <input 
              type="number" 
              name="clientId" 
              placeholder="Lartesia" 
              required
              onChange={(e) => props.setLartesia(e.target.value)}
          />
        
          <div className="box">
            <select 
                onChange={(e) => setMateriali(e.target.value)} 
                defaultValue='Zgjedh Materialin'
            >      
              <option value="Zgjedh Materialin" disabled={true}>Zgjedh Materialin</option>  
              {materiali.map(materiali => (
                  <option key={materiali.sektoriId} value={materiali.emertimi}>
                      {materiali.emertimi}
                  </option>
              ))};                               
            </select>
          </div>
        </div>
      </form>
      <button onClick={() => props.setStep(2)}> Next</button> 
    </>
  )
 
}

export default Details;