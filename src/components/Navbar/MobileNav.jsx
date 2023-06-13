import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MobileNav = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, 
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <>
      <ul data-aos="fade-right" className="navbar__list--mobile">
        <li className="list-mobile">
          <a className="mobile-link" href="/">
            home
          </a>
        </li>
        <li className="list-mobile">
          <a className="mobile-link" href="#aboutMe">
            about
          </a>
        </li>
        <li className="list-mobile">
          <a className="mobile-link" href="=#project">
            projects
          </a>
        </li>
        <li className="list-mobile">
          <a className="mobile-link" href="#contactUs">
            contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default MobileNav;
