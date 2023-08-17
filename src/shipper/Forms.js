import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, InputLabel, Grid } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import bgImg from "../images/Photo-bg.png";
import success from "../images/messages.png"
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Swal from 'sweetalert2';
import FormControl from '@mui/material/FormControl';
import bullets from "../images/bullets.png";
import bgImg1 from "../images/Pattern.png";
import bgImg2 from "../images/165.png";
import bgImg3 from "../images/166.png";
import Banner from './Banner';

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
    },
    form: {
        position: "relative",
        marginBottom: "2rem",
        height: "460px",
        padding: "25px 20px 20px 22px",
        borderRadius: "12px",
        "@media (max-width: 768px)": {
            height: "400px"
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
        position: "abssolute",
        bottom: "10",
        width: "100%",
        background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",
        color: "#000000",
        fontWeight: "600",
        fontSize: "10px",
        height: "42px",
        marginTop: "120px",
        "@media (max-width: 800px)": {
            marginTop: "90px",
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
        marginBottom: "40px",
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
        marginTop: "20px",
        marginBottom: "20px"
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
    }

};


export default function Forms() {
    const [formData, setFormData] = useState({});
    const [currentForm, setCurrentForm] = useState(1);
    const [length, setLength] = React.useState('');
    const [Height, setHeight] = React.useState('');
    const [department, setDepartment] = React.useState('');


    const clickHandle = () =>{
        Swal.fire(
            'Great!',
            'Form Has Been Submitted!',
            'success'
        )
    }


    const handleChange = (event) => {
        setDepartment(event.target.value);
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


    const handleLength = (event) => {
        setLength(event.target.value);
    };
    const handleHeight = (event) => {
        setHeight(event.target.value);
    };

    const [backgroundImage, setBackgroundImage] = useState("");
    const [circle, setCircle] = useState(false)


    // useEffect(() => {
    //     setBackgroundImage(bgImg1);
    // }, [backgroundImage]);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (currentForm < 3) {
            setCurrentForm(currentForm + 1);
            updateBackgroundImage(currentForm + 1);
        }
        if (currentForm === 1) {
            setCircle(true)
        }


    };

    const updateBackgroundImage = (formNumber) => {
        let newBackgroundImage = '';

        if (formNumber === 2) {
            newBackgroundImage = bgImg2;
        } else if (formNumber === 3) {
            newBackgroundImage = bgImg3;
        }
        setBackgroundImage(` linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(94,115,48,0.8183648459383753) 35%, rgba(0,212,255,1) 100%),url(${newBackgroundImage})`);
    };







    return (
        <Box sx={{ backgroundImage: backgroundImage }}>


            <Container>
                <Grid container spacing={2} >
                    <Grid item lg={6}> <Banner /> </Grid>
                    <Grid item lg={6}>
                        <div>
                            {currentForm === 1 && (
                                <form onSubmit={handleFormSubmit}>
                                    <Typography sx={makeStyle.title}>Book Your Truck</Typography>
                                    <InputLabel htmlFor="my-input" sx={makeStyle.destination}>From</InputLabel>
                                    <TextField placeholder="Enter origin city" sx={makeStyle.textField}></TextField>
                                    <InputLabel htmlFor="my-input" sx={makeStyle.destination}>To</InputLabel>
                                    <TextField placeholder='Enter destination city' sx={makeStyle.textField}></TextField>
                                    <Box type="submit">
                                        <Button sx={makeStyle.formBtn} type="submit">Nextfdsdsdf</Button>
                                    </Box>

                                </form>
                            )}
                            {currentForm === 2 && (
                                <form onSubmit={handleFormSubmit}>

                                    <Box sx={{ position: "relative" }}>
                                        <ArrowBackIcon sx={makeStyle.arrowBack} onClick={handleReset}
                                        />
                                        <Typography sx={makeStyle.title}>Book Your Truck</Typography>
                                    </Box>

                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography sx={makeStyle.city}>
                                            From:  <Typography variant='span' sx={makeStyle.cityDes}>Mumbai</Typography>
                                        </Typography>
                                        <Typography sx={makeStyle.city}>
                                            To: <Typography variant='span' sx={makeStyle.cityDes}>Delhi</Typography>
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
                                    />
                                    <Typography sx={makeStyle.label}>vehicle type</Typography>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
                                            <Select
                                                // labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={department}
                                                label="Department"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Truck</MenuItem>
                                                <MenuItem value={20}>Bus</MenuItem>
                                            </Select>
                                        </FormControl>
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
                                                            <MenuItem value={10}>14ft</MenuItem>
                                                            <MenuItem value={20}>16ft</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
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
                                                            <MenuItem value={10}>8ft</MenuItem>
                                                            <MenuItem value={20}>10ft</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Box>
                                        </Box>
                                        
                                    
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

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
