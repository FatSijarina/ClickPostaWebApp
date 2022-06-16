import React from 'react';
import '../crud-styles.scss';
import DepoIcon from '../../../img/dashboard-assets/depo-icon.svg';
import RezervoVeturenRead from '../rezervoVeturen-crud/rezervo-veturen-read';
import { Link, Route, Routes } from 'react-router-dom';
import RezervoVeturenCreate from './rezervo-veturen-create';

export default function RezervoVeturenCrud() {
    return (
        <>
            <div className="crud-icons">
                <Link to="./RezervoVeturenCreate">
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
                <Route path='/RezervoVeturenCreate' element={<RezervoVeturenCreate />} />
                <Route path='/' element={<RezervoVeturenRead />} />
            </Routes>
        </>
    )
}