import React from "react";
import "./style.scss"
import loginImg from "../../img/Landing-Page-Flying-Packages-Yellow.png";
import logoIcon from "../../img/logo-assets/Icon - Colored.svg"
import { Link } from 'react-router-dom';

export default function Login() {
        return (
            <div className="base-container">
                <div className="login-content">
                    <div className="login-image">
                        <img src={loginImg} alt="a cool graphic for our login page"/>
                    </div>
                    <div className="login-form">
                        <img src={logoIcon} alt="Our logo" />
                        <h1>Kyqu ne llogari</h1>
                        <div className="login-form-group">
                            <input type="text" name="username" placeholder="Username"/>
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                        <button type="button" className="login-login-btn">
                            Kyqu
                        </button>
                        <p>Nuk te kujtohet dicka?</p>
                        <Link to="../../Register"> 
                            <button type="button" className="login-register-btn">
                                Regjistrohu
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        )
    }