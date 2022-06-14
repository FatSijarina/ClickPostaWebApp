import axios from "axios";
import React, { createContext, useState, useEffect} from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [klienti, setKlienti] = useState("");
    const [klientet, setKlientet] = useState([]);

    const fetchUser = async () => {
        await axios.get('http://localhost:5094/api/User/GetKlientin?id=2')
        .then(response => (
            setKlienti(response.data)
        ))
        await axios.get('http://localhost:5094/api/User/GetKlientet')
        .then(response => (
            setKlientet(response.data)
        ))
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{klienti, klientet}}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };