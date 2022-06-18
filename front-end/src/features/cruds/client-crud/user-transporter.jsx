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
    axios.delete('http://localhost:5094/api/User/DeleteUser?id=' + klientiId)
        .then(setRefreshKey(refreshKey + 1))
}

  useEffect(() => {
    axios.get('http://localhost:5094/api/User/GetTransportuesit').then(response => {
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
              <th>Qyteti</th>
              <th>Orari</th>
              <th>Ditet e Pushimit</th>
              <th>Numri i Porosive</th>
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
                <th>
                  {qyteti.map((qytet) => (
                      (klienti.zipCode === qytet.qytetiZipCode) ? qytet.emriQytetit : ""
                  ))}
                </th>
                <th>{klienti.orari}</th>
                <th>{klienti.ditetEpushimit}</th>
                <th>{klienti.nrPorosive}</th>
                <th> <button onClick={() => {setButtonPopup(true); setKlientId(klienti.userId)} }>Update</button></th>
                <th><button type="submit"
                                    onClick={() => handleClick(klienti.userId)}
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