import React from 'react';
import faceBook from '../assets/images/facebook.svg';
import twiter from '../assets/images/x.svg';
import linkedIn from '../assets/images/linkedin.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className='md:p-[80px] p-10 md:px-[25px] px-0 bg-primary text-white roboto text-[14px]'>
        <div className="container">
          <div className='max-w-[1160px] mx-auto pb-[20px] flex justify-between border-b border-white md:flex-row flex-col gap-8'>
             <div className="column">
                <ul>
                  <li className="mb-[10px] hover:underline"><Link to="/mac-bulk-buy-back" >Bulk Buy Back</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/apple-mac-business-solutions" >Business Solutions</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/partners" >SYM Partners</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/" >SellYourMac Blog</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/sell" >Sell Your Device</Link></li>
                </ul>
              </div>
              <div className="column">
                <ul>
                  <li className="mb-[10px] hover:underline"><Link to="/how-works">How it Works</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/terms">SYM Terms</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/privacy">Privacy Policy</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/mac-support">SYM Support</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/employment-at-sym">SYM Employment</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/contact">Contact SYM</Link></li>
                </ul>
              </div>
              <div className="column">
                <ul>
                  <li className="mb-[10px] hover:underline"><Link to="/sell"> Sell MacBook</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/sell" > Sell MacBook Air</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/sell"> Sell MacBook Pro</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/sell"> Sell iMac</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/sell"> Sell Mac Pro</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/sell"> Sell Mac Mini</Link></li>
                </ul>
              </div>
              <div className="column">
                <ul>
                  <li className="mb-[10px] hover:underline"><Link to="/sell"> Sell iPhone</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/sell"> Sell iPod</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/sell"> Sell iPad</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/sell"> Sell iPad Pro</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/sell"> Sell Apple TV</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/sell"> Sell Apple Watch</Link></li>
                </ul>
              </div>
              <div className="column">
                <ul>
                  <li className="mb-[10px] hover:underline"><Link to="/">SellYourMac.com</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="tel:+18447355622">1-844-SELL-MAC</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/contact">Send us an Email</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/contact">Map &amp; Directions</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/">Buy Apple &amp; Macs</Link></li>
                  <li className="mb-[10px] hover:underline"><Link to="/"> OWC Accessibility</Link></li>
                </ul>
              </div>
          </div>
          {/* <div className='text-center'>
            <ul className='flex items-center justify-center mb-[10px] gap-2.5 py-10'>
              <li>
                <a className='flex items-center justify-center w-8 h-8 border border-white' href='https://www.facebook.com/sellyourmac' target='_blank'>
                  <img src={faceBook} alt="facebook" className='inline-block' />
                </a>
              </li>
              <li>
                <a className='flex items-center justify-center w-8 h-8 border border-white' href="https://x.com/sellyourmac" target='_blank'>
                  <img src={twiter} alt="twiter" className='inline-block p-[5px]' />
                </a>
              </li>
              <li>
                <a className='flex items-center justify-center w-8 h-8 border border-white' href="https://www.linkedin.com/company/sellyourmac.com/" target='_blank'>
                  <img src={linkedIn} alt="linkedIn" className='inline-block' />
                </a>
              </li>
            </ul>
            <p className='mb-[40px]'>All Trademarks, Logos and Brands are the properties of their respective owners</p>
            <a className="inline-block" href="javascript:void(0)">Do Not Share My Personal Information</a>
          </div> */}
        </div>
      </footer>
      <div className='copyright py-[18px]'>
        <div className='container text-center'>
          <p className="m-0">
            <small className="text-[#656565] roboto text-[14px]">Copyright © 2002-2025 iSellMac.com. <span>All rights reserved.</span></small>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer