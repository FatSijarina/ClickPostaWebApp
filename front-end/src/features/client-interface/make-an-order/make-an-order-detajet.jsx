import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";



export default function OrderDetajet() {

    const location = useLocation();
    const navigate = useNavigate();

    const[klientiID, setKlientiID] = useState(0);

    useEffect(() => {
        if(location.state != null){
            setKlientiID(location.state.klientiID);
        }
        else{
            navigate('../');
        }
    })


    return (
        <>
            <h1>Hellooo</h1> 
            {klientiID} 
            
            
        </>
    )
}