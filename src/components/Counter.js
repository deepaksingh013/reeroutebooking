import { Grid, Typography, Box, Container } from '@mui/material'
import React from 'react'


const makeStyle = {
    counterBox: {
        display: "flex",
        justifyContent: "center",
        alignitem: "center",
        textAlign: "center",
        marginTop: "4rem",
        marginLeft: "6rem",
        marginBottom: "4rem",
        "@media (max-width: 550px)": {
            marginLeft: "1rem"
        },
        "@media (max-width: 480px)": {
            marginTop: "1rem",
            justifyContent: "spaceBetween",
        },
    },
    mainBox: {

        display: "flex",
        // justifyContent:"space-between",
        alignItem: "center"
    },
    smallBox: {
        marginTop: "20px",
        height: "17px",
        width: "17px",
        backgroundColor: "#E57E38",
        marginRight: "10px",
        marginLeft: "10px",
        "@media (max-width: 480px)": {
            marginTop: "11px"
        },
    },
    counter: {
        textAlign: "left",
        marginRight: "10px",
        color: "#2A4F6D",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "600",
        fontSize: "42px",
        "@media (max-width: 768px)": {
            fontSize: "36px",
        },
        "@media (max-width: 480px)": {
            width: "120px",
            fontSize: "28px",
        },
        "@media (max-width: 365px)": {
            fontSize: "25px",
        },
        "@media (max-width: 900px)": {
            width: "150px",
        },
    },
    title: {
        paddingTop: "4px",
        display: "flex",
        justifyContent: "center",
        alignitems: "center",
        fontfamily: "'League Spartan', sans-serif",
        fontSize: "20px",
        fontWeight: "400",
        color: "#2A4F6D",
        fontFamily: "'League Spartan', sans-serif",

        "@media (max-width: 768px)": {
            paddingTop: "px",
            fontSize: "20px",
        },
        "@media (max-width: 500px)": {
            fontSize: "16px",

        },
        "@media (max-width: 373px)": {
            fontSize: "13px",
        },
        marginTop: "10px"
    }
}

export default function Counter() {
    const counter = [
        {
            counter: "10000+",
            title: "Vehicle Owners"
        },
        {
            counter: "25000+",
            title: "Successful Bookings"
        },
        {
            counter: "3000+",
            title: "Satisfied clients"
        },
        {
            counter: "70+",
            title: "Cities Covered"
        }
    ]
    return (
        <>
            <Box sx={makeStyle.counterBox}>
                <Grid container spacing={2} >
                    {counter.map((item, index) => {
                        return <Grid item lg={3} xs={12} md={6}>
                            <Box sx={makeStyle.mainBox}>
                                <Typography sx={makeStyle.counter}>{item.counter}</Typography>
                                <Box sx={{ display: "flex", justifyContent: "spaceBetween", textAlign: "center" }}>
                                    <Box sx={makeStyle.smallBox}></Box>
                                    <Typography sx={makeStyle.title} >{item.title}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    })}
                </Grid>
            </Box>
        </>
    )
}
