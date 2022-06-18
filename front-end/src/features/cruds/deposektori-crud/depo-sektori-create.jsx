import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function DepoSektoriCreate() {

    const [depoId, setDepoId] = useState('0');
    const [sektoriId, setSektoriId] = useState('0');
    const [refreshKey, setRefreshKey] = useState('0');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const depoSektori = { depoId, sektoriId };

        setIsPending(true);

        axios.post('http://localhost:5094/api/DepoSektori/AddDepoSektori', depoSektori)
            .then(() => {
                toast.success("DepoSektori added successfully!!", { theme: "colored" });
            }).then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }

    const [depot, setDepot] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/Depot/ShowDepot').then(response => {
            setDepot(response.data);
        })
    }, [refreshKey])

    const [sektoret, setSektoret] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/Sektoret/ShowSektori').then(response => {
            setSektoret(response.data);
        })
    }, [refreshKey])

    return (
        <div className="content">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="box">
                            <select
                                required
                                onChange={(e) => setDepoId(e.target.value)}
                                defaultValue='Zgjedh Depon'
                            >
                                <option value="Zgjedh Depon" disabled={true}>Zgjedh Depon</option>
                                {depot.map((depo) => (
                                    <option required key={depo.depoId} value={depo.depoId}>
                                        {depo.name}
                                    </option>
                                ))};
                            </select>
                        </div>
                        <div className="box">
                            <select
                                required
                                onChange={(e) => setSektoriId(e.target.value)}
                                defaultValue='Zgjedh Sektorin'
                            >
                                <option value="Zgjedh Sektorin" disabled={true}>Zgjedh Sektorin</option>
                                {sektoret.map((sektori) => (
                                    <option required key={sektori.sektoriId} value={sektori.sektoriId}>
                                        {sektori.emertimi}
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