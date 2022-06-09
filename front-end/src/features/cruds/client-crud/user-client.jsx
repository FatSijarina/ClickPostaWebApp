import React, { useState, useEffect } from 'react';
import '../crud-styles.scss';
import axios from 'axios';
import ClientUpdatePopup from './user-update-popup';

export default function ClientRead() {

  const [klientet, setKlientet] = useState([]);
  const [qyteti, setQyteti] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [klientID, setKlientId] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  function handleClick(klientiId) {
    console.log(klientiId);
    axios.delete('http://localhost:5094/api/User/DeleteUser/' + klientiId)
        .then(setRefreshKey(refreshKey => refreshKey + 1))
}

  useEffect(() => {
    axios.get('http://localhost:5094/api/User/GetKlientet').then(response => {
      setKlientet(response.data);
    })
    axios.get('http://localhost:5094/api/Qyteti/Get Qytetet').then(response => {
      setQyteti(response.data);
    })
  }, [refreshKey])

  return (
    <>  
      <h1>Client Read</h1>

      <div className="styled-table">          
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Emri</th>
              <th>Mbiemri</th>
              <th>Email</th>
              <th>Numri i Telefonit</th>
              <th>Numri i Adreses</th>
              <th>Emri i Adreses</th>
              <th>Qyteti</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {klientet.map(klienti => (
              <tr key={klienti.userId}>
                <th>{klienti.userId}</th>
                <th>{klienti.emri}</th>
                <th>{klienti.mbiemri}</th>
                <th>{klienti.email}</th>
                <th>{klienti.nrTelefonit}</th>
                <th>{klienti.homeNumber}</th>
                <th>{klienti.streetName}</th>
                <th>
                  {qyteti.map((qytet) => (
                      (klienti.zipCode == qytet.qytetiZipCode) ? qytet.emriQytetit : ""
                  ))}
                </th>
                <th> <button onClick={() => {setButtonPopup(true); setKlientId(klienti.id)} }>Update</button></th>
                <th><button type="submit"
                                    onClick={() => handleClick(klienti.id)}
                                    >Delete</button></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ClientUpdatePopup trigger={buttonPopup} setTrigger={setButtonPopup} klientId={klientID} setRefreshKey={setRefreshKey} />
    </>   
  )
}