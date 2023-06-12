import React, { useState } from 'react';
import { Container, Typography, makeStyles } from '@mui/material'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { IconButton, Box } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import profile1 from "../images/photoProfile.png";
import star from "../images/Star 5.png";
import profile2 from "../images/photoProfile2.png";

// import img1 from "../images/photo (3).png"
import img2 from "../images/Photo (4).png"

import img1 from "../images/imagea.jpg"
import img3 from "../images/imagec.jpg"
import img4 from "../images/imaged.jpg"
import bgImg from "../images/Image.png";
import img8 from "../images/imagez.jpg"
// vector icons
import icon1 from "../images/Star.png"
import icon2 from "../images/Norto.png"
import icon3 from "../images/logo.png"




const FooterHeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4;

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    const makeStyle = {
        mainBox2:{
            backgroundImage: `linear-gradient(90.13deg,
                rgba(0, 0, 0, 0.9) 1.07%,
                rgba(0, 0, 0, 0.6) 99.9%),
                url(${bgImg})`,
            objectFit: "contain",
            backgroundSize: "cover",
            minHeight: "412px",
            width:"100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        mainBox: {
            mr: "10px", position: "relative", height: "500px", width: "300px", margin: "auto"
        },


        reviewStar: {
            height: "30px",
            width: "30px"
        },
        profile: {
            height: "70px",
            width: "70px",
            borderRadius: "50%",
        },
        txt: {
            fontFamily: "'Rubik', sans-serif",
            minHeight: "120px",
            fontStyle: "italic",
            fontWeight: "350"
        },
        txt2: {
            fontFamily: "'Rubik', sans-serif",
            minHeight: "120px",
            fontStyle: "italic",
            fontWeight: "350",
            color: "#fff"
        },
        name: {
            fontFamily: "'Rubik', sans-serif",
            fontWeight: "600",
            fontSize: "20px",
            fontStyle: "normal",
            color: "#091242"
        },
        company: {
            fontFamily: "'Krub', sans-serif",
            fontWeight: "500",
            fontSize: "16px"
        },
        mainContainer: {
            backgroundImage: `linear-gradient(90.13deg,
                rgba(0, 0, 0, 0.9) 1.07%,
                rgba(0, 0, 0, 0.6) 99.9%),
                url(${bgImg})`,
            objectFit: "contain",
            backgroundSize: "cover",
            minHeight: "412px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
            height: "250px"
        },
        bx1: {
            backgroundImage: `linear-gradient(180deg, #111C54 0%, rgba(17, 28, 84, 0) 98.72%),
                url(${img1})`,
            objectFit: "contain",
            backgroundSize: "cover",
            minHeight: "234px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "268px",
            height: "250px",
            margin: "auto"
        },
        bx2: {
            backgroundImage: `linear-gradient(180deg, #111C54 0%, rgba(17, 28, 84, 0) 98.72%),
                url(${img8})`,
            objectFit: "contain",
            backgroundSize: "cover",
            minHeight: "234px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "268px",
            height: "250px",
            margin: "auto"
        },
        bx3: {
            backgroundImage: `linear-gradient(180deg, #111C54 0%, rgba(17, 28, 84, 0) 98.72%),
                url(${img3})`,
            objectFit: "contain",
            backgroundSize: "cover",
            minHeight: "234px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "268px",
            height: "250px",
            margin: "auto"
        },
        bx4: {
            backgroundImage: `linear-gradient(180deg, #111C54 0%, rgba(17, 28, 84, 0) 98.72%),
                url(${img4})`,
            objectFit: "contain",
            backgroundSize: "cover",
            minHeight: "234px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "268px",
            height: "250px",
            margin: "auto"
        },
        txt1: {
            color: "#fff",
            fontFamily: "'Syne'",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            letterSpacing: "0.565em",
            textTransform: "uppercase",
            "@media (max-width: 800px)": {
                fontSize: "15px"
            },
        },
        txt4: {
            fontFamily: "Thabit",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "500",
            letterSpacing: "0.565em",
            textTransform: "uppercase",
            "@media (max-width: 800px)": {
                fontSize: "15px"
            },
        }

    }


    return (
        <>


<Box sx={makeStyle.mainBox2}>

            <div style={{ position: "relative",width:"100vw" }}>
                <Carousel selectedItem={currentSlide} showThumbs={false} showStatus={false} showIndicators={false}>
                    
                        <Box sx={makeStyle.bx1}>
                            <img src={icon1} alt="" style={{ maxWidth: "25%", height: "auto" }} />
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography sx={makeStyle.txt1}>STUDIO</Typography>
                                <Typography sx={makeStyle.txt1}>GREEN</Typography>
                            </Box>
                        </Box>
                   
                        <Box sx={makeStyle.bx2}>
                            <img src={icon2} alt="" style={{ maxWidth: "50%", height: "auto" }} />
                        </Box>
                   
                        <Box sx={makeStyle.bx3}>
                            <img src={icon3} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                        </Box>
                    
                        <Box sx={makeStyle.bx4}>
                            <Box>
                                <Box>
                                    <Typography sx={makeStyle.txt4}>OUTOFTHE</Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Typography sx={makeStyle.txt4}>SAND</Typography>
                                    <Typography sx={{ height: "10px", width: "10px", backgroundColor: "#fff", mr: "6px" }}></Typography>
                                    <Typography sx={makeStyle.txt4}>BOX</Typography>
                                </Box>
                            </Box>

                        </Box>
                    
                </Carousel>

                <Box
                    sx={{
                        position: "absolute",
                        top: "75%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "70px",
                    }}
                >
                    <IconButton onClick={handlePreviousSlide} >
                        <ArrowCircleLeftIcon sx={{ color: "#F79633", fontSize: '45px', }} />
                    </IconButton>

                    <IconButton onClick={handleNextSlide} >
                        <ArrowCircleRightIcon sx={{ color: "#2A4F6D", fontSize: '45px', }} />
                    </IconButton>
                </Box>
            </div>
            </Box>
        </>
    );
};

export default FooterHeroSlider;
