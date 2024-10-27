import './index.scss';
import { useState } from 'react';
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

                    <FaWhatsapp className="menu-icon" />

                </a>

                <a href="" target="_blank" rel="">

                    <FaFacebook className="menu-icon" />

                </a>

                <a href="" target="_blank" rel="">

                    <FaInstagram className="menu-icon" />

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