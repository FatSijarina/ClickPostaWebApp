import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function OrdersUpdatePopup(props) {

    const id = props.porosiaId;
    const userId = props.userId;
    const [emertimi, setEmertimi] = useState('');
    const [detajet, setDetajet] = useState('');
    const [vellimi, setVellimi] = useState(0);
    const [materiali, setMateriali] = useState('');
    const [senderEmri, setSenderEmri] = useState('');
    const [senderMbiemri, setSenderMbiemri] = useState('');
    const [senderNrTelefonit, setSenderNrTelefonit] = useState('');
    const [senderHomeNumber, setSenderHomeNumber] = useState(0);
    const [senderStreetName, setSenderStreetName] = useState('');
    const [senderZipCode, setSenderZipCode] = useState(0);
    const [senderAddressDetails] = useState('');
    const [receiverEmri, setReceiverEmri] = useState('');
    const [receiverMbiemri, setReceiverMbiemri] = useState('');
    const [receiverNrTelefonit, setReceiverNrTelefonit] = useState('');
    const [receiverHomeNumber, setReceiverHomeNumber] = useState(0);
    const [receiverStreetName, setReceiverStreetName] = useState('');
    const [receiverZipCode, setReceiverZipCode] = useState(0);
    const [receiverAddressDetails] = useState('');
    const [marresiId, setMarresiId] = useState(0);
    const [depoSektoriId, setDepoSektoriId] = useState(0);
    const [derguesiId, setDerguesiId] = useState(0);
    const [statusiPorosiseId, setStatusiPorosiseId] = useState(0); 

    const [isPending, setIsPending] = useState(false);


    const handleSubmit = (e) => {
    e.preventDefault();
    const porosia = { id, userId, emertimi, detajet, vellimi, materiali,
        senderEmri, senderMbiemri, senderNrTelefonit, senderHomeNumber, senderStreetName,  senderZipCode, senderAddressDetails,
        receiverEmri, receiverMbiemri, receiverNrTelefonit, receiverHomeNumber, receiverStreetName, receiverZipCode, receiverAddressDetails,
        marresiId, depoSektoriId, derguesiId, statusiPorosiseId};

    setIsPending(true);
    console.log(porosia);

    axios.put('http://localhost:5094/Porosia/UpdatePorosi', porosia)
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
                        name="vellimi" 
                        placeholder="Vellimi"
                        defaultValue={vellimi}
                        onChange={(e) => setVellimi(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="pesha" 
                        placeholder="Materiali"
                        defaultValue={materiali}
                        onChange={(e) => setMateriali(e.target.value)}
                    />

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
                        type="number" 
                        name="number" 
                        placeholder="Nr i vendbanimit te derguesit"
                        defaultValue={senderHomeNumber}
                        onChange={(e) => setSenderHomeNumber(e.target.value)}
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
                    <div className="box">
                        <select 
                            onChange={(e) => setSenderZipCode(e.target.value)} 
                            defaultValue='Zgjedh Qytetin'
                        >      
                        <option value="Zgjedh Qytetin" disabled={true}>Zgjedh Qytetin</option>  
                        {props.qyteti.map(qyteti => (
                            <option  key={qyteti.qytetiZipCode} value={qyteti.qytetiZipCode}>
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
                            type="number" 
                            name="number" 
                            placeholder="Nr i vendbanimit te marresit"
                            defaultValue={receiverHomeNumber}
                            onChange={(e) => setReceiverHomeNumber(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Adresa e Marresit"
                            defaultValue={receiverStreetName}
                            onChange={(e) => setReceiverStreetName(e.target.value)}
                        />
                        <div className="box">
                            <select 
                                onChange={(e) => setReceiverZipCode(e.target.value)} 
                                defaultValue='Zgjedh Qytetin'
                            >      
                            <option value="Zgjedh Qytetin" disabled={true}>Zgjedh Qytetin</option>  
                            {props.qyteti.map(qyteti => (
                                <option  key={qyteti.qytetiZipCode} value={qyteti.qytetiZipCode}>
                                    {qyteti.emriQytetit}
                                </option>
                            ))};                               
                            </select>   
                            <input 
                            type="number" 
                            name="number" 
                            placeholder="MarresiId"
                            onChange={(e) => setMarresiId(e.target.value)}
                        />   
                        <input 
                            type="number" 
                            name="number" 
                            placeholder="DepoSektoriId"
                            onChange={(e) => setDepoSektoriId(e.target.value)}
                        /> 
                        <input 
                            type="number" 
                            name="number" 
                            placeholder="DerguesiId"
                            onChange={(e) => setDerguesiId(e.target.value)}
                        /> 
                        <input 
                            type="number" 
                            name="number" 
                            placeholder="StatusiPorosiseId"
                            onChange={(e) => setStatusiPorosiseId(e.target.value)}
                        />    
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
