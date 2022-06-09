import React from 'react';
import '../crud-styles.scss';
import { Link, Route, Routes } from 'react-router-dom';
import QytetiCreate from './QytetiCreate';
import QytetiRead from './QytetiRead';
import CityIcon from '../../../img/dashboard-assets/city-icon.svg';



export default function QytetiCrud() { 
    return(
        <>
            <div className="crud-icons">
                
                <Link to="./QytetiCreate">
                    <div className="crud-icons-combine">
                        <img src={CityIcon} alt="create pushimi" />
                        <p>Add</p>
                    </div>
                </Link>
                <Link to="./">
                    <div className="crud-icons-combine">
                        <img src={CityIcon} alt="create an order icon" />
                        <p>Read</p>
                    </div>
                </Link>

            </div>

            <Routes>
                <Route path='/QytetiCreate/*' element={<QytetiCreate />} />
                <Route path='/' element={<QytetiRead />} />
            </Routes>
        </>

    )

}