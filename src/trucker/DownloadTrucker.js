import React from 'react'
import logo from "../images/mobile2.png"
import { Box, Grid, Typography, colors, makeStyles } from '@mui/material'
import img133 from "../images/image 133.png"
import img134 from "../images/image 134 (Traced).png"

const makeStyle = {
    mainBox: {
        background: "#F4F4F4",
        marginTop: "3rem"
    },
    logoStyle: {
        maxWidth: "100%",
        height: "auto"
    },
    title: {
        fontSize: "33px",
        fontWeight: "600",
        fontFamily: "'Rubik', sans-serif",
        color: "rgba(0, 0, 0, 0.6)",
        "@media (max-width: 768px)": {
            fontSize: "28px"
        },
        "@media (max-width: 450px)": {
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "15px",
        }
    },
    content: {
        fontSize: "24px",
        fontFamily: "'Krub', sans-serif",
        fontWeight: "400",
        color: "rgba(0, 0, 0, 0.6)",
        marginBottom: "20px",
        "@media (max-width: 768px)": {
            fontSize: "19px"
        },
        "@media (max-width: 450px)": {
            color: "rgba(0, 0, 0, 0.6)",
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
        marginRight: "10px",
        "@media (max-width: 450px)": {
            margin: "auto",
        }
    },
    downloadapp: {
        display: "flex",
        // marginLeft: "1rem"
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
    appStores: {
        ml: "1rem",
        "@media (max-width: 450px)": {
            textAlign: "center",
        }
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
        marginBottom: "10px",
        "@media (max-width: 450px)": {
            textAlign: "center",
        }
    },
    app: {

        // mobile view
        "@media (max-width: 400px)": {
            display: "flex",
            flexDirection: "column-reverse"
        }

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
export default function DownloadShipper() {
    return (
        <>
            <Box sx={makeStyle.mainBox}>
                <Grid container spacing={2}>
                    <Grid item lg={6} xs={12}>
                        <img src={logo} alt="" style={makeStyle.logoStyle} />
                    </Grid>
                    <Grid item lg={5}>
                        {/*  */}
                        <Box sx={makeStyle.app}>
                            <Box >
                                {shipperContent.map((item, index) => {
                                    return <Box sx={{ ml: "1rem", mr: "1rem" }}>
                                        <Box>
                                            <Typography sx={makeStyle.title}>{item.title}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={makeStyle.content}>{item.content}</Typography>
                                        </Box>
                                    </Box>
                                })}

                            </Box>
                            <Box sx={makeStyle.appStores}>
                                <Typography sx={makeStyle.truckers}>DOWNLOAD TRUCKER APP</Typography>
                                <Box sx={makeStyle.downloadapp}>
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


