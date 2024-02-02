import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import abteam1 from './../image/abteam1.jpg';
import abteam2 from './../image/abteam2.jpg';
import abteam3 from './../image/abteam3.jpg';
import abteam4 from './../image/abteam4.jpg';

import './../style/expert.css'

const Expert = () => {
    return (
        <>

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>OUR EXPERTS TEAM</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 team'>
                        <Col xs={12} md={6} lg={3}>
                            <div className="box" style={{ border: "1px solid #3787c3" }}>
                                <div className="img">
                                    <img src={abteam1} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                                <div className="title text-center">
                                    <h4><a href="">Alonso Curtis</a></h4>
                                    <p>Plumber</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="box" style={{ border: "1px solid #3787c3" }}>
                                <div className="img">
                                    <img src={abteam2} alt="" />
                                </div>
                                <div className="content text-center w-100">

                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                                <div className="title text-center">
                                    <h4><a href="">Pearl Alia</a></h4>
                                    <p>Plumber</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="box" style={{ border: "1px solid #3787c3" }}>
                                <div className="img">
                                    <img src={abteam3} alt="" />
                                </div>
                                <div className="content text-center w-100">

                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                                <div className="title text-center">
                                    <h4><a href="">Maurice Allan</a></h4>
                                    <p>Plumber</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="box" style={{ border: "1px solid #3787c3" }}>
                                <div className="img">
                                    <img src={abteam4} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                                <div className="title text-center">
                                    <h4><a href="">Della Eila</a></h4>
                                    <p>Plumber</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Expert
