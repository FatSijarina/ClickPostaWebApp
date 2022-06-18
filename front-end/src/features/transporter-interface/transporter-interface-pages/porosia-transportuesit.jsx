import React, { useState, useEffect } from 'react';
import Gjurimi from "../../../img/transporter-assets/Gjurmimi-RealTime.png"
import Group from "../../../img/transporter-assets/Group.png"
import Group1 from "../../../img/transporter-assets/Group1.png"
import Group2 from "../../../img/transporter-assets/Group2.png"
import "./porosia-transportuesit.scss";
import { UserContext } from "../../../Context/UserContext";
import axios from 'axios';
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";

const PorosiaDetails = () => {

    const [porosia, setPorosia] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state != null) {
            axios.get('http://localhost:5094/Porosia/GetPorosiaById?id=' + location.state.porosiaId)
                .then(response => (
                    setPorosia(response.data)
                ))
        }
        else {
            navigate('/Transporter')
        }
    
    })

    return (

        <main className="porosia-details-main">
            <div className="porosia-main-gjurmimi">
                <h1>Numri i dergeses #{porosia.id}</h1>
                <img src={Gjurimi} />
            </div>
            <div className="porosia-main-details">
                <div className="porosia-main-details-info">
                    <img src={Group} />
                    <p>Emertimi i Porosise: <b>{porosia.emertimi}</b></p>
                    <p>Detajet: <b>{porosia.detajet}</b></p>
                    <p>Vellimi: <b>{porosia.vellimi}</b></p>
                    <p>Materiali: <b>{porosia.materiali}</b></p>
                </div>
                <div className="porosia-main-details-info">
                    <img src={Group1} />
                    <p>Derguar nga: <b>{porosia.senderEmri}</b></p>
                    <p>Numri i Telefonit: <b>{porosia.senderNrTelefonit}</b></p>
                    <p>Numri i shtepise: <b>{porosia.senderHomeNumber}</b></p>
                    <p>Emri rruges: <b>{porosia.senderStreetName}</b></p>
                    <p>Zip Kodi: <b>{porosia.senderZipCode}</b></p>
                </div>
                <div className="porosia-main-details-info">
                    <img src={Group2} />
                    <p>Derguar per: <b>{porosia.receiverEmri}</b></p>
                    <p>Numri i Telefonit: <b>{porosia.receiverNrTelefonit}</b></p>
                    <p>Numri i shtepise: <b>{porosia.receiverHomeNumber}</b></p>
                    <p>Emri i rruges: <b>{porosia.receiverStreetName}</b></p>
                    <p>Zip Kodi: <b>{porosia.receiverZipCode}</b></p>
                </div>
            </div>
        </main>
    );
}

export default PorosiaDetails;