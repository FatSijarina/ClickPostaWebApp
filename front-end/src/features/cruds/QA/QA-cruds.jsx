import React from 'react';
import '../crud-styles.scss';
import QuestionIcon from '../../../img/dashboard-assets/question.png';
import QuestionRead from './QA-read';
import { Link, Route, Routes } from 'react-router-dom';
import QuestionCreate from './QA-create';


export default function QuestionCrud() {
    return(
      <>
         <div className="crud-icons">
            <Link to="./QuestionCreate">
               <div className="crud-icons-combine">
                    <img src={QuestionIcon} alt="create users icon" />
                  <p>Create</p>
               </div> 
            </Link>
            <Link to="./">
               <div className="crud-icons-combine">
                    <img src={QuestionIcon} alt="read users icon" />
                  <p>Read</p>
               </div>
            </Link>                                
         </div>    

         <Routes>
            <Route path='/QuestionCreate' element={<QuestionCreate />} />
            <Route path='/' element={<QuestionRead />} />
         </Routes>
      </>
    )
}