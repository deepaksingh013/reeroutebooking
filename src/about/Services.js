import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import iconImg1 from "../images/Icon (1).png"
import iconImg2 from "../images/Icon (2).png"
import iconImg3 from "../images/Vector (3).png"
import iconImg4 from "../images/Vector (2).png"
import iconImg5 from "../images/Icon (4).png"
import iconImg6 from "../images/Icon (5).png"

const services = [
    {
        icon: iconImg1,
        text1: "Warehousing and Distribution",
        text2: "Our state-of-the-art warehouses and efficient distribution network enable timely delivery of your products across India."
    },
    {
        icon: iconImg2,
        text1: "Transportation Services",
        text2: "We provide reliable transportation services, ensuring safe and timely movement of goods through road, rail, and air."
    },
    {
        icon: iconImg3,
        text1: "Supply Chain Management",
        text2: "Our end-to-end supply chain management solutions reduce lead times, and enhance overall operational efficiency."
    },
    {
        icon: iconImg4,
        text1: "Customs Clearance",
        text2: "Our experienced team handles all customs clearance procedures, ensuring smooth and hassle-free import and export processes."
    },
    {
        icon: iconImg5,
        text1: "Value-Added Services",
        text2: "From packaging and labeling to quality control and reverse logistics, we provide a range of value-added services to meet your specific requirements."
    },
    {
        icon: iconImg6,
        text1: "Timely Delivery",
        text2: "We excel in timely delivery, ensuring your goods reach their destination on schedule. "
    }
]

const makeStyle = {
    mainBox: {
        backgroundColor: "#F4F4F4",
        paddingBottom: "1rem"
    },
    title: {
        backgroundColor: "#E8E8E81A 80%",
        borderLeft: "4px solid #F79633",
        width: "100px",
        color: "#000",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "14px",
        padding: "2px 0px 2px 10px",
    },
    services: {
        marginTop: "10px",
        marginBottom: "30px",
        fontWeight: "600",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "35px",
        color: "#000000"
    },
    text1: {
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "25px",
        color: "#1C1F35"
    },
    text2: {
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "16px",
        color: "##666C89",
        marginBottom: "20px"
    },
    btn: {
        fontSize: "19px",
        fontWeight: "600",
        fontFamily: "'Krub', sans-serif",
        color: "#ffff",
        alignItems: "center",
        width: "194px",
        margin: "auto",
        mt: "10px",
        height: "60px",
        backgroundColor: "#2A4F6D",
        '&:hover': {
            backgroundColor: "#2A4F6D",
            // Add any other styles you want for the hover state
        },
    }
}

export default function Services() {
    return (
        <>
            <Box sx={makeStyle.mainBox}>
                <Container >
                    <Box >
                        <Typography sx={makeStyle.title}>What We Do</Typography>
                        <Typography sx={makeStyle.services}>Our Logistics Services</Typography>
                    </Box>
                    <Box sx={{ mt: "20px" }}>
                        <Grid container spacing={2}>
                            {services.map((item, index) => {
                                return <Grid lg={4} xs={12} md={6}>
                                    <img src={item.icon} alt="" />
                                    <Box sx={{ width: "70%" }}>
                                        <Typography sx={makeStyle.text1}>{item.text1}</Typography>
                                        <Typography sx={makeStyle.text2}>{item.text2}</Typography>
                                    </Box>

                                </Grid>
                            })}
                        </Grid>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: "3rem" }}>
                        <Button sx={makeStyle.btn}>More Works</Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
