import React from 'react'
import logo from "../images/logo.png"
import { Box, Grid, Typography, colors, makeStyles } from '@mui/material'
import img133 from "../images/image 133.png"
import img134 from "../images/image 134 (Traced).png"

const makeStyle = {
    mainBox: {
        background: "#F4F4F4",
        marginTop: "5%"
    },
    logoStyle: {
        maxWidth: "100%",
        height: "auto"
    },
    title: {
        fontSize: "33px",
        fontWeight: "500",
        fontFamily: "'Rubik', sans-serif",
        color: "#2A4F6D",
        "@media (max-width: 768px)": {
            fontSize: "28px"
        },
        "@media (max-width: 480px)": {
            fontSize: "24px"
        }
    },
    content: {
        fontSize: "24px",
        fontFamily: "'Krub', sans-serif",
        fontWeight: "400",
        color: "#2A4F6D",
        marginBottom: "20px",
        "@media (max-width: 768px)": {
            fontSize: "19px"
        },
        "@media (max-width: 480px)": {
            fontSize: "15px"
        }
    },
    Store: {
        display: "flex",
        width: "140px",
        height: "48px",
        borderRadius: "4px",
        backgroundColor: "#000",
        color: "#fff",
        marginBottom: "10px",
        padding: "5px",
        marginRight: "10px"
    },
    truckers: {
        fontSize: "24px",
        fontWeight: "500",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "24px",
        marginBottom: "10px"

    },
    downloadImg: {
        height: "18px",
        width: "18px",
        marginTop: "15px"
    },
    getIt: {
        fontFamily: "'Be Vietnam Pro', sans-serif",
        fontWeight: "400",
        fontSize: "9px",
        marginTop: "7px",
        marginLeft: "10px"
    },
    downloadText: {
        fontFamily: "'Be Vietnam Pro', sans-serif",
        fontWeight: "500",
        fontSize: "16px",
        marginLeft: "10px"
    },
    soonText: {
        fontSize: "18px",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "600",
        color: "#000 90%",
        marginBottom: "10px"
    }

}

const shipperContent = [
    {
        title: "Choose Your Own Load",
        content: "Take control of your workload with our interactive Choose Your Own Load feature. Select the type of load and city based on real-time truck availability."
    },
    {
        title: " Timely Payments",
        content: " Experience the power of interactive payments. With ReeRoute, Get advance payment in 2 hours after loading and balance within 24 hours upon proof of delivery."
    },
    {
        title: "    Manage Bookings Seamlessly",
        content: "Seamlessly manage your bookings and payment details with our interactive platform. Say goodbye to paperwork and scattered information "
    }
]

export default function DownloadTrucker() {
    return (
        <>
            <Box sx={makeStyle.mainBox}>
                <Grid container spacing={2}>
                    <Grid item lg={6} xs={12}>
                        <img src={logo} alt="" style={makeStyle.logoStyle} />
                    </Grid>
                    <Grid item lg={5}>
                        <Box >
                            <Box >
                                {shipperContent.map((item, index) => {
                                    return <Box>
                                        <Box>
                                            <Typography sx={makeStyle.title}>{item.title}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={makeStyle.content}>{item.content}</Typography>
                                        </Box>
                                    </Box>
                                })}

                            </Box>
                            <Box >
                                <Typography sx={makeStyle.truckers}>DOWNLOAD TRUCKER APP</Typography>
                                <Box sx={{ display: "flex" }}>
                                    <Box sx={makeStyle.Store}>

                                        <img src={img133} alt="" style={makeStyle.downloadImg} />
                                        <Box sx={{ textAlign: "left" }}>
                                            <Typography sx={makeStyle.getIt}>GET IT ON</Typography>
                                            <Typography sx={makeStyle.downloadText}>Google Play</Typography>
                                        </Box>

                                    </Box>
                                    <Box sx={makeStyle.Store}>
                                        <img src={img134} alt="" style={makeStyle.downloadImg} />
                                        <Box sx={{ textAlign: "left" }}>
                                            <Typography sx={makeStyle.getIt}>Download on the</Typography>
                                            <Typography sx={makeStyle.downloadText}>App Store </Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                <Typography sx={makeStyle.soonText}>Coming soon</Typography>
                            </Box>

                        </Box>


                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
