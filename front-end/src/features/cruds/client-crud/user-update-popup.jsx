import React from 'react'
import '../popup.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClientUpdatePopup(props) {

    
    const userId = props.klientId;
    const [emri, setEmri] = useState('');
    const [mbiemri, setMbiemri] = useState('');
    const [nrTelefonit, setNrTelefonit] = useState('');
    const [homeNumber, setHomeNumber] = useState(0);
    const [streetName, setStreetName] = useState('');
    const [zipCode, setZipCode] = useState(0);
    const [addressDetails, setAddressDetails] = useState ('');
    const [roleId, setRole] = useState(0);
    const [orari, setOrari] = useState('');
    const [ditetEpushimit, setDitetEPushimit] = useState(0);
    const [nrPorosive, setNrPorosive] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isPending, setIsPending] = useState(false);
    const [qyteti, setQyteti] = useState([]);
    const rolet = [
        {id: 1, roli: 'Klient'},
        {id: 2, roli: 'Admin'},
        {id: 3, roli: 'Transportues'}
    ];

    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const klienti = { userId, emri, mbiemri, email, password, nrTelefonit,
            homeNumber, streetName, zipCode, addressDetails, 
            roleId, orari, ditetEpushimit, nrPorosive};
        
        setIsPending(true);
        console.log(klienti);
        axios.put('http://localhost:5094/api/User/UpdateUser', klienti)
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
                                name="homenumber" 
                                placeholder="Numri"
                                defaultValue={nrTelefonit}
                                onChange={(e) => setNrTelefonit(e.target.value)}
                            />
                            <input 
                                type="number" 
                                name="number" 
                                placeholder="Nr i vendbanimit"
                                defaultValue={homeNumber}
                                onChange={(e) => setHomeNumber(e.target.value)}
                            />
                            <input 
                                type="text" 
                                name="address" 
                                placeholder="Adresa"
                                defaultValue={streetName}
                                onChange={(e) => setStreetName(e.target.value)}
                            />
                            <div className="box">
                                <select 
                                    onChange={(e) => setZipCode(e.target.value)} 
                                    defaultValue='Zgjedh Qytetin'
                                >      
                                <option value="Zgjedh Qytetin" disabled={true}>Zgjedh Qytetin</option>  
                                {qyteti.map(qyteti => (
                                    <option key={qyteti.qytetiZipCode} value={qyteti.qytetiZipCode}>
                                        {qyteti.emriQytetit}
                                    </option>
                                ))};                               
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
                            <div className="box">
                                <select 
                                    onChange={(e) => setRole(e.target.value)} 
                                >        
                                {rolet.map(roli => (
                                    <option key={roli.id} value={roli.id}>
                                        {roli.roli}
                                    </option>
                                ))};                               
                                </select>
                            </div>

                            <div className="box">
                                <select 
                                    onChange={(e) => setOrari(e.target.value)} 
                                >        
                                <option value="Paradite">Paradite</option> 
                                <option value="Paradite">Pasdite</option>                                 
                                </select>
                            </div>
                            <input 
                                type="number" 
                                name="ditetPushimit" 
                                placeholder="Ditet e Pushimit"
                                defaultValue={ditetEpushimit}
                                onChange={(e) => setDitetEPushimit(e.target.value)}
                            />
                            <input 
                                type="number" 
                                name="nrPorosive" 
                                placeholder="Nr i porosive"
                                defaultValue={nrPorosive}
                                onChange={(e) => setNrPorosive(e.target.value)}
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
