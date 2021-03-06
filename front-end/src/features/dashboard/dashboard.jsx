import React from 'react';
import './dashboard-styles.scss';
import { Route, Routes } from 'react-router-dom'
import DepoCrud from '../cruds/depo-crud/depo-crud';
import ClientCrud from '../cruds/client-crud/user-crud';
import OrdersCrud from '../cruds/orders-crud/orders-crud'
import { Link } from 'react-router-dom';
import ClientIcon from '../../img/client-crud-assets/user-crud-read.svg'
import DepoIcon from '../../img/dashboard-assets/depo-icon.svg';
import PorositeIcon from '../../img/dashboard-assets/orders-icon.svg';
import supplier from '../../img/transporter-assets/supplier.png';
import VehicleIcon from '../../img/dashboard-assets/vehicle-icon.svg';
import CityIcon from '../../img/dashboard-assets/city-icon.svg';
import SektoriCrud from '../cruds/sektori-crud/sektori-crud';
import DepoSektoriCrud from '../cruds/deposektori-crud/depo-sektori-crud';
import VeturaCrud from '../cruds/vetura-crud/vetura-crud';
import RezervoVeturenCrud from '../cruds/rezervoVeturen-crud/rezervo-veturen-crud';
import PushimiIcon from '../../img/dashboard-assets/rest-icon.svg';
import QuestionIcon from '../../img/faq-assets/question-icon.svg';
import PushimiCrud from '../cruds/pushimi-crud/Pushimi-crud';
import QytetiCrud from '../cruds/qyteti-crud/QytetiCrud';
import QuestionCrud from '../cruds/QA/QA-cruds';


export default function Dashboard() {
    return(
        <div className="base-container">

            <h1>Dashboard</h1>

            <div className="dashboard-links">
                <Link to="./ClientCrud">
                    <img src={ClientIcon} alt="client-user-icon" className='client-user-icon' />
                    <p>Perdoruesit</p>
                </Link>
                <Link to="./OrdersCrud">
                    <img src={PorositeIcon} alt="orders-icon" className='client-user-icon' />
                    <p>Porosite</p>
                </Link>
                <Link to="./SektoriCrud" > 
                    <img src={supplier} alt="ClientUserIcon" className='client-user-icon' />
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
                <Link to="./RezervoVeturenCrud" >
                    <img src={VehicleIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>Rezervo veturat</p>
                </Link>
                <Link to="./PushimiCrud" > 
                    <img src={PushimiIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>Pushimet</p>
                </Link>
                <Link to="./QytetiCrud" > 
                    <img src={CityIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>Qytetet</p>
                </Link>
                <Link to="./QuestionCrud" > 
                    <img src={QuestionIcon} alt="ClientUserIcon" className='client-user-icon' />
                    <p>Questions</p>
                </Link>
            </div>    
               
            <Routes>
                <Route path='/ClientCrud/*' element={<ClientCrud />} />
                <Route path='OrdersCrud/*' element={<OrdersCrud />} />
                <Route path='/SektoriCrud/*' element={<SektoriCrud />} />
                <Route path='/DepoCrud/*' element={<DepoCrud />} />
                <Route path='/DepoSektoriCrud/*' element={<DepoSektoriCrud />} />
                <Route path='/VeturaCrud/*' element={<VeturaCrud />} />
                <Route path='/RezervoVeturenCrud/*' element={<RezervoVeturenCrud />} />
                <Route path='/PushimiCrud/*' element={<PushimiCrud/>}/>
                <Route path='/QytetiCrud/*' element={<QytetiCrud/>}/>
                <Route path='/QuestionCrud/*' element={<QuestionCrud/>}/>
            </Routes>


        </div>

    )

}

