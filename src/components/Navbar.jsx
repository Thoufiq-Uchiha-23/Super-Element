import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// import { brand, navigation } from "../constants";

const Navbar = () => {
  //   const pathname = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div>Hello World</div>
    </div>
  );
};


export default Navbar;
