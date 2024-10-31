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

                        <a href="https://api.whatsapp.com/send/?phone=5511962652061&text=Olá,+Tudo+Bem?+Vim+pelo+Site.&type=phone_number&app_absent=0" className='social-link' target='_blank'><SocialIcon fallback="whatsapp" bgColor='#db4545' href='https://api.whatsapp.com/send/?phone=5511962652061&text=Olá,+Tudo+Bem?+Vim+pelo+Site.&type=phone_number&app_absent=0' /> WhatsApp</a>

                        <a href="" className='social-link' target='_blank'><SocialIcon fallback="email" bgColor='#db4545' href='' /> Email</a>

                    </div>

                </div>

                <div className='social'>

                    <h2>Siga-nos</h2>

                    <div className='social-links'>

                        <a href="https://www.facebook.com/FestasZuca" className='social-link' target='_blank'><SocialIcon fallback="facebook" bgColor='#db4545' href='https://www.facebook.com/FestasZuca' /></a>

                        <a href="https://www.instagram.com/festaszuca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='social-link' target='_blank'><SocialIcon fallback="instagram" bgColor='#db4545' href='https://www.instagram.com/festaszuca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' /></a>

                        <a href="https://www.tiktok.com/@festaszuca_decora?is_from_webapp=1&sender_device=pc" className='social-link' target='_blank'><SocialIcon fallback="tiktok" bgColor='#db4545' href='https://www.tiktok.com/@festaszuca_decora?is_from_webapp=1&sender_device=pc' /></a>

                    </div>

                </div>

            </div>

            <div className='footer-baixo'>

                <nav className='footer-nav'>

                    <a href="/soe">Sobre nós</a>

                    <a href="/festas">Festas</a>

                    <a href="">
                        <Link to={isAuthenticated ? '/dashboard' : '/login'} className='img'>Adm Access</Link>
                    </a>

                </nav>

                <div className='end'>

                    <p>&copy; 2024 Site Soe.</p>

                    <img src="/assets/images/logo-soe.png" alt="" />

                    <p>Direitos reservados.</p>

                </div>

            </div>

        </footer>
    );
};

