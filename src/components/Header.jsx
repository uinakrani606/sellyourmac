import React, { useEffect, useState } from "react";
import location from '../assets/images/location.svg';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/main-logo.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full z-30 text-white sticky top-0">
      <div className='bg-primary py-2 border-b border-[hsla(0,0%,100%,0.38)] min-[576px]:block hidden'>
        <div className='container flex items-center md:justify-between justify-center'>
          <Link to="/sell" className='flex text-[13px] font-semibold'>
            Welcome to SellYourMac au!
            <span className="!ml-[5px] underline ">Get an Instant Quote</span>
            <span className="!ml-[2px]" >»</span>
          </Link>
          <div className='text-[13px] font-semibold hidden items-center'>
            <label className="flex items-center px-[6px]" htmlFor="switcher">
              <img className='mr-1' src={location} alt="location" />
              Region:</label>
            <select id="switcher">
              <option defaultValue>au</option>
            </select>
          </div>
        </div>
      </div>
      <div className={`navbar py-2 md:h-auto h-[76px] border-b border-[rgba(42,142,158,0.2)] transition-all duration-300 ${isScrolled ? "bg-white" : "bg-transparent"}`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3 h-full">
          {/* Logo */}
          <Link to='/' className="flex items-center space-x-2 lg:order-none order-2 lg:grow-0 grow lg:ps-0 md:ps-10 md:justify-start justify-center">
            <img className='bg-primary w-[101px] rounded-[10px] px-[10px] py-[5px]' src={Logo} alt="" />
          </Link>

          {/* Desktop Nav */}
          <div className="md:flex hidden items-center lg:order-none order-3">
            <nav className="text-black lg:flex hidden items-center space-x-6 text-sm font-regular">
              <Link to="/how-works" className="hover:underline px-[2px] xl:mx-5 text-[16px]">How it Works</Link>
              <Link to="/about-sell-your-mac" className="hover:underline px-[2px] xl:mx-5 text-[16px]">About SYM</Link>
              <Link to="/mac-bulk-buy-back" className="hover:underline px-[2px] xl:mx-5 text-[16px]">Sell in Bulk</Link>
              <Link to="/faqs" className="hover:underline px-[2px] xl:mx-5 text-[16px]">FAQs</Link>
              <Link to="/contact" className="hover:underline px-[2px] xl:mx-5 text-[16px]">Contact</Link>
            </nav>
            <div className="flex items-center ml-4">
              <a
                href="#"
                className="font-regular !text-white bg-primary outline-0 text-[14px] h-[40px] leading-[40px] rounded-[10px] border border-[#2a8e9e] my-[10px] mx-[5px] text-center xl:px-5 px-2"
              >
                Buy Apple & Macs
              </a>
              <Link
                to="/sell"
                className="font-regular text-primary outline-0 text-[14px] h-[40px] leading-[40px] rounded-[10px] border border-[#2a8e9e] my-[10px] mx-[5px] text-center xl:px-5 px-2"
              >
                Sell My Apple Device
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger / Close */}
          <div className="lg:hidden flex items-center lg:order-none order-1">
            <button
              className="relative w-[24px] h-[19px] me-2.5 flex flex-col justify-between items-center lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[3px] w-full bg-primary transform transition duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block h-[3px] w-full bg-primary transition duration-300 ease-in-out ${menuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-[3px] w-full bg-primary transform transition duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primary text-white w-full">
          <nav className="flex flex-col py-5 px-[30px] font-semibold text-[16px]">
            <Link to="/how-works" className='py-[7px]'>How it Works</Link>
            <Link to="/about-sell-your-mac" className='py-[7px]'>About SYM</Link>
            <Link to="/mac-bulk-buy-back" className='py-[7px]'>Sell in Bulk</Link>
            <Link to="/faqs" className='py-[7px]'>FAQs</Link>
            <Link to="/contact" className='py-[7px]'>Contact</Link>
            <div className="flex flex-col md:hidden">
              <a
                href="#"
                className="!text-white bg-primary outline-0 mt-6 text-[14px] h-[40px] leading-[40px] rounded-[2px] border border-white font-bold text-center px-5"
              >
                Buy Apple & Macs
              </a>
              <Link
                to="/sell"
                className="text-primary bg-white mt-6 mb-2.5 outline-0 text-[14px] h-[40px] leading-[40px] rounded-[2px] border border-white font-bold text-center px-5"
              >
                Sell My Apple Device
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
