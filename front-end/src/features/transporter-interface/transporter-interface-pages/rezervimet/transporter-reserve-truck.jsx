import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../transporter-interface.scss";
import Truck from '../../../../img/transporter-assets/cargo-truck.png';
import { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

export default function TIReserveTruck() {

    const { transportuesi } = useContext(UserContext);

    const [dataRezervimit, setDataRezervimit] = useState([]);
    const dataKthimit = dataRezervimit;
    const [userId, setUserId] = useState(transportuesi.userId);
    const [veturaId, setVeturaId] = useState('0');
    const [refreshKey, setRefreshKey] = useState('0');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const rezVeturen = { dataRezervimit, dataKthimit, userId, veturaId };

        setIsPending(true);

        axios.post('http://localhost:5094/api/RezervoVeturen/AddRezervoVeturen', rezVeturen)
            .then(() => {
                toast.success("Kamioni u rezervua me sukses!!", { theme: "colored" });
                setRefreshKey(refreshKey => refreshKey + 1)
            }).catch(function (error) {
                toast.error(error.response.data);
            });
    }

    const [transportuesit, setTransportuesit] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/User/GetTransportuesit').then(response => {
            setTransportuesit(response.data);
        })
    }, [refreshKey])

    const [makinat, setMakinat] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/Veturat/ShowVeturat').then(response => {
            setMakinat(response.data);
        })
    }, [refreshKey])

    return (
        <>
            <div className="greetings-section">
                <h1>Hello {transportuesi.emri}</h1>
                <img src={Truck} alt="greetings-courier" />
                <button className="add-order-btn">Rezervo Kamion</button>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="date"
                            name="dataFillimit"
                            placeholder="Data e fillimit"
                            required
                            defaultValue='Data e fillimit'
                            onChange={(e) => setDataRezervimit(e.target.value)}
                        />
                        <input
                            type="date"
                            disabled
                            name="dataKthimit"
                            placeholder="Data e Kthimit"
                            defaultValue={dataRezervimit}
                        />
                        <div className="box">
                            <select
                                required
                                onChange={(e) => setVeturaId(e.target.value)}
                                defaultValue='Zgjedh Veturen'
                            >
                                <option value="Zgjedh Veturen" disabled={true}>Zgjedh Veturen</option>
                                {makinat.map((makina) => (
                                    <option required key={makina.veturaId} value={makina.veturaId}>
                                        {((makina.tipi == 'Kamion') ? makina.brendi : delete makinat[makinat.indexOf(makina)])}
                                    </option>
                                ))};
                            </select>
                        </div>

                        {!isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Shto
                        </button>}
                        {isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Duke funksionuar
                        </button>}
                    </div>
                </form>
            </div>
        </>
    )
}