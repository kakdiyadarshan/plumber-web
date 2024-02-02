import React from 'react'
import './../Home/home.css';
import './contact.css'

import { Link } from 'react-router-dom'

import { Container,Row,Col } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contact = () => {
    return (
        <>

        <Header />

            <div className="bg">
                <Container>
                    <div className="content">
                        <h2>Contact</h2>
                        <ul className='list-unstyled arrow d-flex justify-content-center align-items-center'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to=""><FaArrowRight style={{ margin: "0 20px" }} /></Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </Container>
            </div>

            <div className="spacey form">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>QUICK CONTACT</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4'>
                        <Col xs={12} lg={6}>
                            <div className="filed">
                                <input type="text" placeholder=' You Name...'/>
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="filed">
                                <input type="text" placeholder=' You Email...'/>
                            </div>
                        </Col>
                        <Col xs={12} lg={12}>
                            <div className="filed">
                                <input type="text" placeholder=' Phone Number...'/>
                            </div>
                        </Col>
                        <Col xs={12} lg={12}>
                            <div className="big">
                                <input type="text" placeholder=' Message...'/>
                            </div>
                        </Col>
                        <Col xs={12} lg={12}>
                            <div className="big">
                                <button type="submit" className='btn'>Submit Now</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.1880094886!2d72.65748321980402!3d21.159120354800148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1704229230344!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Footer />

        </>
    )
}

export default Contact
