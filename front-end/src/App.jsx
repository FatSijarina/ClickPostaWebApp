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
import NotFound from './features/NotFound/NotFound'

import { UserContext, UserContextProvider } from './Context/UserContext';
import { useEffect } from 'react';
import { useContext } from 'react';

function App() {

    // useEffect(() = > {

    // })

    const{data, isLoggedIn} = useContext(UserContext)

    const RoleRoute = () => {
        switch(data.role){
            case '1':
                return <ClientInterface />
            case '2':
                return <Dashboard />
            case '3':
                return <TransporterInterface />
            default:
                return null;
        }
    }

    return (
        <div className="App">   
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/FAQ/*' element={<FAQ />} />
                    <Route path='/Ballina/*' element={<Ballina/>}/>
                    <Route path='/AboutUs/*' element={<AboutUs />} />
                    {   isLoggedIn &&
                        (<Route path='/Home/*' element={<RoleRoute />} />)
                    }

                    <Route path='*' element={<NotFound />} />

                </Routes>
                <ToastContainer position='bottom-right' />
                <Footer />
            
        </div>
    );
}
export default App;