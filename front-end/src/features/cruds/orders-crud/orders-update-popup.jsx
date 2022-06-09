import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function OrdersUpdatePopup(props) {

    const id = props.porosiaId;
    const klientiId = props.klientiId;
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
    const [senderAddressDetails, setSenderAddressDetails] = useState ('');
    const [receiverEmri, setReceiverEmri] = useState('');
    const [receiverMbiemri, setReceiverMbiemri] = useState('');
    const [receiverNrTelefonit, setReceiverNrTelefonit] = useState('');
    const [receiverStreetName, setReceiverStreetName] = useState('');
    const [receiverCity, setReceiverCity] = useState('Qyteti');
    const [receiverZipCode, setReceiverZipCode] = useState('');
    const [receiverAddressDetails, setReceiverAddressDetails] = useState ('');

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    const porosia = { id, klientiId, senderEmri, senderMbiemri, emertimi, detajet, pesha, vellimi, ndjeshmeria,
                        senderNrTelefonit, senderStreetName, senderCity, senderZipCode,senderAddressDetails,
                        receiverEmri, receiverMbiemri, receiverNrTelefonit, receiverStreetName, receiverCity, receiverZipCode,receiverAddressDetails};

    setIsPending(true);
    console.log(porosia);

    axios.put('http://localhost:5100/PorositeController/UpdatePorosine', porosia)
    .then(() => {
        
        setIsPending(false);
        props.setRefreshKey(refreshKey => refreshKey + 1);
        props.setTrigger(false);
    })       
    }

    return (props.trigger) ? (

    <div className="popup">
        <div className="popup-inner">   

            <button className="close-btn" onClick={() => props.setTrigger(false) }> close</button>
            {props.children}

            <form className="form-orders" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Emri i Derguesit"  
                        defaultValue={senderEmri}
                        onChange={(e) => setSenderEmri(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="surname" 
                        placeholder="Mbiemri i Derguesit" 
                        defaultValue={senderMbiemri}
                        onChange={(e) => setSenderMbiemri(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="emertimi" 
                        placeholder="Emertimi"
                        defaultValue={emertimi}
                        onChange={(e) => setEmertimi(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="detajet" 
                        placeholder="Detajet"
                        defaultValue={detajet}
                        onChange={(e) => setDetajet(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="pesha" 
                        placeholder="Pesha"
                        defaultValue={pesha}
                        onChange={(e) => setPesha(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="vellimi" 
                        placeholder="Vellimi"
                        defaultValue={vellimi}
                        onChange={(e) => setVellimi(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="ndjeshmeria" 
                        placeholder="Ndjeshmeria"
                        defaultValue={ndjeshmeria}
                        onChange={(e) => setNdjeshmeria(e.target.value)}
                    />

                    <input 
                        type="text" 
                        name="number" 
                        placeholder="Numri i Derguesit"
                        defaultValue={senderNrTelefonit}
                        onChange={(e) => setSenderNrTelefonit(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Adresa e Derguesit"
                        defaultValue={senderStreetName}
                        onChange={(e) => setSenderStreetName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="zipCode" 
                        placeholder="ZipCode i Derguesit"
                        defaultValue={senderZipCode}
                        onChange={(e) => setSenderZipCode(e.target.value)}
                    />
                    <div className="box">
                        <select 

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
                        defaultValue={receiverEmri}
                        onChange={(e) => setReceiverEmri(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="surname" 
                        placeholder="Mbiemri i Marresit"
                        defaultValue={receiverMbiemri}
                        onChange={(e) => setReceiverMbiemri(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="number" 
                        placeholder="Numri i Marresit"
                        defaultValue={receiverNrTelefonit}
                        onChange={(e) => setReceiverNrTelefonit(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Adresa e Marresit"
                        defaultValue={receiverStreetName}
                        onChange={(e) => setReceiverStreetName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="zipCode" 
                        placeholder="Zip Kodi i Marresit"
                        defaultValue={receiverZipCode}
                        onChange={(e) => setReceiverZipCode(e.target.value)}
                    />
                    <div className="box" id="receiver-city-box">
                        <select 

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
        </div>
    ) : "";
}
