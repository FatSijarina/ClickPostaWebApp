import React, { useState, useEffect } from 'react';
import '../crud-styles.scss';
import axios from 'axios';
import VeturaUpdatePopup from './vetura-update-popup';
import { toast } from "react-toastify";

export default function VeturaRead() {

    const [veturat, setVeturat] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [veturaID, setVeturaId] = useState();
    const [refreshKey, setRefreshKey] = useState(0);

    function handleClick(veturaId) {
        const confirmBox = window.confirm(
            "A jeni i sigurte se doni te fshini veturen me id " + veturaId + '?'
        )
        if (confirmBox === true) {
            axios.delete('http://localhost:5094/api/Veturat/DeleteVetura?id=' + veturaId)
                .then(() => {
                    toast.info("Vetura u fshi me sukses!!", { theme: "colored" });
                })
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                }).catch(function (error) {
                    toast.error(error.response.data);
                });
        }
        else {
            toast.error("Procesi i fshirjes se nje vetures u anulua !!")
        }
    }

    useEffect(() => {
        axios.get('http://localhost:5094/api/Veturat/ShowVeturat').then(response => {
            setVeturat(response.data);
        })
    }, [refreshKey])


    const [depot, setDepot] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5094/api/Depot/ShowDepot').then(response => {
            setDepot(response.data);
        })
    }, [refreshKey])

    return (
        <>
            <h1>Vetura Read</h1>

            <div className="styled-table">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Brendi</th>
                            <th>Modeli</th>
                            <th>Targa</th>
                            <th>Tipi</th>
                            <th>Vellimi</th>
                            <th>Depo</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {veturat.map(vetura => (
                            <tr key={vetura.veturaId}>
                                <th>{vetura.veturaId}</th>
                                <th>{vetura.brendi}</th>
                                <th>{vetura.modeli}</th>
                                <th>{vetura.targa}</th>
                                <th>{vetura.tipi}</th>
                                <th>{vetura.vellimi}</th>
                                <th>
                                    {depot.map((depo) => (
                                        (vetura.depoId == depo.depoId) ? depo.name : ""
                                    ))}
                                </th>
                                <th> <button onClick={() => { setButtonPopup(true); setVeturaId(vetura.veturaId) }}>Update</button></th>
                                <th>
                                    <button type="submit" onClick={() => handleClick(vetura.veturaId)}>Delete</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <VeturaUpdatePopup trigger={buttonPopup} setTrigger={setButtonPopup} veturaId={veturaID} setRefreshKey={setRefreshKey} />
        </>
    )
}