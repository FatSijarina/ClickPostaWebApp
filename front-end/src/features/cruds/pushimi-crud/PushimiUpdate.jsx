import axios from 'axios';
import React, { useState } from 'react';

export default function PushimiUpdate(props){
    
    const pushimiId= props.pushimiId;
    const useriId = props.useriId;
    const [dataFillimit, setDataFillimit]= useState('');
    const [dataMbarimit, setDataMbarimit] = useState('');
    const [isPending, setIsPending] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const pushimi = {pushimiId, useriId, dataFillimit, dataMbarimit};

        setIsPending(true);
        console.log(pushimi);

        axios.put( 'http://localhost:5094/api/Pushimi/Update Pushimi', pushimi)
        .then(() =>{
            setIsPending(false);
            props.setRefreshKey(refreshKey => refreshKey + 1);
            props.setTrigger(false);
        })
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}

                <form className="form-pushimi" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="datetime-local"
                            name = "name"
                            placeholder = "Data e fillimit"
                            defaultValue = {dataFillimit}
                            onChange = {(e) => setDataFillimit(e.target.value)}
                        />
                          <input 
                            type="datetime-local"
                            name = "name"
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