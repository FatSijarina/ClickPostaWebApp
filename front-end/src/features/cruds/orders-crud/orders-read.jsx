import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../crud-styles.scss'
import OrdersUpdatePopup from './orders-update-popup';

export default function OrdersRead() {

    const [porosite, setPorosite] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [porosiaId, setPorosiaId] = useState();
    const [klientiId, setKlientiId] = useState();
    const [refreshKey, setRefreshKey] = useState(0)

    function handleClick(porosiaId) {
        axios.delete('http://localhost:5100/PorositeController/' + porosiaId)
            .then(setRefreshKey(refreshKey => refreshKey + 1))
    }

    useEffect(() => {
        axios.get('http://localhost:5100/PorositeController/GetPorosite').then(response => {
            setPorosite(response.data);
        })
    }, [refreshKey])

    return (
        <>
            <h1>Read Orders</h1>
            <div className="container">
                <div className="styled-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Id e Klientit</th>
                                <th>Emri</th>
                                <th>Mbiemri</th>
                                <th>Emertimi</th>
                                <th>Detajet</th>
                                <th>Pesha</th>
                                <th>Vellimi</th>
                                <th>Ndjeshmeria</th>
                                <th>Numri i Telefonit</th>
                                <th>Emri i Adreses</th>
                                <th>Qyteti</th>
                                <th>Zip Kodi</th>
                                <th className='receiver-color'>Emri</th>
                                <th className='receiver-color'>Mbiemri</th>
                                <th className='receiver-color'>Numri i Telefonit</th>
                                <th className='receiver-color'>Emri i Adreses</th>
                                <th className='receiver-color'>Qyteti</th>
                                <th className='receiver-color'>Zip Kodi</th>
                                <th className="receiver-color">Update</th>
                                <th className="receiver-color">Delete</th>

                            </tr>
                        </thead>

                        <tbody>
                            {porosite.map(porosia => (

                                <tr key={porosia.id}>
                                    {console.log(porosia.id)}
                                    <th>{porosia.id}</th>
                                    <th>{porosia.klientiId}</th>
                                    <th>{porosia.senderEmri}</th>
                                    <th>{porosia.senderMbiemri}</th>
                                    <th>{porosia.emertimi}</th>
                                    <th>{porosia.detajet}</th>
                                    <th>{porosia.pesha}</th>
                                    <th>{porosia.vellimi}</th>
                                    <th>{porosia.ndjeshmeria}</th>
                                    <th>{porosia.senderNrTelefonit}</th>
                                    <th>{porosia.senderStreetName}</th>
                                    <th>{porosia.senderCity}</th>
                                    <th>{porosia.senderZipCode}</th>
                                    <th>{porosia.receiverEmri}</th>
                                    <th>{porosia.receiverMbiemri}</th>
                                    <th>{porosia.receiverNrTelefonit}</th>
                                    <th>{porosia.receiverStreetName}</th>
                                    <th>{porosia.receiverCity}</th>
                                    <th>{porosia.receiverZipCode}</th>
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