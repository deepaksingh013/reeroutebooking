import { Box, Container, Grid, Slide, Typography } from '@mui/material'
import React from 'react'
import img1 from "../images/Photo (1).jpg"
import img2 from "../images/Photo (2).jpg"
import img3 from "../images/Photo (3).jpg"
import img4 from "../images/Photo (4).jpg"
import bgImg from "../images/Photo-bg.png";
// vector icons
import icon1 from "../images/Star.png"
import icon2 from "../images/Norto.png"
import icon3 from "../images/Pattern.png"
import icon4 from "../images/Star.png"


// styling
const makeStyle = {
    imgContent: {
        position: "relative",
        width:"100%",
    },
    mainContainer: {
        backgroundImage: `linear-gradient(90.13deg,
            rgba(0, 0, 0, 0.9) 1.07%,
            rgba(0, 0, 0, 0.6) 99.9%),
            url(${bgImg})`,
        minHeight: "412px",
        display: "flex",
        flexWrap:"wrap",
        justifyContent: "center",
        alignItems: "center",
      
    },
    imgStyle: {
        height: "auto",
        maxWidth: "100%"
    },
    content: {
        position: "absolute",
        top: "38%",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    imgText1: {
        color: "#fff",
        letterSpacing: "7px",
        fontFamily: "'Syne', sans-serif",
        fontSize: "20px",
        fontWeight: "700",
        marginLeft: "10px"
    },
    imgText2: {
        color: "#fff",
        fontSize: "20px",
        fontFamily: "'Gideon Roman', cursive",
        letterSpacing: "8px"
    },
    imgText3: {
        color: "#fff",
        fontFamily: "'Thabit', sans-serif",
        fontWeight: "500",
        fontSize: "20px"
    }
}

export default function Footerhero() {
    return (
        <>
            <Box sx={makeStyle.mainContainer}>
                <Container>
                    <Box >
                        <Grid container spacing={0} >
                            <Grid item lg={3} xs={12} sm={12} md={6} >
                                <Box sx={makeStyle.imgContent}>
                                    <img src={img1} alt="" style={makeStyle.imgStyle} />
                                    <Box sx={makeStyle.content}>
                                        <img src={icon4} alt="" style={makeStyle.starIcon} />
                                        <Typography sx={makeStyle.imgText1}>STUDIO <br /> GREEN</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={3} xs={12} sm={12} md={6} >
                                <Box sx={makeStyle.imgContent}>
                                    <img src={img2} alt="" style={makeStyle.imgStyle} />
                                    <Box sx={makeStyle.content}>
                                        <img src={icon2} alt="" style={{ height: "60px" }} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={3} xs={12} sm={12} md={6} >
                                <Box sx={makeStyle.imgContent}>
                                    <img src={img3} alt="" style={makeStyle.imgStyle} />
                                    <Box sx={makeStyle.content}>
                                        <img src={icon3} alt="" />
                                        <Box sx={{ ml: "20px", display: "flex", flexDirection: "column", textAlign: "left", }}>
                                            <Typography sx={makeStyle.imgText2}>POINTS</Typography>
                                            <Typography sx={makeStyle.imgText2}>ONE</Typography>
                                            <Box sx={{ position: "absolute", width: "100%", top: "36px", left: "176px" }}>
                                                <Box sx={{ border: "2px solid #fff", mb: "2px", width: "15%" }}></Box>
                                                <Box sx={{ border: "2px solid #fff", mb: "2px", width: "15%" }}></Box>
                                                <Box sx={{ border: "2px solid #fff", mb: "2px", width: "15%" }}></Box>
                                            </Box>


                                        </Box>


                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={3} >
                                <Box sx={makeStyle.imgContent}>
                                    <img src={img4} alt="" style={makeStyle.imgStyle} />
                                    <Box sx={makeStyle.content}>
                                        <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                                            <Typography sx={makeStyle.imgText3}>OUT OF THE</Typography>
                                            <Typography sx={makeStyle.imgText3}>SAND BOX</Typography>
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
