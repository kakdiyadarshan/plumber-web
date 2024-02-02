import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import view1 from './../image/asset 4.png';
import view2 from './../image/asset 5.png';
import view3 from './../image/asset 6.png';
import view4 from './../image/asset 7.png';
import view5 from './../image/asset 8.png';
import view6 from './../image/asset 9.png';

import './../style/overview.css';
import './../style/media.css';

const Overview = () => {
    return (
        <>

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>SERVICE OVERVIEW</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 view'>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view1} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Plumber</h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view2} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Water Heaters</h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view3} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Kitchen Repair</h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view4} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Plumber Repair</h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view5} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Gas Repair</h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view6} alt="" />
                                </div>
                                <div className="content">
                                    <h5>House Repair</h5>
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

export default Overview
