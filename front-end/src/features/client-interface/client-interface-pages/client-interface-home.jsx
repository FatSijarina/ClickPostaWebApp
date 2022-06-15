import React, {  } from "react";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import "../client-interface.scss";
import "../../login/style.scss"
import GreetingsCourier from '../../../img/client-dashboard-assets/courier-greetings.svg'
import LocationFrom from '../../../img/client-dashboard-assets/icons/location-from.svg'
import LocationTo from '../../../img/client-dashboard-assets/icons/location-to.svg'
import Package from '../../../img/client-dashboard-assets/icons/order-packages.svg'

export default function CIHome() {

    const {klienti, porosite} = useContext(UserContext);

    return (
        <>
            <div className="greetings-section">
                <h1>Hello {klienti.emri}</h1>
                <img src={GreetingsCourier} alt="greetings-courier" />
                <button className="add-order-btn">Bej nje dergese</button>
            </div>    

            <main className="client-main">
                <div className="left-section">

                </div>
                <div className="right-section">
                    <h2>Dergesat e mia</h2>
                    <div className="client-order">
                        <div className="client-order-info">
                            <div className="client-order-info-row">
                                <img src={Package} alt="package-icon" />
                                <p>Liber</p>
                            </div>
                            <div className="client-order-info-row">
                                <img src={LocationFrom} alt="package-icon" />
                                <p>Gjilan</p>
                            </div>
                            <div className="client-order-info-row">
                                <img src={LocationTo} alt="package-icon" />
                                <p>Kamenice</p>
                            </div>
                        </div>
                        <div className="client-order-status">
                            <p></p>
                        </div>
                    </div>                    
                </div>
            </main>
        </>
    )
}