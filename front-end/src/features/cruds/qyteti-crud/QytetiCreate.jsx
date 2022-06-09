import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function QytetiCreate() {

    const [emriQytetit, setEmriQytetit] = useState('');
    const [qytetiZipCode, setQytetiZipCode] = useState('0');
    const [refreshKey, setRefreshKey] = useState('0');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const depo = { qytetiZipCode, emriQytetit };

        setIsPending(true);
        
        axios.post('http://localhost:5094/api/Qyteti/Add Qyteti' , depo)
            .then(() => {
                toast.success("City added successfully!!", { theme: "colored" });
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
                            name="Zip Code" 
                            placeholder="Zip Code" 
                            required 
                            defaultValue={qytetiZipCode}
                            onChange={(e) => setQytetiZipCode(e.target.value)}
                        />
                        <input 
                            type="text" 
                            name="Emri i qytetit" 
                            placeholder="Emri i Qytetit"
                            required
                            defaultValue={emriQytetit}
                            onChange={(e) => setEmriQytetit(e.target.value)}
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