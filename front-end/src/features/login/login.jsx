import React from "react";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import "./style.scss"
import loginImg from "../../img/Landing-Page-Flying-Packages-Yellow.png";
import logoIcon from "../../img/logo-assets/Icon - Colored.svg"
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect } from "react";

export default function Login() {

    const { isLoggedIn, setIsLoggedIn, klientiID } = useContext(UserContext);
    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const klienti = { email, password };

        await axios.post('http://localhost:5094/api/Account/login', klienti)
            .then(response => {
                window.localStorage.setItem('jwt', response.data.token)
                navigate('/Home')
                window.location.reload();
            })
            .catch(function (error) {
                toast.error(error.response.data);
            })
    }
    useEffect(() => {
        console.log(klientiID)
    }, [klientiID]);

    return (
        <div className="base-container">
            <div className="login-content">
                <div className="login-image">
                    <img src={loginImg} alt="a cool graphic for our login page"/>
                </div>
                <div className="login-form">
                    <img src={logoIcon} alt="Our logo" />
                    <h1>Kyqu ne llogari</h1>
                    <form onSubmit={handleSubmit} className="login-form-group" >
                        <input 
                            required
                            type="email" 
                            name="email" 
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Username"/>
                        <input
                            required
                            type="password" 
                            name="password" 
                            defaultValue={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"/>
                        <button type="submit" value="Submit" className="login-login-btn">
                            Kyqu
                        </button>
                    </form>
                    
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