import React from "react";
import AskImage from '../../img/faq-assets/ask.png';
import './faq-styles.scss';
import DownArrow from '../../img/faq-assets/down-arrow.png';
import UpArrow from '../../img/faq-assets/arrow-up.png';
import FaqImg from '../../img/faq-assets/faq-illustration.svg';
import { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import QuestionRead from '../cruds/QA/QA-read';
import axios from 'axios';
import { toast } from "react-toastify";

export default function FAQ(){

    const [selected, setSelected]= useState(null);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [refreshKey, setRefreshKey] = useState('0');

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const q = { question, answer };

        setIsPending(true);
        
        axios.post('http://localhost:5094/api/QAControlller/Add Question & Answer', q)
            .then(() => {
                toast.success("Question added successfully!!", { theme: "colored" });
            }).then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }

    const data = [
        {
            question: 'Sa eshte pesha maksimale e pakos?',
            answer:
                    'Pesha maksimale e pakos tuaj qe mund te transportohet eshte 500kg.',
        },
        {
            question: 'Si mund te bej regjistrimin e dergeses?',
            answer: 
                    'Pasi te jeni kyqur ne sistem, do te keni mundesine per te regjistruar ' + 
                    'dergesen. Kerkohet nga ju qe te plotesoni te gjitha te dhenat e duhura. Per ' +
                    'me shume mund te na kontaktoni ne faqen e kontaktit.',
        },
        {
            question: 'Nuk mund te kyqem ne sistem?',
            answer: 
                    'Kjo mund te ndodh si pasoje e harreses se fjalekalimit'
                    + ', por mund te ju mundesohet vendosja e fjalekalimit te ri permes sistemit.'
                    + ' Nese perseri nuk mund te kyqeni atehere duhet te kontaktoni administraten.',
        },
    
    ]

    return(
        <div className="container-div">           
            <div className="base-container">
                <div className="accordion">
                <h3 className="h3-section2">Pyetjet me te shpeshta</h3>
                <img src={FaqImg} className="img-faq"/>
                
                    {data.map((item, i) => ( 
                        <div className="item-faq" onClick={() => toggle(i)}>
                            <div className="title-h4-faq">
                                <h4>{item.question}</h4>
                                <span>{selected == i ? <img src={UpArrow} className="img-arrow" />: <img src={DownArrow} className="img-arrow"/> }</span>
                            </div>
                            <div className={selected == i? 'content-faq show' : 'content-faq'}>{item.answer}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="add-question">
                <h3 className="title-faq">Keni ndonje pyetje?</h3>
                <div className="form"> 
                    <form onSubmit={handleSubmit}>
                        <div className="form-group-faq">
                            <input 
                                type="text" 
                                name="question" 
                                placeholder="Question" 
                                required 
                                autoComplete="off"
                                defaultValue={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        
                            { !isPending && <button type="submit" className="register-register-btn" value="Submit">
                                Dergo
                            </button>}
                        
                        </div>
                    </form>   
                </div>       
            </div>  
        </div>
 )
}