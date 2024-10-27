import React from 'react';
import './index.scss';
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {


    const [loggedIn, setLoggedIn] = useState(false);

    const loginActive = () => {

        setLoggedIn(true);

    }

    const logOut = () => {

        setLoggedIn(false);

    }


    return (

        <footer className="footer">

            <div className="footer-content">

                <div className="contato">

                    <h2>Contate-nos</h2>

                    <div className="social-links">

                        <a href="#" className="social-link"><FaWhatsapp fontSize='140%' /></a>

                        <p>soefestas@gmail.com</p>

                    </div>

                </div>

                <div className="social">

                    <h2>Siga-nos</h2>

                    <div className="social-links">

                        <a href="#" className="social-link"><FaFacebookF fontSize='140%' /></a>

                        <a href="#" className="social-link"><FaInstagram fontSize='140%' /></a>

                        <a href="#" className="social-link"><FaLinkedin fontSize='140%' /></a>

                    </div>

                </div>

            </div>

            <div className="footer-baixo">

                <nav className="footer-nav">

                    <a href="/soe">Sobre nós</a>

                    <a href="/festas">Festas</a>

                </nav>

                <div className='end'>

                    <p>&copy; 2024 Site Soe.</p>

                    <Link to={'/login'} className='img'><img src="/assets/images/logo-soe.png" alt="" /></Link>

                    <p>Direitos reservados.</p>

                </div>

            </div>

        </footer>
    );
};

