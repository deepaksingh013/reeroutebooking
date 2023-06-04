import React from 'react'
import Footer from './Footer'
import Testimonial from './Testimonial'
import Footerhero from './Footerhero'
import DownloadShipper from './DownloadShipper'
import Banner from './Banner'
import Slider from './Slider'
import Counter from './Counter'
import Faq from './Faq'
import Navbar from './Navbar'

export default function Home() {
    return (
        <div style={{position:"relative"}}>
            <Navbar/>
            <Banner />
            <Counter/>
            <DownloadShipper />
            <Testimonial />
            {/* <Slider/> */}
            <Faq/>
            <Footerhero />
            <Footer />
        </div>
    )
}
