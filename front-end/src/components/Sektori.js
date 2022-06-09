import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from "react";
import add from "..//images//add.png";
import remove from "..//images//delete.png";
import edit from "..//images//edit.png";
import compound from "..//images//compound.png";
import search from "..//images//search.png";
import { toast } from "react-toastify";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import { Link } from 'react-router-dom';


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

export default function Sektori() {
    const [sektori, setSektori] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');

    useEffect(() => {
        axios.get('http://localhost:5100/api/Sektori/Show Sektori').then(response => {
            setSektori(response.data);
        })
    }, [refreshKey])

    //Set data to database
    const [emertimi, setEmertimi] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        const sektori = { emertimi};

        axios.post('http://localhost:5100/api/Sektori/Add Sektori', sektori)
            .then(() => {
                toast.success("Sektori added successfully!!", { theme: "colored" });
        })
            .then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }

    //Delete data in database    
    function deleteSektori(sektoriId) {
        const confirmBox = window.confirm(
            "Are you sure you want to delete sektori with id " + sektoriId + '?'
        )
        if (confirmBox === true) {
            axios.delete('http://localhost:5100/api/Sektori/Delete Sektori?id=' + sektoriId)
                .then(() => {
                    toast.info("Sektori deleted successfully!!", { theme: "colored" });
                })
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            toast.error("Process of deleting a sektor canceled !!")
        }
    }


    //Search data in database

	return (
            <main className="main--sektori">
                <div className="add--search">
                    <div>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <img src={search} className="img--add" />
                        </IconButton>
                    </div>
                    <form onSubmit={handleAdd} className="add--sektori">
                        <TextField
                            required
                            id="standard-required"
                            label="Emertimi"
                            variant="standard"
                            value={emertimi}
                            onChange={(e) => setEmertimi(e.target.value)}
                        />
                        <button className="add--button">
                            <img src={add} className="img--add" />
                        </button>
                    </form>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>Emertimi</StyledTableCell>
                                <StyledTableCell align="right">Delete</StyledTableCell>
                                <StyledTableCell align="right">Update</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sektori.map((sektoret) => (
                                <StyledTableRow key={sektoret.id}>
                                    <StyledTableCell>
                                        <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
                                            <img src={compound} className="img--add"/>
                                        </Avatar>
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {sektoret.id}
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {sektoret.emertimi}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <IconButton type="submit" onClick={() => deleteSektori(sektoret.id)}><img src={remove} className="img--delete" /></IconButton>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Link to="/EditSektori">
                                            <IconButton><img src={edit} className="img--update" /></IconButton>
                                        </Link>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
			</main>
	)
}