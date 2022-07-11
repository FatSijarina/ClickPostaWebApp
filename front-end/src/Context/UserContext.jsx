import axios from "axios";
import React, { createContext, useState, useEffect} from "react";
import jwt_decode from "jwt-decode";

const UserContext = createContext();
const token = localStorage.getItem("jwt");


const UserContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const data = token ? jwt_decode(localStorage.getItem("jwt")) : "";


    const [transportuesiId, setTransportuesiId] = useState(4);
    const [klientiID, setKlientiID] = useState();
    const [porosiaId, setPorosiaId] = useState(6);
    const [porosiaFundit, setPorosiaFundit] = useState([]);
    const [klienti, setKlienti] = useState("");
    const [transportuesi, setTransportuesi] = useState("");
    const [klientet, setKlientet] = useState([]);
    const [qytetet, setQytetet] = useState([]);
    const [porosite, setPorosite] = useState([]);
    const [orders, setOrders] = useState([]);
    const [porosia, setPorosia] = useState([]);
    const [transportuesit, setTransportuesit] = useState([]);
    const [veturat, setVeturat] = useState([]);
    const [rezervimi, setRezervimi] = useState([]);

    const fetchUser = async () => {
        await axios.get('http://localhost:5094/api/User/GetKlientin?id=' + data.nameid)
        .then(response => (
            setKlienti(response.data)
        ))
        await axios.get('http://localhost:5094/api/User/GetKlientin?id=' + data.nameid)
            .then(response => (
                setTransportuesi(response.data)
            ))
        axios.get('http://localhost:5094/Porosia/GetLatestUserPorosia?id=' + data.nameid)
        .then(response => {
            setPorosiaFundit(response.data);
        })
        await axios.get('http://localhost:5094/api/User/GetKlientet')
            .then(response => (
                setKlientet(response.data)
            ))
        await axios.get('http://localhost:5094/api/Qyteti/Get Qytetet')
            .then(response => (
                setQytetet(response.data)
            ))
        await axios.get('http://localhost:5094/Porosia/GetUserPorosite?id=' + data.nameid)
            .then(response => (
                setPorosite(response.data)
            ))
        await axios.get('http://localhost:5094/Porosia/GetPorosiaById?id=' + data.nameid)
            .then(response => (
                setPorosia(response.data)
            ))
        await axios.get('http://localhost:5094/Porosia/GetDerguesPorosite?id=' + data.nameid)
            .then(response => (
                setOrders(response.data)
            ))
        await axios.get('http://localhost:5094/api/User/GetTransportuesit')
            .then(response => {
                setTransportuesit(response.data);
            })
        await axios.get('http://localhost:5094/api/Veturat/ShowVeturat')
            .then(response => {
                setVeturat(response.data);
            })
        await axios.get('http://localhost:5094/api/RezervoVeturen/ShowRezervimet')
            .then(response => {
                setRezervimi(response.data);
            })
    };

    useEffect(() => {

        //setToken(localStorage.getItem("jwt"));
        if(token){
            //setToken(localStorage.getItem("jwt"));
            
            console.log(data);
            axios.interceptors.request.use(config => {
                if(token) config.headers.Authorization = `Bearer ${token}`
                return config;
            })
            console.log(data);
            fetchUser();
        }
    }, [token]);

    return (
        <UserContext.Provider value={{
            klientiID,
            klienti,
            transportuesi,
            klientet,
            qytetet,
            porosite,
            porosia,
            orders,
            transportuesit,
            veturat,
            rezervimi,
            setIsLoggedIn,
            setKlientiID,
            //setToken,
            data,
            porosiaFundit
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };