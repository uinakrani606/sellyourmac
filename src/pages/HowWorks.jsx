import React from 'react'
import freeQuote from '../assets/images/Get-a-free-quote.svg';
import getPaid from '../assets/images/Get-paid-fast.svg';
import shipDevice from '../assets/images/Ship-us-your-device.svg';
import { Link } from 'react-router-dom';

function HowWorks() {
  return (
    <>
      {/* _____________ device easy as 1-2-3 _____________ */}
      <section id="three-step" className="bg-white text-center pt-[50px]">
        <div className="container">
          <h2 className="text-center md:mb-16 mb-8 font-bold !text-[32px] min-[991px]:max-w-full max-w-[650px] w-full mx-auto">SellYourMac makes cashing in your device easy as 1-2-3</h2>
          <div className='max-w-[1156px] w-full mx-auto sm:space-y-10 space-y-6 sm:mb-16 mb-8'>
            <div className='flex items-center md:gap-8 gap-4 md:flex-nowrap flex-wrap'>
              <div className='w-full text-start'>
                <h3 className="text-[28px] font-bold mb-5 leading-[1.3] mt-[20px]">1. Get a free quote </h3>
                <p className="font-medium lg:pe-5">We make selling your Apple device easy. Simply enter your product details and get an instant offer directly from our site.</p>
              </div>
              <div className='w-full'>
                <img className="mx-auto sm:h-[278px] object-cover" src={getPaid} alt="" />
              </div>
            </div>
            <div className='flex items-center md:gap-8 gap-4 md:flex-nowrap flex-wrap md:flex-row flex-col-reverse'>
              <div className='w-full'>
                <img className="md:mx-0 mx-auto sm:h-[278px] object-cover" src={freeQuote} alt="" />
              </div>
              <div className='w-full text-start'>
                <h3 className="text-[28px] font-bold mb-5 leading-[1.3] mt-[20px]">2. Ship us your device</h3>
                <p className="font-medium lg:pe-5">We provide the pre-paid shipping label once the details have been confirmed. Just pack up your device and ship.</p>
              </div>
            </div>
            <div className='flex items-center md:gap-8 gap-4 md:flex-nowrap flex-wrap'>
              <div className='w-full text-start'>
                <h3 className="text-[28px] font-bold mb-5 leading-[1.3] mt-[20px]">3. Get paid fast!</h3>
                <p className="font-medium lg:pe-5">As soon as your device arrives at our secure facility, we begin processing the order so you can get paid quickly.</p>
              </div>
              <div className='w-full'>
                <img className="mx-auto sm:h-[278px] object-cover" src={shipDevice} alt="" />
              </div>
            </div>
          </div>
          <Link className="rounded-xl button px-5 bg-secondary text-white font-bold py-3.5 inline-flex mt-5 mb-12 leading-tight" to="/sell">
            Cash in your used Apple device now
          </Link>
        </div>
      </section>
    </>
  )
}

export default HowWorks
