import React, { useState, useEffect, useContext } from 'react';
import '../crud-styles.scss';
import axios from 'axios';
import ClientUpdatePopup from './user-update-popup';
import { toast } from "react-toastify";
import { UserContext } from '../../../Context/UserContext';

export default function ClientRead() {

  const {klientet} = useContext(UserContext);
  const [qyteti, setQyteti] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [klientID, setKlientId] = useState();
  const [refreshKey, setRefreshKey] = useState(1);

  function handleClick(klientiId) {
    const confirmBox = window.confirm(
      "Are you sure you want to delete depo with id " + klientiId + '?'
    )
    if (confirmBox === true) {
      axios.delete('http://localhost:5094/api/User/DeleteUser?id=' + klientiId)
      .then( toast.info("Depo deleted successfully!!", { theme: "colored" })
      )}
    else {
        toast.error("Process of deleting a user canceled !!")
    }
    setRefreshKey(refreshKey + 1 )
  }



  return (
    <>  
      <h1>Client Read</h1>
    {console.log(klientet)}
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
                <th> <button onClick={() => {setButtonPopup(true); setKlientId(klienti.userId)} }>Update</button></th>
                <th><button type="submit"
                                    onClick={() => handleClick(klienti.userId)}
                                    >Delete</button></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ClientUpdatePopup trigger={buttonPopup} setTrigger={setButtonPopup} klientId={klientID} setRefreshKey={setRefreshKey} qyteti={qyteti} />
    </>   
  )
}