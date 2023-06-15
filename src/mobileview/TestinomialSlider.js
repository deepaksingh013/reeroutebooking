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
import img3 from "../images/Photo (5).png"




const TestinomialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2;

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    const makeStyle = {
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
        }

    }
    return (
        <>
            <div style={{ position: "relative" }}>
                <Carousel selectedItem={currentSlide} showThumbs={false} showStatus={false} showIndicators={false}>
                    <div>
                        <Box sx={makeStyle.mainBox}>
                            <Box sx={{ display: "flex", background: "#F4F4F4", p: "20px" }}>
                                <Box>
                                    <img src={profile1} alt="" style={makeStyle.profile} />
                                </Box>
                                <Box sx={{ marginLeft: "20px" }}>
                                    <Typography sx={makeStyle.name}>Varun Trivedi</Typography>
                                    <Typography sx={makeStyle.company}>Fuel Company</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ backgroundColor: "#F4F4F4", p: "17px", textAlign: "left" }}>
                                <Typography sx={makeStyle.txt}>Reeroute frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</Typography>
                                <Box sx={{ mt: "20px" }}>
                                    <img src={star} alt="" style={makeStyle.reviewStar} />
                                    <img src={star} alt="" style={makeStyle.reviewStar} />
                                    <img src={star} alt="" style={makeStyle.reviewStar} />
                                    <img src={star} alt="" style={makeStyle.reviewStar} />
                                    <img src={star} alt="" style={makeStyle.reviewStar} />
                                </Box>
                            </Box>

                        </Box>
                    </div>
                    <div>
                        <Box sx={makeStyle.mainBox}>
                            <Box sx={{ display: "flex", background: "#2A4F6D", p: "20px" }}>
                                <Box>
                                    <img src={profile2} alt="" style={makeStyle.profile} />
                                </Box>
                                <Box sx={{ marginLeft: "20px" }}>
                                    <Typography sx={makeStyle.name}>Vijay Nagar</Typography>
                                    <Typography sx={makeStyle.company}>Fuel Company</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ backgroundColor: "#2A4F6D", p: "17px", textAlign: "left" }}>
                                <Typography sx={makeStyle.txt2}>Reeroute frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</Typography>
                                <Box sx={{ mt: "20px" }}>
                                    <img src={star} alt="" style={makeStyle.reviewStar} />
                                    <img src={star} alt="" style={makeStyle.reviewStar} />
                                    <img src={star} alt="" style={makeStyle.reviewStar} />
                                    <img src={star} alt="" style={makeStyle.reviewStar} />
                                    <img src={star} alt="" style={makeStyle.reviewStar} />
                                </Box>
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

export default TestinomialSlider;
