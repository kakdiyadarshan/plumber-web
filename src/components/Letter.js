import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FaPaperPlane } from "react-icons/fa";

import './../style/letter.css'


const Letter = () => {
    return (
        <>

            <div className="news">
                <Container>
                    <Row className='g-4'>
                        <Col xs={12} md={5}>
                            <h4>For Newsletter to Subscribe</h4>
                        </Col>
                        <Col xs={12} md={7}>
                            <div class="form">
                                <input type="email" placeholder="Enter your Email" />
                                <FaPaperPlane className='plane' />
                                <div class="button">
                                    <a href="" class="btn">Subscribe Now</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Letter
