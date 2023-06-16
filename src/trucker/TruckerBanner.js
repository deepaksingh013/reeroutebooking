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
import truckImg1 from "../images/Photo-bg.png";
import truckImg2 from "../images/truck.png";
import truckImg3 from "../images/indian.png";
import CircleIcon from '@mui/icons-material/Circle';
import * as Yup from 'yup';
import axios from 'axios';

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
        marginTop: "10px"
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
const initialStyle = {
    height: "20px",
    width: "20px",
    backgroundColor: "#fff",
    marginBottom: "10px",
    borderRadius: "50%"
};

const updateStyle = {
    height: "20px",
    width: "20px",
    backgroundColor: "#E57E38",
    marginBottom: "10px",
    borderRadius: "50%"
};



export default function TruckerBanner() {


    const [currentForm, setCurrentForm] = useState(1);
    const [errors, setErrors] = useState({});

    // banner carosal state
    const [currentBackground, setCurrentBackground] = useState(0);
    const backgrounds = [truckImg1, truckImg2, truckImg3];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prevBackground) => (prevBackground + 1) % backgrounds.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const [circleStyles, setCircleStyles] = useState([
        initialStyle,
        initialStyle,
        initialStyle
    ]);

    useEffect(() => {
        const updatedStyles = circleStyles.map((style, index) => {
            if (index === currentBackground) {
                return updateStyle;
            } else {
                return initialStyle;
            }
        });

        setCircleStyles(updatedStyles);
    }, [currentBackground]);


    // DROPDOWN MENU STATE
    const [department, setDepartment] = React.useState('');
    const [mobile, setmobile] = React.useState('');
    const [noOfTrucks, setnoOfTrucks] = React.useState('');


    // const handleSecondFormSubmit = (e) => {
    //     e.preventDefault();
    //     setShowThirdForm(true);
    // };

    // const handleThirdFormSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('All forms submitted!');
    // };

    const handleDepartChange = (event) => {
        setDepartment(event.target.value);
        if (errors.department) {
            setErrors((prevErrors) => ({ ...prevErrors, department: '' }));
        }
    };

    const handleMobileChange = (event) => {
        setmobile(event.target.value);
        if (errors.mobile) {
            setErrors((prevErrors) => ({ ...prevErrors, mobile: '' }));
        }
    };
    const handleTrucksChange = (event) => {
        setnoOfTrucks(event.target.value);
        if (errors.noOfTrucks) {
            setErrors((prevErrors) => ({ ...prevErrors, noOfTrucks: '' }));
        }
    };

    const validationSchema = Yup.object({
        mobile: Yup.number().required('Required.'),
        noOfTrucks: Yup.number().required('Required.'),
        department: Yup.string().required('Required.')
    });

   const handleTruckerSubmit = (e) => {
    console.log("yooooo");
        e.preventDefault();

        const formData = { mobile, noOfTrucks, department };
        console.log(formData);
    
        validationSchema
            .validate(formData, { abortEarly: false })
            .then(() => {
                console.log("something?")
                axios.post('http://18.143.242.23:8002/api/trucker/createrequest', 
                {   
                    "mobile" : mobile,
                    "noOfTrucks" : noOfTrucks,
                    "city" : department
                })
                .then(response => {
                    console.log('saved');
                    console.log(response.data); // Handle the login response data
                    // if (currentForm < 2) {
                        setCurrentForm(2);
                    // }
                })
                .catch(error => {
                    console.error('error');
                    console.error(error); // Handle the error

                });
                // Form data is valid, do something with it
                console.log(formData);
            })
            .catch((error) => {
                console.log(error);

                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            });
    };


    return (
        <>
            <Box sx={makeStyle.mainBox}>
                <Box sx={{
                    backgroundImage: `linear-gradient(90.13deg,
          rgba(0, 0, 0, 0.9) 1.07%,
          rgba(0, 0, 0, 0.6) 99.9%),url(${backgrounds[currentBackground]})`, backgroundSize: "cover", backgroundPosition: "center", width: "100%", pt: "8rem", pb: "1rem"
                }}>
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
                                        <form onSubmit={handleTruckerSubmit}>
                                            <Typography sx={makeStyle.title}>Onboard Yourself!</Typography>
                                            <InputLabel htmlFor="my-input" sx={makeStyle.destination}>Enter Mobile No.</InputLabel>
                                            <TextField placeholder="Enter Mobile No." onChange={handleMobileChange} sx={makeStyle.textField}></TextField>

                                            {errors.mobile && <div style={{ color: "red", marginBottom: "2rem" }}>{errors.mobile}</div>}
                                            <InputLabel htmlFor="my-input" sx={makeStyle.destination}>No. Of Trucks</InputLabel>
                                            <TextField placeholder='No. Of Trucks' onChange={handleTrucksChange} sx={makeStyle.textField}></TextField>
                                            {errors.noOfTrucks && <div style={{ color: "red", marginBottom: "2rem" }}>{errors.noOfTrucks}</div>}
                                            <Typography sx={makeStyle.label}>City</Typography>
                                            <Box sx={{ minWidth: 120, mt: "15px" }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                                                    <Select
                                                        // labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={department}
                                                        label="Department"
                                                        onChange={handleDepartChange}
                                                    >
                                                        <MenuItem value="Mumbai">Mumbai</MenuItem>
                                                        <MenuItem value="Delhi">Delhi</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                            {errors.department && <div style={{ color: "red", marginBottom: "2rem" }}>{errors.department}</div>}
                                            <Box type="submit">
                                                <Button sx={makeStyle.formBtn} type="submit">Next</Button>
                                            </Box>
                                        </form>
                                    )}
                                    {currentForm === 2 && (
                                        <form >

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
                    {/* <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pb: "2rem", mt: "2rem" }}>
                        <CircleIcon sx={currentForm === 1 ? makeStyle.initialCircle : makeStyle.updateCircle} />
                        <CircleIcon sx={currentForm === 2 ? makeStyle.initialCircle : makeStyle.updateCircle} />
                        <CircleIcon sx={currentForm === 3 ? makeStyle.initialCircle : makeStyle.updateCircle} />
                    </Box> */}
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "4rem", mb: "2rem" }}>
                        <Box style={circleStyles[0]} marginRight={2} />
                        <Box style={circleStyles[1]} marginRight={2} />
                        <Box style={circleStyles[2]} marginRight={2} />
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