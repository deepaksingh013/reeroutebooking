import React from 'react'
import Footer from '../components/Footer'
import Footerhero from '../components/Footerhero'
import Counter from '../components/Counter'
import DownloadTrucker from './DownloadTrucker'
import TruckerBanner from './TruckerBanner'
import Testimonial from '../components/Testimonial'
import Reroute from '../components/Reroute'
import Faq from '../components/Faq'
import { Box } from '@mui/material'
import FooterHeroSlider from '../mobileview/FooterHeroSlider'
import TruckerReroute from './TruckerReroute'
import TestinomialSlider from '../mobileview/TestinomialSlider'

const makeStyles = {
    mobileView: {
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



export default function Trucker() {
    return (
        <div>

            <TruckerBanner />
            <Counter />
            <DownloadTrucker />
            <TruckerReroute/>
            <Testimonial />
            <Box sx={makeStyles.mobileView}>
                <TestinomialSlider />
            </Box>
            <Faq />
            <Box sx={makeStyles.FooterHeroSlider}>
                <FooterHeroSlider />
            </Box>
            <Box sx={makeStyles.footerHero}>
                <Footerhero />
            </Box>
            <Footer />
        </div>
    )
}
