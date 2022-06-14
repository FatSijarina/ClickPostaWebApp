import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Route, Routes, Link } from 'react-router-dom'
import { UserContext } from "../../../Context/UserContext";


export default function CIHome() {

    const {klienti} = useContext(UserContext);

    return (
        <div className="base-container">
            
            <h1>Hello {klienti.emri}</h1>

        </div>
    )
}