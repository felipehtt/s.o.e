import './index.scss';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function Fly() {

    const [menuAbriu, setMenuAbriu] = useState(false);

    // let w = 'WhatsApp'

    function Menu() {

        setMenuAbriu(!menuAbriu);

    };


    return (

        <div className='fly-menu'>

            <div className={`menu ${menuAbriu ? 'open' : ''}`}>

                <a href="https://api.whatsapp.com/send/?phone=5511962652061&text=Olá,+Tudo+Bem?+Vim+pelo+Site.&type=phone_number&app_absent=0" target='_blank' rel="">

                    <SocialIcon className='menu-icon' fallback="whatsapp" bgColor='#db4545' href='https://api.whatsapp.com/send/?phone=5511962652061&text=Olá,+Tudo+Bem?+Vim+pelo+Site.&type=phone_number&app_absent=0' />

                </a>

                <a href="https://www.facebook.com/FestasZuca" target='_blank' rel="">

                    <SocialIcon className='menu-icon' fallback="facebook" bgColor='#db4545' href='https://www.facebook.com/FestasZuca' />

                </a>

                <a href="https://www.instagram.com/festaszuca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' rel="">

                    <SocialIcon className='menu-icon' fallback="instagram" bgColor='#db4545' href='https://www.instagram.com/festaszuca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' />

                </a>

            </div>

            <div className='fly-button' onClick={Menu}>

                <FaWhatsapp className='plus-icon' />
                <FaFacebook className='plus-icon' />
                <FaInstagram className='plus-icon' />

            </div>

        </div>

    );

}