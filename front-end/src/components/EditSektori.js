import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import { toast } from "react-toastify";
import edit from "..//images//edit.png";
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function EditSektori() {

    const [sektori, setSektori] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5100/api/Sektori/Show Sektori').then(response => {
            setSektori(response.data);
        })
    }, [])


    const [id, setId] = useState('');
    const [emertimi, setEmertimi] = useState('');


    const handleEdit = (e) => {
        e.preventDefault();
        let sektor = { id, emertimi}
        sektori.map((sektorii) => {
            if (id == sektorii.id) {
                axios.put('http://localhost:5100/api/Sektori/Update Sektori', sektor)
                    .then(() => {
                    toast.success("Sektori updated successfully!!", { theme: "colored" });
                })
            }
        })

    }


    return (
        <div className="update--sektori">
            <h1>Update a sektor</h1>
            <br/>
            <TextField
                required
                id="filled-required"
                label="Id"
                variant="standard"
                value={id}
                onChange={(e) => setId(e.target.value)}
            /><br /><br />
            <TextField
                id="filled-required"
                label="Name"
                variant="standard"
                value={emertimi}
                onChange={(e) => setEmertimi(e.target.value)}
            /><br/>
            <IconButton onClick={handleEdit} variant="contained" color="success">
                UPDATE
                <img src={edit} className="img--update" />
            </IconButton>
        </div>
    );
}