import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pushimi-crud.scss';
import PushimiUpdate from './PushimiUpdate';

export default function PushimiRead(){

    const [pushimet,setPushimet] = useState([]);
    const [popUp, setPopup] = useState(false);
    const [pushimiId, setPushimiId] = useState();
    const [useriId, setUseriId] = useState();
    const [refreshKey, setRefreshKey] = useState(0);
    
    function handleClick(pushimiId){
        axios.delete(  'http://localhost:3000/api/Pushimi/Fshij Pushimin?id=' + pushimiId)
        .then(setRefreshKey(refreshKey => refreshKey+1))
    }

    useEffect(() => {
        axios.get('http://localhost:5094/api/Pushimi/Get Pushimet')
        .then(response => {
            setPushimet(response.data);
        })
    }, [refreshKey])

    return (
        <>
        <h1>Read Holidays</h1>
        <div className="container">
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Pushimi ID</th>
                            <th>User Id</th>
                            <th>Data e fillimit</th>
                            <th>Data e mbarimit</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pushimet.map(pushimi => (
                            <tr key={pushimi.pushimiId}>
                                {console.log(pushimi.pushimiId)}
                                <th>{pushimi.pushimiId}</th>
                                <th>{pushimi.userId}</th>
                                <th>{pushimi.dataFilimit}</th>
                                <th>{pushimi.dataMbarimit}</th>
                                <th> 
                                    <button onClick={() => {setPopup(true); setPushimiId(pushimi.pushimiId); setUseriId(pushimi.userId) }}>Update</button>
                                </th>
                                <th>
                                    <button type="submit" onClick ={() => handleClick(pushimi.pushimiId)}>Delete</button>
                                </th>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <PushimiUpdate trigger= {popUp} setTrigger={setPopup} pushimiId={pushimiId} useriId = {useriId} setRefreshKey = {setRefreshKey}></PushimiUpdate>

        </>
    )
    
}