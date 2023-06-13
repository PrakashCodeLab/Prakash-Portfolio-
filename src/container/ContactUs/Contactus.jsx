import React from 'react';
import './Contactus.scss';
import NavIcon from '../../components/Navicon/NavIcon';
import {AiFillMessage} from 'react-icons/ai';
import contactLogo from '../../assets/images/logos/Color logo with background.png';
const Contactus = () => {

  const emailLink="prakashtechweb@gmail.com";
  return (
    <section className='contact__section--body'>
       <div className="contact__section--wrapper">
            <div data-aos="fade-right"  data-aos-duration="1000" className="contact__logo">
             <NavIcon/>
            </div>

            <div className="contact__heading">
              <h2 data-aos="zoom-in" >lets talk</h2>
            </div>

            <div data-aos="fade-left" data-aos-duration="1" className="contact__email--section">
              <a className='contact--link--btn' href={`mailto:${emailLink}?service=mail&uriprop=openwithservice` }>
                <span>lets chat</span>
               <span><AiFillMessage size={26}/></span>
              
              </a> 
            </div>
       </div>
    </section>
  );
}

export default Contactus;
