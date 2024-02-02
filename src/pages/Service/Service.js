import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './service.css';
import Services from '../../components/Services';
import { Container, Row, Col } from 'react-bootstrap';

import { FaArrowRight} from "react-icons/fa";

import { Link } from 'react-router-dom';

import view1 from '../../image/asset 4.png';
import view2 from '../../image/asset 5.png';
import view3 from '../../image/asset 6.png';
import view4 from '../../image/asset 7.png';
import view5 from '../../image/asset 8.png';
import view6 from '../../image/asset 9.png';
import service1 from '../../image/asset 1.jpeg';
import service2 from '../../image/asset 2.jpeg';
import service3 from '../../image/asset 3.jpeg';
import service4 from '../../image/service4.jpg';
import service5 from '../../image/service5.jpg';
import service6 from '../../image/service6.jpg';

const Service = () => {
  return (
    <>

      <Header />

      <div className="bg">
                <Container>
                    <div className="content">
                        <h2>SERVICE</h2>
                        <ul className='list-unstyled arrow d-flex justify-content-center align-items-center'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to=""><FaArrowRight style={{ margin: "0 20px" }} /></Link></li>
                            <li><Link to="/service">Service</Link></li>
                        </ul>
                    </div>
                </Container>
            </div>

      <Services />

      <section className="spacey over">
        <Container>
          <div className="text text-center m-auto">
            <h3>SERVICE OVERVIEW</h3>
            <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
          </div>
          <Row className="g-4">
            <Col xs={12} md={6}>
              <div className="box mb-0">
                <div className="row text-center text-lg-start">
                  <div className="col-lg-3">
                    <img src={view1} alt="" />
                  </div>
                  <div className="content col-lg-9">
                    <h5>Plumber</h5>
                    <p>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="box mb-0">
                <div className="row text-center text-lg-start">
                  <div className="col-lg-3">
                    <img src={view2} alt="" />
                  </div>
                  <div className="content col-lg-9">
                    <h5>Water Heaters</h5>
                    <p>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="box mb-0">
                <div className="row text-center text-lg-start">
                  <div className="col-lg-3">
                    <img src={view3} alt="" />
                  </div>
                  <div className="content col-lg-9">
                    <h5>Kitchen Repair</h5>
                    <p>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="box mb-0">
                <div className="row text-center text-lg-start">
                  <div className="col-lg-3">
                    <img src={view4} alt="" />
                  </div>
                  <div className="content col-lg-9">
                    <h5>Plumber Repair</h5>
                    <p>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="box mb-0">
                <div className="row text-center text-lg-start">
                  <div className="col-lg-3">
                    <img src={view5} alt="" />
                  </div>
                  <div className="content col-lg-9">
                    <h5>Gas Repair</h5>
                    <p>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="box mb-0">
                <div className="row text-center text-lg-start">
                  <div className="col-lg-3">
                    <img src={view6} alt="" />
                  </div>
                  <div className="content col-lg-9">
                    <h5>House Repair</h5>
                    <p>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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
                  <h5><a to="">Water Heaters</a></h5>
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
                  <h5><a to="">Electrical</a></h5>
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
                  <h5><a to="">Commercial</a></h5>
                  <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="box">
                <div className="img">
                  <img src={service4} alt="" />
                </div>
                <div className="content text-center">
                  <h5><a to="">Railway Service</a></h5>
                  <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="box">
                <div className="img">
                  <img src={service5} alt="" />
                </div>
                <div className="content text-center">
                  <h5><a to="">Office Service</a></h5>
                  <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="box">
                <div className="img">
                  <img src={service6} alt="" />
                </div>
                <div className="content text-center">
                  <h5><a to="">Car Service</a></h5>
                  <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />

    </>
  )
}

export default Service
