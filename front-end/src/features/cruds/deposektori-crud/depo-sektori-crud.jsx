import React from 'react';
import '../crud-styles.scss';
import DepoIcon from '../../../img/dashboard-assets/depo-icon.svg';
import DepoSektoriRead from '../deposektori-crud/depo-sektori-read';
import { Link, Route, Routes } from 'react-router-dom';
import DepoSektoriCreate from './depo-sektori-create';

export default function DepoSektoriCrud() {
    return (
        <>
            <div className="crud-icons">
                <Link to="./DepoSektoriCreate">
                    <div className="crud-icons-combine">
                        <img src={DepoIcon} alt="create users icon" />
                        <p>Create</p>
                    </div>
                </Link>
                <Link to="./">
                    <div className="crud-icons-combine">
                        <img src={DepoIcon} alt="read users icon" />
                        <p>Read</p>
                    </div>
                </Link>
            </div>

            <Routes>
                <Route path='/DepoSektoriCreate' element={<DepoSektoriCreate />} />
                <Route path='/' element={<DepoSektoriRead />} />
            </Routes>
        </>
    )
}