import React from 'react';
import '../crud-styles.scss';
import VehicleIcon from '../../../img/dashboard-assets/vehicle-icon.svg';
import VeturaRead from '../vetura-crud/vetura-read';
import { Link, Route, Routes } from 'react-router-dom';
import VeturaCreate from './vetura-create';

export default function VeturaCrud() {
    return (
        <>
            <div className="crud-icons">
                <Link to="./VeturaCreate">
                    <div className="crud-icons-combine">
                        <img src={VehicleIcon} alt="create users icon" />
                        <p>Create</p>
                    </div>
                </Link>
                <Link to="./">
                    <div className="crud-icons-combine">
                        <img src={VehicleIcon} alt="read users icon" />
                        <p>Read</p>
                    </div>
                </Link>
            </div>

            <Routes>
                <Route path='/VeturaCreate' element={<VeturaCreate />} />
                <Route path='/' element={<VeturaRead />} />
            </Routes>
        </>
    )
}