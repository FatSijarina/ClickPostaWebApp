import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";

export default function QuestionUpdatePopup(props) {

    const questionId = props.id;
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const [refreshKey, setRefreshKey] = useState('0');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const q = {question, answer};
        
        axios.put('http://localhost:5094/api/QAControlller/Update QA', q)
            .then(() => {
                toast.success("Question updated successfully!!", {theme: "colored"});
                props.setTrigger(false);
                props.setRefreshKey(refreshKey => refreshKey + 1);
            })
    }

  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false) }>Close</button>
            {props.children}

            <div className="content">
                <h1>Update Question</h1>
                <div className="form"> 
                    <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input 
                                type="text" 
                                name="question" 
                                placeholder="Question" 
                                defaultValue={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />

                            <input 
                                type="text" 
                                name="answer" 
                                placeholder="Answer" 
                                defaultValue={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />

                            { !isPending && <button type="submit" className="register-register-btn" value="Submit">
                                Perditeso
                            </button>}
                            { isPending && <button type="submit" className="register-register-btn" value="Submit">
                                Duke funksionuar
                            </button>}
                        </div>
                    </form>    
                </div>
            </div>
        </div>
    </div>
  ) : "";
}