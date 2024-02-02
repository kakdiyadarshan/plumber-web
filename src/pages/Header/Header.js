import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp, FaPhoneAlt, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";

import logo from './../../image/logo.png';

import './header.css'
import './../../style/media.css';

const Header = () => {
    return (
        <>

            <div className='main fixed-top'>
                <div className="top_info d-none d-lg-block">
                    <Container>
                        <div className='d-flex justify-content-between align-items-center'>
                            <ul className='d-flex mb-0 ps-0'>
                                <li className='me-4'><a href=""><MdEmail style={{ marginRight: "5px", fontSize: "18px" }} />example@gmail.com</a></li>
                                <li className='me-4'><a href=""><AiFillClockCircle style={{ marginRight: "5px", fontSize: "18px" }} />Mon-Fri : 9 Am - 5 PM</a></li>
                                <li><a href=""><FaPhoneAlt style={{ marginRight: "5px", fontSize: "18px" }} />+123 -568 - 4758</a></li>
                            </ul>
                            <ul className="d-flex mb-0 ps-0">
                                <li><a href=""><FaFacebook style={{ marginRight: '15px', fontSize: "18px" }} /></a></li>
                                <li><a href=""><FaTwitter style={{ marginRight: '15px', fontSize: "18px" }} /></a></li>
                                <li><a href=""><FaLinkedinIn style={{ marginRight: '15px', fontSize: "18px" }} /></a></li>
                                <li><a href=""><FaInstagram style={{ marginRight: '15px', fontSize: "18px" }} /></a></li>
                                <li><a href=""><FaWhatsapp style={{ marginRight: '15px', fontSize: "18px" }} /></a></li>
                            </ul>
                        </div>
                    </Container>
                </div>

                <Navbar expand="lg" className="bg-body-tertiary nav ">
                    <Container>
                        {/* <div className="header d-flex w-100 justify-content-between"> */}
                        <Navbar.Brand to="#home">
                            <img src={logo}></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link to="/" className='menu' style={{ padding: '10px' }}>Home<IoChevronDown style={{ fontSize: "20px", marginLeft: "5px", fontWeight: 400 }} /></Link>
                                <Link to="/about" className='menu' style={{ padding: '10px' }}>About</Link>
                                <Link to="/service" className='menu' style={{ padding: '10px' }}>Service<IoChevronDown style={{ fontSize: "20px", marginLeft: "5px", fontWeight: 400 }} /></Link>
                                {/* <NavDropdown title="Service" id="basic-nav-dropdown">
                                <NavDropdown.Item to="#action/3.1"></NavDropdown.Item>
                                <NavDropdown.Item to="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item to="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                                <Link to="/team" className='menu' style={{ padding: '10px' }}>Team<IoChevronDown style={{ fontSize: "20px", marginLeft: "5px", fontWeight: 400 }} /></Link>
                                <Link to="/blog" className='menu' style={{ padding: '10px' }}>Blog<IoChevronDown style={{ fontSize: "20px", marginLeft: "5px", fontWeight: 400 }} /></Link>
                                <Link to="/contact" className='menu' style={{ padding: '10px' }}>Contact</Link>
                                {/* <Link to="/search" className='menu'><FaSearch style={{display:"flex",alignItems:"center"}} /></Link> */}

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


        </>
    )
}

export default Header
