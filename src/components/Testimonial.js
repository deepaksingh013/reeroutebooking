import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import profile1 from "../images/photoProfile.png";
import profile2 from "../images/photoProfile2.png";
import star from "../images/Star 5.png";
import icon from "../images/icon.png"
const makeStyle = {
    testimonial: {
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "14px",
        fontStyle: "normal",
        width: "90px",
        color: "#2A4F6D",
        paddingLeft: "10px",
        backgroundColor: "rgba(232, 232, 232, 0.5)",
        borderLeft: "4px solid #F79633"
    },
    title: {
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "600",
        fontSize: "50px",
        fontStyle: "normal",
        color: "#2A4F6D",
        "@media (max-width: 700px)": {
            fontSize: "35px"
        },
        "@media (max-width: 400px)": {
            fontSize: "25px"
        }
    },
    toogle: {
        mt: "25px",
        "@media (max-width: 700px)": {

            display: "none"
            // for mobile view
        }
    },
    leftIcon: {
        color: "#F79633",
        height: "44px",
        width: "44px",
        cursor: "pointer",

    },
    rightIcon: {
        color: "#2A4F6D",
        height: "44px",
        width: "44px",
        cursor: "pointer",
    },
    profileImg: {
        height: "80px",
        width: "80px",
        borderRadius: "50%",
    },
    bg1: {
        backgroundColor: "#F4F4F4",
        color: "#666C89"

    },
    bg2: {
        backgroundColor: "#2A4F6D",
        color: "#fff"
    },
    name: {
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "600",
        fontSize: "20px",
        fontStyle: "normal",
        color: "#091242"
    },
    review: {
        fontFamily: "'Rubik', sans-serif",
        minHeight: "120px",
        fontStyle: "italic",
        fontWeight: "350"
    },
    companyName: {
        fontFamily: "'Krub', sans-serif",
        fontWeight: "500",
        fontSize: "16px"
    },
    icon: {
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        backgroundColor: "#FFB629",
        padding: "10px",
        position: "absolute",
        right: "30px"
    },
    webView: {
        "@media (max-width: 700px)": {
            display: "none"
        }
    }
}

const testimonial = [
    {
        profileImg: profile1,
        name: "Varun Trivedi",
        companyName: "Fuel Company",
        review: "Reeroute frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        iconImg: icon,
        starIcon: star
    },
    {
        profileImg: profile2,
        name: "Vijay Nagar",
        companyName: "Fuel Company",
        review: "ReeRoute's framework fosters collaborative thinking, empowering diversity and driving disruptive innovation. They go beyond logistics, delivering a robust value proposition. Their commitment to positive change sets them apart. Highly recommended!",
        iconImg: icon,
        starIcon: star
    }
]

export default function Testimonial() {
    return (
        <>
            <Container sx={{ mt: "10rem" }}>
                <Typography sx={makeStyle.testimonial}>Testimonial</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: "30px" }}>
                    <Typography sx={makeStyle.title}> {window.location.pathname === "/" ? "What Our Shipper Say" : "What Our Truckers Say"}  </Typography>
                    <Box sx={makeStyle.toogle}>
                        <ArrowCircleLeftIcon sx={makeStyle.leftIcon} />
                        <ArrowCircleRightIcon sx={makeStyle.rightIcon} />
                    </Box>
                </Box>

                {/* testimonials */}
                <Box sx={makeStyle.webView}>


                    <Box sx={{ mb: "2rem" }}>
                        <Grid container spacing={0} >
                            {testimonial.map((item, index) => (
                                <Grid item key={index} lg={6} sm={6}>
                                    <Box sx={{ display: 'flex', position: "relative", padding: "2rem", backgroundColor: index % 2 === 0 ? makeStyle.bg1 : makeStyle.bg2 }}>
                                        <img src={item.profileImg} alt="" style={makeStyle.profileImg} />
                                        <Box sx={{ display: "flex", flexDirection: "column", ml: "10px", mt: "10px" }}>
                                            <Typography sx={makeStyle.name}>{item.name}</Typography>
                                            <Typography sx={makeStyle.companyName}>{item.companyName}</Typography>
                                        </Box>
                                        {/* <Box style={makeStyle.icon} >
                                        <img src={item.iconImg} alt="" style={{ marginLeft: "5px", marginTop: "10px" }} />
                                    </Box> */}

                                    </Box>
                                    <Box sx={{ padding: "0 2rem 2rem 2rem", backgroundColor: index % 2 === 0 ? makeStyle.bg1 : makeStyle.bg2 }}>
                                        <Typography sx={makeStyle.review}>{item.review}</Typography>
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <img key={starIndex} src={item.starIcon} alt="" style={{ marginTop: "40px" }} />
                                        ))}
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>


            </Container>
        </>
    )
}
