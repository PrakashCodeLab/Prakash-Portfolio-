import React from 'react';
import './Footer.scss'
import {AiOutlineCopyright} from "react-icons/ai";


const Footer = () => {

   const year=new Date();

   const currentYear = year.getFullYear();

  return (
    <footer className='footer__body--section'>
       <div className="footer__section--wrapper">
          <h3 className='footer__lead--content'>
            
            <span className='footer--copyrights'>&copy;</span>  <span className='footer--yeaar'>{currentYear}</span> <span className='footer--name'>prakash</span>
        </h3>   
       </div>
    </footer>
  );
}

export default Footer;
