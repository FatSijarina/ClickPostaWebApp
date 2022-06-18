import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

export default function QuestionCreate() {

    const [question, setQuestion] = useState('');
    const [answer,setAnswwer] = useState('');
    const [refreshKey, setRefreshKey] = useState('0');

    const [isPending, setIsPending] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const qa = {question,answer};

        setIsPending(true);
        
        axios.post('http://localhost:5094/api/QAControlller/Add Question & Answer', qa)
            .then(() => {
                toast.success("Question added successfully!!", { theme: "colored" });
              
            }).then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }

    return (

        <>
        <div className="content">
            <div className="form"> 
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="question" 
                            placeholder="Question" 
                            required 
                            defaultValue={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                            <input 
                            type="text" 
                            name="answer" 
                            placeholder="Answer" 
                            required 
                            defaultValue={answer}
                            onChange={(e) => setAnswwer(e.target.value)}
                        />
                       
                        { !isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Shto
                        </button>}
                        { isPending && <button type="submit" className="register-register-btn" value="Submit">
                            Duke funksionuar
                        </button>}
                    </div>
                </form>    
            </div>
        </div>
    </>
    )
}