import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import {  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

import logo from '../../image/logo.png'; 

import './footer.css';
import './../../style/media.css';

const Footer = () => {
    return (
        <>

            <div className="footer">
                <div className="spacey">
                    <Container>
                        <Row className='g-4'>
                            <Col md={6} lg={3}>
                                <div className="footer_head">
                                    <a href=""><img src={logo} alt="" /></a>
                                    <p>It is responsible for bringing clean water into the home and carrying wastewater out. Plumbing is also used for heating and cooling systems, as well as gas lines.</p>
                                </div>
                                <ul className='d-flex ps-0 mb-0'>
                                    <li><a href=""></a><FaFacebookF className='social' /></li>
                                    <li><a href=""></a><FaTwitter className='social' /></li>
                                    <li><a href=""></a><FaLinkedinIn className='social' /></li>
                                    <li><a href=""></a><FaInstagram className='social' /></li>
                                    <li><a href=""></a><FaWhatsapp className='social' /></li>
                                </ul>
                            </Col>
                            <Col md={6} lg={3}>
                                <div className="footer_head">
                                    <h5>Quick Links</h5>
                                    <ul className='ps-0'>
                                        <li><a href="">Our Story</a></li>
                                        <li><a href="">Career</a></li>
                                        <li><a href="">Service</a></li>
                                        <li><a href="">Schedule Service</a></li>
                                        <li><a href="">Blog</a></li>
                                        <li><a href="">Privacy Polic</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={6} lg={3}>
                                <div className="footer_head">
                                    <h5>SERVICES</h5>
                                    <ul className='ps-0'>
                                        <li><a href="">Kitchen Plumber</a></li>
                                        <li><a href="">Water Repir Plumber</a></li>
                                        <li><a href="">Ac Repair Plumber</a></li>
                                        <li><a href="">Electrical Plumber</a></li>
                                        <li><a href="">Remodeling Plumber</a></li>
                                        <li><a href="">Car Repair Plumber</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={6} lg={3}>
                                <div className="footer_head">
                                    <h5>Working Hours</h5>
                                    <ul className='ps-0'>
                                        <li style={{ marginBottom: "20px" }}>Monday - Friday 10.00am - 7.00pm</li>
                                        <li style={{ marginBottom: "20px" }}>Saturday 10.00am - 5.00pm</li>
                                        <li>Sunday Closed</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="area">
                    <Container>
                        <div class="bottom ">
                            <p class="mb-0">© 2023 All Rights Reserved. Designed by Darshan Kakdiya</p>
                        </div>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default Footer
