import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import service1 from './../image/asset 1.jpeg';
import service2 from './../image/asset 2.jpeg';
import service3 from './../image/asset 3.jpeg';

import './../style/service.css'
import './../style/media.css';

const Services = () => {
  return (
    <>

<div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>OUR BEST SERVICE</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 service'>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={service1} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5><a href="">Water Heaters</a></h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={service2} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5><a href="">Electrical</a></h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={service3} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5><a href="">Commercial</a></h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
      
    </>
  )
}

export default Services
