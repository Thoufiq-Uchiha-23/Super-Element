// import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// import { brand, navigation } from "../constants";

const Navbar = () => {
  //   const pathname = useLocation();
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="w-full h-20 bg-zinc-800 flex items-center justify-between">
      <h1 className="text-6xl font-kar text-center font-semibold bg-clip-text bg-gradient-to-r  from-red-700 to-blue-900 text-transparent">SUPER ELEMENT</h1>
      <div className="flex justify-between items-center gap-3">
        <a href="/">Home</a>
        <a href="/">Characters</a>
        <a href="/">Connect</a>
      </div>
    </div>
  );
};


export default Navbar;
