import React from 'react'

const Details = (props) => {
  return (

    <>
      <div>Details</div>
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
          onChange={(e) => props.setEmertimi(e.target.value)}
      />
      <input 
          type="text" 
          name="clientId" 
          placeholder="Vellimi" 
          required
          onChange={(e) => props.setEmertimi(e.target.value)}
      />
      <input 
          type="text" 
          name="clientId" 
          placeholder="Materiali" 
          required
          onChange={(e) => props.setEmertimi(e.target.value)}
      />
    </>
  )
 
}

export default Details;