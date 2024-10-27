import React from 'react';
import './index.scss';
import { SocialIcon } from 'react-social-icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../screens/AuthContext';

export default function Footer() {

    const { isAuthenticated } = useAuth();

    return (

        <footer className='footer'>

            <div className='footer-content'>

                <div className='contato'>

                    <h2>Contate-nos</h2>

                    <div className='social-links'>

                        <a href="" className='social-link' target='_blank'><SocialIcon fallback="whatsapp" bgColor='#db4545' href='' /> WhatsApp</a>

                        <a href="" className='social-link' target='_blank'><SocialIcon fallback="email" bgColor='#db4545' href='' /> Email</a>

                    </div>

                </div>

                <div className='social'>

                    <h2>Siga-nos</h2>

                    <div className='social-links'>

                        <a href="" className='social-link' target='_blank'><SocialIcon fallback="facebook" bgColor='#db4545' href=''  /></a>

                        <a href="" className='social-link' target='_blank'><SocialIcon fallback="instagram" bgColor='#db4545' href='' /></a>

                        <a href="" className='social-link' target='_blank'><SocialIcon fallback="linkedin" bgColor='#db4545' href='' /></a>

                        <a href="" className='social-link' target='_blank'><SocialIcon fallback="x" bgColor='#db4545' href='' /></a>

                    </div>

                </div>

            </div>

            <div className='footer-baixo'>

                <nav className='footer-nav'>

                    <a href="/soe">Sobre nós</a>

                    <a href="/festas">Festas</a>

                </nav>

                <div className='end'>

                    <p>&copy; 2024 Site Soe.</p>

                    <Link to={isAuthenticated ? '/dashboard' : '/login'} className='img'><img src="/assets/images/logo-soe.png" alt="" /></Link>

                    <p>Direitos reservados.</p>

                </div>

            </div>

        </footer>
    );
};

