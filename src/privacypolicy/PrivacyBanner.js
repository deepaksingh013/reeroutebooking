import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import bgImg from "../images/privacyImg.png"
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
const makeStyle = {
    mainBox: {
        position: "relative",
        minHeight: "449px",
        backgroundImage: `linear-gradient(90.13deg,
            rgba(0, 0, 0, 0.9) 1.07%,
            rgba(0, 0, 0, 0.6) 99.9%),
            url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "-115px",
        objectFit: "cover",
        width: "100%"
    },
    contact: {
        position: "absolute",
        top: "35%",
        backgroundColor: "#041C37",
        borderLeft: "4px solid #F79633",
        width: "100px",
        color: "#fff",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "14px",
        padding: "2px 0px 2px 10px",

    },
    contactUs: {
        position: "absolute",
        top: "42%",
        color: "#fff",
        fontWeight: "700",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "60px",
    },
    contactDetail: {
        border: "1px solid #000000CC"
    }

}

export default function PrivacyBanner() {
    return (
        <>
            <Box sx={makeStyle.mainBox}>
                <Container>
                    <Typography sx={makeStyle.contact}>Privacy Policy</Typography>
                    <Typography sx={makeStyle.contactUs}>Privacy Policy</Typography>
                </Container>
            </Box>
        </>
    )
}
