import React from 'react'
import Footer from './Footer'
import Testimonial from './Testimonial'
import Footerhero from './Footerhero'
import DownloadShipper from './DownloadShipper'
import Banner from './Banner'

export default function Home() {
    return (
        <div>
            <Banner />
            <DownloadShipper />
            <Testimonial />
            {/* <Footerhero /> */}
            <Footer />
        </div>
    )
}
