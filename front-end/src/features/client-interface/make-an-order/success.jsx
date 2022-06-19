import React from 'react'
import {Link} from "react-router-dom"

import OrderSuccessImg from '../../../img/order-process-assets/success/my-address-art.png'

const Success = (props) => {
  return (
    <>
    
      <img src={OrderSuccessImg} alt="" />
      <h1>Porosia u krye sukses.</h1>

      <Link to='../'><button className="add-order-btn">  Kthehu Home</button> </Link>
    
    </>
  )
}

export default Success