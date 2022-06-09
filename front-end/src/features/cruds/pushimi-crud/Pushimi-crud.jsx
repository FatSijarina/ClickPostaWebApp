import React from 'react';
import '../crud-styles.scss';
import { Link, Route, Routes } from 'react-router-dom';
import PushimiCreate from './PushimiCreate';
import PushimiRead from './PushimiRead';
import ReadIcon from '../../../img/dashboard-assets/rest.png';
import PushimiIcon from '../../../img/dashboard-assets/rest.png';



export default function PushimiCrud() { 
    return(
        <>
            <div className="crud-icons">
                
                <Link to="./PushimiCreate">
                    <div className="crud-icons-combine">
                        <img src={PushimiIcon} alt="create pushimi" />
                        <p>Rezervo</p>
                    </div>
                </Link>
                <Link to="./">
                    <div className="crud-icons-combine">
                        <img src={ReadIcon} alt="create an order icon" />
                        <p>Read</p>
                    </div>
                </Link>

            </div>

            <Routes>
                <Route path='/PushimiCreate/*' element={<PushimiCreate />} />
                <Route path='/' element={<PushimiRead />} />
            </Routes>
        </>

    )

}