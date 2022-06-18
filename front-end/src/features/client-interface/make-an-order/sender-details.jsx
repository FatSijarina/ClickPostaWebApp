import React from 'react'

const SenderDetails = (props) => {
  return (
    <>
      <div>Sender-Details</div>
      <input 
          type="text" 
          placeholder="Emri" 
          required
          onChange={(e) => props.setSenderEmri(e.target.value)}
      />
      <input 
          type="text" 
          placeholder="Mbiemri" 
          required
          onChange={(e) => props.setSenderMbiemri(e.target.value)}
      />
      <input 
          type="text" 
          placeholder="Numri i Telefonit" 
          required
          onChange={(e) => props.setSenderNrTelefonit(e.target.value)}
      />
      <input 
          type="text" 
          placeholder="Numri i Shtepise" 
          required
          onChange={(e) => props.setSenderHomeNumber(e.target.value)}
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
          onChange={(e) => props.setSenderZipCode(e.target.value)}
      />
    </>

  )
}

export default SenderDetails