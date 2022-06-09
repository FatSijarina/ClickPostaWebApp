import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import add from "..//images//add.png";
import remove from "..//images//delete.png";
import edit from "..//images//edit.png";
import warehouse2 from "..//images//warehouse2.png";
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

//Table -> style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

//Table -> style
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function CustomizedTables() {

    //Fetch data from database
    const [depo, setDepo] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');

    useEffect(() => {
        axios.get('http://localhost:5100/api/Depoes/Show Depot').then(response => {
            setDepo(response.data);
        })    
    }, [refreshKey])

    
    //Set data to database
    const [name, setName] = useState('');
    const [nr, setNr] = useState('');
    const [streetName, setStreetName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        const depo = { name, nr, streetName, zipCode, city };

        axios.post('http://localhost:5100/api/Depoes/Add Depo', depo)
            .then(() => {
                toast.success("Depo added successfully!!", {theme:"colored"});
            })
            .then(() => {
            setRefreshKey(refreshKey => refreshKey + 1)
        })
    }


    //Delete data in database    
    function deleteDepo(depoId) {
        const confirmBox = window.confirm(
            "Are you sure you want to delete depo with id " + depoId +'?'
        )
        if (confirmBox === true) {
            axios.delete('http://localhost:5100/api/Depoes/Delete Depo?id=' + depoId)
                .then(() => {
                    toast.info("Depo deleted successfully!!", { theme: "colored" });
                })
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            toast.error("Process of deleting a depo canceled !!")
        }
    }


    return (
            <main className="main--depo">
                <form onSubmit={handleAdd} className="add--depo">
                    <TextField
                        required
                        id="filled-required"
                        label="Name"
                        size="small"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="filled-number"
                        label="Number"
                        size="small"
                        type="number"
                        value={nr}
                        onChange={(e) => setNr(e.target.value)}
                    />
                    <TextField
                        id="filled"
                        label="StreetName"
                        size="small"
                        value={streetName}
                        onChange={(e) => setStreetName(e.target.value)}
                    />
                    <TextField
                        id="filled"
                        label="ZipCode"
                        size="small"
                        type="number"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    <TextField
                        id="filled"
                        label="City"
                        size="small"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button className="add--button">
                        <img src={add} className="img--add"/>
                    </button>
                </form>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="right">Number</StyledTableCell>
                                <StyledTableCell align="right">StreetName</StyledTableCell>
                                <StyledTableCell align="right">ZipCode</StyledTableCell>
                                <StyledTableCell align="right">City</StyledTableCell>
                                <StyledTableCell align="right">Delete</StyledTableCell>
                                <StyledTableCell align="right">Update</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {depo.map((depo) => (
                                <StyledTableRow key={depo.id}>
                                    <StyledTableCell>
                                        <Avatar sx={{ bgcolor: blue[300] }} variant="rounded">
                                            <img src={warehouse2} className="img--add" />
                                        </Avatar>
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {depo.id}
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {depo.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{depo.nr}</StyledTableCell>
                                    <StyledTableCell align="right">{depo.streetName}</StyledTableCell>
                                    <StyledTableCell align="right">{depo.zipCode}</StyledTableCell>
                                    <StyledTableCell align="right">{depo.city}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <IconButton type="submit" onClick={() => deleteDepo(depo.id)}><img src={remove} className="img--delete" /></IconButton>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Link to="/EditDepo">
                                            <IconButton><img src={edit} className="img--update" /></IconButton>
                                        </Link>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </main>
    );
}