import React from "react";
import { Route, Routes, Link } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";
import TIHome from './transporter-interface-pages/transporter-interface-home'
import TIReserve from './transporter-interface-pages/transporter-interface-reserve'
import HomeIcon from '../../img/client-dashboard-assets/icons/home.svg'
import PackageIcon from '../../img/client-dashboard-assets/icons/packages.svg'
import TIReserveScooter from './transporter-interface-pages/rezervimet/transporter-reserve-scooter'
import TIReservePickup from './transporter-interface-pages/rezervimet/transporter-reserve-pickup'
import TIReserveTruck from './transporter-interface-pages/rezervimet/transporter-reserve-truck'


export default function TransporterInterface() {
    return (
        <div className="base-container">
            <div className="dashboard-links">
                <Link to="./">
                    <img src={HomeIcon} alt="home-icon" className='client-user-icon' />
                    <p>Home</p>
                </Link>
                <Link to="./Rezervo">
                    <img src={PackageIcon} alt="track-icon" className='client-user-icon' />
                    <p>Rezervo</p>
                </Link>
            </div>

            <Routes>
                <Route path='/' element={<TIHome />} />
                <Route path='/Rezervo/*' element={<TIReserve />} />
                <Route path='/ReserveScooter' element={<TIReserveScooter />} />
                <Route path='/ReservePickup' element={<TIReservePickup />} />
                <Route path='/ReserveTruck' element={<TIReserveTruck />} />
            </Routes>

        </div>
    )
}