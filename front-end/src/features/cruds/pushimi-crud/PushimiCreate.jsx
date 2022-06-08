import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';



export default function PushimiCreate(){

    const [userId, setUserId] = useState('');
    const [dataFillimit, setDataFillimit] = useState('');
    const [dataMbarimit, setDataMbarimit] = useState('');

    const [isPending,setIsPending]= useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const pushimi = {userId,dataFillimit,dataMbarimit};

        setIsPending(true);

        axios.post(  'http://localhost:5094/api/Pushimi/Rezervo Pushimin', pushimi)
        .then(() => {
            console.log((pushimi));
            setIsPending(false);
        })
    }

    return (
        <>
            <div>
                <form className="form-pushimi" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                        type="text"
                        name="userId"
                        placeholder="ID e userit"
                        required
                        defaultValue={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        />
                          <input
                        type="text"
                        name="dataFillimit"
                        placeholder="Data e fillimit"
                        required
                        defaultValue={dataFillimit}
                        onChange={(e) => setDataFillimit(e.target.value)}
                        />
                          <input
                        type="text"
                        name="dataMbarimit"
                        placeholder="Data e mbarimit"
                        required
                        defaultValue={dataMbarimit}
                        onChange={(e) => setDataMbarimit(e.target.value)}
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