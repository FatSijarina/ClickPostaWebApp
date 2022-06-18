import React from "react";
import { Route, Routes, Link } from 'react-router-dom'
import CIHome from './client-interface-pages/client-interface-home'
import CITrack from './client-interface-pages/client-interface-track'
import CIOrders from './client-interface-pages/client-interface-orders'
import CINjoftimet from './client-interface-pages/client-interface-notifications'
import HomeIcon from '../../img/client-dashboard-assets/icons/home.svg'
import NotificationIcon from '../../img/client-dashboard-assets/icons/notifications.svg'
import PackageIcon from '../../img/client-dashboard-assets/icons/packages.svg'
import TrackIcon from '../../img/client-dashboard-assets/icons/track.svg'
import OrderDetajet from "./make-an-order/make-an-order-detajet";


export default function ClientInterface() {
    return (
        <div className="base-container">
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

            <Routes>
                <Route path='/' element={<CIHome />}/>
                <Route path='Njoftimet' element={<CINjoftimet />}/>
                <Route path='Dergesat' element={<CIOrders />}/>
                <Route path='Gjurmo' element={<CITrack />}/>
                <Route path='OrderDetajet' element={<OrderDetajet />}/> 
            </Routes>

        </div>
    )
}