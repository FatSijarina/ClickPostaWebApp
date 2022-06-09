import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../crud-styles.scss'
import SektoriUpdatePopup from './sektori-update-popup';
import { toast } from "react-toastify";

export default function SektoriRead() {

    const [sektoret, setSektoret] = useState([]);
    const [sektoriId, setSektoriId] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0)

    function handleClick(sektoriId) {
        const confirmBox = window.confirm(
            "Are you sure you want to delete sektori with id " + sektoriId + '?'
        )
        if (confirmBox === true) {
            axios.delete('http://localhost:5094/api/Sektoret/DeleteSektori?id=' + sektoriId)
                .then(() => {
                    toast.info("Sektori deleted successfully!!", { theme: "colored" });
                })
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            toast.error("Process of deleting a sektor canceled !!")
        }
    }

    useEffect(() => {
        axios.get('http://localhost:5094/api/Sektoret/ShowSektori').then(response => {
            setSektoret(response.data);
        })
    }, [refreshKey])

    return (
        <>
            <h1>Sektoret Read</h1>
            <div className="container">
                <div className="styled-table">
                    <table className="styled-table-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Emertimi</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sektoret.map(sektori => (
                                <tr key={sektori.sektoriId}>
                                    <th>{sektori.sektoriId}</th>
                                    <th>{sektori.emertimi}</th>
                                    <th><button onClick={() => { setButtonPopup(true); setSektoriId(sektori.sektoriId)}}>Update</button></th>
                                    <th><button type="submit"
                                        onClick={() => handleClick(sektori.sektoriId)}> Delete</button></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <SektoriUpdatePopup trigger={buttonPopup} setTrigger={setButtonPopup} sektoriId={sektoriId} setRefreshKey={setRefreshKey} >

            </SektoriUpdatePopup>
        </>
    )
}