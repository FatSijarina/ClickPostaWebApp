import React from "react";
import { Route, Routes, Link } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";
import TIHome from './transporter-interface-pages/transporter-interface-home'
import TIReserve from './transporter-interface-pages/transporter-interface-reserve'
import HomeIcon from '../../img/client-dashboard-assets/icons/home.svg'
import PackageIcon from '../../img/client-dashboard-assets/icons/packages.svg'


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
            </Routes>

        </div>
    )
}