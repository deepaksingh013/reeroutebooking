import React from 'react'
import rerouteImg from "../images/abouttrucker.png"
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import businessman from "../images/businessman.png"

const makeStyle = {
    mainBox: {
        backgroundColor: "#F4F4F4",
        padding: "4rem",
        "@media (max-width: 700px)": {
            padding: "2rem",
        }
    },
    about: {
        backgroundColor: "rgba(232, 232, 232, 0.8)",
        borderLeft: "4px solid #F79633",
        width: "80px",
        color: "#000",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "14px",
        padding: "2px 0px 2px 10px",
    },
    aboutReroute: {
        marginTop: "10px",
        fontWeight: "600",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "35px",
        color: "#000000",
        "@media (max-width: 450px)": {
            display: "none"
        }
    },
    txt: {
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Krub', sans-serif",
        color: "#666C89", mb: "20px"
    },
    btn1: {
        color: "#23212A",
        fontSize: "19px",
        fontWeight: "600",
        fontFamily: "'Krub', sans-serif",
        alignItems: "center",
        width: "100%",
        margin: "auto",
        borderRadius: "0px",
        whiteSpace: "noWrap",
        // mt: "30px",
        height: "60px",
        backgroundColor: "#F79633",
        '&:hover': {
            backgroundColor: "#F79633",
            // Add any other styles you want for the hover state
        },
        "@media (max-width: 450px)": {
            fontSize: "10px",
            whiteSpace: "noWrap",
            height: "35px",
            paddingRight: "10px",
            paddingLeft: "10px"
        }
    },
    btn2: {
        fontSize: "19px",
        fontWeight: "600",
        whiteSpace: "noWrap",
        fontFamily: "'Krub', sans-serif",
        color: "#23212A",
        alignItems: "center",
        borderRadius: "0px",
        width: "100%",
        margin: "auto",
        height: "60px",
        backgroundColor: "##F4F4F4",
        '&:hover': {
            backgroundColor: "##F4F4F4",
            // Add any other styles you want for the hover state
        },
        "@media (max-width: 450px)": {
            fontSize: "10px",
            whiteSpace: "noWrap",
            height: "35px",
            paddingRight: "10px",
            paddingLeft: "10px"
        }
    },
    btn3: {
        fontSize: "19px",
        fontWeight: "600",
        fontFamily: "'Krub', sans-serif",
        color: "#ffff",
        alignItems: "center",
        width: "194px",
        margin: "auto",
        mt: "30px",
        height: "60px",
        borderRadius: "0px",
        backgroundColor: "#2A4F6D",
        '&:hover': {
            backgroundColor: "#2A4F6D",
            // Add any other styles you want for the hover state
        },
        "@media (max-width: 450px)": {
            fontWeight: "500",
            fontSize: "10px",
            whiteSpace: "noWrap",
            height: "35px",
            paddingRight: "10px",
            paddingLeft: "10px",
            width: "100px",
            mt: "5px"
        }
    },
    businessman: {
        // objectFit: "contain",
        // height:"200px",
        width: "35%",

        position: "absolute",
        right: "50px",
        bottom: "0px",
        bottom: "-20px",
        "@media (max-width: 700px)": {
            width: "35%",
        }

    },
    rerouteImg: {
        objectFit: "contain",
        width: "85%",
        height: "100%",
        "@media (max-width: 700px)": {
            width: "100%",
        }
    },

    // mobile view
    mobileView: {
        "@media (max-width: 450px)": {
            display: "none"
        }
    },
    aboutCompany: {
        marginTop: "10px",
        fontWeight: "600",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "22px",
        color: "#000000",
        marginBottom: "10px",
        display: "none",
        "@media (max-width: 450px)": {
            display: "block"
        }
    },
    mobileImg:{
        display:"none",
        marginTop:"3rem",
        marginBottom:"4rem",
        "@media (max-width: 450px)": {
            display: "block",
            position:"relative"
        }
    },
    rerouteImg2:{
        objectFit: "contain",
        width: "100%",
        height: "100%",
        "@media (max-width: 700px)": {
            width: "100%",
        }
    },
    businessman2:{
        width: "35%",

        position: "absolute",
        right: "10px",
        // bottom: "0px",
        bottom: "-60px",
        "@media (max-width: 700px)": {
            width: "35%",
        }
    }
}
export default function Aboutreroute() {
    return (
        <>

            <Box sx={makeStyle.mainBox}>
                <Grid container spacing={2} >
                    <Grid item lg={6} sm={12} sx={makeStyle.mobileView}>
                        <Box sx={{ position: "relative" }}>
                            <img src={rerouteImg} alt="" style={makeStyle.rerouteImg} />
                            <img src={businessman} alt="" style={makeStyle.businessman} />
                        </Box>
                    </Grid>
                    <Grid item lg={6} sm={12} >
                        <Typography sx={makeStyle.about}>About us</Typography>
                        <Typography sx={makeStyle.aboutReroute}>About Reeroute</Typography>
                        <Typography sx={makeStyle.aboutCompany}>Our Company Review</Typography>
                        <Typography sx={makeStyle.txt}>Welcome to ReeRoute! We specialize in providing reliable and trustworthy services for full truck loads. Our primary focus is on ensuring transparency in every aspect of our business operations. With us, you can book trucks with confidence, knowing that your cargo will be handled with utmost care and delivered on time. </Typography>
                        <Grid container spacing={2} sx={{ mb: "20px" }}>
                            <Grid item lg={3} sm={6} md={6} xs={4}>
                                <Button sx={makeStyle.btn1}>our mission</Button>
                            </Grid>

                            <Grid item lg={3} sm={6} md={6} xs={4}>
                                <Button sx={makeStyle.btn2}>our vision</Button>
                            </Grid>

                            <Box sx={makeStyle.mobileImg}>
                                <img src={rerouteImg} alt="" style={makeStyle.rerouteImg2} />
                                <img src={businessman} alt="" style={makeStyle.businessman2} />
                            </Box>


                        </Grid>


                        <Typography sx={makeStyle.txt}>To provide end-to-end logistics solutions that empower businesses to thrive in today's marketplace. We deliver tailored, reliable, and cost-effective services. We optimize supply chains and foster long-term relationships. Through innovation, expertise, and strategic partnerships, we aim to be the preferred logistics partner driving growth and success for businesses in India.</Typography>
                        <Button sx={makeStyle.btn3}>learn more</Button>
                    </Grid>
                </Grid>

            </Box >


        </>
    )
}