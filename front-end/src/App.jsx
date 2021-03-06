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
import ClientInterface from './features/client-interface/client-interface';
import TransporterInterface from './features/transporter-interface/transporter-interface';
import FAQ from './features/faq/faq';
import AboutUs from './features/about-us/AboutUs';
import Ballina from './features/homepage/home-page';

import { UserContextProvider } from './Context/UserContext';
import { useEffect } from 'react';

function App() {

    // useEffect(() = > {

    // })

    return (
        <div className="App">
            <UserContextProvider>    
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Dashboard/*' element={<Dashboard />} />
                    <Route path='/Home/*' element={<ClientInterface />} />
                    <Route path='/FAQ/*' element={<FAQ />} />
                    <Route path='/Transporter/*' element={<TransporterInterface />} />
                    <Route path='/AboutUs/*' element={<AboutUs />} />
                    <Route path='/Ballina/*' element={<Ballina/>}/>
                </Routes>
                <ToastContainer position='bottom-right' />
                <Footer />
            </UserContextProvider>
        </div>
    );
}
export default App;