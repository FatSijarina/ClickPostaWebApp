import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function ClientCreate() {

    const [emri, setEmri] = useState('');
    const [mbiemri, setMbiemri] = useState('');
    const [nrTelefonit, setNrTelefonit] = useState('');
    const [homeNumber, setHomeNumber] = useState('');
    const [streetName, setStreetName] = useState('');
    const [zipCode, setZipCode] = useState();
    const [addressDetails, setAddressDetails] = useState ('');
    const [roleId, setRole] = useState(1);
    const [orari, setOrari] = useState('');
    const [ditetEpushimit, setDitetEPushimit] = useState();
    const [nrPorosive, setNrPorosive] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isPending, setIsPending] = useState(false);
    const [qyteti, setQyteti] = useState([]);
    const rolet = [
        {id: 1, roli: 'Klient'},
        {id: 2, roli: 'Admin'},
        {id: 3, roli: 'Transportues'}
    ];

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const klienti = { emri, mbiemri, email, password, nrTelefonit,
                         homeNumber, streetName, zipCode, addressDetails, 
                         roleId, orari, ditetEpushimit, nrPorosive};

        setIsPending(true);
        
        
        axios.post('http://localhost:5094/api/User/AddUsers', klienti)
        .then(() => {
            toast.success("Perdoruesi u shtua me sukses!")
            setIsPending(false);
        }) 
    }
    
    useEffect(() => {
        axios.get('http://localhost:5094/api/Qyteti/Get Qytetet').then(response => {
          setQyteti(response.data);
        })
      }, [])

    return (
        <div className="content">
            <div className="form"> 
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Emri" 
                            required="Shkruaje emrin" 
                            defaultValue={emri}
                            onChange={(e) => setEmri(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="surname" 
                            placeholder="Mbiemri"
                            required
                            defaultValue={mbiemri}
                            onChange={(e) => setMbiemri(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="homenumber" 
                            placeholder="Numri"
                            required
                            defaultValue={nrTelefonit}
                            onChange={(e) => setNrTelefonit(e.target.value)}
                        />
                        <input 
                            type="number" 
                            name="number" 
                            placeholder="Nr i vendbanimit"
                            required
                            defaultValue={homeNumber}
                            onChange={(e) => setHomeNumber(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Adresa"
                            required
                            defaultValue={streetName}
                            onChange={(e) => setStreetName(e.target.value)}
                        />
                        <div className="box">
                            <select 
                                required
                                onChange={(e) => setZipCode(e.target.value)} 
                                defaultValue='Zgjedh Qytetin'
                            >      
                            <option value="Zgjedh Qytetin" disabled={true}>Zgjedh Qytetin</option>  
                            {qyteti.map(qyteti => (
                                <option required key={qyteti.qytetiZipCode} value={qyteti.qytetiZipCode}>
                                    {qyteti.emriQytetit}
                                </option>
                            ))};                               
                            </select>
                        </div>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="filanfisteku@filanmail.com"
                            required
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            required
                            defaultValue={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="box">
                            <select 
                                required
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
                                required
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
                            Shto
                        </button>}
                        { isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Duke funksionuar
                        </button>}

                    </div>
                </form>    
            </div>
        </div>

    )
}
    