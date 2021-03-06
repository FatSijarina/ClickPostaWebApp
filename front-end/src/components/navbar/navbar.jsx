import React from "react";
import "./style.scss"
import logoIconWhite from "../../img/logo-assets/Icon - White.svg"
import logoName from "../../img/logo-assets/Typemark.svg"
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";


export default function Navbar() {

        const { setToken } = useContext(UserContext);
        const navigate = useNavigate();

        const handleSubmit = (e) => {
            localStorage.removeItem('jwt');
            navigate('/Ballina')
            window.location.reload();
            
        }

        return (
            
                <div className="navbar">
                    
                    <div className="left-red">
                        <Link to="/Dashboard" id="navbar-logo">
                            <img src={logoIconWhite} alt="Our Logo Icon" />
                        </Link>
                    </div>
                    <img src={logoName} alt="logoName" className="logo-name"/>
                    
                    <div className="right-red">    
                        <div className="navbar-links">
                        <Link to="./Ballina">
                                <button type="button">Ballina</button>    
                            </Link> 
                            <Link to="./FAQ">
                                <button type="button">FAQ</button>    
                            </Link> 
                            <Link to="./AboutUs">
                                <button type="button">Rreth Nesh</button>    
                            </Link> 
                            <Link to="./Register">
                                <button type="button">Regjistrohu</button>    
                            </Link> 
                            <Link to="./Login">
                                <button type="button">Kyqu</button>    
                            </Link> 

                                <button type="button" onClick={handleSubmit}>Dil</button>    

                        </div>
                    </div> 
                                   
                </div>

        )
    }