import { Box, Container, Typography, makeStyles } from '@mui/material'
import React from 'react'
import img1 from "../images/photo (3).png"
import img2 from "../images/Photo (4).png"
import img3 from "../images/Photo (5).png"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const makeStyle = {
    socialMedia: {
        position: "absolute",
        right: "0",
        background: "#F79633",
        bottom: "45px",
        padding: "10px",
        "@media (max-width: 988px)": {
            padding: "5px",
            bottom: "37px",
        }
    },
    name: {
        fontWeight: "500",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "20px",
        color: "#fff",
        paddingTop: "5px",
        paddingLeft: "15px",
        "@media (max-width: 988px)": {
            fontSize: "15px",
        }
    },
    profile: {
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Krub', sans-serif",
        color: "#fff",
        paddingLeft: "15px",
        paddingBottom: "10px",
        "@media (max-width: 988px)": {
            fontSize: "10px",
        }
    },
    icon: {
        marginRight: "10px",
        "@media (max-width: 988px)": {
            marginRight: "0px"
        }
    },
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
}

export default function Experts() {
    return (
        <>
            <Box sx={{ mt: "2rem" }}>
                <Container>
                <Typography sx={makeStyle.title}>The Transporters</Typography>
                <Typography sx={makeStyle.expert}>Meet Expert Team</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                       
                       
                        <Box sx={{ mr: "10px", position: "relative" }}>
                            <Box >
                                <img src={img1} alt="" style={{ width: "100%", height: "auto", mr: "10px" }} />
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
                        <Box sx={{ mr: "10px", position: "relative" }}>
                            <img src={img2} alt="" style={{ width: "100%", height: "auto", mr: "10px" }} />
                            <Box sx={{ background: "#2A4F6D", mt: "-5px" }}>
                                <Typography sx={makeStyle.name}>Kathleen Smith</Typography>
                                <Typography sx={makeStyle.profile}>Designer</Typography>
                            </Box>
                            <Box sx={makeStyle.socialMedia}>
                                <LinkedInIcon sx={{ mr: "2px" }} />
                                <TwitterIcon sx={{ mr: "2px" }} />
                                <FacebookIcon sx={{ mr: "2px" }} />
                                <InstagramIcon sx={{ mr: "2px" }} />
                            </Box>
                        </Box>
                        <Box sx={{ mr: "10px", position: "relative" }}>
                            <img src={img3} alt="" style={{ width: "100%", height: "auto", mr: "10px" }} />
                            <Box sx={{ background: "#2A4F6D", mt: "-5px" }}>
                                <Typography sx={makeStyle.name}>Rebecca Tylor</Typography>
                                <Typography sx={makeStyle.profile}>Designer</Typography>
                            </Box>
                            <Box sx={makeStyle.socialMedia}>
                                <FacebookIcon sx={{ mr: "2px" }} />
                                <InstagramIcon />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

