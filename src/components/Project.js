import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

import pro1 from './../image/asset 10.jpeg'
import pro2 from './../image/asset 11.jpeg'
import pro3 from './../image/asset 12.jpeg'
import pro4 from './../image/asset 13.jpeg'
import pro5 from './../image/asset 14.jpeg'
import pro6 from './../image/asset 15.jpeg'
import pro7 from './../image/asset 16.jpeg'
import pro8 from './../image/asset 17.jpeg'

import './../style/project.css';
import './../style/media.css';

const Project = () => {
    return (
        <>

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>OUR LATEST PROJECTS</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                </Container>
                <div className="pro">
                    <Row className='g-4 m-0'>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro1} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4 className='d-flex flex-column'><a href="">Kitchen plumber</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro2} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Car Repair</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro3} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Water Line Repair</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro4} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Electrical plumber</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro5} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Water Line plumber</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro6} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">House plumber</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro7} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Glass Cleaner</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro8} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Cleaning Services</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default Project
