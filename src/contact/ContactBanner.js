import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import bgImg from "../images/woman-1845572.jpg"
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
const makeStyle = {
    mainBox: {
        position: "relative",
        paddingTop: "4rem",
        minHeight: "449px",
        backgroundImage: `linear-gradient(90.13deg,
            rgba(0, 0, 0, 0.9) 1.07%,
            rgba(0, 0, 0, 0.6) 99.9%),
            url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        width: "100%",
        "@media(max-width:425px)": {
            minHeight: "330px",
        }
    },
    contact: {
        position: "absolute",
        top: "35%",
        backgroundColor: "#041C37",
        borderLeft: "4px solid #F79633",
        width: "80px",
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
        "@media(max-width:425px)": {
            minHeight: "50px",
            lineHeight: "70px",
            marginTop: "10px"
        }
    },
    contactDetail: {
        border: "1px solid #000000CC"
    }

}

export default function ContactBanner() {
    return (
        <>
            <Box sx={makeStyle.mainBox}>
                <Container>
                    <Typography sx={makeStyle.contact}>Contact</Typography>
                    <Typography sx={makeStyle.contactUs}>Contact Us</Typography>
                </Container>
            </Box>
        </>
    )
}
