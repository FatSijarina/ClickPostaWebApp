import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function VeturaCreate() {

    const [brendi, setBrendi] = useState('');
    const [modeli, setModeli] = useState('');
    const [targa, setTarga] = useState('');
    const [tipi, setTipi] = useState('');
    const [vellimi, setVellimi] = useState('');
    const [depoId, setDepoId] = useState('');
    const [refreshKey, setRefreshKey] = useState('0');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const vetura = { brendi, modeli, targa, tipi, vellimi, depoId};

        setIsPending(true);

        axios.post('http://localhost:5094/api/Veturat/AddVetura', vetura)
            .then(() => {
                toast.success("Vetura added successfully!!", { theme: "colored" });
            })
            .then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }

    return (
        <>
            <div>
                <form className="form-orders" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="brendi"
                            placeholder="Brendi"
                            required
                            defaultValue={brendi}
                            onChange={(e) => setBrendi(e.target.value)}
                        />
                        <input
                            type="text"
                            name="modeli"
                            placeholder="Modeli"
                            required
                            defaultValue={modeli}
                            onChange={(e) => setModeli(e.target.value)}
                        />
                        <input
                            type="text"
                            name="targa"
                            placeholder="Targa"
                            required
                            defaultValue={targa}
                            onChange={(e) => setTarga(e.target.value)}
                        />
                        <input
                            type="text"
                            name="tipi"
                            placeholder="Tipi"
                            required
                            defaultValue={tipi}
                            onChange={(e) => setTipi(e.target.value)}
                        />
                        <input
                            type="text"
                            name="vellimi"
                            placeholder="Vellimi"
                            required
                            defaultValue={vellimi}
                            onChange={(e) => setVellimi(e.target.value)}
                        />
                        <input
                            type="text"
                            name="depoId"
                            placeholder="ID e depos"
                            required
                            defaultValue={depoId}
                            onChange={(e) => setDepoId(e.target.value)}
                        />
                    </div>
                    {!isPending && <button type="submit" className="register-register-btn" value="Submit">
                        Shto
                    </button>}
                    {isPending && <button type="submit" className="register-register-btn" value="Submit">
                        Duke funksionuar
                    </button>}
                </form>
            </div>
        </>
    )
}