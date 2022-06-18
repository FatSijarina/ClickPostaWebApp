import React, { useState, useEffect } from 'react';
import '../crud-styles.scss';
import axios from 'axios';
import RezervoVeturenUpdatePopup from './rezervo-veturen-update-popup';
import { toast } from "react-toastify";

export default function RezervoVeturenRead() {

    const [rezervimi, setRezervimi] = useState([]);
    const [rezervimiId, setRezervimiId] = useState([]);
    const [refreshKey, setRefreshKey] = useState('0');
    const [buttonPopup, setButtonPopup] = useState(false);

    function handleClick(rezervimiId) {
        const confirmBox = window.confirm(
            "Are you sure you want to delete reservation with id " + rezervimiId + '?'
        )
        if (confirmBox === true) {
            axios.delete('http://localhost:5094/api/RezervoVeturen/FshijRezervoVeturen?id=' + rezervimiId)
                .then(() => {
                    toast.info("DepoSektori deleted successfully!!", { theme: "colored" });
                })
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            toast.error("Process of deleting a rezervimi vetures canceled !!")
        }
    }

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

    return (
        <>
            <h1>Rezervimet e veturave</h1>

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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rezervimi.map(rV => (
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
                                <th> <button onClick={() => { setButtonPopup(true); setRezervimiId(rV.rezervimiId)}}>Update</button></th>
                                <th>
                                    <button type="submit" onClick={() => handleClick(rV.rezervimiId)}>Delete</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <RezervoVeturenUpdatePopup trigger={buttonPopup} setTrigger={setButtonPopup} rezervimiId={rezervimiId} setRefreshKey={setRefreshKey} />
        </>
    )
}