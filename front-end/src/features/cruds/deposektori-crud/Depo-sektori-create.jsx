import React, { useState } from "react";
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

    return (
        <div className="content">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="number"
                            name="depoId"
                            placeholder="DepoId"
                            required
                            defaultValue={depoId}
                            onChange={(e) => setDepoId(e.target.value)}
                        />
                        <input
                            type="number"
                            name="sektoriId"
                            placeholder="SektoriId"
                            required
                            defaultValue={sektoriId}
                            onChange={(e) => setSektoriId(e.target.value)}
                        />

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