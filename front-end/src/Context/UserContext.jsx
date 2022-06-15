import axios from "axios";
import React, { createContext, useState, useEffect} from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [klientiID, setKlientiID] = useState(2);
    const [klienti, setKlienti] = useState("");
    const [klientet, setKlientet] = useState([]);
    const [qytetet, setQytetet] = useState([]);
    const [porosite, setPorosite] = useState([]);

    const fetchUser = async () => {
        await axios.get('http://localhost:5094/api/User/GetKlientin?id=' + klientiID)
        .then(response => (
            setKlienti(response.data)
        ))
        await axios.get('http://localhost:5094/api/User/GetKlientet')
        .then(response => (
            setKlientet(response.data)
        ))
        await axios.get('http://localhost:5094/api/Qyteti/Get Qytetet')
                .then(response => (
                    setQytetet(response.data)
                ))
        await axios.get('http://localhost:5094/Porosia/GetUserPorosite?id=' + klientiID)
                .then(response => (
                    setPorosite(response.data)
                ))
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{klientiID, klienti, klientet, qytetet, porosite}}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };