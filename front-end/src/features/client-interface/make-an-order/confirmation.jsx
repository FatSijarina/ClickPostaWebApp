import React from 'react'

const Confirmation = (props) => {

  const { porosia } = props;

  return (
    <>
      <div>Do you confirm?</div>

      <h2>Detajet e Porosise</h2>
      <p>Emertimi: {porosia.emertimi}</p>
      <p>Detaje: {porosia.detajet}</p>
      <p>Vellimi: {porosia.vellimi}</p>
      <p>Material: {porosia.materiali}</p>

      <h2>Informatat e Derguesit</h2>
      <p>Emri: {porosia.senderEmri}</p>
      <p>Mbiemri: {porosia.senderMbiemri}</p>
      <p>Numri i Telefonit: {porosia.senderNrTelefonit}</p>
      <p>Numri i Shtepise: {porosia.senderHomeNumber}</p>
      <p>Adresa: {porosia.senderStreetName}</p>
      <p>Qyteti: {porosia.senderZipCode}</p>

      <h2>Informatat e Marresit</h2>
      <p>Emri: {porosia.receiverEmri}</p>
      <p>Mbiemri: {porosia.receiverMbiemri}</p>
      <p>Numri i Telefonit: {porosia.receiverNrTelefonit}</p>
      <p>Numri i Shtepise: {porosia.receiverHomeNumber}</p>
      <p>Adresa: {porosia.receiverStreetName}</p>
      <p>Qyteti: {porosia.receiverZipCode}</p>

      <button onClick={() => {props.setOrder(true); props.setStep(5)}}> Po</button>
      <button onClick={() => props.setStep(3)}> Kthehu</button> 
      
    </>
  )
}

export default Confirmation