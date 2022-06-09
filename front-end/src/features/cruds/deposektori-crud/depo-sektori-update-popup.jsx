import React from 'react'
import '../popup.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function DepoSektoriUpdatePopup(props) {

    const id = props.id;
    const [depoId, setDepoId] = useState('0');
    const [sektoriId, setSektoriId] = useState('0');

    const [isPending, setIsPending] = useState(false);
    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const depoSektori = { id, depoId, sektoriId };
        setIsPending(true);
        axios.put('http://localhost:5094/api/DepoSektori/UpdateDepoSektori', depoSektori)
            .then(() => {
                toast.success("DepoSektori updated successfully!!", { theme: "colored" });
                setIsPending(false);
                props.setRefreshKey(refreshKey => refreshKey + 1);
                props.setTrigger(false);
            })
    }

    const [depot, setDepot] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/Depot/ShowDepot').then(response => {
            setDepot(response.data);
        })
    }, [refreshKey])

    const [sektoret, setSektoret] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/Sektoret/ShowSektori').then(response => {
            setSektoret(response.data);
        })
    }, [refreshKey])

    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
                <div className="content">
                    <h1>Update DepoSektori</h1>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
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
                                <div className="box">
                                    <select
                                        required
                                        onChange={(e) => setSektoriId(e.target.value)}
                                        defaultValue='Zgjedh Sektorin'
                                    >
                                        <option value="Zgjedh Sektorin" disabled={true}>Zgjedh Sektorin</option>
                                        {sektoret.map((sektori) => (
                                            <option required key={sektori.sektoriId} value={sektori.sektoriId}>
                                                {sektori.emertimi}
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