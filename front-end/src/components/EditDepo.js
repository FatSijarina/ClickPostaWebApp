import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import { toast } from "react-toastify";
import edit from "..//images//edit.png";
import axios from 'axios';

export default function EditDepo() {

    const [depo, setDepo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5100/api/Depoes/Show Depot').then(response => {
            setDepo(response.data);
        })
    }, [])


    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [nr, setNr] = useState('');
    const [streetName, setStreetName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');

    
        const handleEdit = (e) => {
            e.preventDefault();
            let depoja = {id, name, nr, streetName, zipCode, city }
            depo.map((depo) => {
                if (id == depo.id) {
                    axios.put('http://localhost:5100/api/Depoes/Update Depo', depoja)
                        .then(() => {
                        toast.success("Depo updated successfully!!", { theme: "colored" });
                    })
                }
            })
            
        }
    

    return (
        <div className="update--depo">
            <h1>Update a depo</h1>
            <br />
            <div className="update--depo--form">
                <div>
                    <TextField
                        required
                        id="filled-required"
                        label="Id"
                        variant="standard"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    /><br /><br />
                    <TextField
                        id="filled-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        value={nr}
                        onChange={(e) => setNr(e.target.value)}
                    /><br /><br />
                    <TextField
                        id="filled"
                        label="ZipCode"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="filled-required"
                        label="Name"
                        variant="standard"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br /><br />
            
                    <TextField
                        id="filled"
                        label="StreetName"
                        variant="standard"
                        value={streetName}
                        onChange={(e) => setStreetName(e.target.value)}
                    /><br /><br />
            
                    <TextField
                        id="filled"
                        label="City"
                        variant="standard"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
            </div>
            <IconButton onClick={handleEdit} variant="contained" color="success">
                UPDATE
                <img src={edit} className="img--update" />
            </IconButton>
        </div>
    );
}