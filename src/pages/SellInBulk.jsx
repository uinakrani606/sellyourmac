import React from 'react';
import Laptop from '../assets/images/mac-bulk-buy-back.png';
import ComputerLab from '../assets/images/computer-lab.png';
import LearnMore from '../assets/images/learn-more.svg';
import MacLineUp from '../assets/images/mac-lineup.jpg';
import freeQuote from '../assets/images/Get-a-free-quote.svg';
import getPaid from '../assets/images/Get-paid-fast.svg';
import shipDevice from '../assets/images/Ship-us-your-device.svg';

const SellInBulk = () => {
  return (
    <>
      {/* hero section */}
      <section className='py-10 bg-white'>
        <div className="container">
          <div className='flex items-center xl:gap-4 gap-3 lg:flex-nowrap flex-wrap bg-[#F5F4F7] md:py-[50px] md:px-10 sm:p-10 p-5 rounded-2xl leading-tight w-full'>
            <div className='lg:w-1/2 w-full'>
              <p className="lg:text-[50px] sm:text-5xl text-4xl mb-2.5 font-extrabold">Blue Glove Buy Back for Mac &amp; Apple Products</p>
              <p className='roboto font-medium mb-4 lg:max-w-[525px] max-w-full w-full'>SellYourMac provides Bulk Buy Back Services for businesses, schools, and organizations looking to recoup value from their used Apple products (Mac Pro, Macbook, Macbook Pro, iMac, iPhone, and iPads) and lower their total cost of ownership and cost to upgrade.</p>
            </div>
            <div className='lg:w-1/2 w-full'>
              <img src={Laptop} alt="Laptop" />
            </div>
          </div>
        </div>
      </section>

      {/* Apple Bulk Trade-in Mission */}
      <section className="py-10 bg-white">
        <div className="container">
          <div>
            <h1 className="text-center mb-5 font-bold text-[32px] leading-tight">Apple Bulk Trade-in Mission</h1>
            <div className='max-w-[1044px] w-full mx-auto'>
              <p className='text-center mb-5 roboto'>
                SellYourMac (SYM) helps businesses, schools, and organizations offset the high cost of upgrading to newer technology devices by purchasing their end-of-use life Apple computers, iPads, and iPhones. In today's technology driven world, it's common for devices to be replaced every 18 to 36 months. SYM is the widely praised solution to help dispose of unwanted Apple products in a secure, cost-effective, and environmentally friendly method.
              </p>
              <p className='text-center mb-5 roboto'>
                If your business, school, or organization has Apple products that are at the end of their useful life, we will purchase them, giving you cash to put towards the purchase of newer technology!
              </p>
              <div className='mt-10'>
                <img src={ComputerLab} alt="ComputerLab" className='mx-auto rounded-2xl' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Reasons */}
      <section className="py-10 bg-white">
        <div className="container">
          <div className='bg-[#f7f9fa] sm:rounded-[30px] rounded-2xl xl:p-[85px] lg:p-16 md:p-12 sm:p-10 py-6 p-5'>
            <h2 className="text-center mb-8 font-bold !text-[32px]">Top 10 Reasons to Use SYM 'Blue Glove Buy Back' </h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-6'>
              <div className='bg-[rgba(42,142,158,0.1)] p-6 rounded-xl'>
                <h3 className='text-xl font-bold mb-1.5'>Experienced</h3>
                <p className='roboto'>SYM / OWC 52 years combined expertise</p>
              </div>
              <div className='bg-[rgba(42,142,158,0.1)] p-6 rounded-xl'>
                <h3 className='text-xl font-bold mb-1.5'>Secure</h3>
                <p className='roboto'>All data erased utilizing U.S. government NIST sanitization standards</p>
              </div>
              <div className='bg-[rgba(42,142,158,0.1)] p-6 rounded-xl'>
                <h3 className='text-xl font-bold mb-1.5'>Diverse</h3>
                <p className='roboto'>100K+ businesses, schools, and organizations served since 2006</p>
              </div>
              <div className='bg-[rgba(42,142,158,0.1)] p-6 rounded-xl'>
                <h3 className='text-xl font-bold mb-1.5'>Thorough</h3>
                <p className='roboto'>Detailed reporting on goods received condition and valuation</p>
              </div>
              <div className='bg-[rgba(42,142,158,0.1)] p-6 rounded-xl'>
                <h3 className='text-xl font-bold mb-1.5'>Focused</h3>
                <p className='roboto'>Apple-centric knowledge for highest offer accuracy</p>
              </div>
              <div className='bg-[rgba(42,142,158,0.1)] p-6 rounded-xl'>
                <h3 className='text-xl font-bold mb-1.5'>Convenient</h3>
                <p className='roboto'>Fast payment via check, PayPal, or ACH</p>
              </div>
              <div className='bg-[rgba(42,142,158,0.1)] p-6 rounded-xl'>
                <h3 className='text-xl font-bold mb-1.5'>Fast</h3>
                <p className='roboto'>24 hours or less to receive quote on 10 to over 1,000 items</p>
              </div>
              <div className='bg-[rgba(42,142,158,0.1)] p-6 rounded-xl'>
                <h3 className='text-xl font-bold mb-1.5'>Economical</h3>
                <p className='roboto'>Cash back lowers total cost of ownership</p>
              </div>
              <div className='bg-[rgba(42,142,158,0.1)] p-6 rounded-xl'>
                <h3 className='text-xl font-bold mb-1.5'>Complete</h3>
                <p className='roboto'>All shipping materials and prepaid labels or freight pickup provided</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* device easy as 1-2-3  */}
      <section id="three-step" className="bg-white text-center md:pt-[50px] pt-10 md:pb-[60px] pb-10">
        <div className="container">
          <h2 className="text-center md:mb-12 mb-8 font-bold !text-[32px] min-[991px]:max-w-full max-w-[650px] w-full mx-auto">SellYourMac’s Blue Glove Buy Back Process is Easy as 1-2-3</h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 sm:gap-4 gap-5">
            <div className="bg-[rgba(42,142,158,0.1)] lg:max-w-[350px] max-w-full w-full p-6 rounded-[20px] ml-auto">
              <div className="sm:h-[250px] flex items-end bg-white rounded-[10px] p-[23px]" >
                <img className="mx-auto mb-2.5 w-[230px]" src={getPaid} alt="" />
              </div>
              <h3 className="text-[28px] font-bold mb-5 leading-[1.3] mt-[20px]">1. Get a free quote </h3>
              <p className="font-medium sm:min-h-36">Fill out the contact form below or download our <a className='underline text-primary' href="#0">Bulk Buy Back Spreadsheet</a> and return it to <a className='underline text-primary' href="mailto:bulk@sellyourmac.com?subject=SYM Bulk Buy Back">bulk@sellyourmac.com</a>. Within 24 hours, you will receive a custom price quote from us. </p>
            </div>
            <div className="bg-[rgba(42,142,158,0.1)] lg:max-w-[350px] max-w-full w-full p-6 rounded-[20px] m-auto">
              <div className="sm:h-[250px] flex items-end bg-white rounded-[10px] p-[23px]" >
                <img className="mx-auto mb-2.5" src={freeQuote} alt="" />
              </div>
              <h3 className="text-[28px] font-bold mb-5 leading-[1.3] mt-[20px]">2. Ship us your device</h3>
              <p className="font-medium sm:min-h-36">Accept our offer, and we will provide you with prepaid shipping labels (or we setup freight pickup for larger shipments). Ship us your items, and we will promptly process your order.</p>
            </div>
            <div className="bg-[rgba(42,142,158,0.1)] lg:max-w-[350px] max-w-full w-full p-6 rounded-[20px] mr-auto">
              <div className="sm:h-[250px] flex items-end bg-white rounded-[10px] p-[23px]" >
                <img className="mx-auto mb-2.5" src={shipDevice} alt="" />
              </div>
              <h3 className="text-[28px] font-bold mb-5 leading-[1.3] mt-[20px]">3. Get paid fast!</h3>
              <p className="font-medium sm:min-h-36">Once complete, we will send you your cash, along with a complete product reconciliation report.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white md:pb-[60px] pb-10">
        <div className='container'>
          <form className='max-w-[985px] w-full mx-auto'>
            <fieldset className='space-y-4'>
              <div className="w-full flex items-center gap-5 sm:flex-nowrap flex-wrap">
                <div className="w-full">
                  <div className="relative h-12">
                    <input
                      type="text"
                      required
                      placeholder=" "
                      className="peer border roboto border-[#d6d6d6] w-full rounded h-12 py-[7.5px] px-3.5 outline-0 shadow-none focus:border-[#2a8e9e]"
                    />
                    <label className="absolute left-3 text-sm roboto pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 top-0 -translate-y-1/2 bg-white px-1 peer-focus:top-0 peer-focus:-translate-y-1/2">
                      First Name *
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative h-12">
                    <input
                      type="text"
                      required
                      placeholder=" "
                      className="peer border roboto border-[#d6d6d6] w-full rounded h-12 py-[7.5px] px-3.5 outline-0 shadow-none focus:border-[#2a8e9e]"
                    />
                    <label className="absolute left-3 text-sm roboto pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 top-0 -translate-y-1/2 bg-white px-1 peer-focus:top-0 peer-focus:-translate-y-1/2">
                      Last Name *
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full">
                  <div className="relative h-12">
                    <input
                      type="email"
                      required
                      placeholder=" "
                      className="peer border roboto border-[#d6d6d6] w-full rounded h-12 py-[7.5px] px-3.5 outline-0 shadow-none focus:border-[#2a8e9e]"
                    />
                    <label className="absolute left-3 text-sm roboto pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 top-0 -translate-y-1/2 bg-white px-1 peer-focus:top-0 peer-focus:-translate-y-1/2">
                      Email Address *
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full">
                  <div className="relative h-12">
                    <input
                      type="tel"
                      required
                      placeholder=" "
                      className="peer border roboto border-[#d6d6d6] w-full rounded h-12 py-[7.5px] px-3.5 outline-0 shadow-none focus:border-[#2a8e9e]"
                    />
                    <label className="absolute left-3 text-sm roboto pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 top-0 -translate-y-1/2 bg-white px-1 peer-focus:top-0 peer-focus:-translate-y-1/2">
                      Phone Number *
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full">
                  <div className="relative h-12">
                    <input
                      type="text"
                      required
                      placeholder=" "
                      className="peer border roboto border-[#d6d6d6] w-full rounded h-12 py-[7.5px] px-3.5 outline-0 shadow-none focus:border-[#2a8e9e]"
                    />
                    <label className="absolute left-3 text-sm roboto pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 top-0 -translate-y-1/2 bg-white px-1 peer-focus:top-0 peer-focus:-translate-y-1/2">
                      Organization Name *
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full">
                  <div className="relative h-12">
                    <input
                      type="text"
                      required
                      placeholder=" "
                      className="peer border roboto border-[#d6d6d6] w-full rounded h-12 py-[7.5px] px-3.5 outline-0 shadow-none focus:border-[#2a8e9e]"
                    />
                    <label className="absolute left-3 text-sm roboto pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 top-0 -translate-y-1/2 bg-white px-1 peer-focus:top-0 peer-focus:-translate-y-1/2">
                      Number of Products *
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full">
                    <textarea placeholder='Message' rows={6} className='border roboto border-[#d6d6d6] w-full rounded h-12 py-[7.5px] px-3.5 outline-0 shadow-none focus:border-[#2a8e9e] placeholder-[#333] placeholder:text-sm min-h-[150px]'></textarea>
                </div>
              </div>
              <div className='w-full'>
                <button type="button" className="rounded-xl button px-5 bg-secondary text-white font-bold py-3.5 inline-flex leading-tight cursor-pointer">Submit</button>
              </div>
            </fieldset>
          </form>
        </div>
      </section>

      {/* Learn More About SellYourMac */}
      <section className='md:pt-20 pt-10 pb-10 border-t border-[rgba(42,142,158,0.2)]'>
        <div className="container">
          <div className='flex items-center gap-8 lg:flex-nowrap flex-wrap-reverse'>
            <div className='w-full mb-2.5'>
              <img src={LearnMore} alt="LearnMore" className='mx-auto' />
            </div>
            <div className='w-full'>
              <div className='space-y-5'>
                <h2 className="font-bold !text-[32px]">Learn More About SellYourMac</h2>
                <p className='roboto'>SellYourMac.com is committed to reusing, repurposing, and recycling used Apple products. </p>
                <p className='roboto'>SellYourMac buys and sells used Apple computers, iPhones, iPads, and accessories. It is our mission to help reduce the amount of e-waste hitting landfills and dumps and help individuals, schools, businesses, and other organizations offset the high costs of upgrading to newer electronic devices by purchasing their old ones. </p>
                <p className='roboto'>Because SYM deals solely with Apple products, SYM is more accurate than its competitors in assessing and pricing these products, enabling SYM to pay more than the competition in most cases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apple Products We Buy */}
      <section className='lg:pt-10 pt-5 md:pb-20 pb-10'>
        <div className="container">
          <div className="flex items-center gap-8 lg:flex-nowrap flex-wrap">
            <div className="w-full">
              <div className='space-y-5'>
                <h2 className="font-bold !text-[32px]">Apple Products We Buy</h2>
                <p className='roboto'>
                  Products purchased by SYM include Apple MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac Mini, Cinema Display, iPhone, iPad, iPod, Apple Watch, and Apple TV. You can check out our <a className='text-primary underline' href="#0">Mac Product Guides</a> to see the Apple products we buy back and their product specs.
                  </p>
                <p className='roboto'>
                  SYM no longer purchases pre-Intel-based Apple computers, however, we will <a className='text-primary underline' href="#0">responsibly recycle </a>these devices with the help of our <a className='text-primary underline' href="http://www.r2solutions.org/">r2</a> and <a className='text-primary underline' href="http://e-stewards.org/">e-Stewards</a> certified (zero-landfill) recycling partner, <a className='text-primary underline' href="http://www.cohenusa.com/">Cohen USA</a>.
                </p>
                <p className='roboto'>
                  Have something not listed that you wish to sell? Send us an email at <a className='text-primary underline' href="mailto:bulk@sellyourmac.com?subject=SYM Bulk Buy Back">bulk@sellyourmac.com</a> and we will let you know if we can pay you for your device!
                </p>
              </div>
            </div>
            <div className="w-full">
              <img src={MacLineUp} alt="MacLineUp" className='rounded-2xl' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SellInBulk
