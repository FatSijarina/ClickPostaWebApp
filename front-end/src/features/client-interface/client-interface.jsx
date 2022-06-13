import React from "react";
import { Route, Routes, Link } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";
import CIHome from './client-interface-pages/client-interface-home'
import CITrack from './client-interface-pages/client-interface-track'
import CIOrders from './client-interface-pages/client-interface-orders'
import CINjoftimet from './client-interface-pages/client-interface-notifications'
import HomeIcon from '../../img/client-dashboard-assets/icons/home.svg'
import NotificationIcon from '../../img/client-dashboard-assets/icons/notifications.svg'
import PackageIcon from '../../img/client-dashboard-assets/icons/packages.svg'
import TrackIcon from '../../img/client-dashboard-assets/icons/track.svg'

export default function ClientInterface() {

    const klientiId = 2;
    const [klienti, setKlienti] = useState();
    const [porosite, setPorosite] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5094/Porosia/GetUserPorosite?id=' + klientiId).
            then(response => {
                setPorosite(response.data);
            })
        axios.get('http://localhost:5094/api/User/GetKlientin?id=' + klientiId).
        then(response => {
            setKlienti(response.data);
        })
    }, [])

    return (
        <div className="base-container">
            {console.log(klienti)}
            {console.log(porosite)}
            <div className="dashboard-links">
                <Link to="./">
                    <img src={HomeIcon} alt="home-icon" className='client-user-icon'/>
                    <p>Home</p>
                </Link>
                <Link to="./Gjurmo">
                    <img src={TrackIcon} alt="track-icon" className='client-user-icon'/>
                    <p>Gjurmo</p>
                </Link>
                <Link to="./Dergesat">
                    <img src={PackageIcon} alt="packages-icon" className='client-user-icon'/>
                    <p>Dergesat</p>
                </Link>
                <Link to="./Njoftimet">
                    <img src={NotificationIcon} alt="notification-icon" className='client-user-icon'/>
                    <p>Njoftimet</p>
                </Link>
            </div>

            <h1>Hello {klienti.emri}!</h1>
        

            <Routes>
                <Route path='/' element={<CIHome />}/>
                <Route path='Njoftimet' element={<CINjoftimet />}/>
                <Route path='Dergesat' element={<CIOrders />}/>
                <Route path='Gjurmo' element={<CITrack />}/> 
            </Routes>

        </div>
    )
}