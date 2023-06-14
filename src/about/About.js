import React from 'react'
import Footer from '../components/Footer'
import Aboutbanner from './Aboutbanner.js'
import Aboutreroute from './Aboutreroute'
import Services from './Services'
import Experts from './Experts'
import { Box } from '@mui/material'
import ExpertsSlider from '../mobileview/ExpertsSlider'
import Footerhero from '../components/Footerhero'
import FooterHeroSlider from '../mobileview/FooterHeroSlider'


const makeStyles = {
    experts: {
        marginBottom: "6rem",
        "@media (max-width: 700px)": {
            display: "none"
        }
    },
    slider: {
        display: "none",
        "@media (max-width: 700px)": {
            display: "block"
        }
    },
    footerHero: {
        "@media (max-width: 600px)": {
            display: "none"
        }
    },
    FooterHeroSlider: {
        display: "none",
        "@media (max-width: 600px)": {
            display: "block"
        }
    }
}
export default function About() {
    return (
        <>
            <Aboutbanner />
            <Aboutreroute />
            <Services />
            <Box sx={makeStyles.experts}>
                <Experts />
            </Box>
            <Box sx={makeStyles.slider}>
                <ExpertsSlider />
            </Box>
            <Box sx={makeStyles.FooterHeroSlider}>
                <FooterHeroSlider />
            </Box>
            <Box sx={makeStyles.footerHero}>
                <Footerhero />
            </Box>
            <Footer />
        </>
    )
}