import React from 'react'

const ReceiverDetails = (props) => {

  const { qytetet } = props;

  return (
    <>
      <div>Adresa ku duhet te dergohet porosia</div>
      <form className="form-orders">
        <div className="form-group">
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
              type="number" 
              placeholder="Numri i Shtepise" 
              required
              onChange={(e) => props.setReceiverHomeNumber(e.target.value)}
          />
          <input 
              type="text" 
              placeholder="Adresa" 
              required
              onChange={(e) => props.setReceiverStreetName(e.target.value)}
          />
          <input 
              type="number" 
              placeholder="ZipCode" 
              required
              onChange={(e) => props.setReceiverZipCode(e.target.value)}
          />
          <div className="box">
          <select 
              onChange={(e) => props. setReceiverZipCode(e.target.value)} 
              defaultValue='Zgjedh Qytetin'
          >      
          <option value="Zgjedh Qytetin" disabled={true}>Zgjedh Qytetin</option>  
          {qytetet.map(qyteti => (
              <option key={qyteti.qytetiZipCode} value={qyteti.qytetiZipCode}>
                  {qyteti.emriQytetit}
              </option>
          ))};                               
          </select>
      </div>
        </div>
      </form>

      <button onClick={() => props.setStep(4)}> Next</button> 
      <button onClick={() => props.setStep(2)}> Previous</button>    
    </>
  )
}

export default ReceiverDetails