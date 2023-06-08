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

export default function Shipper() {
    return (
        <div style={{ position: "relative" }}>
            <Banner />
            <Counter />
            <DownloadShipper />
            <Faq />
            <Reroute />
            {/* <Testimonial /> */}
            {/* <Slider/> */}
            {/* <Footerhero /> */}
            <Footer />
        </div>
    )
}
