import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Paper, Typography, InputLabel, TextField, Button } from '@mui/material';
import { List, ListItem, ListItemText, useEf } from '@mui/material';
import bgImg from "../images/Photo-bg.png";
import success from "../images/messages.png"
// import { Carousel } from 'react-responsive-carousel';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Forms from './Forms';
import bullets from "../images/bullets.png"
import bgImg1 from "../images/Pattern.png";
import bgImg2 from "../images/truck.png";
import bgImg3 from "../images/indian.png";
import CircleIcon from '@mui/icons-material/Circle';

const makeStyle = {
    mainBox: {
        // position: "absolute",
        // marginTop: "-115px",
        // paddingTop: "10%",
        // top: "0px",
        // minHeight: "100vh",
        // height:"80vh",
        // position: "relative",
        // backgroundImage: `linear-gradient(90.13deg,
        //   rgba(0, 0, 0, 0.9) 1.07%,
        //   rgba(0, 0, 0, 0.6) 99.9%),
        //   url(${bgImg})`,

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
        // height:"500px",
        // padding: "25px 10px 15px 22px",
        paddingTop: "20px",
        // paddingBottom: "15px",
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
    },
    mainBox: {
        position: "absolute",
        // marginTop: "-225px",
        // paddingTop: "10%",
        top: "0px",
        // minHeight: "75vh",
        position: "relative",
        //     backgroundImage: `linear-gradient(90.13deg,
        //   rgba(0, 0, 0, 0.9) 1.07%,
        //   rgba(0, 0, 0, 0.6) 99.9%),
        //   url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // "@media (max-width: 1100px)": {
        //     paddingTop: "15%",
        // },
        // "@media (max-width: 700px)": {
        //     paddingTop: "25%",
        // },
        // "@media (max-width: 428px)": {
        //     paddingTop: "33%",
        // },
    },
    leftContent: {
        color: "#fff",
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
        "@media (max-width: 450px)": {
            display: "none"
        },
    },
    form: {
        padding: "20px",
        position: "relative",

        // marginBottom: "2rem",
        height: "560px",
        // padding: "25px 20px 20px 22px",
        borderRadius: "12px",
        "@media (max-width: 768px)": {
            height: "490px"
        },
    },
    title: {
        textAlign: "center",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "500",
        fontSize: "24px",
        color: "#000000",
        marginBottom: "40px"

    },
    formBtn: {
        position: "absolute",
        bottom: "20px",
        width: "93%",
        background: "#E57E38",
        color: "#000000",
        fontWeight: "600",
        fontSize: "10px",
        height: "42px",
        // marginTop: "120px",
        "@media (max-width: 800px)": {
          marginTop: "90px",
        },
        "@media (max-width: 483px)": {
          width: "89%"
        },
        "&:hover": {
          background: "#E57E38", // Set the same color for hover
        },
      },
      
    destination: {
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        color: "#000000"

    },
    textField: {
        marginTop: "5px",
        marginBottom: "10px",
        width: "100%"
    },
    city: {
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        color: "#000000 60%"
    },
    cityDes: {
        fontSize: "15px",
        fontWeight: "600",
        fontFamily: "'Rubik', sans-serif",
        color: "#2A4F6D"
    },
    label: {
        fontSize: "15px",
        fontWeight: "500",
        fontFamily: "'Rubik', sans-serif",
        color: "#000",
        marginTop:"10px"
    },
    kgBtn: {
        color: "#23212A",
        backgroundColor: "#FFB629",
        '&:hover': {
            backgroundColor: "#FFB629",
            // Add any other styles you want for the hover state
        },
    },
    tons: {
        color: "#23212A",
        backgroundColor: "#fff",
        '&:hover': {
            backgroundColor: "#fff",
            // Add any other styles you want for the hover state
        },
    },
    success: {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        flexDirection: "column"
    },
    successImg: {
        height: "100px",
        width: "100px",
        margin: "auto",
        marginTop: "6rem"
    },
    txt1: {
        textAlign: "center",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "500",
        fontSize: "24px",
        color: "#000000",
        marginTop: "2rem"
    },
    txt2: {
        color: 'rgba(0, 0, 0, 0.5)',
        textAlign: "center",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "500",
        fontSize: "14px",
        marginTop: "1rem"
    },
    arrowBack: {
        cursor: "pointer",
        position: "absolute",
        top: "10px",
        color: "#2A4F6D"
    },
    // circle

    initialCircle: {
        color: "#E57E38",
        marginRight: "10px"
    },
    updateCircle: {
        color: "#fff",
        marginRight: "10px"
    }




};

export default function TruckerBanner() {


    const [formData, setFormData] = useState({});
    const [currentForm, setCurrentForm] = useState(1);


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

    const [backgroundImage, setBackgroundImage] = useState("");
    const [circle, setCircle] = useState(false)



    useEffect(() => {
        setBackgroundImage('url(bgImg)');
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (currentForm < 3) {
            setCurrentForm(currentForm + 1);
            updateBackgroundImage(currentForm + 1);
        }



    };

    const updateBackgroundImage = (formNumber) => {
        let newBackgroundImage = '';

        if (formNumber === 2) {
            newBackgroundImage = bgImg2;
        } else if (formNumber === 3) {
            newBackgroundImage = bgImg3;
        }
        setBackgroundImage(` linear-gradient(90.13deg,
            rgba(0, 0, 0, 0.9) 1.07%,
            rgba(0, 0, 0, 0.6) 99.9%),url(${newBackgroundImage})`);
    };

    useEffect(() => {

        setBackgroundImage(`linear-gradient(90.13deg,
            rgba(0, 0, 0, 0.9) 1.07%,
            rgba(0, 0, 0, 0.6) 99.9%),url(${bgImg})`);
    }, []);

    return (
        <>
            <Box sx={makeStyle.mainBox}>
                <Box sx={{ backgroundImage: backgroundImage, backgroundSize: "cover", backgroundPosition: "center", width: "100%",pt:"6rem" }}>

                    <Container >
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
                            <Grid item lg={6} xs={12} sx={{ position: "relative" }}>
                                <Paper sx={makeStyle.form}>
                                    {currentForm === 1 && (
                                        <form onSubmit={handleFormSubmit}>
                                            <Typography sx={makeStyle.title}>Onboard Yourself!</Typography>
                                            <InputLabel htmlFor="my-input" sx={makeStyle.destination}>Enter Mobile No.</InputLabel>
                                            <TextField placeholder="Enter Mobile No." sx={makeStyle.textField}></TextField>
                                            <InputLabel htmlFor="my-input" sx={makeStyle.destination}>No. Of Trucks</InputLabel>
                                            <TextField placeholder='No. Of Trucks' sx={makeStyle.textField}></TextField>
                                            <Typography sx={makeStyle.label}>City</Typography>
                    <Box sx={{ minWidth: 120,mt:"15px" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={department}
                                label="Department"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Mumbai</MenuItem>
                                <MenuItem value={20}>Delhi</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                                            <Box type="submit">
                                                <Button sx={makeStyle.formBtn} type="submit">Next</Button>
                                            </Box>
                                        </form>
                                    )}
                                    {currentForm === 2 && (
                                        <form onSubmit={handleFormSubmit}>

                                            <Box sx={makeStyle.success}>
                                                <img src={success} alt="" style={makeStyle.successImg} />
                                                <Typography sx={makeStyle.txt1}>Submitted Successfully</Typography>
                                                <Typography sx={makeStyle.txt2}>Our executive will get in touch with you at the earliest.</Typography>
                                                <Button type="submit" variant="contained" color="primary" sx={makeStyle.formBtn}>
                                                    Close
                                                </Button>
                                            </Box>
                                        </form>
                                    )}
                                    {currentForm === 3 && (
                                        <form onSubmit={handleFormSubmit}>

                                            <Box sx={makeStyle.success}>
                                                <img src={success} alt="" style={makeStyle.successImg} />
                                                <Typography sx={makeStyle.txt1}>Submitted Successfully</Typography>
                                                <Typography sx={makeStyle.txt2}>Our executive will get in touch with you at the earliest.</Typography>
                                                <Button type="submit" variant="contained" color="primary" sx={makeStyle.formBtn}>
                                                    Close
                                                </Button>
                                            </Box>
                                        </form>
                                    )}
                                </Paper>
                            </Grid>

                        </Grid>
                    </Container>
                    {/* circular icons */}
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pb: "2rem", mt: "2rem" }}>
                        <CircleIcon sx={currentForm === 1 ? makeStyle.initialCircle : makeStyle.updateCircle} />
                        <CircleIcon sx={currentForm === 2 ? makeStyle.initialCircle : makeStyle.updateCircle} />
                        <CircleIcon sx={currentForm === 3 ? makeStyle.initialCircle : makeStyle.updateCircle} />
                    </Box>
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




        </>
    );
}