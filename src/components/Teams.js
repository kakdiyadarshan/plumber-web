import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


import team1 from './../image/asset 18.jpeg';
import team2 from './../image/asset 19.jpeg';
import team3 from './../image/asset 20.jpeg';
import team4 from './../image/asset 21.jpeg';
import team5 from './../image/asset 22.jpeg';
import team6 from './../image/asset 23.jpeg';

import './../style/team.css';
import './../style/media.css';

const Team = () => {
    return (
        <>

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>OUR EXPERTS TEAM</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 team'>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team1} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Alonso Curtis</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team2} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Pearl Alia</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team3} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Maurice Allan</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team4} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Bellamy Kara</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team5} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Franco Dilan</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team6} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Kiana Mercy</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Team
