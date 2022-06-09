import axios from 'axios';
import React, { useState } from 'react';
import { toast } from "react-toastify";


export default function QytetiUpdate(props){
    
    const qytetiZipCode= props.qytetiZipCode;
    const [emriQytetit, setEmriQytetit]= useState('0');

    const [isPending, setIsPending] = useState('');
    const [refreshKey, setRefreshKey] = useState('0');

    const handleSubmit = (e) => {
        e.preventDefault();
        const qyteti = {qytetiZipCode, emriQytetit};

        axios.put('http://localhost:5094/api/Qyteti/Update Qyteti', qyteti)
        .then(() =>{
            toast.success("City updated successfully!!", {theme: "colored"});
            props.setTrigger(false);
            props.setRefreshKey(refreshKey => refreshKey + 1);
        })
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner" style={{height: 480, width:850}}>
                <button className="close-btn"  onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}

                <form className="form-orders" onSubmit={handleSubmit} >
                    <div className="form-group" >
                       
                        <input 
                            type="text"
                            name = "name"
                            required
                            id = "emriQytetit"
                            placeholder = "Emri i qytetit"
                            defaultValue = {emriQytetit}
                            onChange = {(e) => setEmriQytetit(e.target.value)}
                        />
                 
                    </div>
                    { !isPending && <button type="submit" className="register-register-btn" value="Submit">Perditeso </button>}           
                    { isPending && <button type="submit" className="register-register-btn" value="Submit"> Duke funksionuar </button>}
                               
                            
                </form>
            </div>
        </div>

    ): "";
}