import React, { useState, useEffect } from 'react';
import '../../../cruds/popup.scss';
import axios from 'axios';
import { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

export default function ShowRezervimetPopup(props) {

    const { transportuesi } = useContext(UserContext);

    const [refreshKey, setRefreshKey] = useState('0');

    const [rezervimi, setRezervimi] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/RezervoVeturen/ShowRezervimet').then(response => {
            setRezervimi(response.data);
        })
    }, [refreshKey])

    const [transportuesit, setTransportuesit] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/User/GetTransportuesit').then(response => {
            setTransportuesit(response.data);
        })
    }, [refreshKey])

    const [veturat, setVeturat] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/Veturat/ShowVeturat').then(response => {
            setVeturat(response.data);
        })
    }, [refreshKey])

    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner-rezervimi-show">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
                <div className="styled-table">
                    <table className="styled-table-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Data e Rezervimit</th>
                                <th>Data e Kthimit</th>
                                <th>Transportuesi</th>
                                <th>Vetura</th>
                                <th>Targa e Vetures</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rezervimi.sort((a, b) => b.rezervimiId - a.rezervimiId).slice(0, 6).map(rV => (
                                (rV.userId == transportuesi.userId) ?
                                    <tr key={rV.rezervimiId }>
                                        <th>{rV.rezervimiId}</th>
                                        <th>{rV.dataRezervimit}</th>
                                        <th>{rV.dataKthimit}</th>
                                        <th>
                                            {transportuesit.map((transportuesi) => (
                                                (transportuesi.userId == rV.userId) ? transportuesi.emri : ""
                                            ))}
                                        </th>
                                        <th>
                                            {veturat.map((vetura) => (
                                                (vetura.veturaId == rV.veturaId) ? vetura.brendi : ""
                                            ))}
                                        </th>
                                        <th>
                                            {veturat.map((vetura) => (
                                                (vetura.veturaId == rV.veturaId) ? vetura.targa : ""
                                            ))}
                                        </th>
                                    </tr>
                                    : ""
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    ) : "";
}