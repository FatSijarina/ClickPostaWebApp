import React, { } from "react";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import "../transporter-interface.scss";
import "../../login/style.scss"
import GreetingsCourier from '../../../img/client-dashboard-assets/courier-greetings.svg'
import CargoTruck from '../../../img/transporter-assets/cargo-truck.png';
import Motorcycle from '../../../img/transporter-assets/motorcycle.png';
import Pickup from '../../../img/transporter-assets/pickup-truck.png';
import TIReserveScooter from './rezervimet/transporter-reserve-scooter'
import { Route, Routes, Link } from 'react-router-dom'

export default function TIHome() {

    const { klienti, porosite, qytetet } = useContext(UserContext);

    return (
        <>
            <div className="greetings-section">
                <img src={GreetingsCourier} alt="greetings-courier" />
                <h1>Veturat</h1>
            </div>
            <main className="transporter-main">
                <div className="left-section">
                    <Link to="./ReserveScooter">
                        <img img src={Motorcycle} alt="ClientUserIcon" className='client-user-icon' />
                        <button className="rezervo-btn">Rezervo nje scooter</button>
                    </Link>
                </div>
                <div className="middle-section">
                    <img img src={Pickup} alt="ClientUserIcon" className='client-user-icon' />
                    <button className="rezervo-btn">Rezervo nje pickup</button>
                </div>
                <div className="right-section">
                    <img img src={CargoTruck} alt="ClientUserIcon" className='client-user-icon' />
                    <button className="rezervo-btn">Rezervo nje kamion</button>
                </div>
            </main>
            <div>
                <button className="lista-btn">Gjenero listen e rezervimeve</button>
            </div>

            <Routes>
                <Route path='/ReserveScooter' element={<TIReserveScooter />} />
            </Routes>
        </>
    )
}