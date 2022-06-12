import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function OrdersCreate() {

    const [userId, setUserId] = useState();
    const [emertimi, setEmertimi] = useState('');
    const [detajet, setDetajet] = useState('');
    const [vellimi, setVellimi] = useState('');
    const [materiali, setMateriali] = useState('');
    const [senderEmri, setSenderEmri] = useState('');
    const [senderMbiemri, setSenderMbiemri] = useState('');
    const [senderNrTelefonit, setSenderNrTelefonit] = useState('');
    const [senderHomeNumber, setSenderHomeNumber] = useState('Nr i vendbanimit te derguesit');
    const [senderStreetName, setSenderStreetName] = useState('');
    const [senderZipCode, setSenderZipCode] = useState('');
    const [receiverEmri, setReceiverEmri] = useState('');
    const [receiverMbiemri, setReceiverMbiemri] = useState('');
    const [receiverNrTelefonit, setReceiverNrTelefonit] = useState('');
    const [receiverHomeNumber, setReceiverHomeNumber] = useState('');
    const [receiverStreetName, setReceiverStreetName] = useState('');
    const [receiverZipCode, setReceiverZipCode] = useState('');

    const [qyteti, setQyteti] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const porosia = { userId, senderEmri, senderMbiemri, emertimi, detajet, vellimi, materiali,
                            senderNrTelefonit, senderStreetName, senderHomeNumber, senderZipCode,
                            receiverEmri, receiverMbiemri, receiverNrTelefonit, receiverHomeNumber, receiverStreetName, receiverZipCode};

        setIsPending(true);
        console.log((porosia));
        axios.post('http://localhost:5094/Porosia/ShtoPorosi', porosia)
        .then(() => {
            
            setIsPending(false);
        })       
        
        //navigate('/Login');
    }

    useEffect(() => {
        axios.get('http://localhost:5094/api/Qyteti/Get Qytetet').then(response => {
          setQyteti(response.data);
        })
      }, [])

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
                            defaultValue={userId}
                            onChange={(e) => setUserId(e.target.value)}
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
                            name="vellimi" 
                            placeholder="Vellimi"
                            required
                            defaultValue={vellimi}
                            onChange={(e) => setVellimi(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="pesha" 
                            placeholder="Materiali"
                            required
                            defaultValue={materiali}
                            onChange={(e) => setMateriali(e.target.value)}
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
                            type="number" 
                            name="number" 
                            placeholder="Nr i vendbanimit te derguesit"
                            required
                            defaultValue={senderHomeNumber}
                            onChange={(e) => setSenderHomeNumber(e.target.value)}
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
                        <div className="box">
                            <select 
                                required
                                onChange={(e) => setSenderZipCode(e.target.value)} 
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
                            type="number" 
                            name="number" 
                            placeholder="Nr i vendbanimit te marresit"
                            required
                            defaultValue={receiverHomeNumber}
                            onChange={(e) => setReceiverHomeNumber(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Adresa e Marresit"
                            required
                            defaultValue={receiverStreetName}
                            onChange={(e) => setReceiverStreetName(e.target.value)}
                        />
                        <div className="box">
                            <select 
                                required
                                onChange={(e) => setReceiverZipCode(e.target.value)} 
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