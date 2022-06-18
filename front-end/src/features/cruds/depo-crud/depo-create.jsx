import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function DepoCreate() {

    const [name, setName] = useState('');
    const [addressNumber, setAddressNumber] = useState('');
    const [streetName, setStreetName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [refreshKey, setRefreshKey] = useState('0');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const depo = { name, addressNumber, streetName, zipCode };

        setIsPending(true);
        
        axios.post('http://localhost:5094/api/Depot/AddDepo', depo)
            .then(() => {
                toast.success("Depo u shtua me sukses!!", { theme: "colored" });
            }).then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            }).catch(function (error) {
                toast.error(error.response.data);
            });
    }

    const [qytetet, setQytetet] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/Qyteti/Get Qytetet').then(response => {
            setQytetet(response.data);
        })
    }, [refreshKey])

    return (
        <div className="content">
            <div className="form"> 
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Emri i depos" 
                            required 
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            type="number" 
                            name="number" 
                            placeholder="Numri i adreses"
                            required
                            defaultValue={addressNumber}
                            onChange={(e) => setAddressNumber(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Emri i rruges"
                            required
                            defaultValue={streetName}
                            onChange={(e) => setStreetName(e.target.value)}
                        />
                        <div className="box">
                            <select
                                required
                                onChange={(e) => setZipCode(e.target.value)}
                                defaultValue='Zgjedh Qytetin'
                            >
                                <option value="Zgjedh Qytetin" disabled={true}>Zgjedh Qytetin</option>
                                {qytetet.map((qyteti) => (
                                    <option required key={qyteti.qytetiZipCode} value={qyteti.qytetiZipCode}>
                                        {qyteti.emriQytetit}
                                    </option>
                                ))};
                            </select>
                        </div>

                        { !isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Shto
                        </button>}
                        { isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Duke funksionuar
                        </button>}
                    </div>
                </form>    
            </div>
        </div>
    )
}