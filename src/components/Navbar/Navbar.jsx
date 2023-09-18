import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCircleRemove } from "react-icons/ci";
import NavIcon from "../Navicon/NavIcon";

import DestopNav from "./DestopNav";
import MobileNav from "./MobileNav";
import "./Navbar.scss";



const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const NavbarChange = () => {
    setNavbar(!navbar);
  };

 

  useEffect(() => {

    const ScreenChange = () => {
      if (window.innerWidth >= 768) {
        setNavbar(false);
      }
    };


    window.addEventListener("resize", ScreenChange);

    return () => {
      window.removeEventListener("resize", ScreenChange);
    };
  }, []);

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="800"
      data-aos-delay="200"
      data-aos-offset="200"
      className="navbar__container"
    >
      <NavIcon />

      <div className="navbar__list__section">
        <DestopNav />

        {navbar ? <MobileNav /> : ""}
      </div>
      
      <div onClick={NavbarChange} className="navbar__hamburger__section">
      
        
        {navbar ? (
          <CiCircleRemove className="navicon hamburger" data-aos="fade-left" />
        ) : (
          <GiHamburgerMenu data-aos="fade-left" className="navicon removeham" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
