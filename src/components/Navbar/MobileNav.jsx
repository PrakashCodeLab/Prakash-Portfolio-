import {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


   




const MobileNav = () => {


  


   



  useEffect(() => {
    AOS.init({
      duration: 900, // Adjust the duration as per your preference
      easing: 'ease-in-out', // Adjust the easing function as per your preference
    });
  }, []);

 
 

  return (
    <>
      <ul   data-aos='fade-right'  className='navbar__list--mobile'>
        <li className='list-mobile'>
          <a className='mobile-link' href="">home</a>
        </li>
        <li className='list-mobile'>
          <a className='mobile-link' href="">about</a>
        </li>
        <li className='list-mobile'>
          <a className='mobile-link'  href="">projects</a>
        </li>
        <li className='list-mobile'>
          <a className='mobile-link' href="">contact</a>
        </li>
      
      </ul>
    </>
  );
}

export default MobileNav;
