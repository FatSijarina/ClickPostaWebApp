import React from 'react';
import '../crud-styles.scss';
import { Link, Route, Routes } from 'react-router-dom';
import SektoriCreate from './sektori-create';
import SektoriRead from './sektori-read';
import CreateIcon from '../../../img/orders-assets/orders-create.svg';
import ReadIcon from '../../../img/orders-assets/orders-read.svg';

export default function SektoriCrud() {
    return(
        <>
            <div className="crud-icons">
                <Link to='./SektoriCreate'>
                    <div className="crud-icons-combine">
                        <img src={CreateIcon} alt="create an order icon" />
                        <p>Create</p>
                    </div>
                </Link>
                <Link to='./'>
                    <div className="crud-icons-combine">
                        <img src={ReadIcon} alt="create an order icon" />
                        <p>Read</p>
                    </div>
                </Link>
            </div>

            <Routes>
                <Route path='/SektoriCreate' element={<SektoriCreate />} />
                <Route path='/' element={<SektoriRead />} />
            </Routes>
        </>
    )
}