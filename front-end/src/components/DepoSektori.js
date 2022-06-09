import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from "react";
import add from "..//images//add.png";
import remove from "..//images//delete.png";
import edit from "..//images//edit.png";
import logo from "..//images//logo.jpeg";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { toast } from "react-toastify";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function DepoSektori() {
    //fetch data for depo
    const [depo, setDepo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5100/api/Depoes/Show Depot')
            .then(response => response.json())
            .then(data => setDepo(data))
    }, [])


    //fetch data for sektori
    const [sektori, setSektori] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');

    useEffect(() => {
        fetch('http://localhost:5100/api/Sektori/Show Sektori')
            .then(response => response.json())
            .then(data => setSektori(data))
    }, [])

    
    //fetch data for depoSektori
    const [depoSektori, setDepoSektori] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5100/api/DepoSektori/Show DepoSektori')
            .then(response => response.json())
            .then(data => setDepoSektori(data))
    }, [refreshKey])

    const handleChangeSektori = (event) => {
        setSektori(event.target.emertimi);
    };

    const handleChangeDepo = (event) => {
        setDepo(event.target.name);
    };

    //delete data in database
    function deleteDepoSektori(depoSektoriId) {
        const confirmBox = window.confirm(
            "Are you sure you want to delete depo with id " + depoSektoriId + '?'
        )
        if (confirmBox === true) {
            fetch('http://localhost:5100/api/DepoSektori/Delete DepoSektori?id=' + depoSektoriId, { method: 'DELETE' })
                .then(() => {
                    toast.info("DepoSektori deleted successfully!!", { theme: "colored" });
                })
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            toast.error("Process of deleting a DepoSektori canceled !!", { theme: "colored" });
        }
    }

    return (
        <div>
            <main className="deposektori--main">
                <div className="deposektori--shtoDepoSektori">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                value={depo}
                                onChange={handleChangeDepo}
                                helperText="Please select your depo"
                            >
                                {depo.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                value={sektori}
                                onChange={handleChangeSektori}
                                helperText="Please select your sektori"
                            >
                                {sektori.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.emertimi}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </Box>
                    <Button variant="contained" color="success">
                        <img src={add} className="img--add" />
                    </Button>
                </div>
                <div className="depoSektori--table">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="right">ID</StyledTableCell>
                                    <StyledTableCell align="right">Depo</StyledTableCell>
                                    <StyledTableCell align="right">Sektori</StyledTableCell>
                                    <StyledTableCell align="right">Delete</StyledTableCell>
                                    <StyledTableCell align="right">Update</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {depoSektori.map((depoSektori) => (
                                    <StyledTableRow key={depoSektori.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {depoSektori.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {depo.map((depoo) => (
                                                (depoSektori.depoId == depoo.id) ? depoo.name : ""
                                            ))}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {sektori.map((sektorii) => (
                                                (depoSektori.sektoriId == sektorii.id) ? sektorii.emertimi : ""
                                            ))}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <button type="submit" onClick={() => deleteDepoSektori(depoSektori.id)}><img src={remove} className="img--delete" /></button>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <button><img src={edit} className="img--update" /></button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </main>
        </div>
    )
}