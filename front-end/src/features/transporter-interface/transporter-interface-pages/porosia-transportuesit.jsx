import React, { useState, useEffect } from 'react';
import Gjurimi from "../../../img/transporter-assets/Gjurmimi-RealTime.png"
import Group from "../../../img/transporter-assets/Group.png"
import Group1 from "../../../img/transporter-assets/Group1.png"
import Group2 from "../../../img/transporter-assets/Group2.png"
import "./porosia-transportuesit.scss";
import { UserContext } from "../../../Context/UserContext";
import axios from 'axios';
import { useContext } from "react";

export default function PorosiaDetails(props) {

    const { qytetet, orders } = useContext(UserContext);

    return (
        <main className="porosia-details-main">
            <div className="porosia-main-gjurmimi">
                <img src={Gjurimi} />
            </div>
            <div className="porosia-main-details">
                <div className="porosia-main-details-info">
                    <img src={Group} />
                    <p>Emertimi i Porosise: <b></b></p>
                    <p>Sasia: <b></b> cope</p>
                    <p>Pesha: <b></b></p>
                    <p>Vellimi: <b></b></p>
                </div>
                <div className="porosia-main-details-info">
                    <img src={Group1} />
                    <p>Derguar nga: <b></b></p>
                    <p>Numri i Telefonit: <b></b> cope</p>
                    <p>Adresa: <b></b></p>
                    <p>Zip Kodi: <b></b></p>
                    <p>Qyteti: <b></b></p>
                </div>
                <div className="porosia-main-details-info">
                    <img src={Group2} />
                    <p>Derguar per: <b></b></p>
                    <p>Numri i Telefonit: <b></b> cope</p>
                    <p>Adresa: <b></b></p>
                    <p>Zip Kodi: <b></b></p>
                    <p>Qyteti: <b></b></p>
                </div>
            </div>
        </main>
    );
}