import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// import { brand, navigation } from "../constants";

const Navbar = () => {
  //   const pathname = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>Hello World</div>
    </>
  );
};
//   return (
//     <div ref={comp} id="animeNav" className="flex items-center fixed justify-between w-full px-10 py-5 gap-10 font-xl z-[100] backdrop-blur-xl hover:backdrop-blur-3xl cursor-pointer">
//       {/* Menu Button */}
//       <div className="fixed top-[20%] inset-y-0 right-[5%] z-[999] lg:hidden">
//         <button
//           onClick={toggleMenu}
//           type="button"
//           className="inline-flex transition-all font-bold duration-500 items-center justify-center p-2 rounded-md text-purple-400 hover:text-white hover:bg-purple-500/50"
//           aria-controls="mobile-menu"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           {!isOpen ? (
//             <svg className="block h-6 w-6 font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           ) : (
//             <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           )}
//         </button>
//       </div>
//       <a
//         className="font-semibold flex whitespace-nowrap overflow-hidden justify-center items-center uppercase text-4xl"
//         href="#hero"
//       >
//         <h1 className="overflow-hidden">
//           <img
//             src={brand.url}
//             className="inline-block"
//             width={50}
//             alt="my-logo"
//             id="myLogo"
//           />
//         </h1>
//         <span id="h-part" className="font-bold text-4xl font-monto italic pr-1 overflow-hidden">houfiq</span>
//       </a>
//       <div className={`nav-items hidden lg:flex top-0 transition-all max-lg:pt-10 left-0 max-lg:flex-col items-center max-lg:min-h-screen max-lg:w-full max-lg:absolute lg:relative lg:flex-row justify-evenly gap-5 font-bold lg:font-lg backdrop-blur-sm text-3xl lg:text-xl tracking-widest max-lg:bg-cyan-500/15 text-white`}>
//         {navigation.map((item) => (
//           <a
//             id="menuItems"
//             key={item.id}
//             href={item.url}
//             className={`font-code overflow-hidden ${
//               item.url == pathname.hash ? "z-2 text-purple-500" : "text-white"
//             } uppercase`}
//           >
//             {item.title}
//           </a>
//         ))}
//       </div>

//       <div className={`${isOpen ? 'flex' : 'hidden'} lg:hidden top-0 transition-all max-lg:pt-10 left-0 max-lg:flex-col items-center max-lg:min-h-screen max-lg:w-full max-lg:absolute lg:relative lg:flex-row justify-evenly gap-5 font-bold lg:font-lg backdrop-blur-xl text-3xl lg:text-xl tracking-widest bg-blue-900/90 text-white`}>
//         {navigation.map((item) => (
//           <a
//           id="menuItemsBar"
//             key={item.id}
//             href={item.url}
//             className={`font-code ${
//               item.url == pathname.hash ? "z-2 text-purple-500" : "text-white"
//             } uppercase`}
//           >
//             {item.title}
//           </a>
//         ))}
//       </div>
//     </div>
//   );}

export default Navbar;
