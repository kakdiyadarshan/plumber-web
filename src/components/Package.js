import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import './../style/package.css';
import './../style/media.css';

const Package = () => {
    return (
        <>

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>PRICING PLAN</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 package'>
                        <Col xs={12} lg={3}>
                            <div className="item text-center">
                                <h6>PLUMBER SERVICES</h6>
                                <h3>$80.00</h3>
                                <p>Per Month</p>
                                <ul className='ps-0'>
                                    <li>1 Website</li>
                                    <li>Unlimited Bandwidth</li>
                                    <li>100 GB Disk Space</li>
                                    <li>10 My SQL Database</li>
                                    <li>100 E-mail Address</li>
                                </ul>
                                <div class="button">
                                    <a href="" className="btn">Buy Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={3}>
                            <div class="item items text-center">
                                <h6>DRAINAGE SERVICES</h6>
                                <h3>$90.00</h3>
                                <p>Per Month</p>
                                <ul className='ps-0'>
                                    <li>1 Website</li>
                                    <li>Unlimited Bandwidth</li>
                                    <li>100 GB Disk Space</li>
                                    <li>10 My SQL Database</li>
                                    <li>100 E-mail Address</li>
                                </ul>
                                <div class="button">
                                    <a href="" class="btn">Buy Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={3}>
                            <div class="item text-center">
                                <h6>HEATING SERVICES</h6>
                                <h3>$95.00</h3>
                                <p>Per Month</p>
                                <ul className='ps-0'>
                                    <li>1 Website</li>
                                    <li>Unlimited Bandwidth</li>
                                    <li>100 GB Disk Space</li>
                                    <li>10 My SQL Database</li>
                                    <li>100 E-mail Address</li>
                                </ul>
                                <div class="button">
                                    <a href="" class="btn">Buy Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={3}>
                            <div class="item text-center">
                                <h6>CLEANING SERVICES</h6>
                                <h3>$100.00</h3>
                                <p>Per Month</p>
                                <ul className='ps-0'>
                                    <li>1 Website</li>
                                    <li>Unlimited Bandwidth</li>
                                    <li>100 GB Disk Space</li>
                                    <li>10 My SQL Database</li>
                                    <li>100 E-mail Address</li>
                                </ul>
                                <div class="button">
                                    <a href="" class="btn">Buy Now</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


        </>
    )
}

export default Package
