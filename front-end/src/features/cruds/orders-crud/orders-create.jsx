import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function OrdersCreate() {

    const [klientiId, setKlientiId] = useState();
    const [senderEmri, setSenderEmri] = useState('');
    const [senderMbiemri, setSenderMbiemri] = useState('');
    const [emertimi, setEmertimi] = useState('');
    const [detajet, setDetajet] = useState('');
    const [pesha, setPesha] = useState(0);
    const [vellimi, setVellimi] = useState(0);
    const [ndjeshmeria, setNdjeshmeria] = useState('');
    const [senderNrTelefonit, setSenderNrTelefonit] = useState('');
    const [senderStreetName, setSenderStreetName] = useState('');
    const [senderCity, setSenderCity] = useState('Qyteti');
    const [senderZipCode, setSenderZipCode] = useState('');
    const [receiverEmri, setReceiverEmri] = useState('');
    const [receiverMbiemri, setReceiverMbiemri] = useState('');
    const [receiverNrTelefonit, setReceiverNrTelefonit] = useState('');
    const [receiverStreetName, setReceiverStreetName] = useState('');
    const [receiverCity, setReceiverCity] = useState('Qyteti');
    const [receiverZipCode, setReceiverZipCode] = useState('');


    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const klienti = { klientiId, senderEmri, senderMbiemri, emertimi, detajet, pesha, vellimi, ndjeshmeria,
                            senderNrTelefonit, senderStreetName, senderCity, senderZipCode,
                            receiverEmri, receiverMbiemri, receiverNrTelefonit, receiverStreetName, receiverCity, receiverZipCode};

        setIsPending(true);
        
        axios.post('http://localhost:5100/PorositeController/ShtoPorosi', klienti)
        .then(() => {
            console.log((klienti));
            setIsPending(false);
        })       
        
        navigate('/Login');
    }

    return (

        <>
            <div>                    
                <form className="form-orders" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="clientId" 
                            placeholder="Id e Klientit" 
                            required
                            defaultValue={klientiId}
                            onChange={(e) => setKlientiId(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Emri i Derguesit" 
                            required 
                            defaultValue={senderEmri}
                            onChange={(e) => setSenderEmri(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="surname" 
                            placeholder="Mbiemri i Derguesit" 
                            required
                            defaultValue={senderMbiemri}
                            onChange={(e) => setSenderMbiemri(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="emertimi" 
                            placeholder="Emertimi"
                            required
                            defaultValue={emertimi}
                            onChange={(e) => setEmertimi(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="detajet" 
                            placeholder="Detajet"
                            required
                            defaultValue={detajet}
                            onChange={(e) => setDetajet(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="pesha" 
                            placeholder="Pesha"
                            required
                            defaultValue={pesha}
                            onChange={(e) => setPesha(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="vellimi" 
                            placeholder="Vellimi"
                            required
                            defaultValue={vellimi}
                            onChange={(e) => setVellimi(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="ndjeshmeria" 
                            placeholder="Ndjeshmeria"
                            required
                            defaultValue={ndjeshmeria}
                            onChange={(e) => setNdjeshmeria(e.target.value)}
                        />

                        <input 
                            type="text" 
                            name="number" 
                            placeholder="Numri i Derguesit"
                            required
                            defaultValue={senderNrTelefonit}
                            onChange={(e) => setSenderNrTelefonit(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Adresa e Derguesit"
                            required
                            defaultValue={senderStreetName}
                            onChange={(e) => setSenderStreetName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="zipCode" 
                            placeholder="ZipCode i Derguesit"
                            required
                            defaultValue={senderZipCode}
                            onChange={(e) => setSenderZipCode(e.target.value)}
                        />
                        <div className="box">
                            <select 
                                required
                                defaultValue={senderCity}
                                onChange={(e) => setSenderCity(e.target.value)}
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
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Emri i Marresit" 
                            required="Shkruaje emrin" 
                            defaultValue={receiverEmri}
                            onChange={(e) => setReceiverEmri(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="surname" 
                            placeholder="Mbiemri i Marresit"
                            required
                            defaultValue={receiverMbiemri}
                            onChange={(e) => setReceiverMbiemri(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="number" 
                            placeholder="Numri i Marresit"
                            required
                            defaultValue={receiverNrTelefonit}
                            onChange={(e) => setReceiverNrTelefonit(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Adresa e Marresit"
                            required
                            defaultValue={receiverStreetName}
                            onChange={(e) => setReceiverStreetName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="zipCode" 
                            placeholder="Zip Kodi i Marresit"
                            required
                            defaultValue={receiverZipCode}
                            onChange={(e) => setReceiverZipCode(e.target.value)}
                        />
                        <div className="box" id="receiver-city-box">
                            <select 
                                required
                                defaultValue={receiverCity}
                                onChange={(e) => setReceiverCity(e.target.value)}
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
                    </div>
                    { !isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Shto
                        </button>}
                        { isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Duke funksionuar
                        </button>}
                </form>

                </div>

                
            
            
        </>
        )
}