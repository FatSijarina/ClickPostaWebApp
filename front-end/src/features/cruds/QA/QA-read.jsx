import React, { useState, useEffect } from 'react';
import '../crud-styles.scss';
import axios from 'axios';
import QuestionUpdatePopup from './question-update-popup';
import { toast } from "react-toastify";
import FAQ from '../../faq/faq';

export default function QuestionRead() {

  const [questions, setQuestions] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [questionId, setQuestionId] = useState();
  const [answer, setAnswer] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  function handleClick(id) {
      const confirmBox = window.confirm(
          "Are you sure you want to delete question with id " + id + '?'
      )
      if (confirmBox === true) {
          axios.delete('http://localhost:5094/api/QAControlller/Fshij QA?id=' + id)
              .then(() => {
                  toast.info("Question deleted successfully!!", { theme: "colored" });
              })
              .then(() => {
                  setRefreshKey(refreshKey => refreshKey + 1)
              })
      }
      else {
          toast.error("Process of deleting this question canceled !!")
      }
}

    useEffect(() => {
        axios.get('http://localhost:5094/api/QAControlller/GetQA').then(response => {
            setQuestions(response.data);
        })
    }, [refreshKey])


  return (
    <>  
      <h1>Questions Read</h1>

      <div className="styled-table">          
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Question</th> 
              <th>Answer</th>         
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
              {questions.map(q => (
                  <tr key={q.id}>
                    <th>{q.id}</th>
                    <th>{q.question}</th>
                    <th>{q.answer}</th>
                    <th> <button onClick={() => { setButtonPopup(true); setQuestionId(q.id)} }>Update</button></th>
                    <th>
                        <button type="submit" onClick={() => handleClick(q.id)}>Delete</button>
                    </th>
                  </tr>                 
            ))}
          </tbody>
        </table>
      </div>

      <QuestionUpdatePopup trigger={buttonPopup} setTrigger={setButtonPopup} id={questionId} setRefreshKey={setRefreshKey} /> 
    </>   
  )
}