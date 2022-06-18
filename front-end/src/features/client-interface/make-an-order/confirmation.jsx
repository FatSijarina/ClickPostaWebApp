import React from 'react'

const Confirmation = (props) => {
  return (
    <>
      <div>Do you confirm?</div>
      <button onClick={() => props.setOrder(true)}> Yes</button> 
    </>
  )
}

export default Confirmation