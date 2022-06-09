import React from 'react'
import '../popup.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function DepoUpdatePopup(props) {

    const id = props.depoId;
    const [name, setName] = useState('');
    const [addressNumber, setAddressNumber] = useState('');
    const [streetName, setStreetName] = useState('');
    const [zipCode, setZipCode] = useState('');

    const [isPending, setIsPending] = useState(false);
    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const depo = { id, name, addressNumber, streetName, zipCode };
        setIsPending(true);
        axios.put('http://localhost:5094/api/Depot/UpdateDepo', depo)
            .then(() => {
                setIsPending(false);
                props.setRefreshKey(refreshKey => refreshKey + 1);
                props.setTrigger(false);
            })
    }

  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false) }>Close</button>
            {props.children}
            <div className="content">
                <h1>Update Depo</h1>
                <div className="form"> 
                    <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Emri" 
                                defaultValue={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input 
                                type="text" 
                                name="number" 
                                placeholder="Numri i adreses"
                                  defaultValue={addressNumber}
                                  onChange={(e) => setAddressNumber(e.target.value)}
                            />
                            <input 
                                type="text" 
                                name="address" 
                                placeholder="Rruga"
                                defaultValue={streetName}
                                onChange={(e) => setStreetName(e.target.value)}
                            />
                            <input 
                                type="text" 
                                name="zipCode" 
                                placeholder="Zip Code"
                                defaultValue={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
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