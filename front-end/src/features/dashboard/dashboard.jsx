import React from 'react';
import './dashboard-styles.scss';
import { Route, Routes } from 'react-router-dom'
import DepoCrud from '../cruds/depo-crud/depo-crud';
import ClientCrud from '../cruds/client-crud/user-crud';
import { Link } from 'react-router-dom';
import ClientIcon from '../../img/client-crud-assets/user-crud-read.svg'
import DepoIcon from '../../img/dashboard-assets/depo-icon.svg';
import PorositeIcon from '../../img/dashboard-assets/orders-icon.svg';
import VehicleIcon from '../../img/dashboard-assets/vehicle-icon.svg';
import CityIcon from '../../img/dashboard-assets/city-icon.svg';
import SektoriCrud from '../cruds/sektori-crud/sektori-crud';
import DepoSektoriCrud from '../cruds/deposektori-crud/depo-sektori-crud';
import VeturaCrud from '../cruds/vetura-crud/vetura-crud';

export default function Dashboard() {
    return(

        <div className="base-container">

            <h1>Dashboard</h1>

            <div className="dashboard-links">
                <Link to="./ClientCrud">
                    <img src={ClientIcon} alt="client-user-icon" className='client-user-icon' />
                    <p>Perdoruesit</p>
                </Link>
                <Link to="./SektoriCrud" > 
                    <img src={PorositeIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>SektoriCrud</p>
                </Link>
                <Link to="./DepoCrud" > 
                    <img src={DepoIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>DepoCrud</p>
                </Link>
                <Link to="./DepoSektoriCrud" >
                    <img src={DepoIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>DepoSektoriCrud</p>
                </Link>
                <Link to="./VeturaCrud" > 
                    <img src={VehicleIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>Veturat</p>
                </Link>
            </div>    
               
            <Routes>
                <Route path='/ClientCrud/*' element={<ClientCrud />} />
                <Route path='/SektoriCrud/*' element={<SektoriCrud />} />
                <Route path='/DepoCrud/*' element={<DepoCrud />} />
                <Route path='/DepoSektoriCrud/*' element={<DepoSektoriCrud />} />
                <Route path='/VeturaCrud/*' element={<VeturaCrud />} />
            </Routes>


        </div>

    )

}

