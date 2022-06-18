import React, { useState, useEffect } from 'react';
import '../crud-styles.scss';
import axios from 'axios';
import DepoSektoriUpdatePopup from './depo-sektori-update-popup';
import { toast } from "react-toastify";

export default function DepoSektoriRead() {

    const [depoSektori, setDepoSektori] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [depoSektoriID, setDepoSektoriId] = useState();
    const [refreshKey, setRefreshKey] = useState('0');

    function handleClick(depoSektoriId) {
        const confirmBox = window.confirm(
            "A jeni te sigurte se deshironi te fshini deposektorin me id" + depoSektoriId + '?'
        )
        if (confirmBox === true) {
            axios.delete('http://localhost:5094/api/Depot/DeleteDepo?id=' + depoSektoriId)
                .then(() => {
                    toast.info("DepoSektori u fshi me sukses!!", { theme: "colored" });
                })
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                }).catch(function (error) {
                    toast.error(error.response.data);
                });
        }
        else {
            toast.error("Procesi i fshirjes se nje DepoSektori u anulua!!")
        }
    }

    useEffect(() => {
        axios.get('http://localhost:5094/api/DepoSektori/ShowDepoSektori').then(response => {
            setDepoSektori(response.data);
        })
    }, [refreshKey])

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

    return (
        <>
            <h1>DepoSektori Read</h1>

            <div className="styled-table">
                <table className="styled-table-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Depo</th>
                            <th>Sektori</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {depoSektori.map(dS => (
                            <tr key={dS.id}>
                                <th>{dS.id}</th>
                                <th>
                                    {depot.map((depo) => (
                                        (depo.depoId == dS.depoId) ? depo.name : ""
                                    ))}
                                </th>
                                <th>
                                    {sektoret.map((sektori) => (
                                        (sektori.sektoriId == dS.sektoriId) ? sektori.emertimi : ""
                                    ))}
                                </th>
                                <th> <button onClick={() => { setButtonPopup(true); setDepoSektoriId(dS.id) }}>Update</button></th>
                                <th>
                                    <button type="submit" onClick={() => handleClick(dS.id)}>Delete</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <DepoSektoriUpdatePopup trigger={buttonPopup} setTrigger={setButtonPopup} id={depoSektoriID} setRefreshKey={setRefreshKey} />
        </>
    )
}