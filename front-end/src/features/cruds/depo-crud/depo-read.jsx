import React, { useState, useEffect } from 'react';
import '../crud-styles.scss';
import axios from 'axios';
import DepoUpdatePopup from './depo-update-popup';
import { toast } from "react-toastify";

export default function DepoRead() {

  const [depot, setDepot] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [depoID, setDepoId] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  function handleClick(depoId) {
      const confirmBox = window.confirm(
          "A jeni te sigurte se doni te fshini depon me id " + depoId + '?'
      )
      if (confirmBox === true) {
          axios.delete('http://localhost:5094/api/Depot/DeleteDepo?id=' + depoId)
              .then(() => {
                  toast.info("Depo u fshi me sukses!!", { theme: "colored" });
              })
              .then(() => {
                  setRefreshKey(refreshKey => refreshKey + 1)
              }).catch(function (error) {
                  toast.error(error.response.data);
              });
      }
      else {
          toast.error("Procesi i fshirjes se nje Depos u anulua!!")
      }
}

    useEffect(() => {
        axios.get('http://localhost:5094/api/Depot/ShowDepot').then(response => {
            setDepot(response.data);
        })
    }, [refreshKey])

    const [qyteti, setQyteti] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5094/api/Qyteti/Get Qytetet').then(response => {
            setQyteti(response.data);
        })
    }, [refreshKey])

  return (
    <>  
      <h1>Depo Read</h1>

      <div className="styled-table">          
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address Number</th>
              <th>Street Name</th>
              <th>Qyteti</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
              {depot.map(depo => (
              <tr key={depo.depoId}>
                    <th>{depo.depoId}</th>
                    <th>{depo.name}</th>
                    <th>{depo.addressNumber}</th>
                    <th>{depo.streetName}</th>
                    <th>
                        {qyteti.map((qytet) => (
                            (depo.zipCode == qytet.qytetiZipCode) ? qytet.emriQytetit : ""
                        ))}
                    </th>
                    <th> <button onClick={() => { setButtonPopup(true); setDepoId(depo.depoId)} }>Update</button></th>
                    <th>
                        <button type="submit" onClick={() => handleClick(depo.depoId)}>Delete</button>
                    </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DepoUpdatePopup trigger={buttonPopup} setTrigger={setButtonPopup} depoId={depoID} setRefreshKey={setRefreshKey} />
    </>   
  )
}