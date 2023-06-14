import React from 'react'
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const contactUs = [
    {
        icon: <PhoneOutlinedIcon />,
        data: "Contact@logistics.com"
    },
    {
        icon: <EmailOutlinedIcon />,
        data: "(00) 112 365 489"
    },
    {
        icon: <AccessTimeOutlinedIcon />,
        data: "Mon - Sat 9.00 - 18.00 Sunday Closed"
    }
]

const makeStyle = {
    contactDetail: {
        width: "70%",
        margin: "auto",
        border: "1px solid rgba(0, 0, 0, 0.8)",
        borderRadius: "20px",
        mt: "3rem",
        mb: "3rem",
        p: "2rem",
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 600px)": {
            width: "80%",
        },
        "@media (max-width: 500px)": {
            border:"none"
        }
    },
    contact: {
        backgroundColor: "#E8E8E81A 80%",
        borderLeft: "4px solid #F79633",
        width: "100px",
        color: "#000",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "14px",
        padding: "2px 0px 2px 10px",
    },
    touch: {
        marginTop: "10px",
        fontWeight: "600",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "35px",
        color: "#000000"
    },
    content: {
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Krub', sans-serif",
        fontStyle: "normal",
        color: "#000000"
    },
    icon: {
        backgroundColor: "#000000",
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        padding: '13px 10px 11px 12px',
        color: "#fff",
        margin: "auto"
    },
    btn: {
        color: "#23212A",
        alignItems: "center",
        width: "194px",
        margin: "auto",
        mt: "20px",
        height: "60px",
        textTransform:"capitalize",

        backgroundColor: "#F79633",
        '&:hover': {
            backgroundColor: "#F79633",
            // Add any other styles you want for the hover state
        },

    },
    btn2: {
        textTransform:"capitalize",
        color: "#23212A",
        alignItems: "center",
        width: "194px",
        margin: "auto",
        mt: "10px",
        height: "60px",

        backgroundColor: "rgba(0, 0, 0, 0.2)",
        '&:hover': {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            // Add any other styles you want for the hover state
        },

    },
    textField: {
        width: "100%",
        fontWeight: "400",
        '& input::placeholder': {
            color: "rgb(0, 0, 0)",
            textTransform:"capitalize"
        },
    },


}


export default function CarrerDetail() {
    const [department, setDepartment] = React.useState('');

    const handleChange = (event) => {
        setDepartment(event.target.value);
    };
    return (
        <>
            <Container>
                <Box sx={makeStyle.contactDetail}>
                    <Typography sx={makeStyle.contact}>Carrers</Typography>
                    <Typography sx={makeStyle.touch}>Join our Team</Typography>
                    <Typography sx={makeStyle.content}>Join Our Team: Unlock Your Potential and Build a Fulfilling Career in the Dynamic World of Logistics!</Typography>
                    <Grid container spacing={2} sx={{ mt: "10px" }}>
                        {contactUs.map((item, index) => {
                            return (

                                <Grid item lg={4} xs={12} sm={6}>
                                    <Box sx={{ diplay: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={makeStyle.icon}>{item.icon}</Box>
                                        <Box sx={{ textAlign: "center" }}>
                                            <Typography sx={{ mt: "10px" }}>{item.data}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                            );
                        })}
                    </Grid>

                    {/* text field  */}
                    <Grid container spacing={2} sx={{ mt: "10px" }}>
                        <Grid item lg={6} xs={12}>
                            <TextField sx={makeStyle.textField} placeholder='Name*' />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField sx={makeStyle.textField} placeholder='email id*' />
                        </Grid>

                    </Grid>
                    <Grid container spacing={2} sx={{ mt: "10px" }}>
                        <Grid item lg={6} xs={12}>
                            <TextField sx={makeStyle.textField} placeholder='mobile number*' />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Department*</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={department}
                                        label="Department"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Sales</MenuItem>
                                        <MenuItem value={20}>Marketing</MenuItem>
                                        <MenuItem value={30}>Operations</MenuItem>
                                        <MenuItem value={40}>Technology</MenuItem>
                                        <MenuItem value={50}>Finance</MenuItem>
                                        <MenuItem value={60}>Others</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                    <Button sx={makeStyle.btn2}>Upload Resume</Button>

                    <Button sx={makeStyle.btn}>Submit Message</Button>


                </Box>
            </Container>
        </>
    )
}
