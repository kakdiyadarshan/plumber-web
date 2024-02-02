import React from 'react'

import { Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { FaArrowRight } from "react-icons/fa";
import Header from '../Header/Header';
import './team.css';
import Teams from '../../components/Teams.js'
import Expert from '../../components/Expert.js';
import Letter from '../../components/Letter.js';
import Footer from '../Footer/Footer.js';

const Team = () => {
    return (
        <>

        <Header />

            <div className="bg">
                <Container>
                    <div className="content">
                        <h2>TEAM MEMBER</h2>
                        <ul className='list-unstyled arrow d-flex justify-content-center align-items-center'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to=""><FaArrowRight style={{ margin: "0 20px" }} /></Link></li>
                            <li><Link to="/team">Team</Link></li>
                        </ul>
                    </div>
                </Container>
            </div>

            <Expert />

            <Teams />

            <Expert />

            <Letter />

            <Footer />


        </>
    )
}

export default Team
