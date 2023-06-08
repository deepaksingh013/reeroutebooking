import React, { useState } from 'react';
import { Box, Container, Grid, Paper, Typography, InputLabel, TextField, Button } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import bgImg from "../images/Photo-bg.png";
import success from "../images/messages.png"
// import { Carousel } from 'react-responsive-carousel';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Forms from './Forms';
import bullets from "../images/bullets.png"

const makeStyle = {
    mainBox: {
        position: "absolute",
        marginTop: "-115px",
        paddingTop: "10%",
        top: "0px",
        minHeight: "75vh",
        position: "relative",
        backgroundImage: `linear-gradient(90.13deg,
          rgba(0, 0, 0, 0.9) 1.07%,
          rgba(0, 0, 0, 0.6) 99.9%),
          url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "@media (max-width: 1100px)": {
            paddingTop: "15%",
        },
        "@media (max-width: 700px)": {
            paddingTop: "25%",
        },
        "@media (max-width: 428px)": {
            paddingTop: "33%",
        },
    },
    leftContent: {
        color: "#fff",
        // border: "1px solid red",
        // mt: "35%"
    },
    streamLine: {
        width: "65%",
        background: "#041C3780",
        borderLeft: "4px solid #FFB629",
        padding: "5px",
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        "@media (max-width: 488px)": {
            display: "none"
        },
    },
    reRoute: {
        fontSize: "60px",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "700",
        "@media (max-width: 768px)": {
            fontSize: "40px"
        },
        "@media (max-width: 488px)": {
            fontSize: "25px"
        },
    },
    listItem: {
        display: 'list-item',
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Krub', sans-serif",
        // mobile view
        "@media (max-width: 450px)": {
            display: "none"
        },
    },
    form: {
        position: "relative",
        // height:"50%",
        marginBottom: "2rem",
        minHeight: "460px",

        // padding: "25px 10px 15px 22px",
        paddingTop: "20px",
        paddingBottom: "15px",
        borderRadius: "12px",
        // "@media (max-width: 768px)": {
        //     height: "400px"
        // },
    },
    bulletItems: {
        fontSize: "14px",
        fontFamily: "'Krub', sans-serif",
        fontWeight: "500",
        marginLeft: "10px",
        color: "#2A4F6D"
    },
    listItem2: {
        marginTop: "1rem",
        display: "none",
        // mobile view
        "@media (max-width: 450px)": {
            display: "block"
        },
    }

};

export default function Banner() {


    const [formData, setFormData] = useState({});
    const [currentForm, setCurrentForm] = useState(1);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Process form data if needed
        // Example: Send form data to server or update state
        if (currentForm < 3) {
            setCurrentForm(currentForm + 1);
        }
    };

    const handleGoBack = () => {
        if (currentForm > 1) {
            setCurrentForm(currentForm - 1);
        }
    };

    const handleReset = () => {
        setFormData({});
        setCurrentForm(1);
    };



    // const [formData, setFormData] = useState({});
    const [showSecondForm, setShowSecondForm] = useState(false);
    const [showThirdForm, setShowThirdForm] = useState(false);
    const [showFirstForm, setShowFirstForm] = useState(false);

    // DROPDOWN MENU STATE
    const [department, setDepartment] = React.useState('');
    const [length, setLength] = React.useState('');
    const [Height, setHeight] = React.useState('');

    const handleFirstFormSubmit = (e) => {
        e.preventDefault();
        setShowSecondForm(true);
    };

    const handleSecondFormSubmit = (e) => {
        e.preventDefault();
        setShowThirdForm(true);
    };

    const handleThirdFormSubmit = (e) => {
        e.preventDefault();
        console.log('All forms submitted!');
    };

    const handleChange = (event) => {
        setDepartment(event.target.value);
    };

    const handleLength = (event) => {
        setLength(event.target.value);
    };
    const handleHeight = (event) => {
        setHeight(event.target.value);
    };

    const backClick = () => {
        setShowThirdForm(true)
    }
    return (
        <>
            <Box sx={makeStyle.mainBox}>
                <Box>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item lg={6} xs={12}>
                                <Box>
                                    <Box sx={makeStyle.leftContent}>
                                        <Typography sx={makeStyle.streamLine}>Streamline Your Logistics with Easy Truck Booking</Typography>
                                        <Typography sx={makeStyle.reRoute}>ReeRoute: India's Fastest Truck Booking Platform!</Typography>
                                        {/* list items */}
                                        <ListItem
                                            sx={makeStyle.listItem}>
                                            Pan-India operations
                                        </ListItem>
                                        <ListItem
                                            sx={makeStyle.listItem}>
                                            Associated with 3,000+ SMEs/Transporters
                                        </ListItem>
                                        <ListItem
                                            sx={makeStyle.listItem}>
                                            Guaranteed Timely Payments
                                        </ListItem>
                                    </Box>
                                </Box>
                            </Grid>
                            {/* rightSide content */}
                            <Grid item lg={6} xs={12}>
                                <Paper sx={makeStyle.form}>
                                    <Forms />
                                </Paper>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>

            </Box >
            {/* mobile view */}
            <Box sx={makeStyle.listItem2}>
                <Box sx={{ display: "flex", ml: "15px", mb: "3px" }}>
                    <Box><img src={bullets} alt="" sx={makeStyle.bullets} /></Box>
                    <Typography sx={makeStyle.bulletItems}>Pan-India operations</Typography>
                </Box>
                <Box sx={{ display: "flex", ml: "15px", mb: "3px" }}>
                    <Box><img src={bullets} alt="" sx={makeStyle.bullets} /></Box>
                    <Typography sx={makeStyle.bulletItems}>Partnered with 10,000+ truckers </Typography>
                </Box>
                <Box sx={{ display: "flex", ml: "15px", mb: "3px" }}>
                    <Box><img src={bullets} alt="" sx={makeStyle.bullets} /></Box>
                    <Typography sx={makeStyle.bulletItems}>Rated 5 ⭐️ by 3,000+ clients</Typography>
                </Box>
            </Box>

            {/* mobile view */}


        </>
    );
}