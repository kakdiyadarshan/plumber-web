import React from 'react'

import banner from '../../image/banner.mp4';

import './home.css'
import '../../style/media.css'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Service from '../../components/Services';
import Overview from '../../components/Overview';
import Counter from '../../components/Counter';
import Package from '../../components/Package';
import Project from '../../components/Project';
import Teams from '../../components/Teams';
import Slider from '../../components/Slider';
import Blog from '../../components/Blog';
import Letter from '../../components/Letter';



const Home = () => {

    return (
        <>

            {/* Top Info Section Start */}

            

            {/* Top Info Section End */}

            {/* Header Section Start */}

            <Header />

            {/* Header Section End */}

            {/* Banner Section Start */}

            <div className="banner">
                <div class="content">
                    <h1>WE ARE EXPERT PLUMBERS</h1>
                    <p>A plumbing system consists of three parts an adequate potable water supply system a safe adequate drainage
                        systemand ample fixtures and equipment.</p>
                </div>
            </div>

            {/* Banner Section End */}

            {/* Service Section Start */}

            <Service />

            {/* Service Section End */}

            {/* Overview Section End */}

            <Overview />

            {/* Overview Section End */}

            {/* Counter Section Start */}

            <Counter />

            {/* Counter Section End */}

            {/* Package Section Start */}

            <Package />

            {/* Package Section End */}

            {/* Project Section Start */}

            <Project />

            {/* Project Section End */}

            {/* Team Section End */}

            <Teams />

            {/* Team Section End */}

            {/* Testimonial Section Start */}

            <Slider />

            {/* Testimonial Section End */}

            {/* Blog Section Start */}

            <Blog />

            {/* Blog Section End */}

            {/* Newsletter Section Start */}

            <Letter />

            {/* Newsletter Section End */}

            {/* Footer Section Start */}

            <Footer />

            {/* Footer Section End */}


        </>
    )
}

export default Home
