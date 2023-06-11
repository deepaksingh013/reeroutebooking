import React, { useEffect } from 'react';
import { useState } from 'react';
import { TextField, Button, Box, Typography, InputLabel } from '@mui/material';
import bgImg1 from "../images/Pattern.png";
import bgImg2 from "../images/165.png";
import bgImg3 from "../images/166.png";
import image from "../images/Image.png"

const initialCircle = {
    height:"20px",
    width:"20px",
    color:"#000",
    borderRadius:"50%"
}
const updateColor = {
    height:"20px",
    width:"20px",
    color:"red",
    borderRadius:"50%"
}

export default function Form() {
    const [formData, setFormData] = useState({});
    const [currentForm, setCurrentForm] = useState(1);
    const [backgroundImage, setBackgroundImage] = useState("");
    const [circle,setCircle] = useState(false)


    useEffect(() => {
        setBackgroundImage(bgImg1);
    }, [backgroundImage]);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (currentForm < 3) {
            setCurrentForm(currentForm + 1);
            updateBackgroundImage(currentForm + 1);
        }
        if(currentForm === 1){
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
        <>
            <div style={{ backgroundImage: image }}>


                <div style={{ backgroundImage: backgroundImage }}>
                    {currentForm === 1 && (
                        <form onSubmit={handleFormSubmit}>
                            <Typography>Book Your Truck</Typography>
                            <InputLabel htmlFor="my-input">From</InputLabel>
                            <TextField placeholder="Enter origin city" />
                            <InputLabel htmlFor="my-input">To</InputLabel>
                            <TextField placeholder="Enter destination city" />
                            <Box type="submit">
                                <Button type="submit">Next</Button>
                            </Box>
                        </form>
                    )}

                    {currentForm === 2 && (
                        <form onSubmit={handleFormSubmit}>
                            <Typography>Book Your Truck</Typography>
                            <InputLabel htmlFor="my-input">4</InputLabel>
                            <TextField placeholder="Enter origin city" />
                            <InputLabel htmlFor="my-input">2</InputLabel>
                            <TextField placeholder="Enter destination city" />
                            <Box type="submit">
                                <Button type="submit">Next</Button>
                            </Box>
                        </form>
                    )}

                    {currentForm === 3 && (
                        <form onSubmit={handleFormSubmit}>
                            <Typography>Book Your Truck</Typography>
                            <InputLabel htmlFor="my-input">8</InputLabel>
                            <TextField placeholder="Enter origin city" />
                            <InputLabel htmlFor="my-input">To</InputLabel>
                            <TextField placeholder="Enter destination city" />
                            <Box type="submit">
                                <Button type="submit">Next</Button>
                            </Box>
                        </form>
                    )}
                </div>
            </div>
            <div style={currentForm === 1 ? updateColor : initialCircle}>
                dffdf
            </div>
            <div style={currentForm === 2 ? updateColor : initialCircle}>
                dffdf
            </div>
            <div style={currentForm ===  3? updateColor : initialCircle}>
                dffdf
            </div>

            {/* <div style={{ backgroundImage: `url(${bgImg2})`, height: "100px", width: "100vw" }}>
                asdasdasd
            </div> */}
        </>
    );
}
