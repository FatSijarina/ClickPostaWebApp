import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import SidebarClientOrder from "../../../components/user-interface-cards/sidebar-client-orders";
import { UserContext } from "../../../Context/UserContext";
import GreetingsCourier from '../../../img/client-dashboard-assets/courier-greetings.svg';
import LocationFrom from '../../../img/client-dashboard-assets/icons/location-from.svg';
import LocationTo from '../../../img/client-dashboard-assets/icons/location-to.svg';
import Package from '../../../img/client-dashboard-assets/icons/order-packages.svg';
import Qr from '../../../img/transporter-assets/qr.png';
import "../transporter-interface.scss";


export default function TIHome() {

    const { qytetet, orders } = useContext(UserContext);

    return (
        <>
            <div className="greetings-section">
                <img src={GreetingsCourier} alt="greetings-courier" />
                <h1>Tasqet e mia</h1>
            </div>

            <main className="transporter-main-home">
                {orders.map(porosia => (
                    <div className="transporter-orders" key={porosia.id}>
                        <div className="transporter-order-status">
                            #{porosia.id}
                        </div>
                        <div className="transporter-orders-info">
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
                    </div>
                ))}
            </main>
        </>
    )
}