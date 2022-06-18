import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import {Link} from "react-router-dom"
import "../client-interface.scss";
import "../../login/style.scss"
import GreetingsCourier from '../../../img/client-dashboard-assets/courier-greetings.svg'
import LocationFrom from '../../../img/client-dashboard-assets/icons/location-from.svg'
import LocationTo from '../../../img/client-dashboard-assets/icons/location-to.svg'
import Package from '../../../img/client-dashboard-assets/icons/order-packages.svg'
import SidebarClientOrder from "../../../components/user-interface-cards/sidebar-client-orders";
import PerTuMarreImg from "../../../img/client-dashboard-assets/package-status/package-status-per-tu-marre.svg"
import NeDepoImg from "../../../img/client-dashboard-assets/package-status/package-status-ne-depo.svg"
import DukeUDerguar from "../../../img/client-dashboard-assets/package-status/package-status-e-marre.svg"
import GjurmimiRealTime from "../../../img/client-dashboard-assets/Gjurmimi-RealTime.png"

export default function CIHome() {

    const {klientiID, klienti, porosite, qytetet} = useContext(UserContext);
    const [porosiaFundit, setPorosiaFundit] = useState([]);

    const statusiPorosise = [
        {id: 1, statusi: PerTuMarreImg},
        {id: 2, statusi: NeDepoImg},
        {id: 3, statusi: DukeUDerguar}
    ];

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
                {/* ja dergojm order details id e klientit me state */}
                <Link to='OrderDetajet' state={{klientiID: klienti.userId}}><button className="add-order-btn">  Bej nje dergese</button> </Link>
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
                                <p>Derguar te: <b>{porosiaFundit.receiverEmri + " " + porosiaFundit.receiverMbiemri}</b></p>
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
                            <img src={porosiaFundit.statusiPorosiseId ?  statusiPorosise.find(s => s.id == porosiaFundit.statusiPorosiseId).statusi : "" }  alt="" />
                        </div>
                    </div>

                    <img src={GjurmimiRealTime} alt="" />

                </div>
                <div className="right-section">
                    <h2>Dergesat e mia</h2>

                    {porosite.sort((a, b) => b.id - a.id).slice(0, 5).map(porosia => (                        
                        <div className="client-order" key={porosia.id}>
                            <div className="client-order-info">
                                <SidebarClientOrder 
                                    icon={Package}
                                    text={porosia.emertimi}
                                />
                                <SidebarClientOrder 
                                    icon={LocationFrom}
                                    text={qytetet.map((qyteti) => (
                                        (porosia.senderZipCode == qyteti.qytetiZipCode) ? qyteti.emriQytetit : ""
                                    ))}
                                />
                                <SidebarClientOrder 
                                    icon={LocationTo}
                                    text={qytetet.map((qyteti) => (
                                        (porosia.receiverZipCode == qyteti.qytetiZipCode) ? qyteti.emriQytetit : ""
                                    ))}
                                />
                            </div>
                            <div className="client-order-status">
                                <img src={statusiPorosise.find(s => s.id === porosia.statusiPorosiseId).statusi}  alt="" />
                            </div>
                        </div>                
                    ))}    
                </div>
            </main>
        </>
    )
}