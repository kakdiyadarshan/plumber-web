import React from 'react'

import { Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';

import testi1 from './../image/asset 24.jpeg';
import testi2 from './../image/asset 25.jpeg';

import './../style/slider.css';


const options = {
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
    }
}

const Slider = () => {
    return (
        <>

            <div className="spacey">
                <div className="back" style={{ backgroundColor: "#f7f7f7" }}>
                    <Container>
                        <div className="text text-center m-auto mb-1">
                            <h3>WHAT PEOPLE’S SAY</h3>
                            <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                        </div>
                        <OwlCarousel className='owl-theme testi' autoplayTimeout={3000} margin={20} dots={false} nav  {...options}>
                            <div class='item'>
                                <div className="img">
                                    <img src={testi1} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5>Tori Araya</h5>
                                    <p>They also maintain plumbing fixtures like bathtubs and toilets and appliances such as dishwashers or heating systems.</p>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="img">
                                    <img src={testi2} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5>Ken jackson</h5>
                                    <p>They also maintain plumbing fixtures like bathtubs and toilets and appliances such as dishwashers or heating systems.</p>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="img">
                                    <img src={testi1} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5>Tori Araya</h5>
                                    <p>They also maintain plumbing fixtures like bathtubs and toilets and appliances such as dishwashers or heating systems.</p>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="img">
                                    <img src={testi2} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5>Ken jackson</h5>
                                    <p>They also maintain plumbing fixtures like bathtubs and toilets and appliances such as dishwashers or heating systems.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default Slider
