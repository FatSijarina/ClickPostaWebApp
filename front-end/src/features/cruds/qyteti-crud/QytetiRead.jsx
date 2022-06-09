import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../crud-styles.scss';
import QytetiUpdate from './QytetiUpdate';
import { toast } from "react-toastify";

export default function QytetiRead(){

    const [qytetet,setQytetet] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [qytetiZipCode, setQytetiZipCode] = useState('');
    const [refreshKey, setRefreshKey] = useState(0);
    
    function handleClick(qytetiZipCode) {
        const confirmBox = window.confirm(
            "Are you sure you want to delete city with Zip Code " + qytetiZipCode + '?'
        )
        if (confirmBox === true) {
            axios.delete('http://localhost:5094/api/Qyteti/Fshij Qytetin?id=' + qytetiZipCode)
                .then(() => {
                    toast.info("This city deleted successfully!!", { theme: "colored" });
                })
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            toast.error("Process of deleting this city canceled !!")
        }
  }

  
    useEffect(() => {
        axios.get('http://localhost:5094/api/Qyteti/Get Qytetet')
        .then(response => {
            setQytetet(response.data);
        })
    }, [refreshKey])

    return (
        <>
        <h1>Read Cities</h1>
        <div className="container">
            <div className="styled-table">
                <table>
                    <thead>
                        <tr>
                            <th>Zip Code</th>
                            <th>Emri i qytetit</th>  
                            <th>Update</th>  
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {qytetet.map(qyteti => (
                            <tr key={qyteti.qytetiZipCode}>
                                {console.log(qyteti.qytetiZipCode)}
                                <th>{qyteti.qytetiZipCode}</th>
                                <th>{qyteti.emriQytetit}</th>      
                                <th> 
                                    <button onClick={() => {setButtonPopup(true); setQytetiZipCode(qyteti.qytetiZipCode)}}>Update</button>
                                </th>
                                <th>
                                    <button type="submit" onClick ={() => handleClick(qyteti.qytetiZipCode)}>Delete</button>
                                </th>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <QytetiUpdate trigger= {buttonPopup} setTrigger={setButtonPopup} qytetiZipCode={qytetiZipCode} setRefreshKey = {setRefreshKey}/>

        </>
    )
    
}