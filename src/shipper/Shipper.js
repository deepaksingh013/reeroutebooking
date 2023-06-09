import React from 'react'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Footerhero from '../components/Footerhero'
import DownloadShipper from './DownloadShipper'
import Banner from './Banner'
// import Slider from '../components/Slider'

import Counter from '../components/Counter'
import Faq from '../components/Faq'
import Navbar from '../components/Navbar'
import Reroute from '../components/Reroute'
import { Box,  } from '@mui/material'
import TestinomialSlider from '../mobileview/TestinomialSlider'

const makeStyles = {
    mobileView:{
        display:"none",
        "@media (max-width: 700px)": {
            display: "block"
        }
    }
}

export default function Shipper() {
    return (
        <div style={{ position: "relative" }}>
        
            <Banner />
            <Counter />
            <DownloadShipper />
            <Faq />
            <Reroute />
            <Testimonial/>
            <Box sx={makeStyles.mobileView}>
            <TestinomialSlider/>
            </Box>
         
        
            {/* <Box sx={makeStyles.webTestinomial}>
              <Testimonial />
            </Box> */}
           
            {/* <TestinomialSlider/> */}
            {/* <Slider/> */}
            {/* <Footerhero /> */}
            <Footer />
        </div>
    )
}
