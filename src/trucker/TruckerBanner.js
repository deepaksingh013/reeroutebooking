import React from 'react';
import { Box, Container, Grid, Paper, Typography, InputLabel, TextField, Button } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import bgImg from "../images/Photo-bg.png";
import { Carousel } from 'react-responsive-carousel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const makeStyle = {
    mainBox: {
        position: "absolute",
        marginTop: "-115px",
        paddingTop: "10%",
        top: "0px",
        minHeight: "75vh",
        position: "relative",
        backgroundImage: `linear-gradient(90.13deg,
          rgba(0, 0, 0, 0.9) 1.07%,
          rgba(0, 0, 0, 0.6) 99.9%),
          url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "@media (max-width: 1100px)": {
            paddingTop: "15%",
        },
        "@media (max-width: 700px)": {
            paddingTop: "25%",
        },
        "@media (max-width: 428px)": {
            paddingTop: "33%",
        },
    },
    leftContent: {
        color: "#fff",
        // border: "1px solid red",
        // mt: "35%"
    },
    streamLine: {
        width: "65%",
        background: "#041C3780",
        borderLeft: "4px solid #FFB629",
        padding: "5px",
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        "@media (max-width: 488px)": {
            display: "none"
        },
    },
    reRoute: {
        fontSize: "60px",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "700",
        "@media (max-width: 768px)": {
            fontSize: "40px"
        },
        "@media (max-width: 488px)": {
            fontSize: "25px"
        },
    },
    listItem: {
        display: 'list-item',
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Krub', sans-serif",
    },
    form: {
        position: "relative",
        // height:"50%",
        marginBottom: "2rem",
        height: "480px",
        padding: "25px 20px 20px 22px",
        borderRadius: "12px",
        "@media (max-width: 768px)": {
            height: "400px"
        },
    },
    title: {
        textAlign: "center",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "500",
        fontSize: "24px",
        color: "#000000",
        marginBottom: "40px"

    },
    formBtn: {
        position: "abssolute",
        bottom: "0",
        width: "100%",
        background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",
        color: "#000000",
        // fontFamily: "'Krub', sans-serif",
        fontWeight: "600",
        fontSize: "10px",
        height: "42px",
        marginTop: "50px",
        marginBottom: "50px",
        "@media (max-width: 768px)": {
            marginTop: "40px",
        },
        "@media (max-width: 488px)": {
            marginTop: "5px",
        },
    },
    destination: {
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        color: "#000000"

    },
    textField: {
        marginTop: "5px",
        marginBottom: "40px",
        width: "100%"
    }
};

export default function TrckerBanner() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={makeStyle.mainBox}>
            <Box>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item lg={6} xs={12}>
                            <Box>
                                <Box sx={makeStyle.leftContent}>
                                    <Typography sx={makeStyle.streamLine}>Streamline Your Logistics with Easy Truck Booking</Typography>
                                    <Typography sx={makeStyle.reRoute}>ReeRoute: India's Fastest Truck Booking Platform!</Typography>
                                    <ListItem sx={makeStyle.listItem}>
                                        Pan-India operations
                                    </ListItem>
                                    <ListItem sx={makeStyle.listItem}>
                                        Associated with 3,000+ SMEs/Transporters
                                    </ListItem>
                                    <ListItem sx={makeStyle.listItem}>
                                        Guaranteed Timely Payments
                                    </ListItem>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <Paper sx={makeStyle.form}>
                                <Typography sx={makeStyle.title}>Onboard Yourself!</Typography>
                                <InputLabel htmlFor="my-input" sx={makeStyle.destination}>Mobile Number</InputLabel>
                                <TextField placeholder="Enter Mobile No." sx={makeStyle.textField} />
                                <InputLabel htmlFor="my-input" sx={makeStyle.destination}>Enter no.</InputLabel>
                                <TextField placeholder='Enter destination city' sx={makeStyle.textField} />
                                <InputLabel htmlFor="my-input" sx={makeStyle.destination}>City</InputLabel>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        {/* <InputLabel >City</InputLabel> */}
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Delhi</MenuItem>
                                            <MenuItem value={20}>Mumbai</MenuItem>
                                            <MenuItem value={30}>Hyderabad</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <Button sx={makeStyle.formBtn}>SUBMIT</Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}