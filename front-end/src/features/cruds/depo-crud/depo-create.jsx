import React, { useState } from "react";
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
                toast.success("Depo added successfully!!", { theme: "colored" });
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
                        <input 
                            type="number" 
                            name="zipCode" 
                            placeholder="Zip Code"
                            required
                            defaultValue={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />

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