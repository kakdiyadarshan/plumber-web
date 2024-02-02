import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import './../style/counter.css';
import './../style/media.css';

const Counter = () => {
    return (
        <>

            <div className="spacey counter">
                <Container>
                    <div className="text text-center mb-1 m-auto">
                        <h3 style={{ color: "white" }}>Some of Our Facts</h3>
                    </div>
                    <Row className='g-4 text-center'>
                        <Col xs={12} sm={6} md={6} lg={3}>
                            <div className="text">
                                <span>2150</span>
                                <span>+</span>
                                <p className='mb-0'>Google Reviews</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3} >
                            <div className="text">
                                <span>2150</span>
                                <span>+</span>
                                <p className='mb-0'>Google Reviews</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3}>
                            <div className="text">
                                <span>2150</span>
                                <span>+</span>
                                <p className='mb-0'>Google Reviews</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3}>
                            <div className="text">
                                <span>2150</span>
                                <span>+</span>
                                <p className='mb-0'>Google Reviews</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Counter
