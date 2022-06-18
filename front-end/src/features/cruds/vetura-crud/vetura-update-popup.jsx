import React from 'react'
import '../popup.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";

export default function DepoUpdatePopup(props) {

    const veturaId = props.veturaId;
    const [brendi, setBrendi] = useState('');
    const [modeli, setModeli] = useState('');
    const [targa, setTarga] = useState('');
    const [tipi, setTipi] = useState('');
    const [vellimi, setVellimi] = useState('0');
    const [depoId, setDepoId] = useState('0');

    const [isPending, setIsPending] = useState(false);
    const [refreshKey, setRefreshKey] = useState('0');

    const handleSubmit = (e) => {
        e.preventDefault();

        const vetura = { veturaId, brendi, modeli, targa, tipi, vellimi, depoId};

        setIsPending(true);
        axios.put('http://localhost:5094/api/Veturat/UpdateVetura', vetura)
            .then(() => {
                toast.success("Vetura updated successfully!!", { theme: "colored" });
                props.setTrigger(false);
                props.setRefreshKey(refreshKey => refreshKey + 1);
                setIsPending(false);
            })
    }

    const [depot, setDepot] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/Depot/ShowDepot').then(response => {
            setDepot(response.data);
        })
    }, [refreshKey])

    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
                <div className="content">
                    <h1>Update Vetura</h1>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="brendi"
                                    placeholder="Brendi"
                                    defaultValue={brendi}
                                    onChange={(e) => setBrendi(e.target.value)}
                                />
                                <input
                                    type="text"
                                    name="modeli"
                                    placeholder="Modeli"
                                    defaultValue={modeli}
                                    onChange={(e) => setModeli(e.target.value)}
                                />
                                <input
                                    type="text"
                                    name="targa"
                                    placeholder="Targa"
                                    defaultValue={targa}
                                    onChange={(e) => setTarga(e.target.value)}
                                />
                                <input
                                    type="text"
                                    name="tipi"
                                    placeholder="Tipi"
                                    defaultValue={tipi}
                                    onChange={(e) => setTipi(e.target.value)}
                                />
                                <input
                                    type="text"
                                    name="vellimi"
                                    placeholder="Vellimi"
                                    defaultValue={vellimi}
                                    onChange={(e) => setVellimi(e.target.value)}
                                />
                                <div className="box">
                                    <select
                                        required
                                        onChange={(e) => setDepoId(e.target.value)}
                                        defaultValue='Zgjedh Depon'
                                    >
                                        <option value="Zgjedh Depon" disabled={true}>Zgjedh Depon</option>
                                        {depot.map((depo) => (
                                            <option required key={depo.depoId} value={depo.depoId}>
                                                {depo.name}
                                            </option>
                                        ))};
                                    </select>
                                </div>
                                {!isPending && <button type="submit" className="register-register-btn" value="Submit">
                                    Perditeso
                                </button>}
                                {isPending && <button type="submit" className="register-register-btn" value="Submit">
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