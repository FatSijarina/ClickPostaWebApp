import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function ClientCreate() {

    const [emri, setEmri] = useState('');
    const [mbiemri, setMbiemri] = useState('');
    const [nrTelefonit, setNrTelefonit] = useState('');
    const [streetName, setStreetName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [addressDetails, setAddressDetails] = useState ('');
    const [city, setCity] = useState('Qyteti');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const klienti = { emri, mbiemri, email, password, nrTelefonit, streetName, zipCode, addressDetails, city };

        setIsPending(true);
        
        axios.post('http://localhost:5094/KlientetController/ShtoKlient', klienti)
        .then(() => {
            console.log((klienti));
            setIsPending(false);
        }) 
    }

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
                            name="number" 
                            placeholder="+38344123456"
                            required
                            defaultValue={nrTelefonit}
                            onChange={(e) => setNrTelefonit(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="01, FilanRruga"
                            required
                            defaultValue={streetName}
                            onChange={(e) => setStreetName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="zipCode" 
                            placeholder="10000"
                            required
                            defaultValue={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                        <div className="box">
                            <select 
                                required
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
    