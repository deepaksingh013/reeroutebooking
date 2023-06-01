import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from "../images/Photo (1).jpg"
import img2 from "../images/Photo (2).jpg"
import img3 from "../images/Photo (3).jpg"
import img4 from "../images/Photo (4).jpg"

// vector icons
import icon1 from "../images/Star.png"
import icon2 from "../images/Norto.png"
import icon3 from "../images/Pattern.png"
import icon4 from "../images/Star.png"


// styling
const makeStyle = {
    imgContent: {
        position: "relative",
    },
    imgStyle: {
        height: "auto",
        width: "100%",
        backgroundPosition: "cover"
    }
}






export default function Footerhero() {
    return (
        <>
            <Box >
                <Container>
                    <Box sx={makeStyle.imgContent}>
                        <Grid container spacing={0}>
                        <Grid item lg={3}>
                        <Box>
                                <img src={img1} alt="" style={makeStyle.imgStyle} />
                                <Typography>studio green</Typography>
                            </Box>
                        </Grid>
                          
                            <Box>
                                <img src={img2} alt="" style={makeStyle.imgStyle} />
                                <Typography>studio green</Typography>
                            </Box>
                            <Box>
                                <img src={img3} alt="" style={makeStyle.imgStyle} />
                                <Typography>studio green</Typography>
                            </Box>
                            <Box>
                                <img src={img4} alt="" style={makeStyle.imgStyle} />
                                <Typography>studio green</Typography>
                            </Box>
                        </Grid>

                    </Box>
                </Container>
            </Box>
        </>
    )
}
