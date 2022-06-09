import React, { useState, useEffect } from 'react';
import '../crud-styles.scss';
import axios from 'axios';
import DepoUpdatePopup from './depo-update-popup';
import { toast } from "react-toastify";

export default function DepoRead() {

    const [depot, setDepot] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [depoID, setDepoId] = useState();
    const [refreshKey, setRefreshKey] = useState(0);

    function handleClick(depoId) {
        const confirmBox = window.confirm(
            "Are you sure you want to delete depo with id " + depoId + '?'
        )
        if (confirmBox === true) {
            axios.delete('http://localhost:5094/api/Depot/DeleteDepo?id=' + depoId)
                .then(() => {
                    toast.info("Depo deleted successfully!!", { theme: "colored" });
                })
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            toast.error("Process of deleting a depo canceled !!")
        }
    }

    useEffect(() => {
        axios.get('http://localhost:5094/api/Depot/ShowDepot').then(response => {
            setDepot(response.data);
        })
    }, [refreshKey])

    const [qyteti, setQyteti] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/Qyteti').then(response => {
            setQyteti(response.data);
        })
    }, [refreshKey])

    return (
        <>
            <h1>Depo Read</h1>

            <div className="styled-table">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address Number</th>
                            <th>Street Name</th>
                            <th>Qyteti</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {depot.map(depo => (
                            <tr key={depo.depoId}>
                                <th>{depo.depoId}</th>
                                <th>{depo.name}</th>
                                <th>{depo.addressNumber}</th>
                                <th>{depo.streetName}</th>
                                <th>
                                    {qyteti.map((qytet) => (
                                        (depo.zipCode == qytet.qytetiZipCode) ? qytet.emriQytetit : ""
                                    ))}
                                </th>
                                <th> <button onClick={() => { setButtonPopup(true); setDepoId(depo.depoId) }}>Update</button></th>
                                <th>
                                    <button type="submit" onClick={() => handleClick(depo.depoId)}>Delete</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <DepoUpdatePopup trigger={buttonPopup} setTrigger={setButtonPopup} depoId={depoID} setRefreshKey={setRefreshKey} />
        </>
    )
}