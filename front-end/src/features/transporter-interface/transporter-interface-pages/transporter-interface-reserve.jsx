import React, { useState } from "react";
import "../transporter-interface.scss";
import "../../login/style.scss"
import GreetingsCourier from '../../../img/client-dashboard-assets/courier-greetings.svg'
import CargoTruck from '../../../img/transporter-assets/cargo-truck.png';
import Motorcycle from '../../../img/transporter-assets/motorcycle.png';
import Pickup from '../../../img/transporter-assets/pickup-truck.png';
import TIReserveScooter from './rezervimet/transporter-reserve-scooter'
import TIReservePickup from './rezervimet/transporter-reserve-pickup'
import TIReserveTruck from './rezervimet/transporter-reserve-truck'
import ShowRezervimetPopup from './rezervimet/transporter-reserve-show'
import { Route, Routes, Link } from 'react-router-dom'

export default function TIHome() {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [refreshKey, setRefreshKey] = useState('0');

    return (
        <>
            <div className="greetings-section">
                <img src={GreetingsCourier} alt="greetings-courier" />
                <h1>Veturat</h1>
            </div>
            <main className="transporter-main">
                <div className="left-section">
                    <Link to="../ReserveScooter">
                        <img img src={Motorcycle} alt="ClientUserIcon" className='client-user-icon' />
                        <button className="rezervo-btn">Rezervo nje scooter</button>
                    </Link>
                </div>
                <div className="middle-section">
                    <Link to="../ReservePickup">
                        <img img src={Pickup} alt="ClientUserIcon" className='client-user-icon' />
                        <button className="rezervo-btn">Rezervo nje pickup</button>
                    </Link>
                </div>
                <div className="right-section">
                    <Link to="../ReserveTruck">
                        <img img src={CargoTruck} alt="ClientUserIcon" className='client-user-icon' />
                        <button className="rezervo-btn">Rezervo nje kamion</button>
                    </Link>
                </div>
            </main>
            <div>
                <button className="lista-btn" button onClick={() => { setButtonPopup(true)}}>Gjenero listen e rezervimeve</button>
            </div>

            <ShowRezervimetPopup trigger={buttonPopup} setTrigger={setButtonPopup} setRefreshKey={setRefreshKey} />

            <Routes>
                <Route path='/ReserveScooter' element={<TIReserveScooter />} />
                <Route path='/ReservePickup' element={<TIReservePickup />} />
                <Route path='/ReserveTruck' element={<TIReserveTruck />} />
            </Routes>
        </>
    )
}