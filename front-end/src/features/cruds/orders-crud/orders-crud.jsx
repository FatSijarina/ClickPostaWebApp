import React from 'react';
import '../crud-styles.scss';
import { Link, Route, Routes } from 'react-router-dom';
import OrdersCreate from './orders-create';
import OrdersRead from './orders-read';
import CreateIcon from '../../../img/orders-assets/orders-create.svg';
import ReadIcon from '../../../img/orders-assets/orders-read.svg';



export default function OrdersCrud() {

    return(
        <>
            <div className="crud-icons">
                
                <Link to='./OrdersCreate'>
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
                <Route path='/OrdersCreate' element={<OrdersCreate />} />
                <Route path='/' element={<OrdersRead />} />
            </Routes>
        </>

    )

}