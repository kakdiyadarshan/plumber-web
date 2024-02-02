import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FaUser, FaCalendar, FaComments } from "react-icons/fa";

import blog1 from './../image/asset 26.jpeg';
import blog2 from './../image/asset 27.jpeg';
import blog3 from './../image/asset 28.jpeg';

import './../style/blog.css';

const Blog = () => {
    return (
        <>

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>OUR LATEST BLOG</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 blog'>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={blog1} alt="" />
                                </div>
                                <div className="content">
                                    <h6><a href="">NOW GRAB YOUR TOOL BELT AND GET TO WORK!</a></h6>
                                    <p>A plumbing plan illustrates the system that will bring water in and take waste back out. It typically
                                        includes water supply lines.</p>
                                    <ul className="comments d-flex justify-content-between mt-4 mb-0 ps-0">
                                        <li><a href=""><FaUser style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />Plumber</a></li>
                                        <li><a href=""><FaCalendar style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />20 july 2023</a></li>
                                        <li><a href=""><FaComments style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />77</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={blog2} alt=""  />
                                </div>
                                <div className="content">
                                    <h6><a href="">NOW GRAB YOUR TOOL BELT AND GET TO WORK!</a></h6>
                                    <p>A plumbing plan illustrates the system that will bring water in and take waste back out. It typically
                                        includes water supply lines.</p>
                                    <ul className="comments d-flex justify-content-between mt-4 mb-0 ps-0">
                                        <li><a href=""><FaUser style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />Plumber</a></li>
                                        <li><a href=""><FaCalendar style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />20 july 2023</a></li>
                                        <li><a href=""><FaComments style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />77</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={blog3} alt=""  />
                                </div>
                                <div className="content">
                                    <h6><a href="">NOW GRAB YOUR TOOL BELT AND GET TO WORK!</a></h6>
                                    <p>A plumbing plan illustrates the system that will bring water in and take waste back out. It typically
                                        includes water supply lines.</p>
                                    <ul className="comments d-flex justify-content-between mt-4 mb-0 ps-0">
                                        <li><a href=""><FaUser style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />Plumber</a></li>
                                        <li><a href=""><FaCalendar style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />20 july 2023</a></li>
                                        <li><a href=""><FaComments style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />77</a></li>
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

export default Blog
