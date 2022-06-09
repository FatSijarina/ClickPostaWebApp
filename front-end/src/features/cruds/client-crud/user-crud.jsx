import React from 'react';
import '../crud-styles.scss';
import UserCrudCreate from '../../../img/client-crud-assets/user-crud-create.svg';
import UserCrudRead from '../../../img/client-crud-assets/user-crud-read.svg';
import ClientRead from './user-client';
import { Link, Route, Routes } from 'react-router-dom';
import ClientCreate from './user-create';
import UserTransporter from './user-transporter'
import UserAdmin from './user-admin'


export default function ClientCrud() {

    return(

      <>
         <div className="crud-icons">
            <Link to="./ClientCreate">
               <div className="crud-icons-combine">
                  <img src={UserCrudCreate} alt="create users icon" />  
                  <p>Create</p>
               </div> 
            </Link>
            <Link to="./">
               <div className="crud-icons-combine">
                  <img src={UserCrudRead} alt="read users icon" />   
                  <p>Klientet</p>
               </div>
            </Link>  
            <Link to="./Transportuesit">
               <div className="crud-icons-combine">
                  <img src={UserCrudRead} alt="read users icon" />   
                  <p>Transportuesit</p>
               </div>
            </Link> 
            <Link to="./Adminet">
               <div className="crud-icons-combine">
                  <img src={UserCrudRead} alt="read users icon" />   
                  <p>Adminet</p>
               </div>
            </Link>                                
         </div>    

         <Routes>
            <Route path='/' element={<ClientRead />} />  
            <Route path='/ClientCreate' element={<ClientCreate />} />
            <Route path='/Transportuesit' element={<UserTransporter />}/>
            <Route path='/Adminet' element={<UserAdmin />}/>
         </Routes>
                
      </>
    )

}

