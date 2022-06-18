import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SektoriCreate() {

    const [emertimi, setEmertimi] = useState('');
    const [refreshKey, setRefreshKey] = useState('0');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const sektori = { emertimi };

        setIsPending(true);
        
        axios.post('http://localhost:5094/api/Sektoret/AddSektori', sektori)
            .then(() => {
                toast.success("Sektori u shtua me sukses!!", { theme: "colored" });
            })
            .then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            }).catch(function (error) {
                toast.error(error.response.data);
            });
    }

    return (
        <>
            <div>                    
                <form className="form-orders" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="emertimi" 
                            placeholder="Emertimi i sektorit" 
                            required
                            defaultValue={emertimi}
                            onChange={(e) => setEmertimi(e.target.value)}
                        />
                    </div>
                    { !isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Shto
                        </button>}
                        { isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Duke funksionuar
                        </button>}
                </form>
                </div>
        </>
        )
}