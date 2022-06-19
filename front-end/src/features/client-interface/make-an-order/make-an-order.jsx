import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import axios from "axios";

import Details from "./details";
import SenderDetails from "./sender-details";
import ReceiverDetails from "./receiver-details";
import Confirmation from "./confirmation";
import Success from "./success";
import { useEffect } from "react";

export default function Order() {

    const [step, setStep] = useState(1);
    const [order, setOrder] = useState(false);

    const { klientiID } = useContext(UserContext);
    const userId = klientiID;
    const [emertimi, setEmertimi] = useState('');
    const [detajet, setDetajet] = useState('');
    const [vellimi, setVellimi] = useState('');
    const [materiali, setMateriali] = useState('');
    const [senderEmri, setSenderEmri] = useState('');
    const [senderMbiemri, setSenderMbiemri] = useState('');
    const [senderNrTelefonit, setSenderNrTelefonit] = useState('');
    const [senderHomeNumber, setSenderHomeNumber] = useState();
    const [senderStreetName, setSenderStreetName] = useState('');
    const [senderZipCode, setSenderZipCode] = useState();
    const [receiverEmri, setReceiverEmri] = useState('');
    const [receiverMbiemri, setReceiverMbiemri] = useState('');
    const [receiverNrTelefonit, setReceiverNrTelefonit] = useState('');
    const [receiverHomeNumber, setReceiverHomeNumber] = useState();
    const [receiverStreetName, setReceiverStreetName] = useState('');
    const [receiverZipCode, setReceiverZipCode] = useState();

    const porosia = { userId, senderEmri, senderMbiemri, emertimi, detajet, vellimi, materiali,
        senderNrTelefonit, senderStreetName, senderHomeNumber, senderZipCode,
        receiverEmri, receiverMbiemri, receiverNrTelefonit, receiverHomeNumber, receiverStreetName, receiverZipCode};

    const handleSubmit = (e) => {
        console.log((porosia));
        axios.post('http://localhost:5094/Porosia/ShtoPorosi', porosia)
        .catch(function (error) {
            console.log(error.response.data);
        });
    }

    useEffect(() => {
        if(order)
            handleSubmit();
    })


    const orderProcess = {
        1: <Details 
                setStep={setStep}
                setEmertimi={setEmertimi}
                setDetajet={setDetajet}
                setVellimi={setVellimi}
                setMateriali={setMateriali}
            />,
        2: <SenderDetails 
                setStep={setStep}
                setSenderEmri={setSenderEmri}
                setSenderMbiemri={setSenderMbiemri}
                setSenderNrTelefonit={setSenderNrTelefonit}
                setSenderHomeNumber={setSenderHomeNumber}
                setSenderStreetName={setSenderStreetName}
                setSenderZipCode={setSenderZipCode}
            />,
        3: <ReceiverDetails
                setStep={setStep} 
                setReceiverEmri={setReceiverEmri}
                setReceiverMbiemri={setReceiverMbiemri}
                setReceiverNrTelefonit={setReceiverNrTelefonit}
                setReceiverHomeNumber={setReceiverHomeNumber}
                setReceiverStreetName={setReceiverStreetName}
                setReceiverZipCode={setReceiverZipCode}
            />,
        4: <Confirmation 
                setOrder={setOrder}
                setStep={setStep} 
                porosia={porosia}
            />,
        5: <Success 

            />
    }

    return (
        <>

            {orderProcess[step]}
           
            
                
        </>
    )
}

