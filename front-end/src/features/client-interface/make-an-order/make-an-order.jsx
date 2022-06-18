import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../../Context/UserContext";

import Details from "./details";
import SenderDetails from "./sender-details";
import ReceiverDetails from "./receiver-details";

export default function Order() {

    const [step, setStep] = useState(1);

    const klientiID = useContext(UserContext);
    const [emertimi, setEmertimi] = useState('');
    const [detajet, setDetajet] = useState('');
    const [vellimi, setVellimi] = useState('');
    const [materiali, setMateriali] = useState('');
    const [senderEmri, setSenderEmri] = useState('');
    const [senderMbiemri, setSenderMbiemri] = useState('');
    const [senderNrTelefonit, setSenderNrTelefonit] = useState('');
    const [senderHomeNumber, setSenderHomeNumber] = useState('Nr i vendbanimit te derguesit');
    const [senderStreetName, setSenderStreetName] = useState('');
    const [senderZipCode, setSenderZipCode] = useState('');
    const [receiverEmri, setReceiverEmri] = useState('smok');
    const [receiverMbiemri, setReceiverMbiemri] = useState('');
    const [receiverNrTelefonit, setReceiverNrTelefonit] = useState('');
    const [receiverHomeNumber, setReceiverHomeNumber] = useState('');
    const [receiverStreetName, setReceiverStreetName] = useState('');
    const [receiverZipCode, setReceiverZipCode] = useState('');

    const OrderDetails = Details

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const porosia = { userId, senderEmri, senderMbiemri, emertimi, detajet, vellimi, materiali,
    //                         senderNrTelefonit, senderStreetName, senderHomeNumber, senderZipCode,
    //                         receiverEmri, receiverMbiemri, receiverNrTelefonit, receiverHomeNumber, receiverStreetName, receiverZipCode};
    //     console.log((porosia));
    //     axios.post('http://localhost:5094/Porosia/ShtoPorosi', porosia)   
    // }

    // prevStep = () => {
    //     setStep(() => step - 1);
    // }
    // nextStep = () => {
    //     setStep(() => step + 1);
    // }


    const orderProcess = {
        1: <Details 
            setEmertimi={setEmertimi}
            setDetajet={setDetajet}
            setVellimi={setVellimi}
            setMateriali={setMateriali}
            />,
        2: <SenderDetails 
            setSenderEmri={setSenderEmri}
            setSenderMbiemri={setSenderMbiemri}
            setSenderNrTelefonit={setSenderNrTelefonit}
            setSenderHomeNumber={setSenderHomeNumber}
            setSenderStreetName={setSenderStreetName}
            setSenderZipCode={setSenderZipCode}
            />,
        3: <ReceiverDetails 
            setReceiverEmri={setReceiverEmri}
            setReceiverMbiemri={setReceiverMbiemri}
            setReceiverNrTelefonit={setReceiverNrTelefonit}
            setReceiverHomeNumber={setReceiverHomeNumber}
            setReceiverStreetName={setReceiverStreetName}
            setReceiverZipCode={setReceiverZipCode}
        />
    }

    return (
        <>

            {orderProcess[step]}

            {emertimi}
            <button onClick={() => setStep(step + 1)}> Next</button>    
            <button onClick={() => setStep(step - 1)}> Previous</button>          
        </>
    )
}

