import React from 'react'
import rerouteImg from "../images/abouttrucker.png"
import { Box, Button, Grid, Typography } from '@mui/material'
import businessman from "../images/businessman.png"

const makeStyle = {
    mainBox: {
        margin: "4rem"
    },
    about: {
        backgroundColor: "#E8E8E81A 80%",
        borderLeft: "4px solid #F79633",
        width: "100px",
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
        color: "#000000"
    },
    txt: {
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Krub', sans-serif",
        color: "#666C89"
    },
    btn1: {
        color: "#23212A",
        fontSize: "19px",
        fontWeight: "600",
        fontFamily: "'Krub', sans-serif",
        alignItems: "center",
        width: "194px",
        margin: "auto",
        mt: "30px",
        height: "60px",
        backgroundColor: "#F79633",
        '&:hover': {
            backgroundColor: "#F79633",
            // Add any other styles you want for the hover state
        },
    },
    btn2: {
        fontSize: "19px",
        fontWeight: "600",
        fontFamily: "'Krub', sans-serif",
        color: "#23212A",
        alignItems: "center",
        width: "194px",
        margin: "auto",
        mt: "30px",
        height: "60px",
        backgroundColor: "##F4F4F4",
        '&:hover': {
            backgroundColor: "##F4F4F4",
            // Add any other styles you want for the hover state
        },
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
        backgroundColor: "#2A4F6D",
        '&:hover': {
            backgroundColor: "#2A4F6D",
            // Add any other styles you want for the hover state
        },
    },

}

export default function Aboutreroute() {
    return (
        <>
            <Box sx={makeStyle.mainBox}>
                <Grid container spacing={2}>
                    <Grid item lg={6} >
                        <Box sx={{ position: "relative" }}>
                            <img src={rerouteImg} alt="" style={{ objectFit: "cover", width: "85%",height:"370px" }} />
                            <img src={businessman} alt="" style={{ position: "absolute", right: "20px", bottom: "-100px" }} />
                        </Box>

                    </Grid>
                    <Grid item lg={6} sm={12}>
                        <Typography sx={makeStyle.about}>About us</Typography>
                        <Typography sx={makeStyle.aboutReroute}>About Reeroute</Typography>
                        <Typography sx={makeStyle.txt}>Welcome to ReeRoute! We specialize in providing reliable and trustworthy services for full truck loads. Our primary focus is on ensuring transparency in every aspect of our business operations. With us, you can book trucks with confidence, knowing that your cargo will be handled with utmost care and delivered on time. </Typography>
                        <Grid container spacing={2} sx={{ mb: "20px" }}>
                            <Grid item lg={3}>
                                <Button sx={makeStyle.btn1}>our mission</Button>
                            </Grid>

                            <Grid item lg={3}>
                                <Button sx={makeStyle.btn2}>our vision</Button>
                            </Grid>


                        </Grid>


                        <Typography sx={makeStyle.txt}>To provide end-to-end logistics solutions that empower businesses to thrive in today's marketplace. We deliver tailored, reliable, and cost-effective services. We optimize supply chains and foster long-term relationships. Through innovation, expertise, and strategic partnerships, we aim to be the preferred logistics partner driving growth and success for businesses in India.</Typography>
                        <Button sx={makeStyle.btn3}>learn more</Button>
                    </Grid>
                </Grid>
            </Box >

        </>
    )
}