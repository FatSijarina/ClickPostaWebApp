import React from "react";
import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

export default function PushimiCreate(){

    const [userId, setUserId] = useState('');
    const [dataFilimit, setDataFillimit] = useState('');
    const [dataMbarimit, setDataMbarimit] = useState('');
    const [refreshKey, setRefreshKey] = useState('0');

    const [isPending,setIsPending]= useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const pushimi = {userId,dataFilimit,dataMbarimit};

        setIsPending(true);

        axios.post( 'http://localhost:5094/api/Pushimi/Rezervo Pushimin', pushimi)
        .then(() => {
            toast.success("Pushimi u rezervua me sukses!", {theme: "colored"});        
        }).then(() => {
            setRefreshKey(refreshKey => refreshKey + 1)
        })
    }

    return (
        <>
            <div>
                <form className="form-orders" onSubmit={handleSubmit}>
                    <div className="form-group">

                        <input
                        type="number"
                        name="userId"
                        placeholder="ID e Punetorit"
                        required
                        defaultValue={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        />
                          <input
                        type="date"
                        name="dataFillimit"
                        placeholder="Data e fillimit"
                        required
                        defaultValue={dataFilimit}
                        onChange={(e) => setDataFillimit(e.target.value)}
                        />
                          <input
                        type="date"
                        name="dataMbarimit"
                        placeholder="Data e mbarimit"
                        required
                        defaultValue={dataMbarimit}
                        onChange={(e) => setDataMbarimit(e.target.value)}
                        />
                    </div>
                    { !isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Rezervo
                        </button>}
                        { isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Duke funksionuar
                        </button>}
                </form>
            </div>
        </>
    )

}