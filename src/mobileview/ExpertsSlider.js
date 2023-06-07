import React, { useState } from 'react';
import { Container, Typography, makeStyles } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import img1 from "../images/photo (3).png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { IconButton, Box } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import img2 from "../images/photoProfile2.png";
// import img4 from "../images/photoProfile.png";
import img5 from "../images/photoProfile2.png";

// import img1 from "../images/photo (3).png"
import img2 from "../images/Photo (4).png"
import img3 from "../images/Photo (5).png"




const ExpertsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 2 ? 2 : prevSlide + 1));
    };

    const makeStyle = {
        title: {
            backgroundColor: "#E8E8E81A 80%",
            borderLeft: "4px solid #F79633",
            width: "200px",
            color: "#000",
            fontWeight: "400",
            fontFamily: "'Rubik', sans-serif",
            fontSize: "14px",
            padding: "2px 0px 2px 10px",
        },
        expert: {
            marginTop: "10px",
            marginBottom: "30px",
            fontWeight: "600",
            fontFamily: "'Rubik', sans-serif",
            fontSize: "35px",
            color: "#000000"
        },
        socialMedia: {
            position: "absolute",
            right: "0",
            background: "#F79633",
            top: "277px",
            height: "40px",
            padding: "10px",
            "@media (max-width: 988px)": {
                padding: "5px",
                bottom: "37px",
            }
        },
        name: {

            fontWeight: "500",
            marginRight: "150px",
            fontFamily: "'Rubik', sans-serif",
            fontSize: "20px",
            color: "#fff",
            paddingTop: "5px",
            paddingLeft: "15px",
            // "@media (max-width: 988px)": {
            //     fontSize: "15px",
            // }
        },
        profile: {

            marginRight: "200px",
            fontSize: "16px",
            fontWeight: "500",
            fontFamily: "'Krub', sans-serif",
            color: "#fff",
            paddingLeft: "15px",
            paddingBottom: "10px",
            // "@media (max-width: 988px)": {
            //     fontSize: "10px",
            // }
        },
        icon: {

            marginRight: "10px",
            "@media (max-width: 988px)": {
                marginRight: "0px"
            }
        },

    }


    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "2rem" }}>
                <Box>
                    <Typography sx={makeStyle.title}>The Transporters</Typography>
                    <Typography sx={makeStyle.expert}>Meet Expert Team</Typography>
                </Box>

            </Box>


            <div style={{ position: "relative" }}>
                <Carousel selectedItem={currentSlide} showThumbs={false} showStatus={false} showIndicators={false}>
                    <div>
                        <Box sx={{ mr: "10px", position: "relative", height: "500px", width: "300px", margin: "auto" }}>
                            <Box >
                                <img src={img1} alt="" style={{ height: "300px", width: "100%", backgroundSize: "cover" }} />
                                <Box sx={{ background: "#2A4F6D", mt: "-5px" }}>
                                    <Typography sx={makeStyle.name}>Jessca Arow</Typography>
                                    <Typography sx={makeStyle.profile}>Designer</Typography>
                                </Box>
                            </Box>
                            <Box sx={makeStyle.socialMedia}>
                                <TwitterIcon sx={{ mr: "2px" }} />
                                <FacebookIcon sx={{ mr: "2px" }} />
                                <InstagramIcon />
                            </Box>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ mr: "10px", position: "relative", height: "500px", width: "300px", margin: "auto" }}>
                            <Box >
                                <img src={img2} alt="" style={{ height: "300px", width: "100%", backgroundSize: "cover" }} />
                                <Box sx={{ background: "#2A4F6D", mt: "-5px" }}>
                                    <Typography sx={makeStyle.name}>Jessca Arow</Typography>
                                    <Typography sx={makeStyle.profile}>Designer</Typography>
                                </Box>
                            </Box>
                            <Box sx={makeStyle.socialMedia}>
                                <TwitterIcon sx={{ mr: "2px" }} />
                                <FacebookIcon sx={{ mr: "2px" }} />
                                <InstagramIcon />
                            </Box>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ mr: "10px", position: "relative", height: "500px", width: "300px", margin: "auto" }}>
                            <Box >
                                <img src={img3} alt="" style={{ height: "300px", width: "100%", backgroundSize: "cover" }} />
                                <Box sx={{ background: "#2A4F6D", mt: "-5px" }}>
                                    <Typography sx={makeStyle.name}>Jessca Arow</Typography>
                                    <Typography sx={makeStyle.profile}>Designer</Typography>
                                </Box>
                            </Box>
                            <Box sx={makeStyle.socialMedia}>
                                <TwitterIcon sx={{ mr: "2px" }} />
                                <FacebookIcon sx={{ mr: "2px" }} />
                                <InstagramIcon />
                            </Box>
                        </Box>
                    </div>
                </Carousel>

                <Box
                    sx={{
                        position: "absolute",
                        top: "75%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "10px",
                    }}
                >
                    <IconButton onClick={handlePreviousSlide} disabled={currentSlide === 0}>
                        <ArrowCircleLeftIcon sx={{ color: "#F79633", fontSize: '45px', }} />
                    </IconButton>

                    <IconButton onClick={handleNextSlide} disabled={currentSlide === 2}>
                        <ArrowCircleRightIcon sx={{ color: "#2A4F6D", fontSize: '45px', }} />
                    </IconButton>
                </Box>
            </div>
        </>
    );
};

export default ExpertsSlider;
