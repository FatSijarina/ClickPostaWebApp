import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

export default function SektoriUpdatePopup(props) {

    const id = props.porosiaId;
    const [emertimi, setEmertimi] = useState('');

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const sektor = { id, emertimi };

    setIsPending(true);

    axios.put('http://localhost:5094/api/Sektoret/UpdateSektori', sektor)
    .then(() => {
        toast.success("Sektori updated successfully!!", { theme: "colored" });
        setIsPending(false);
        props.setRefreshKey(refreshKey => refreshKey + 1);
        props.setTrigger(false);
    })       
    }

    return (props.trigger) ? (

    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false) }>Close</button>
                {props.children}
                <h1>Update Sektori</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="emertimi" 
                        placeholder="Emertimi" 
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
        </div>
    ) : "";
}
