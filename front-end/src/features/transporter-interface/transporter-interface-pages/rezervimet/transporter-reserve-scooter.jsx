import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GreetingsCourier from '../../../../img/client-dashboard-assets/courier-greetings.svg';
import "../../transporter-interface.scss";
import Motorcycle from '../../../../img/transporter-assets/motorcycle.png';
import { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

export default function TIReserveScooter() {

    const { transportuesi } = useContext(UserContext);

    const [dataRezervimit, setDataRezervimit] = useState([]);
    const dataKthimit = dataRezervimit;
    const userId = transportuesi.userId;
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
                toast.success("Scooter-i u rezervua me sukses!!", { theme: "colored" });
                setRefreshKey(refreshKey => refreshKey + 1)
            }).catch(function (error) {
                console.log(error.response.data)
            });
    }

    const [transportuesit, setTransportuesit] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/User/GetTransportuesit').then(response => {
            setTransportuesit(response.data);
        })
        axios.get('http://localhost:5094/api/Veturat/ShowVeturat').then(response => {
            setMakinat(response.data);
        })
    }, [refreshKey])

    const [makinat, setMakinat] = useState([]);

    return (
        <>
            <div className="greetings-section">
                <h1>Hello {transportuesi.emri}</h1>
                <img src={Motorcycle} alt="greetings-courier" />
                <button className="add-order-btn">Rezervo Scooterin</button>
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
                                        {((makina.tipi == 'Scooter') ? makina.brendi : delete makinat[makinat.indexOf(makina)])}
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