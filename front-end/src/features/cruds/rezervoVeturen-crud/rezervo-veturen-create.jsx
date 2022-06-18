import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function RezervoVeturenCreate() {

    const [dataRezervimit, setDataRezervimit] = useState([]);
    const dataKthimit = dataRezervimit;
    const [userId, setUserId] = useState('0');
    const [veturaId, setVeturaId] = useState('0');
    const [refreshKey, setRefreshKey] = useState('0');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const rezVeturen = { dataRezervimit, dataKthimit, userId, veturaId };

        axios.post('http://localhost:5094/api/RezervoVeturen/AddRezervoVeturen', rezVeturen)
            .then(() => {
                toast.success("Vetura u rezervua me sukses!!", { theme: "colored" });
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
        <div className="content">
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
                                onChange={(e) => setUserId(e.target.value)}
                                defaultValue='Zgjedh Transportuesin'
                            >
                                <option value="Zgjedh Transportuesin" disabled={true}>Zgjedh Trasnportuesin</option>
                                {transportuesit.map((transportuesi) => (
                                    <option required key={transportuesi.userId} value={transportuesi.userId}>
                                        {transportuesi.emri}
                                    </option>
                                ))};
                            </select>
                        </div>
                        <div className="box">
                            <select
                                required
                                onChange={(e) => setVeturaId(e.target.value)}
                                defaultValue='Zgjedh Veturen'
                            >
                                <option value="Zgjedh Veturen" disabled={true}>Zgjedh Veturen</option>
                                {makinat.map((makina) => (
                                    <option required key={makina.veturaId} value={makina.veturaId}>
                                        {makina.brendi}
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
        </div>
    )
}