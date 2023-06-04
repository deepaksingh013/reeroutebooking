import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid,Box ,Container} from '@mui/material';
import bgImg from "../images/Photo (1).png"

const makeStyle = {
    mainBox:{
        mt:"5rem",
        minHeight:"586px",
        // border:"1px solid red"
    },
    Faq:{
        fontWeight: "400",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "14px",
        fontStyle: "normal",
        width: "90px",
        color: "#2A4F6D",
        paddingLeft: "10px",
        backgroundColor: "rgba(232, 232, 232, 0.5)",
        borderLeft: "4px solid #F79633"
    },
    title:{
        fontWeight: "600",
        fontFamily: "'Rubik', sans-serif",
        fontSize:"60px",
        "@media (max-width: 599px)": {
            fontSize: "30px",
          },
    },
    bgImg:{
        height:"100%",
        width:"100%",
        objectFit:"cover"
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

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Container>
            <Box sx={makeStyle.mainBox}>
            <Grid container spacing={2}>
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
                    <Box>
                        <img src={bgImg} alt="" style={makeStyle.bgImg}/>
                    </Box>
                </Grid>

            </Grid>

            </Box>
            </Container>
          

        </div>
    );
}