import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid, Box, Container, Button } from '@mui/material';
import bgImg from "../images/Photo (1).png";
import truckImg from "../images/scvi-email 1.png";
import CallIcon from '@mui/icons-material/Call';

const makeStyle = {
    mainBox: {
        mt: "2rem",
        minHeight: "586px",
        marginLeft: "4rem",
        marginRight: "4rem",
        marginBottom: "2rem",
        // border:"1px solid red"
        "@media (max-width: 599px)": {
            margin: "20px"
        },
    },
    Faq: {
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "14px",
        fontStyle: "normal",
        width: "90px",
        color: "#2A4F6D",
        paddingLeft: "10px",
        backgroundColor: "rgba(232, 232, 232, 0.5)",
        borderLeft: "4px solid #F79633",
        "@media (max-width: 700px)": {
            marginTop: "2rem"
        },
        // "@media (max-width: 800px)": {
        //     marginTop: "34%"
        // },
        "@media (max-width: 550px)": {
            marginTop: "50%"
        },
        "@media (max-width: 369px)": {
            marginTop: "62%"
        },
    },
    contactIcon: {
        backgroundColor: "#F79633",
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        padding: '10px',
        color: "#000"
    },
    title: {
        fontWeight: "600",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "60px",
        "@media (max-width: 599px)": {
            fontSize: "30px",
        },
    },
    bgImg: {
        // marginLeft: "50px",
        height: "100%",
        width: "100%",

        objectFit: "cover",
        "@media (max-width: 659px)": {
            width: "92%",
            marginLeft: "0px",
        },
    },
    helpBox: {
        position: "absolute",
        top: "30%",
        backgroundColor: "#2A4F6D",
        width: "35%",
        padding: "2rem 0rem 2rem 2rem",
        "@media (max-width: 800px)": {
            position: "absolute",
            top: "10%",
            width: "40%"
        },
        "@media (max-width: 600px)": {
            position: "absolute",
            top: "70%",
            left: "65px",
            width: "65%",
            padding:"7px"
        },
    },
    btn: {
        color: "#23212A",

        backgroundColor: "#F79633",
        '&:hover': {
            backgroundColor: "#F79633",
            // Add any other styles you want for the hover state
        },

    },
    talk: {
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "400",
        padding: "5px",
        width: "25%",
        borderLeft: "4px solid #FFB629",


    },
    consultation: {
        fontFamily: "'Rubik', sans-serif",
        fontWeight: "500",
        color: "#fff",
        marginTop: "10px",
        marginBottom: "10px",
        fontSize: "20px",
        "@media (max-width: 800px)": {
            fontSize: "15px"
        },
        "@media (max-width: 600px)": {
            fontSize: "12px"
        },
    },
    contact: {
        fontFamily: "'Krub', sans-serif",
        fontWeight: "500",
        fontSize: '16px',
        color: "#fff",
        "@media (max-width: 800px)": {
            fontSize: "15px"
        },
        "@media (max-width: 600px)": {
            fontSize: "10px"
        },
    }


}

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Faq() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>

            <Box sx={makeStyle.mainBox}>
                <Grid container spacing={2} sx={{ '@media (max-width: 700px)': { flexDirection: 'column-reverse' } }}>

                    <Grid item lg={6}>
                        <Typography sx={makeStyle.Faq}>Faq</Typography>
                        <Typography sx={makeStyle.title}>Frequently Asked Questions</Typography>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>How can I make an online truck booking?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Booking your truck with ReeRoute is very simple. Just add pickup and destination location. Then, select the weight of goods, type, and size of the truck.
                                    Our network of truckers will provide you the best prices with highest reliability.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography>Can I place a booking with multi-point pick up and drop?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Booking your truck with ReeRoute is very simple. Just add pickup and destination location. Then, select the weight of goods, type, and size of the truck.
                                    Our network of truckers will provide you the best prices with highest reliability.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography>Can I cancel my booking? Is there any cancellation fee?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Booking your truck with ReeRoute is very simple
                                    Just add pickup and destination location. Then, select the weight of goods, type, and size of the truck.
                                    Our network of truckers will provide you the best prices with highest reliability.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <Box sx={{ position: "relative" }}>
                            <Box sx={makeStyle.helpBox}>
                                <Typography sx={makeStyle.talk}>lets talk</Typography>
                                <Typography sx={makeStyle.consultation}>You need any help? get free consultation</Typography>
                                <Box sx={{ display: "flex", mb: "15px" }}>
                                    <CallIcon sx={makeStyle.contactIcon} />
                                    <Box sx={{ ml: "20px", fontFamily: "'Krub', sans-serif" }}>
                                        <Typography sx={makeStyle.contact}>Have Any Questions </Typography>
                                        <Typography sx={makeStyle.contact}>(00) 112 365 489 </Typography>
                                    </Box>
                                </Box>
                                <Button sx={makeStyle.btn}>Contact Us</Button>
                            </Box>
                            <img src={window.location.pathname === "/" ? bgImg : truckImg} alt="" style={makeStyle.bgImg} />
                        </Box>
                    </Grid>

                </Grid>

            </Box>



        </div>
    );
}