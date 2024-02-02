import React from 'react'
import './about.css'
import './../Home/home.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { FaArrowRight, FaClock, FaUsers, FaDollarSign} from "react-icons/fa";

import progress from '../../image/progress.png';

import Counter from '../../components/Counter';
import Expert from '../../components/Expert';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Blog from '../../components/Blog';

const About = () => {
    return (
        <>

        <Header />

            <div className="bg">
                <Container>
                    <div className="content">
                        <h2>About</h2>
                        <ul className='list-unstyled arrow d-flex justify-content-center align-items-center'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to=""><FaArrowRight style={{ margin: "0 20px" }} /></Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </Container>
            </div>

            <section className='spacey about'>
                <Container>
                    <Row className='g-4'>
                        <Col xs={12} lg={6}>
                            <div className="item">
                                <h3>OUR EXPERTNESS</h3>
                                <p>A plumber is a tradesperson who specializes in installing and maintaining systems used for potable (drinking) water, and for sewage and drainage in plumbing systems.</p>
                                <div className="progress-content">
                                    <h6>Plumber</h6>
                                    <div className="progress">
                                        <div className="bar" style={{ width: "90%" }}>
                                            <p>90%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-content">
                                    <h6>FUSE EIOMDOR</h6>
                                    <div className="progress">
                                        <div className="bar" style={{ width: "75%" }}>
                                            <p>90%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-content">
                                    <h6>BOILER SERVICE</h6>
                                    <div className="progress">
                                        <div className="bar" style={{ width: "60%" }}>
                                            <p>90%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-content">
                                    <h6>DAINENCE SERVICES</h6>
                                    <div className="progress">
                                        <div className="bar" style={{ width: "45%" }}>
                                            <p>90%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="img">
                                <img src={progress} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>WHY CHOOSE US?</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 choose'>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="icon">
                                    <FaClock className='svg' />
                                </div>
                                <div className="content text-center">
                                    <h5>Always Available</h5>
                                    <p className='mb-0'>A plumber is a tradesperson who specializes in installing.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="icon">
                                    <FaUsers className='svg' />
                                </div>
                                <div className="content text-center">
                                    <h5>Qualified Agents</h5>
                                    <p className='mb-0'>A plumber is a tradesperson who specializes in installing.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="icon">
                                    <FaDollarSign className='svg' />
                                </div>
                                <div className="content text-center">
                                    <h5>Prices</h5>
                                    <p className='mb-0'>A plumber is a tradesperson who specializes in installing.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Counter Section Start */}

            <Counter />

            {/* Counter Section End */}

            <Expert />

            <Blog />

            <Footer />
            

        </>
    )
}

export default About
