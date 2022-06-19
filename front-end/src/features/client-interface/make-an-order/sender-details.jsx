import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';

const SenderDetails = (props) => {


  const { klienti, qytetet } = props;
  const [qyteti, setQyteti] = useState([]);
  
  const handleCheckBox = () => {
    props.setCheckBox(!props.checkBox);
  }

  useEffect(() => {
    axios.get('http://localhost:5094/api/Qyteti/ZipCode?qytetiZipCode=' + klienti.zipCode)
      .then(response => {
        setQyteti(response.data);
      })
  }, [])

  if(props.checkBox)
    props.setSenderZipCode(klienti.zipCode);

  return (
    <>
      <div>Adresa ku duhet te mirret porosia</div>
      <form className="form-orders">
        <div className="form-group">
          <input 
              type="text" 
              placeholder="Emri" 
              required
              defaultValue={props.checkBox ? klienti.emri : "" }
              onChange={(e) => props.setSenderEmri(e.target.value)}
          />
          <input 
              type="text" 
              placeholder="Mbiemri" 
              required
              defaultValue={props.checkBox ? klienti.mbiemri : "" }
              onChange={(e) => props.setSenderMbiemri(e.target.value)}
          />
          <input 
              type="text" 
              placeholder="Numri i Telefonit" 
              required
              defaultValue={props.checkBox ? klienti.nrTelefonit : "" }
              onChange={(e) => props.setSenderNrTelefonit(e.target.value)}
          />
          <input 
              type="number" 
              placeholder="Numri i Shtepise" 
              required
              defaultValue={props.checkBox ? klienti.homeNumber : "" }
              onChange={(e) => props.setSenderHomeNumber(e.target.value)}
          />
          <input 
              type="text" 
              placeholder="Adresa" 
              required
              defaultValue={props.checkBox ? klienti.streetName : "" }
              onChange={(e) => props.setSenderStreetName(e.target.value)}
          />
           <div className="box">
              <select 
                  required
                  onChange={(e) => props.setSenderZipCode(e.target.value)} 
                  defaultValue='Zgjedh Qytetin'
              >   
              <option value="Zgjedh Qytetin" disabled={true}>{props.checkBox ? qyteti.emriQytetit :'Zgjedh Qytetin'}</option>  
              {qytetet.map(qyteti => (
                  <option required key={qyteti.qytetiZipCode} value={qyteti.qytetiZipCode}>
                      {qyteti.emriQytetit}
                  </option>
              ))};                               
              </select>
            </div>
        </div>
      </form>
      
      <div className="replace-sender-details">
        <p>Njejt si gjith shef?</p>
        <input type="checkbox"  name="checkBox" defaultChecked={props.checkBox} onChange={handleCheckBox}/>
      </div>
     

      <button onClick={() => props.setStep(3)}> Next</button> 
      <button onClick={() => props.setStep(1)}> Previous</button>      
    </>

  )
}

export default SenderDetails;