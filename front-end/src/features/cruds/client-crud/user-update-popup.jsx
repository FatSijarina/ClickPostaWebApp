import React from 'react'
import '../popup.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClientUpdatePopup(props) {

    
    const id = props.klientId;
    const [emri, setEmri] = useState('');
    const [mbiemri, setMbiemri] = useState('');
    const [nrTelefonit, setNrTelefonit] = useState('');
    const [streetName, setStreetName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [addressDetails, setAddressDetails] = useState ('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isPending, setIsPending] = useState(false);
    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const klienti = { id, emri, mbiemri, email, password, nrTelefonit, streetName, zipCode, addressDetails, city };
       
        setIsPending(true);
        
        axios.put('http://localhost:5094/KlientetController/UpdateKlientin', klienti)
        .then(() => {
            setIsPending(false);
            props.setRefreshKey(refreshKey => refreshKey + 1);
            props.setTrigger(false);
        })
    }

  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false) }> close</button>
            {props.children}
        
            <div className="content">
                <h1>Update Client</h1>
                <div className="form"> 
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">

                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Emri" 
                                defaultValue={emri}
                                onChange={(e) => setEmri(e.target.value)}
                            />
                            <input 
                                type="text" 
                                name="surname" 
                                placeholder="Mbiemri"
                                defaultValue={mbiemri}
                                onChange={(e) => setMbiemri(e.target.value)}
                            />
                            <input 
                                type="text" 
                                name="number" 
                                placeholder="+38344123456"
                                defaultValue={nrTelefonit}
                                onChange={(e) => setNrTelefonit(e.target.value)}
                            />
                            <input 
                                type="text" 
                                name="address" 
                                placeholder="01, FilanRruga"
                                defaultValue={streetName}
                                onChange={(e) => setStreetName(e.target.value)}
                            />
                            <input 
                                type="text" 
                                name="zipCode" 
                                placeholder="10000"
                                defaultValue={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                            <input 
                                type="text" 
                                name="addressDetails" 
                                placeholder="Detajet e Adreses"
                                defaultValue={addressDetails}
                                onChange={(e) => setAddressDetails(e.target.value)}
                            />
                            <div className="box">
                                <select 
                                    defaultValue={city}
                                    onChange={(e) => setCity(e.target.value)}
                                >                                    
                                    <option value="Qyteti" disabled>Qyteti</option>
                                    <option>Gjilan</option>
                                    <option>Prishtine</option>
                                    <option>Prizren</option>
                                    <option>Mitrovice</option>
                                    <option>Gjakove</option>
                                    <option>Peje</option>
                                    <option>Ferizaj</option>                                   
                                </select>
                            </div>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="filanfisteku@filanmail.com"
                                defaultValue={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password"
                                defaultValue={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            { !isPending && <button type="submit" className="register-register-btn" value="Submit">
                                Perditeso
                            </button>}
                            { isPending && <button type="submit" className="register-register-btn" value="Submit">
                                Duke funksionuar
                            </button>}

                        </div>
                    </form>    
                </div>
            </div>
        
        </div>

    </div>
  ) : "";
}
