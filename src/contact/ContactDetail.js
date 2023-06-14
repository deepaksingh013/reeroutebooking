import React from 'react'
import { Box, Container, Typography, Grid, TextField, Button, TextareaAutosize } from '@mui/material'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const contactUs = [
    {
        icon: <EmailOutlinedIcon />,
        data: "Contact@logistics.com",


    },
    {
        icon: <PhoneOutlinedIcon />,
        data: "(00) 112 365 489",


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
        pt: "6rem",
        pl: "4rem",
        pr: "4rem",
        pb: "8rem",
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 690px)": {
            pt: "4rem",
            pl: "2rem",
            pr: "2rem",
            pb: "4rem",
        },
        "@media (max-width: 600px)": {
            width: "80%",
        },
        "@media (max-width: 500px)": {
            border: "none"
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
        // padding: '13px 10px 11px 12px',
        color: "#fff",
        margin: "auto",
        diplay: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        width: "50px",


    },
    btn: {
        color: "#23212A",
        alignItems: "center",
        width: "194px",
        margin: "auto",
        mt: "30px",
        height: "60px",
        textTransform: "none",
        border: "none",
        borderRadius: "0px",
        backgroundColor: "#F79633",
        '&:hover': {
            backgroundColor: "#F79633",
            // Add any other styles you want for the hover state
        },

    },
    textField: {
        width: "100%",
        fontWeight: "400",
        '& input::placeholder': {
            color: "rgb(0, 0, 0)",
            textTransform: "capitalize"
        },
    },
    textArea: {
        height: "154px",
        width: "98%",
        marginTop: "30px",
        fontSize: "20px",
        color: "#000000",
        paddingTop: "10px",
        paddingLeft: "10px",
        '&::placeholder': {
            color: "#000000",
        }

    }
}




export default function ContactDetail() {
    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };
    return (
        <>
            <Container>
                <Box sx={makeStyle.contactDetail}>
                    <Typography sx={makeStyle.contact}>Contact</Typography>
                    <Typography sx={makeStyle.touch}>Get in touch with us</Typography>
                    <Typography sx={makeStyle.content}>Choose Reeroute as your logistics partner and experience seamless operations, improved efficiency, and cost-effective solutions for your supply chain</Typography>
                    <Grid container spacing={2} sx={{ mt: "10px" }}>
                        {contactUs.map((item, index) => {
                            return (

                                <Grid item lg={4} xs={12} sm={6}>
                                    <Box sx={{}}>
                                        <Box sx={makeStyle.icon}>
                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                                <Typography sx={{ mt: "11px" }}>  {item.icon}</Typography>
                                            </Box>
                                        </Box>
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
                            <TextField sx={makeStyle.textField} placeholder='Your name*' />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField sx={makeStyle.textField} placeholder='Email*' />
                        </Grid>

                    </Grid>
                    <Grid container spacing={2} sx={{ mt: "10px" }}>
                        <Grid item lg={6} xs={12}>
                            <TextField sx={makeStyle.textField} placeholder='Phone Number*' />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">City*</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={city}
                                        label="City"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Delhi</MenuItem>
                                        <MenuItem value={20}>Mumbai</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                    <TextareaAutosize
                        style={makeStyle.textArea}
                        placeholder="Your message"
                    />
                    <Button sx={makeStyle.btn}>Submit Message</Button>

                </Box>
            </Container>
        </>
    )
}
