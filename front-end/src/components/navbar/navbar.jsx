import React from "react";
import "./style.scss"
import logoIconWhite from "../../img/logo-assets/Icon - White.svg"
import logoName from "../../img/logo-assets/Typemark.svg"
import { Link } from 'react-router-dom';


export default function Navbar() {
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
                            <Link to="/">
                                <button type="button">FAQ</button>    
                            </Link> 
                            <Link to="/">
                                <button type="button">Rreth Nesh</button>    
                            </Link> 
                            <Link to="./Register">
                                <button type="button">Regjistrohu</button>    
                            </Link> 
                            <Link to="./Login">
                                <button type="button">Kyqu</button>    
                            </Link> 
                        </div>
                    </div> 
                                   
                </div>

        )
    }