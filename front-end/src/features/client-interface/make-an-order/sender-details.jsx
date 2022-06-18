import React from 'react'

const SenderDetails = (props) => {
  return (
    <>
      <div>Adresa ku duhet te mirret porosia</div>
      <form className="form-orders">
        <div className="form-group">
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
              type="number" 
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
              type="number" 
              placeholder="Qyteti" 
              required
              onChange={(e) => props.setSenderZipCode(e.target.value)}
          />
        </div>
      </form>
      <button onClick={() => props.setStep(3)}> Next</button> 
      <button onClick={() => props.setStep(1)}> Previous</button>      
    </>

  )
}

export default SenderDetails