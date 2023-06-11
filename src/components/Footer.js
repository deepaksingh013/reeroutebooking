import React from 'react'
import { Box, Container, Divider, Grid, Typography, makeStyles } from "@mui/material"
import mainlogo from "../images/Vector.png"
import mainlogo2 from "../images/Vector (1).png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, NavLink } from 'react-router-dom';

const makestyle = {
    footerBox: {
        paddingTop: "6rem",
        minHeight: "300px",
        backgroundColor: "#2A4F6D",
        color: "#fff",
        fontFamily: "'Krub', sans-serif",
        fontSize: "16px"
    },
    colText: {
        fontWeight: "500",
        marginBottom: "15px",
        fontFamily: "'Krub', sans-serif",
        cursor: "pointer",
        "&:hover": {
            color: "#F79633"
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
    copyRights: {
        textAlign: "center",
        padding: "10px",
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Krub', sans-serif"
    }
}
export default function Footer() {
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
        <Box sx={makestyle.footerBox}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={3} xs={12}>
                        <Box sx={{ position: "relative", pl: "20px" }}>
                            <img src={mainlogo} alt="" style={{ marginRight: "-38px" }} />
                            <img src={mainlogo2} alt="" />
                        </Box>
                        <Typography>Reeroute</Typography>
                        <Typography sx={{ fontSize: "5px", fontFamily: "'Krub', sans-serif" }}>ON THE ROAD TO SUCCESS</Typography>
                        <Typography sx={{ mt: "10px", fontWeight: "500", fontFamily: "'Krub', sans-serif" }}>Reeroute: India's Fastest Truck Booking Platform!</Typography>
                        <Typography sx={{ mt: "20px", fontWeight: "600", fontFamily: "'Krub', sans-serif" }}>Follow us on</Typography>
                        {/*social media icons */}
                        <Box sx={{ mt: "10px" }}>
                            <InstagramIcon sx={{ mr: "20px" }} />
                            <FacebookIcon sx={{ mr: "20px" }} />
                            <TwitterIcon sx={{ mr: "20px" }} />
                            <LinkedInIcon sx={{ mr: "20px" }} />
                        </Box>

                    </Grid>
                    <Grid item lg={3} sm={6} xs={6}>
                        <Box sx={{ pt: "43px" }}>
                        <Link to="/aboutus" onClick={handleLinkClick} style={{textDecoration:"none",color:"#fff"}}><Typography sx={makestyle.colText}>About Us</Typography></Link> 
                            <Typography sx={makestyle.colText}> How it Works</Typography>
                            <Typography sx={makestyle.colText}> Download App</Typography>
                            <Link to="/contact" onClick={handleLinkClick} style={{textDecoration:"none",color:"#fff"}}><Typography sx={makestyle.colText}>Contact</Typography></Link> 
                        </Box>
                    </Grid>
                    <Grid item lg={3} sm={6} xs={6}>
                        <Box sx={{ pt: "43px" }}>
                            {/* link */}
                       <Link to="/carrers" onClick={handleLinkClick} style={{textDecoration:"none",color:"#fff"}}><Typography sx={makestyle.colText}>Careers</Typography></Link>     
                       <Link to="/t&c" onClick={handleLinkClick} style={{textDecoration:"none",color:"#fff"}}><Typography sx={makestyle.colText}>      Terms & Conditions </Typography></Link>   
                       <Link to="/privacypolicy" onClick={handleLinkClick} style={{textDecoration:"none",color:"#fff"}}><Typography sx={makestyle.colText}> Privacy Policy </Typography></Link>   
                        </Box>
                    </Grid>
                    <Grid item lg={3} >
                        <Box sx={{ pt: "43px" }}>
                            <Box sx={{ display: "flex", mb: "15px" }}>
                                <EmailIcon sx={makestyle.contactIcon} />
                                <Box sx={{ ml: "20px" }}>
                                    <Typography sx={{ fontFamily: "'Krub', sans-serif" }}>Email</Typography>
                                    <Typography sx={{ fontFamily: "'Krub', sans-serif" }}>contact@logistics.com</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", mb: "15px" }}>
                                <CallIcon sx={makestyle.contactIcon} />
                                <Box sx={{ ml: "20px", fontFamily: "'Krub', sans-serif" }}>
                                    <Typography sx={{ fontFamily: "'Krub', sans-serif" }}>Call Us </Typography>
                                    <Typography sx={{ fontFamily: "'Krub', sans-serif" }}>(00) 112 365 489</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", mb: "15px" }}>
                                <LocationOnIcon sx={makestyle.contactIcon} />
                                <Typography sx={{ ml: "20px", fontFamily: "'Krub', sans-serif" }}>Address
                                    B-606, sector -12, Kharghar,
                                    Navi mumbai - 400706
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* copyrights */}
            <Divider sx={{ color: "#4E5683" }} />
            <Typography sx={makestyle.copyRights}>Copyright © ReeRoute | Designed by Jethi Tech</Typography>
        </Box >
    )
}
