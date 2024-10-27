import './index.scss';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function Fly() {

    const [menuAbriu, setMenuAbriu] = useState(false);

    let w = 'WhatsApp'

    function Menu() {

        setMenuAbriu(!menuAbriu);

    };


    return (

        <div className="fly-menu">

            <div className={`menu ${menuAbriu ? "open" : ""}`}>

                <a href="" target="_blank" rel="" onClick={w}>

                    <SocialIcon className='menu-icon' fallback="whatsapp" bgColor='#db4545' href='' />

                </a>

                <a href="" target="_blank" rel="">

                    <SocialIcon className='menu-icon' fallback="facebook" bgColor='#db4545' href='' />

                </a>

                <a href="" target="_blank" rel="">

                    <SocialIcon className='menu-icon' fallback="instagram" bgColor='#db4545' href='' />

                </a>

            </div>

            <div className="fly-button" onClick={Menu}>

                <FaWhatsapp className="plus-icon" />
                <FaFacebook className="plus-icon" />
                <FaInstagram className="plus-icon" />

            </div>

        </div>

    );

}