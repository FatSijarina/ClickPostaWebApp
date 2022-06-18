import React from 'react'
import '../popup.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function RezervoVeturenUpdatePopup(props) {

    const rezervimiId = props.rezervimiId;
    const [dataRezervimit, setDataRezervimit] = useState([]);
    const dataKthimit = dataRezervimit;
    const [userId, setUserId] = useState('0');
    const [veturaId, setVeturaId] = useState('0');

    const [isPending, setIsPending] = useState(false);
    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const rezervimiVetures = { rezervimiId, dataRezervimit, dataKthimit, userId, veturaId };
        console.log(rezervimiVetures);
        setIsPending(true);
        axios.put('http://localhost:5094/api/RezervoVeturen/UpdateRezervoVeturen', rezervimiVetures)
            .then(() => {
                toast.success("Rezervimi u perditesua me sukses!!", { theme: "colored" });
                setIsPending(false);
                props.setRefreshKey(refreshKey => refreshKey + 1);
                props.setTrigger(false);
            }).catch(function (error) {
                toast.error(error.response.data);
            });
    }

    const [transportuesit, setTransportuesit] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/User/GetTransportuesit').then(response => {
            setTransportuesit(response.data);
        })
    }, [refreshKey])

    const [makinat, setMakinat] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/Veturat/ShowVeturat').then(response => {
            setMakinat(response.data);
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
                                <input
                                    type="date"
                                    name="dataFillimit"
                                    placeholder="Data e fillimit"
                                    required
                                    defaultValue='Data e fillimit'
                                    onChange={(e) => setDataRezervimit(e.target.value)}
                                />
                                <input
                                    type="date"
                                    disabled
                                    name="dataKthimit"
                                    placeholder="Data e Kthimit"
                                    defaultValue={dataRezervimit}
                                />
                                <div className="box">
                                    <select
                                        required
                                        onChange={(e) => setUserId(e.target.value)}
                                        defaultValue='Zgjedh Transportuesin'
                                    >
                                        <option value="Zgjedh Transportuesin" disabled={true}>Zgjedh Trasnportuesin</option>
                                        {transportuesit.map((transportuesi) => (
                                            <option required key={transportuesi.userId} value={transportuesi.userId}>
                                                {transportuesi.emri}
                                            </option>
                                        ))};
                                    </select>
                                </div>
                                <div className="box">
                                    <select
                                        required
                                        onChange={(e) => setVeturaId(e.target.value)}
                                        defaultValue='Zgjedh Veturen'
                                    >
                                        <option value="Zgjedh Veturen" disabled={true}>Zgjedh Veturen</option>
                                        {makinat.map((makina) => (
                                            <option required key={makina.veturaId} value={makina.veturaId}>
                                                {makina.brendi}
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