import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import "../client-interface.scss";
import "../../login/style.scss"
import GreetingsCourier from '../../../img/client-dashboard-assets/courier-greetings.svg'
import LocationFrom from '../../../img/client-dashboard-assets/icons/location-from.svg'
import LocationTo from '../../../img/client-dashboard-assets/icons/location-to.svg'
import Package from '../../../img/client-dashboard-assets/icons/order-packages.svg'

export default function CIHome() {

    const {klientiID, klienti, porosite, qytetet} = useContext(UserContext);
    const [porosiaFundit, setPorosiaFundit] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5094/Porosia/GetLatestUserPorosia?id=' + klientiID)
            .then(response => {
                setPorosiaFundit(response.data);
            })
    }, [])

    return (
        <>
            <div className="greetings-section">
                <h1>Hello {klienti.emri}</h1>
                <img src={GreetingsCourier} alt="greetings-courier" />
                <button className="add-order-btn">Bej nje dergese</button>
            </div>    

            <main className="client-main">
                <div className="left-section">
                    <div className="latest-order">
                        <div className="latest-order-info">
                            <p className="latest-order-info-title">
                                Gjendja e dergeses se fundit
                            </p>
                            
                            <div className="latest-order-info-row">
                                <p>Emertimi: <b>{porosiaFundit.emertimi}</b></p>
                            </div>
                            <div className="latest-order-info-row">
                                <p>ID: <b>{porosiaFundit.id}</b></p>
                            </div>
                            <div className="latest-order-info-row">
                                <p>Derguar te: <b>#{porosiaFundit.receiverEmri + " " + porosiaFundit.receiverMbiemri}</b></p>
                            </div>
                            <div className="latest-order-info-row">
                                <p>Nga: 
                                <b>{qytetet.map((qyteti) => (
                                            (porosiaFundit.senderZipCode == qyteti.qytetiZipCode) ? qyteti.emriQytetit : ""
                                        ))}</b></p>
                            </div>
                            <div className="latest-order-info-row">
                                <p>Per ne: <b>{qytetet.map((qyteti) => (
                                            (porosiaFundit.receiverZipCode == qyteti.qytetiZipCode) ? qyteti.emriQytetit : ""
                                        ))}</b></p>
                            </div>

                        </div>
                        <div className="latest-order-status">

                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <h2>Dergesat e mia</h2>

                    {porosite.sort((a, b) => b.id - a.id).slice(0, 5).map(porosia => (                        
                        <div className="client-order" key={porosia.id}>
                            <div className="client-order-info">
                                <div className="client-order-info-row">
                                    <img src={Package} alt="package-icon" />
                                    <p>{porosia.emertimi}</p>
                                </div>
                                <div className="client-order-info-row">
                                    <img src={LocationFrom} alt="package-icon" />
                                    <p>
                                        {qytetet.map((qyteti) => (
                                            (porosia.senderZipCode == qyteti.qytetiZipCode) ? qyteti.emriQytetit : ""
                                        ))}
                                    </p>
                                </div>
                                <div className="client-order-info-row">
                                    <img src={LocationTo} alt="package-icon" />
                                    <p>
                                        {qytetet.map((qyteti) => (
                                            (porosia.receiverZipCode == qyteti.qytetiZipCode) ? qyteti.emriQytetit : ""
                                        ))}
                                    </p>
                                </div>
                            </div>
                            <div className="client-order-status">
                                <p></p>
                            </div>
                        </div>                
                    ))}    
                </div>
            </main>
        </>
    )
}