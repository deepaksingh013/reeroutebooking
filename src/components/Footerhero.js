import { Box, Container, Grid, Slide, Typography } from '@mui/material'
import React from 'react'
import img1 from "../images/imagea.jpg"
import img3 from "../images/imagec.jpg"
import img4 from "../images/imaged.jpg"
import bgImg from "../images/Image.png";
import img8 from "../images/imagez.jpg"
// vector icons
import icon1 from "../images/Star.png"
import icon2 from "../images/Norto.png"
import icon3 from "../images/logo.png"
import icon4 from "../images/Out Of The Sand Box.png"


// styling
const makeStyle = {
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
        alignItems: "center"
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
       
    },
    bx4: {
        backgroundImage: `linear-gradient(180deg, #111C54 0%, rgba(17, 28, 84, 0) 98.72%),
            url(${img4})`,
        objectFit: "contain",
        backgroundSize: "cover",
        minHeight: "234px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    txt1:{
        color:"#fff",
        fontFamily: "'Syne'",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "20px",
        letterSpacing: "0.565em",
        textTransform: "uppercase",
        "@media (max-width: 800px)": {
            fontSize:"10px"
          },
    },
    txt4: {
        fontFamily: "Thabit",
        color:"#fff",
        fontSize: "20px",
        fontWeight: "500",
        letterSpacing: "0.565em",
        textTransform: "uppercase",
        "@media (max-width: 800px)": {
            fontSize:"15px"
          },
    }

}

export default function Footerhero() {
    return (
        <>
            <Box sx={makeStyle.mainContainer}>
                <Container>
                    <Box>
                        <Grid container spacing={0}>
                            <Grid sm={3} lg={3} md={3} >
                                <Box sx={makeStyle.bx1}>
                                    <img src={icon1} alt="" />
                                    <Box sx={{display:"flex",flexDirection:"column"}}>
                                    <Typography sx={makeStyle.txt1}>STUDIO</Typography>
                                    <Typography sx={makeStyle.txt1}>GREEN</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid sm={3} lg={3} md={3} >
                                <Box sx={makeStyle.bx2}>
                                    <img src={icon2} alt="" style={{maxWidth:"100%",height:"auto"}}/>
                                </Box>
                            </Grid>
                            <Grid sm={3} lg={3} md={3} >
                                <Box sx={makeStyle.bx3}>
                                    <img src={icon3} alt="" style={{maxWidth:"90%",height:"auto"}}/>
                                </Box>
                            </Grid>
                            <Grid sm={3} lg={3} md={3} >
                                <Box sx={makeStyle.bx4}>
                                    <Box>
                                        <Box>
                                            <Typography sx={makeStyle.txt4}>OUTOFTHE</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Typography sx={makeStyle.txt4}>SAND</Typography>
                                            <Typography sx={{ height: "10px", width: "10px", backgroundColor: "#fff",mr:"6px" }}></Typography>
                                            <Typography sx={makeStyle.txt4}>BOX</Typography>
                                        </Box>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
