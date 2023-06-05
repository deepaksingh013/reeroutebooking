import React from 'react'
import Footer from '../components/Footer'
import Footerhero from '../components/Footerhero'
import Counter from '../components/Counter'
import DownloadTrucker from './DownloadTrucker'
import TruckerBanner from './TruckerBanner'
import Testimonial from '../components/Testimonial'
import Reroute from '../components/Reroute'
import Faq from '../components/Faq'


export default function Trucker() {
    return (
        <div>
            <TruckerBanner />
            <Counter />
            <DownloadTrucker />
            <Reroute />
            <Testimonial />
            <Faq/>
            <Footerhero />
            <Footer />
        </div>
    )
}
