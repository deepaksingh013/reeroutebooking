import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import bgImg from "../images/Photo-bg.png"

const makeStyle = {
    mainBox: {
        height: "80vh",
        position: "relative",
        background:
            `linear-gradient(90.13deg,
                rgba(0, 0, 0, 0.9) 1.07%,
                rgba(0, 0, 0, 0.6)99.9%),  url(${bgImg})`
    },
    bgImg: {
        position: "absolute",
        top: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    leftContent: {
        color: "#fff",
        // border: "1px solid red",
        mt: "35%"
    },
    streamLine: {
        width: "65%",
        background: "#041C3780",
        borderLeft: "4px solid #FFB629",
        padding: "5px",
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",

    },
    reRoute: {
        fontSize: "60px",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "700"
    },
    listItem: {
        display: 'list-item',
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Krub', sans-serif",
    }
};

export default function Banner() {
    return (
        <Box sx={makeStyle.mainBox}>
            <Box>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item lg={6} xs={12}>
                            <Box sx={makeStyle.leftContent}>
                                <Typography sx={makeStyle.streamLine}>Streamline Your Logistics with Easy Truck Booking</Typography>
                                <Typography sx={makeStyle.reRoute}>ReeRoute: India's Fastest Truck Booking Platform!</Typography>
                                {/* list items */}

                                <ListItem
                                    sx={makeStyle.listItem}>
                                    Pan-India operations

                                </ListItem>
                                <ListItem
                                    sx={makeStyle.listItem}>
                                    Associated with 3,000+ SMEs/Transporters
                                </ListItem>
                                <ListItem
                                    sx={makeStyle.listItem}>
                                    Guaranteed Timely Payments
                                </ListItem>
                            </Box>

                        </Grid>

                        <Grid item lg={6} xs={12}>
                        <Paper>
                        

                        </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box >
    );
}