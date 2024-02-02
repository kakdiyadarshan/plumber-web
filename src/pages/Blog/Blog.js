import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FaUser, FaCalendar, FaComments, FaArrowRight } from "react-icons/fa";
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import blog4 from '../../image/blog4.jpg';
import blog5 from '../../image/blog5.jpg';
import blog6 from '../../image/blog6.jpg';
import side1 from '../../image/side1.jpg';
import side2 from '../../image/side2.jpg';
import side3 from '../../image/side3.jpg';

import './../Contact/contact.css'
import './blog.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <>

        <Header />

            <div className="bg">
                <Container>
                    <div className="content">
                        <h2>Blog Default</h2>
                        <ul className='list-unstyled arrow d-flex justify-content-center align-items-center'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to=""><FaArrowRight style={{ margin: "0 20px" }} /></Link></li>
                            <li><Link to="/blog">Blog Default</Link></li>
                        </ul>
                    </div>
                </Container>
            </div>

            <section className='spacey grid'>
                <Container>
                    <Row className='g-4'>
                        <Col xs={12} lg={8}>
                            <Row className='g-4'>
                                <Col lg={12}>
                                    <div className="box">
                                        <div className="img">
                                            <img src={blog4} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6><a to="">NOW GRAB YOUR TOOL BELT AND GET TO WORK!</a></h6>
                                            <ul className="comments d-flex align-items-center mt-2 mb-2 mb-0 ps-0">
                                                <li><a to=""><FaUser style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />Plumber</a></li>
                                                <li><a to=""><FaCalendar style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />20 july 2023</a></li>
                                                <li><a to=""><FaComments style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />77</a></li>
                                            </ul>
                                            <p>A plumbing plan illustrates the system that will bring water in and take waste back out. It typically
                                                includes water supply lines.</p>
                                            <div>
                                                <a to="" className='btn'>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="box">
                                        <div className="img">
                                            <img src={blog5} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6><a to="">NOW GRAB YOUR TOOL BELT AND GET TO WORK!</a></h6>
                                            <ul className="comments d-flex align-items-center mt-2 mb-2 mb-0 ps-0">
                                                <li><a to=""><FaUser style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />Plumber</a></li>
                                                <li><a to=""><FaCalendar style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />20 july 2023</a></li>
                                                <li><a to=""><FaComments style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />77</a></li>
                                            </ul>
                                            <p>A plumbing plan illustrates the system that will bring water in and take waste back out. It typically
                                                includes water supply lines.</p>
                                            <div>
                                                <a to="" className='btn'>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="box">
                                        <div className="img">
                                            <img src={blog6} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6><a to="">NOW GRAB YOUR TOOL BELT AND GET TO WORK!</a></h6>
                                            <ul className="comments d-flex align-items-center mt-2 mb-2 mb-0 ps-0">
                                                <li><a to=""><FaUser style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />Plumber</a></li>
                                                <li><a to=""><FaCalendar style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />20 july 2023</a></li>
                                                <li><a to=""><FaComments style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />77</a></li>
                                            </ul>
                                            <p>A plumbing plan illustrates the system that will bring water in and take waste back out. It typically
                                                includes water supply lines.</p>
                                            <div>
                                                <a to="" className='btn'>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <ul className="pagination d-flex align-items-center justify-content-center">
                                <li><a to=""><FaAngleLeft style={{fontSize:"20px"}} /></a></li>
                                <li className='active'><a to="">01</a></li>
                                <li><a to="">02</a></li>
                                <li><a to="">03</a></li>
                                <li><a to=""><FaAngleRight style={{fontSize:"20px"}} /></a></li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div className="side">
                                <div className="sidebar">
                                    <div className="title">
                                        <h5>All Calegory</h5>
                                    </div>
                                    <div className="body">
                                        <ul className='ps-0 mb-0'>
                                            <li><a to="">Kitchen Plumber</a></li>
                                            <li><a to="">House Plumber</a></li>
                                            <li><a to="">Car Repair</a></li>
                                            <li><a to="">Water Line Repair</a></li>
                                            <li><a to="">Electrical Plumber</a></li>
                                            <li><a to="">Gas Line Repair</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar">
                                    <div className="title">
                                        <h5>Recent Post</h5>
                                    </div>
                                    <div className="body post">
                                        <ul className='ps-0'>
                                            <li>
                                                <div className="img">
                                                    <a to=""><img src={side1} alt="" /></a>
                                                </div>
                                                <div className="con">
                                                    <a to=""><h6>Now grab your tool belt and get to work!</h6></a>
                                                    <p className='mb-0'>july 12,2023</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img">
                                                    <a to=""><img src={side2} alt="" /></a>
                                                </div>
                                                <div className="con">
                                                    <a to=""><h6>Now grab your tool belt and get to work!</h6></a>
                                                    <p className='mb-0'>july 12,2023</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img">
                                                    <a to=""><img src={side3} alt="" /></a>
                                                </div>
                                                <div className="con">
                                                    <a to=""><h6>Now grab your tool belt and get to work!</h6></a>
                                                    <p className='mb-0'>july 12,2023</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar">
                                    <div className="title">
                                        <h5>Popular Tag</h5>
                                    </div>
                                    <div className="tag">
                                        <ul className='ps-0 mb-0'>
                                            <li><a to="">Plumber</a></li>
                                            <li><a to="">Gas Line</a></li>
                                            <li><a to="">Water Line</a></li>
                                            <li><a to="">House</a></li>
                                            <li><a to="">Barthroom</a></li>
                                            <li><a to="">Basement</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <Footer />

        </>
    )
}

export default Blog
