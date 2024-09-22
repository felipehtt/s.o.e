import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (

        <div className='comp-footer'>

            <div className='nav'>

                <section>

                    <FontAwesomeIcon icon={faInstagram} size='2x'/>
                    <FontAwesomeIcon icon={faTiktok} size='2x'/>
                    <FontAwesomeIcon icon={faFacebookF} size='2x'/>

                </section>

                <p> Special  <FontAwesomeIcon className='c' icon={faCircle}/>   Organization <FontAwesomeIcon className='c' icon={faCircle} />  Events </p>

                <p className='m'>Terms of Use  -  Privacy  Police</p>

                <p className='n'> <FontAwesomeIcon icon={faCopyright} /> 2024 Clarity Money Legacy</p>
            </div>

        </div>

    );

}

