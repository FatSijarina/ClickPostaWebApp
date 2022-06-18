import axios from 'axios';
import React, { useState } from 'react';
import { toast } from "react-toastify";


export default function PushimiUpdate(props){
    
    const pushimiId= props.pushimiId;
    const useriId = props.useriId;
    const [dataFilimit, setDataFillimit]= useState('');
    const [dataMbarimit, setDataMbarimit] = useState('');

    const [isPending, setIsPending] = useState('');
    const [refreshKey, setRefreshKey] = useState('0');

    const handleSubmit = (e) => {
        e.preventDefault();
        const pushimi = {pushimiId, useriId, dataFilimit, dataMbarimit};

        axios.put( 'http://localhost:5094/api/Pushimi/Update Pushimi', pushimi)
        .then(() =>{
            toast.success("Pushimi updated successfully!!", {theme: "colored"});
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
                            type="date"
                            name = "name"
                            required
                            id = "dataFillimit"
                            placeholder = "Data e fillimit"
                            defaultValue = {dataFilimit}
                            onChange = {(e) => setDataFillimit(e.target.value)}
                        />
                        <br/>
                        
                          <input 
                            type="date"
                            name = "name"
                            required
                            id = "dataMbarimit"
                            placeholder = "Data e mbarimit"
                            defaultValue = {dataMbarimit}
                            onChange = {(e) => setDataMbarimit(e.target.value)}
                        />
                    </div>
                    { !isPending && <button type="submit" className="register-register-btn" value="Submit">Perditeso </button>}           
                    { isPending && <button type="submit" className="register-register-btn" value="Submit"> Duke funksionuar </button>}
                               
                            
                </form>
            </div>
        </div>

    ): "";
}