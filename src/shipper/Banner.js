import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Paper, Typography, InputLabel, TextField, Button } from '@mui/material';
import { List, ListItem, ListItemText, useEf } from '@mui/material';
import bgImg from "../images/Photo-bg.png";
import success from "../images/messages.png"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Forms from './Forms';
import bullets from "../images/bullets.png"
import truckImg1 from "../images/Photo-bg.png";
import truckImg2 from "../images/truck.png";
import truckImg3 from "../images/indian.png";
import CircleIcon from '@mui/icons-material/Circle';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const makeStyle = {
    mainBox: {

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
            height: "530px"
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
    destination2: {
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        color: "#000000",
        marginTop: "3rem"

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
        marginTop: "10px",
        marginBottom: "10px"
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




export default function Banner() {





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

    const handleVehicleType = (event) => {
        setVehicleType(event.target.value);
        if (errors.department) {
            setErrors((prevErrors) => ({ ...prevErrors, to: '' }));
        }
    };
    console.log(department)

    const handleLength = (event) => {
        setLength(event.target.value);
        if (errors.length) {
            setErrors((prevErrors) => ({ ...prevErrors, to: '' }));
        }
    };
    const handleHeight = (event) => {
        setHeight(event.target.value);
        if (errors.Height) {
            setErrors((prevErrors) => ({ ...prevErrors, to: '' }));
        }
    };

    const backClick = () => {
        setShowThirdForm(true)
    }

    const [backgroundImage, setBackgroundImage] = useState("");
    const [circle, setCircle] = useState(false)

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     if (currentForm < 3) {
    //         setCurrentForm(currentForm + 1);
    //     }

    // };

    const closeHandler = () => {
        if (currentForm > 2) {
            setCurrentForm(currentForm - 2);
        }
    }


    // validation firstform

    const validationSchema = Yup.object({
        from: Yup.string().required('Required.'),
        to: Yup.string().required('Required.'),
        // weight:Yup.string().required('Required.'),

    });
    const validationSchema2 = Yup.object({
        weight: Yup.string().required('Required.'),
        vehicleType: Yup.string().required('Required.'),
        length: Yup.string().required('Required.'),
        Height: Yup.string().required('Required.'),
    });
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [errors, setErrors] = useState({});

    const [weight, setWeight] = useState("");
    const [vehicleType, setVehicleType] = useState("")
    const [truckLength, setTruckLength] = useState("")
    const [truckHeight, setTruckHeight] = useState("")



    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = { from, to };
        validationSchema
            .validate(formData, { abortEarly: false })
            .then(() => {
                // Form data is valid, do something with it
                // axios.post('http://localhost:8002/shipper/createrequest', 
                // { "from" : from, "to": to })
                //     .then(response => {
                //         console.log('saved');
                //         console.log(response.data); // Handle the login response data
                //     })
                //     .catch(error => {
                //         console.error('error');
                //         console.error(error); // Handle the error

                //     });
                // if (currentForm < 2) {
                    setCurrentForm(2);
                // }
                console.log(formData);
            })
            .catch((error) => {
                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            });

    };

    const handleFormSubmit2 = (e) => {
        e.preventDefault();

        const formData = { weight, vehicleType, length, Height };

        validationSchema2
            .validate(formData, { abortEarly: false })
            .then(() => {
                axios.post('http://localhost:8002/api/shipper/createrequest', 
                {   
                    "from" : from,
                    "to" : to,
                    "materialWeight" : weight,
                    "vehicleType" : vehicleType,
                    "truckLength": length,
                    "truckHeight": Height
                })
                .then(response => {
                    console.log('saved');
                    console.log(response.data); // Handle the login response data
                    // if (currentForm < 2) {
                        setCurrentForm(3);
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
                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            });
    };

    const handleFromChange = (e) => {
        setFrom(e.target.value);
        if (errors.from) {
            setErrors((prevErrors) => ({ ...prevErrors, from: '' }));
        }
    };

    const handleToChange = (e) => {
        setTo(e.target.value);
        if (errors.to) {
            setErrors((prevErrors) => ({ ...prevErrors, to: '' }));
        }
    };
    const handleWeightChange = (e) => {
        setWeight(e.target.value);
        if (errors.weight) {
            setErrors((prevErrors) => ({ ...prevErrors, weight: '' }));
        }
    };
    const handleVehicleChange = (e) => {
        setVehicleType(e.target.value);
        if (errors.weight) {
            setErrors((prevErrors) => ({ ...prevErrors, to: '' }));
        }
    };


    // api integration





    return (


        <>
            <Box sx={makeStyle.mainBox}>
                <Box sx={{
                    backgroundImage: `linear-gradient(90.13deg,
          rgba(0, 0, 0, 0.9) 1.07%,
          rgba(0, 0, 0, 0.6) 99.9%),url(${backgrounds[currentBackground]})`, backgroundSize: "cover", backgroundPosition: "center", width: "100%", pt: "8rem", pb: "1rem"
                }}>

                    <Container >
                        <Grid container spacing={2} >
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
                                            <Typography sx={makeStyle.title}>Book Your Truck</Typography>
                                            <InputLabel htmlFor="my-input" sx={makeStyle.destination}>From</InputLabel>
                                            <TextField placeholder="Enter origin city" onChange={handleFromChange} sx={makeStyle.textField}></TextField>
                                            {errors.from && <div style={{ color: "red", marginBottom: "2rem" }}>{errors.from}</div>}
                                            <InputLabel htmlFor="my-input" sx={makeStyle.destination2}>To</InputLabel>
                                            <TextField placeholder='Enter destination city' onChange={handleToChange} sx={makeStyle.textField}></TextField>
                                            {errors.to && <div style={{ color: "red" }}>{errors.to}</div>}
                                            <Box type="submit">
                                                <Button sx={makeStyle.formBtn} type="submit">Next</Button>
                                            </Box>

                                        </form>
                                    )}
                                    {currentForm === 2 && (
                                        <form onSubmit={handleFormSubmit2}>
                                            <Box sx={{ position: "relative" }}>
                                                <ArrowBackIcon sx={makeStyle.arrowBack} onClick={handleReset}
                                                />
                                                <Typography sx={makeStyle.title}>Book Your Truck</Typography>
                                            </Box>

                                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                <Typography sx={makeStyle.city}>
                                                    From:  <Typography variant='span' sx={makeStyle.cityDes}>{from}</Typography>
                                                </Typography>

                                                <Typography sx={makeStyle.city}>
                                                    To: <Typography variant='span' sx={makeStyle.cityDes}>{to}</Typography>
                                                </Typography>
                                            </Box>
                                            <Typography sx={makeStyle.label}>Material Weight</Typography>
                                            <TextField

                                                fullWidth
                                                InputProps={{
                                                    endAdornment: (
                                                        <div >
                                                            <Box sx={{ display: "flex" }}>
                                                                <Button variant="contained" color="primary" sx={makeStyle.kgBtn}>
                                                                    KGs
                                                                </Button>
                                                                <Button variant="contained" color="secondary" sx={makeStyle.tons}>
                                                                    Tons
                                                                </Button>
                                                            </Box>

                                                        </div>
                                                    ),
                                                }}
                                                onChange={handleWeightChange}
                                            />
                                            {errors.weight && <div style={{ color: "red" }}>{errors.weight}</div>}
                                            <Typography sx={makeStyle.label}>Vehicle type</Typography>
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
                                                    <Select
                                                        // labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={vehicleType}
                                                        label="vehicleType"
                                                        onChange={handleVehicleType}
                                                    >
                                                        <MenuItem value="Truck">Truck</MenuItem>
                                                        <MenuItem value="Bus">Bus</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                {errors.vehicleType && <div style={{ color: "red" }}>{errors.vehicleType}</div>}

                                            </Box>
                                            {/*  */}
                                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                <Box>
                                                </Box>
                                                {/*  */}
                                                {/* <Box> */}
                                                <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
                                                    <Box>
                                                        <Typography sx={makeStyle.label}>Truck Length</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Box sx={{ width: "90%", display: "flex" }}>

                                                            <FormControl fullWidth>
                                                                <InputLabel id="demo-simple-select-label" >Truck length</InputLabel>
                                                                <Select
                                                                    // labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={length}
                                                                    label="Department"
                                                                    onChange={handleLength}
                                                                >
                                                                    <MenuItem value="14ft">14ft</MenuItem>
                                                                    <MenuItem value="16ft">16ft</MenuItem>
                                                                </Select>
                                                            </FormControl>

                                                        </Box>
                                                        {errors.length && <div style={{ color: "red" }}>{errors.length}</div>}
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
                                                    <Box>

                                                        <Typography sx={makeStyle.label}>Truck Height</Typography>

                                                    </Box>
                                                    <Box>
                                                        <Box sx={{ width: "100%" }}>
                                                            <FormControl fullWidth>

                                                                <InputLabel id="demo-simple-select-label">Truck Height</InputLabel>
                                                                <Select
                                                                    // labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={Height}
                                                                    label="Department"
                                                                    onChange={handleHeight}
                                                                >
                                                                    <MenuItem value="8ft">8ft</MenuItem>
                                                                    <MenuItem value="10ft">10ft</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                            {errors.Height && <div style={{ color: "red" }}>{errors.Height}</div>}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>

                                            <Button type="submit" variant="contained" color="primary" sx={makeStyle.formBtn}>
                                                Submit
                                            </Button>

                                        </form>
                                    )}
                                    {currentForm === 3 && (
                                        <form >

                                            <Box sx={makeStyle.success}>
                                                <img src={success} alt="" style={makeStyle.successImg} />
                                                <Typography sx={makeStyle.txt1}>Submitted Successfully</Typography>
                                                <Typography sx={makeStyle.txt2}>Our executive will get in touch with you at the earliest.</Typography>
                                                <Button type="submit" variant="contained" color="primary" onClick={closeHandler} sx={makeStyle.formBtn} >
                                                    Close
                                                </Button>
                                            </Box>
                                        </form>
                                    )}
                                </Paper>
                            </Grid>

                        </Grid>
                    </Container>
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