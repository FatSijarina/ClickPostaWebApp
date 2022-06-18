import React from 'react'

const ReceiverDetails = (props) => {
  return (
    <>
      <div>Receiver-Details</div>
      <input 
          type="text" 
          placeholder="Emri" 
          required
          onChange={(e) => props.setReceiverEmri(e.target.value)}
      />
      <input 
          type="text" 
          placeholder="Mbiemri" 
          required
          onChange={(e) => props.setReceiverMbiemri(e.target.value)}
      />
      <input 
          type="text" 
          placeholder="Numri i Telefonit" 
          required
          onChange={(e) => props.setReceiverNrTelefonit(e.target.value)}
      />
      <input 
          type="text" 
          placeholder="Numri i Shtepise" 
          required
          onChange={(e) => props.setReceiverHomeNumber(e.target.value)}
      />
      <input 
          type="text" 
          placeholder="Adresa" 
          required
          onChange={(e) => props.setSenderStreetName(e.target.value)}
      />
      <input 
          type="text" 
          placeholder="Materiali" 
          required
          onChange={(e) => props.setReceiverZipCode(e.target.value)}
      />
    </>
  )
}

export default ReceiverDetails