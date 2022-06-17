import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../crud-styles.scss';
import PushimiUpdate from './PushimiUpdate';
import { toast } from "react-toastify";

export default function PushimiRead(){

    const [pushimet,setPushimet] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [pushimiId, setPushimiId] = useState();
    const [useriId, setUseriId] = useState();
    const [refreshKey, setRefreshKey] = useState(0);
    
    function handleClick(pushimiId) {
        const confirmBox = window.confirm(
            "Are you sure you want to delete pushimi with id " + pushimiId + '?'
        )
        if (confirmBox === true) {
            axios.delete('http://localhost:5094/api/Pushimi/Fshij Pushimin?id=' + pushimiId)
                .then(() => {
                    toast.info("Pushimi deleted successfully!!", { theme: "colored" });
                })
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            toast.error("Process of deleting a pushim canceled !!")
        }
  }

  
    useEffect(() => {
        axios.get('http://localhost:5094/api/Pushimi/Get Pushimet')
        .then(response => {
            setPushimet(response.data);
        })
    }, [refreshKey])

    return (
        <>
        <h1>Read Pushimet</h1>
        <div className="container">
            <div className="styled-table">
                <table>
                    <thead>
                        <tr>
                            <th>Pushimi Id</th>
                            <th>Punetori Id</th>
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
                                    <button onClick={() => {setButtonPopup(true); setPushimiId(pushimi.pushimiId); setUseriId(pushimi.userId) }}>Update</button>
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

        <PushimiUpdate trigger= {buttonPopup} setTrigger={setButtonPopup} pushimiId={pushimiId} useriId = {useriId} setRefreshKey = {setRefreshKey}/>

        </>
    )
    
}