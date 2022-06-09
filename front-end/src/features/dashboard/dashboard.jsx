import React from 'react';
import './dashboard-styles.scss';
import { Route, Routes } from 'react-router-dom'
import DepoCrud from '../cruds/depo-crud/depo-crud';
import { Link } from 'react-router-dom';
import DepoIcon from '../../img/dashboard-assets/depo-icon.svg';
import PorositeIcon from '../../img/dashboard-assets/orders-icon.svg';
import VehicleIcon from '../../img/dashboard-assets/vehicle-icon.svg';
import CityIcon from '../../img/dashboard-assets/city-icon.svg';
import SektoriCrud from '../cruds/sektori-crud/sektori-crud';
import VeturaCrud from '../cruds/vetura-crud/vetura-crud';

export default function Dashboard() {
    return(

        <div className="base-container">

            <h1>Dashboard</h1>

            <div className="dashboard-links">
                <Link to="./SektoriCrud" > 
                    <img src={PorositeIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>SektoriCrud</p>
                </Link>
                <Link to="./DepoCrud" > 
                    <img src={DepoIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>DepoCrud</p>
                </Link>
                <Link to="./VeturaCrud" > 
                    <img src={VehicleIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>Veturat</p>
                </Link>
                <Link to="./ClientCrud" > 
                    <img src={CityIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>Qyetet</p>
                </Link>
            </div>    
               
            <Routes>
                <Route path='/SektoriCrud/*' element={<SektoriCrud />} />
                <Route path='/DepoCrud/*' element={<DepoCrud />} />
                <Route path='/VeturaCrud/*' element={<VeturaCrud />} />
            </Routes>


        </div>

    )

}

