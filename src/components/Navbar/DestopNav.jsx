import React from "react";

const DestopNav = () => {
  return (
    <>
      <ul className="navbar__list--desktop ">
        <li>
          <a className="text-primary" href="/">home</a>
        </li>
        <li>
          <a href="#aboutMe">about</a>
        </li>
        <li>
          <a href="#project">projects</a>
        </li>
        <li>
          <a href="#contactUs">contact</a>
        </li>
       
      </ul>
    </>
  );
};

export default DestopNav;
