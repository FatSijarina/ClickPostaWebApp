import React from 'react'
import '../popup.scss';
import axios from 'axios';
import { useState } from 'react';
import { toast } from "react-toastify";

export default function DepoUpdatePopup(props) {

    const depoId = props.depoId;
    const [name, setName] = useState('');
    const [addressNumber, setAddressNumber] = useState('0');
    const [streetName, setStreetName] = useState('');
    const [zipCode, setZipCode] = useState('0');

    const [refreshKey, setRefreshKey] = useState('0');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const depo = { depoId, name, addressNumber, streetName, zipCode};
        axios.put('http://localhost:5094/api/Depot/UpdateDepo', depo)
            .then(() => {
                toast.success("Depo updated successfully!!", {theme: "colored"});
                props.setTrigger(false);
                props.setRefreshKey(refreshKey => refreshKey + 1);
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