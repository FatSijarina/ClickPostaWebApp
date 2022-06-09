import React from 'react';
import '../crud-styles.scss';
import DepoIcon from '../../../img/dashboard-assets/depo-icon.svg';
import DepoRead from '../depo-crud/depo-read';
import { Link, Route, Routes } from 'react-router-dom';
import DepoCreate from './depo-create';

export default function DepoCrud() {
    return (
        <>
            <div className="crud-icons">
                <Link to="./DepoCreate">
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
                <Route path='/DepoCreate' element={<DepoCreate />} />
                <Route path='/' element={<DepoRead />} />
            </Routes>
        </>
    )
}