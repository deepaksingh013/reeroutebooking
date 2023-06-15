import React from 'react';
import bgImg from "../images/HIW1.png";
import { Box, Typography } from '@mui/material';

const makeStyle = {
    mainBox: {
        // margin: "auto",
        // backgroundImage: `url(${bgImg})`,
        // height: "80vh",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "contain",
        height: "100vh",
        width: "100%",
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    reRoute: {
        height: '90vh',
        width: "100vw",
        margin:"auto",
        backgroundColor: "pink",
        marginLeft:"7%",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        imageRendering: "auto",
    },
    textContent:{
        marginTop:"4rem",
        marginLeft:"10%"
    },
    title: {
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "14px",
        fontStyle: "normal",
        width: "90px",
        color: "#2A4F6D",
        paddingLeft: "10px",
        backgroundColor: "rgba(232, 232, 232, 0.5)",
        borderLeft: "4px solid #F79633",
        "@media (max-width: 650px)": {
          paddingLeft: '2px'
        },
    
      },
      content1: {
        marginTop:'1rem',
        marginBottom:"1rem",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "600",
        fontSize: "50px",
        fontStyle: "normal",
        color: "#2A4F6D",
        "@media (max-width: 650px)": {
          fontSize: "30px"
        },
        "@media (max-width: 435px)": {
          fontSize: '20px'
        },
      },
      content2: {
        fontFamily: "'Krub', sans-serif",
        fontWeight: "500",
        fontSize: "30px",
        color: "rgba(42, 79, 109, 1)",
        fontStyle: "normal",
        "@media (max-width: 650px)": {
          fontSize: "20px"
        },
        "@media (max-width: 435px)": {
          fontSize: '15px'
        },
      },
};

export default function Reroute2() {
    return (
        <>
            <Box sx={makeStyle.textContent}>
                <Typography sx={makeStyle.title}>How it works</Typography>
                <Typography sx={makeStyle.content1}>How Reeroute works</Typography>
                <Typography sx={makeStyle.content2}>With Reeroute, experience the perfect blend of reliability and convenience in your transportation needs.</Typography>
            </Box>
            <Box sx={makeStyle.mainBox}>
                <Box sx={makeStyle.reRoute}>
                
                </Box>
            </Box>


        </>
    );
}
