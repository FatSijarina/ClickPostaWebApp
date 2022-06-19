import React from 'react'

const Details = (props) => {
  return (

    <>
      <div>Details</div>
      <form className="form-orders">
        <div className="form-group">
          <input 
              type="text" 
              name="clientId" 
              placeholder="Emertimi" 
              required
              onChange={(e) => props.setEmertimi(e.target.value)}
          />
          <input 
              type="text" 
              name="clientId" 
              placeholder="Detajet" 
              required
              onChange={(e) => props.setDetajet(e.target.value)}
          />
          <input 
              type="number" 
              name="clientId" 
              placeholder="Vellimi" 
              required
              onChange={(e) => props.setVellimi(e.target.value)}
          />
          <input 
              type="text" 
              name="clientId" 
              placeholder="Materiali" 
              required
              onChange={(e) => props.setMateriali(e.target.value)}
          />
        </div>
      </form>
      <button onClick={() => props.setStep(2)}> Next</button> 
    </>
  )
 
}

export default Details;