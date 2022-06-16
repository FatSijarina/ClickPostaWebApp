import axios from "axios";
import React, { createContext, useState, useEffect} from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [transportuesiId, setTransportuesiId] = useState(3);
    const [klientiID, setKlientiID] = useState(2);
    const [klienti, setKlienti] = useState("");
    const [transportuesi, setTransportuesi] = useState("");
    const [klientet, setKlientet] = useState([]);
    const [qytetet, setQytetet] = useState([]);
    const [porosite, setPorosite] = useState([]);
    const [transportuesit, setTransportuesit] = useState([]);
    const [veturat, setVeturat] = useState([]);
    const [rezervimi, setRezervimi] = useState([]);

    const fetchUser = async () => {
        await axios.get('http://localhost:5094/api/User/GetKlientin?id=' + klientiID)
        .then(response => (
            setKlienti(response.data)
        ))
        await axios.get('http://localhost:5094/api/User/GetKlientin?id=' + transportuesiId)
            .then(response => (
                setTransportuesi(response.data)
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
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{
            klientiID,
            klienti,
            transportuesi,
            klientet,
            qytetet,
            porosite,
            transportuesit,
            veturat,
            rezervimi
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };