// NavBar.tsx
import React from "react";
import logo from "../../assets/brand_logo.png";
import instagram from "../../assets/logo-instagram.png";
import twitter from "../../assets/logo-twitter.png";
import whatsapp from "../../assets/logo-whatsapp.png";
import youtube from "../../assets/logo-youtube.png";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <div className="md:container mx-auto px-28 flex justify-between items-center">
        <div className="text-2xl text-white font-semibold">
          <img src={logo} alt="logo" />
        </div>
        <ul className="flex space-x-4">
          <a className="text-white hover:underline cursor-pointer">
            <img src={instagram} alt="logo" />
          </a>
          <a className="text-white hover:underline cursor-pointer">
            <img src={twitter} alt="logo" />
          </a>
          <a className="text-white hover:underline cursor-pointer">
            <img src={whatsapp} alt="logo" />
          </a>
          <a className="text-white hover:underline cursor-pointer">
            <img src={youtube} alt="logo" />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
