import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../crud-styles.scss'
import OrdersUpdatePopup from './orders-update-popup';

export default function OrdersRead() {

    const [porosite, setPorosite] = useState([]);
    const [qyteti, setQyteti] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [porosiaId, setPorosiaId] = useState();
    const [klientiId, setKlientiId] = useState();
    const [refreshKey, setRefreshKey] = useState(0)

    function handleClick(porosiaId) {
        axios.delete('http://localhost:5094/Porosia/FshijPorosi?id=' + porosiaId)
            .then(setRefreshKey(refreshKey => refreshKey + 1))
    }

    useEffect(() => {
        axios.get('http://localhost:5094/Porosia/GetAllPorosite').then(response => {
            setPorosite(response.data);
        })
        axios.get('http://localhost:5094/api/Qyteti/Get Qytetet').then(response => {
      setQyteti(response.data);
    })
    }, [refreshKey])

    return (
        <>
            <h1>Read Orders</h1>
            {/*Permbi table duhet te jete 
            nje guide per status te porosise, 
            dhe ngjyrat qe ndajne kategorite e porosise */}
            <div className="container">
                <div className="styled-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Id e Klientit</th>
                                <th>Emertimi</th>
                                <th>Vellimi</th>
                                <th>Materiali</th>
                                <th>Emri</th>
                                <th>Mbiemri</th>
                                <th>Qyteti</th>
                                <th className='receiver-color'>Emri</th>
                                <th className='receiver-color'>Mbiemri</th>
                                <th className='receiver-color'>Qyteti</th>
                                <th className='receiver-color'>Marresi</th>
                                <th className='receiver-color'>Depo</th>
                                <th className='receiver-color'>Derguesi</th>
                                <th className='receiver-color'>Statusi i Porosise</th>
                                <th className="receiver-color">Update</th>
                                <th className="receiver-color">Delete</th>

                            </tr>
                        </thead>

                        <tbody>
                            {porosite.map(porosia => (

                                <tr key={porosia.id}>
                                    <th>#{porosia.id}</th>
                                    <th>#{porosia.userId}</th>
                                    <th>{porosia.emertimi}</th>
                                    <th>{porosia.vellimi}</th>
                                    <th>{porosia.materiali}</th>
                                    <th>{porosia.senderEmri}</th>
                                    <th>{porosia.senderMbiemri}</th>
                                    <th>
                                        {qyteti.map((qytet) => (
                                        (porosia.senderZipCode == qytet.qytetiZipCode) ? qytet.emriQytetit : ""
                                    ))}
                                    </th>
                                    <th>{porosia.receiverEmri}</th>
                                    <th>{porosia.receiverMbiemri}</th>
                                    <th>
                                        {qyteti.map((qytet) => (
                                        (porosia.receiverZipCode == qytet.qytetiZipCode) ? qytet.emriQytetit : ""
                                    ))}
                                    </th>
                                    <th>#{porosia.marresiId}</th>
                                    <th>#{porosia.depoSektoriId}</th>
                                    <th>#{porosia.derguesiId}</th>
                                    <th>{porosia.statusiPorosiseId}</th>
                                    <th><button onClick={() => { setButtonPopup(true); setPorosiaId(porosia.id); setKlientiId(porosia.klientiId) }}>Update</button></th>
                                    <th><button type="submit"
                                        onClick={() => handleClick(porosia.id)}> Delete</button></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <OrdersUpdatePopup trigger={buttonPopup} setTrigger={setButtonPopup} porosiaId={porosiaId} klientiId={klientiId} setRefreshKey = { setRefreshKey } >

            </OrdersUpdatePopup>

        </>

    )

}