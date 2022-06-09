import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Register from "./features/register/register"
import Login from "./features/login/login"
import HomePage from './features/homepage/home-page';
import Dashboard from './features/dashboard/dashboard';

function App() {
    return (
        <div className="App">

            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Dashboard/*' element={<Dashboard />} />
            </Routes>
            <ToastContainer position='bottom-right' /> 
        </div>
    );
}
export default App;