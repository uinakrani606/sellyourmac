import React, { useState, useEffect } from "react";
import MacBookPro from '../assets/images/MacBook-Pro.webp';
import MacBookAir from '../assets/images/MacBook-Air.webp';
import MacBook from '../assets/images/MacBook.webp';
import MacMini from '../assets/images/Mac-Mini.webp';
import MacStudio from '../assets/images/Mac-Studio.webp';
import MacPro from '../assets/images/Mac-Pro.webp';
import iMac from '../assets/images/iMac.webp';
import iMacPro from '../assets/images/iMac-Pro.webp';
import AppleDisplay from '../assets/images/Apple-Display.webp';
import symTeam from '../assets/images/delivery-app.svg';
import freeQuote from '../assets/images/Get-a-free-quote.svg';
import getPaid from '../assets/images/Get-paid-fast.svg';
import shipDevice from '../assets/images/Ship-us-your-device.svg';
import tik from '../assets/images/check-green-icon.png';
import Star from '../assets/images/Star.svg';
import UseToday from '../assets/images/Use-today.svg';
import MacWord from '../assets/images/Mac-word.svg';
import ObcNews from '../assets/images/Obc-news.svg';
import CultOfMac from '../assets/images/Cult-of-mac.svg';
import NbcNews from '../assets/images/Nbc-news.svg';
import HeroBanner from '../assets/images/hero_static_img.png';
import ModalCloseIcon from "../assets/images/modal-close.svg";
import Close from "../assets/images/close.svg";
import { Link } from 'react-router-dom';

const items = [
  { title: " Where can I sell my MacBook Pro for cash? ", content: "You can sell your Mac for cash on a number of trade in websites. Be sure the website offers cash in the form of check or PayPal for example, and not just a gift card that only can be used at a later date. You should also check to ensure the site is reputable by looking on Google reviews and Reseller Ratings. One top-rated trusted place to sell your Mac is at SellYourMac.com. Their trade-in program is fast and easy and trusted by more than 100,000 customers. SellYourMac.com’s reviews are also the highest rated in the Apple trade-in industry." },
  { title: "How much can I sell my MacBook Pro for?", content: "The value of your MacBook Pro or other MacBook is based on many factors including age, functionality, and overall condition. The best way to find out how to get a price on your Mac is using a trusted trade in website like SellYourMac.com. You can easily input your serial number and answer a few questions about the condition to get an instant quote. The whole process to find out how much it is worth takes about 1 minute, and then you can get payment via PayPal or check." },
  { title: "Is Sell Your Mac legit?", content: "One great way to see if a business is legit is by checking on the Better Business Bureau (also know as the BBB). When checking SellYourMac.com, they are accredited with an A+ rating, so they can be trusted. Also, checking on Google reviews, Facebook, Yelp, and Reseller Ratings, they have above a 4.5 rating on all sites." },
  { title: "Where can I sell my old Apple computer?", content: "The best place to sell your old Apple or Mac is online using a trusted trade in website. On SellYourMac.com you can trade in a device up to 10 years old. Use the serial number quote tool or manually configure your Apple computer to find out how much it is worth in about 1 minute." },
  { title: "Is an iMac worth anything?", content: "Most iMacs hold some value for around 10 years. You can quickly and easily find out what it could be worth using a site like SellYourMac.com. By using the trade in tool on a trusted site like SellYourMac.com, you can find out how much your iMac or other Apple device is worth in about 1 minute, and then get paid via PayPal or check." },
  { title: "Can I get money for my old MacBook?", content: "Yes, most likely you can get money for your MacBook as long as it is functioning fine and less than 10 years old. That tends to be the cutoff for the useful life of a Mac and when the value starts to approach $0. You can quickly and easily find out what it could be worth using a site like SellYourMac.com. By using the trade in tool on a trusted site like SellYourMac.com, you can find out how much your MacBook, MacBook Pro, or other Apple device is worth in about 1 minute, and then get paid via PayPal or check." },
  { title: "Where can I sell a used MacBook Pro?", content: "The best place to sell your MacBook Pro or other Apple device is online using a trusted trade in platform. On SellYourMac.com you can trade in a MacBook Pro up to 10 years old. Use the serial number quote tool or manually configure your Apple computer to find out how much it is worth in about 1 minute." },
  { title: "Are older MacBooks still good?", content: "Most Macs work for around 7-10 years on average, and hold some value for 10+ years if kept in functional condition. The first things that tend to go bad are the batteries. Fortunately, older MacBooks you can easily replace the battery, but then starting with the Retina MacBook Pro the batteries are glued down and hard to replace. If you are buying an older used MacBook, be sure to check a reputable site like MacSales.com that guarantees their MacBooks and other devices with a 12 month warranty. If you are wondering if you’d older MacBook still has any value, you can quickly and easily find out what it could be worth using a trusted site like SellYourMac.com. By using the trade in tool, you can find out how much your older Macbook or other Apple device is worth in about 1 minute." },
];

const itemsSecond = [
  { title: "Why are MacBooks so expensive?", content: "MacBooks and other Apple devices tend to be expensive as they hold their value for many years. Also, the Apple ecosystem included free upgrades to new operating systems and many free Apps that are not included compared to Windows computers. The total cost of ownership over a long period is actually cheaper for a MacBook or MacBook Pro because they are less to maintain and have fewer issues than a comparable PC." },
  { title: "How do I find out how much my MacBook is worth?", content: "The best way to find out how to much your MacBook or MacBook Pro is worth is a trusted trade in website like SellYourMac.com. You can easiest input your serial number and answer a few choices about the condition to get an instant quote. The whole process to find out how much it is worth takes about 1 minute, and then you can get paid via PayPal or check." },
  { title: "Are old Macs worth anything?", content: "Old Macs hold value and are worth something as long as they are functioning fine and less than 10 years old. That tends to be the cutoff for the useful life of a Mac and when the value starts to approach $0. You can quickly and easily find out what it could be worth using a site like SellYourMac.com. By using the trade in tool, you can find out how much your MacBook, MacBook Pro, or other Apple device is worth in about 1 minute." },
  { title: "Can I sell my MacBook to Best Buy?", content: "Yes you can sell your Mac at Best Buy, but it is probably worth more money to go to a site that specializes in MacBook and MacBook Pro like SellYourMac.com. When checking SellYourMac.com, they are accredited at the BBB with an A+ rating, and on Google reviews, Facebook, Yelp, and Reseller Ratings, they have above a 4.5 rating on all sites. On SellYourMac.com you can trade in a MacBook up to 10 years old, which is more than may other websites will offer money for your MacBook. Use the serial number quote tool or manually configure your Apple computer to find out how much it is worth in about 1 minute." },
  { title: "Can I sell my laptop to GameStop?", content: "You can sell your laptop or MacBook at GameStop, but it is probably worth more money to go to a site that specializes in MacBook and MacBook Pro like SellYourMac.com. When checking SellYourMac.com, they are accredited at the BBB with an A+ rating, and on Google reviews, Facebook, Yelp, and Reseller Ratings, they have above a 4.5 rating on all sites. On SellYourMac.com you can trade in a MacBook up to 10 years old, which is more than may other websites will offer money for your MacBook. Use the serial number quote tool or manually configure your Apple computer to find out how much it is worth in about 1 minute." },
  { title: "How much does Apple give for MacBook trade in?", content: "Apple pays out different amounts via gift cards depending on the age and functionality of your MacBook or other Apple device. It can be tedious to get through the process and find the value on Apple’s site. If you want to find out the value of your Mac faster, and also get cash back, use a site like SellYourMac.com. By using the trade in tool on a trusted site like SellYourMac.com, you can more quickly ind out how much your MacBook, MacBook Pro, or other Apple device is worth. The process takes about 1 minute and if you use your serial number it is the fastest method." },
  { title: "Who buys old Apple computers?", content: "There are multiple companies that buy old Apple computers, and it is good to find one that specializes in Apple computers. The best place to sell your old Apple or Mac is online using a trusted trade in website like SellYourMac.com. There you can trade in an old Apple device up to 10 years old. Use the serial number quote tool or manually configure your Apple computer to find out how much it is worth in about 1 minute." },
  { title: "How do I find out how much my MacBook is worth?", content: "The best way to find out how much your MacBook or MacBook Pro is worth is a trusted trade in website like SellYourMac.com." },
];

const products = [
  { id: "macbook-pro", img: MacBookPro, name: "MacBook Pro", cash: "$4450" },
  { id: "macbook-air", img: MacBookAir, name: "MacBook Air", cash: "$950" },
  { id: "mac-mini", img: MacMini, name: "Mac Mini", cash: "$1400" },
  { id: "mac-studio", img: MacStudio, name: "Mac Studio", cash: "$4100" },
  { id: "imac", img: iMac, name: "iMac", cash: "$1400" },
  { id: "imac-pro", img: iMacPro, name: "iMac Pro", cash: "$1600" },
  { id: "apple-display", img: AppleDisplay, name: "Apple Display", cash: "$2750" },
];

function Home() {
  // Tracks which item is open (null = none)
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndexSecond, setOpenIndexSecond] = useState(null);
  const [openModal, setOpenModal] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // close if already open
  };

  const toggleSecond = (index) => {
    setOpenIndexSecond(openIndexSecond === index ? null : index); // close if already open
  };

  const handleOpen = (modalName) => {
      setOpenModal(modalName);
  };

  const handleClose = () => {
      setOpenModal(null);
  };

  // scroll disable/enable
  useEffect(() => {
      if (openModal) {
          document.body.style.overflow = "hidden";
      } else {
          document.body.style.overflow = "";
      }
  }, [openModal]);
    
  return (
    <>
      {/* Hero banner */}
      <section className='xl:-mt-23 featured-hero bg-[linear-gradient(90deg,rgba(255,255,255,1)_28%,rgb(20_112_210_/_20%)_100%)] xl:pb-[150px] xl:pt-[250px] sm:pb-20 sm:pt-10 py-10 relative overflow-hidden'>
        <div className="flex container">
           <div className="xl:max-w-[612px] lg:max-w-[542px] max-w-full">
              <p className="leading-[1.1] font-extrabold lg:text-[70px] md:text-6xl sm:text-5xl text-4xl mb-[10px]">Trade in Your Mac for Max Value!</p>
              <p className='lg:text-[24px] md:text-xl text-lg leading-[1.2] roboto mt-[10px] mb-[15px]'>The day will come when you finally need a new Apple device, and you can make your new purchase more affordable when you trade in a Mac, iPhone and iPad for cash or a Prepaid Mastercard<sup>®</sup> with OWC &amp; SYM.</p>
              <Link className="button rounded-xl px-5 bg-secondary text-white font-bold py-3.5 inline-flex mt-5 sm:mb-12 mb-8 text-center leading-tight" to="/sell"><span className=""></span>See Your Free Instant Quote Now</Link>
            </div>
        </div>
        <img className="lg:absolute top-1/2 -right-[174px] lg:-translate-y-1/2 2xl:h-[500px] lg:mx-0 mx-auto lg:px-0 px-5 min-[1536px]:max-w-none 2xl:w-auto xl:max-w-[calc(100%-540px)] xl:w-full h-auto lg:max-w-[calc(100%-412px)] lg:ps-4" src={HeroBanner} alt="" />
      </section>
      {/* _____________ Product  ______________ */}
      <section className="product py-10">
        <div className="container">
          <h2 className="text-[29px] leading-[1.25] tracking-[-0.05rem] font-bold text-[#333] text-center mb-[30px]">Select a Product to Start a Quote</h2>
          <div className="grid grid-cols-1 min-[375px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6 gap-4 md:mb-0 mb-2">
            {products.map((item, idx) => (
                <Link to={`/sell/${item.id}`} key={idx}>
                    <div className="bg-white transform transition-all duration-300 hover:translate-y-[-5px] pb-6 shadow-[0_4px_6px_-1px_rgba(42,142,158,0.2),0_2px_4px_-1px_rgba(42,142,158,0)] rounded-[10px] flex flex-col items-center text-center">
                        <img
                            src={item.img}
                            alt={item.name}
                            className="object-contain"
                            width="140"
                            height="140"
                        />
                        <h3 className="font-medium text-[#070707] text-sm">
                            {item.name}
                        </h3>
                        {/* <p className="text-primary text-sm mt-2 roboto">
                            Cash in Up to {item.cash}
                        </p> */}
                    </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
      {/* _____________  Sell Your Apple Device  ______________ */}
      <section className="py-10">
        <div className="container">
          <h2 className="text-center mb-5 font-bold !text-[32px]">Sell Your Apple Device – Fast, Safe and Easy!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-2">
            {/* Google Reviews */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex text-orange-500 mb-2">
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
              </div>
              <p className="font-bold text-lg">4.6/5 Google Reviews</p>
              <hr className="w-full !my-5 border-gray-200" />
              <h3 className="roboto font-bold mb-[10px]">Outstanding experience</h3>
              <p className="roboto text-base font-light mb-5">
                Can't recommend this enough. Be honest with what you've got and they'll give you a fair price — no hassles.
              </p>
              <a href="#0" className="rounded-xl cursor-pointer flex items-center justify-center font-bold mt-4 px-5 py-2 h-[48px] border border-[#2a8e9e] text-primary hover:bg-blue-50 transition">
                More Reviews
              </a>
            </div>

            {/* Facebook Reviews */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex text-orange-500 mb-2">
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
              </div>
              <p className="font-bold text-lg">5/5 Facebook Reviews</p>
              <hr className="w-full !my-5 border-gray-200" />
              <h3 className="roboto font-bold  mb-[10px]">Couldn't be happier</h3>
              <p className="roboto text-base font-light mb-5">
                Customer service staff is extremely responsive, helpful, and friendly. I will definitely use them again.
              </p>
              <a href="#0" className="rounded-xl cursor-pointer flex items-center justify-center font-bold mt-4 px-5 py-2 h-[48px] border border-[#2a8e9e] text-primary hover:bg-blue-50 transition">
                More Reviews
              </a>
            </div>

            {/* ResellerRatings */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex text-orange-500 mb-2">
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
              </div>
              <p className="font-bold text-lg">4.9/5 ResellerRatings</p>
              <hr className="w-full !my-5 border-gray-200" />
              <h3 className="roboto font-bold mb-[10px]">Best place to sell a Mac</h3>
              <p className="roboto text-base font-light mb-5">
                By far the best experience I've had in selling a used Mac. It was easy and they gave me more than any other competitor.
              </p>
              <a href="#0" className="rounded-xl cursor-pointer flex items-center justify-center font-bold mt-4 px-5 py-2 h-[48px] border border-[#2a8e9e] text-primary hover:bg-blue-50 transition">
                More Reviews
              </a>
            </div>

            {/* BBB */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex text-orange-500 mb-2">
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
                <img className='w-[32px] h-[32px] inline-block mr-1' src={Star} alt="tik" />
              </div>
              <p className="font-bold text-lg">A+ Better Business Bureau</p>
              <hr className="w-full !my-5 border-gray-200" />
              <h3 className="roboto font-bold mb-[10px]">Reliable and Fair</h3>
              <p className="roboto text-base font-light mb-5">
                I use SellYourMac every time I'm done with an Apple product, and they are reliable and fair.
              </p>
              <a href="#0" className="rounded-xl cursor-pointer flex items-center justify-center font-bold mt-4 px-5 py-2 h-[48px] border border-[#2a8e9e] text-primary hover:bg-blue-50 transition">
                More Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* _____________  featured section ______________ */}
      <section className="bg-primary py-5">
        <div className="container">
          <div className="grid md:grid-cols-6 grid-cols-1 gap-2.5 items-center">
            <p className="text-lg text-white flex items-center md:justify-start justify-center font-bold">Featured In:</p>
            <a href="#0" target="_blank" className="md:mx-0 mx-auto">
              <img className='w-[90px] md:h-[60px] h-[50px] inline-block' src={UseToday} alt="UseToday" />
            </a>
            <a href="#0" target="_blank" className="md:mx-0 mx-auto">
              <img className='w-[120px] md:h-[60px] h-[50px] inline-block md:mx-0 mx-auto' src={MacWord} alt="MacWord" />
            </a>
            <a href="#0" target="_blank" className="md:mx-0 mx-auto">
              <img className='w-[150px] md:h-[60px] h-[50px] inline-block md:mx-0 mx-auto' src={ObcNews} alt="ObcNews" />
            </a>
            <a href="#0" target="_blank" className="md:mx-0 mx-auto">
              <img className='w-[180px] md:h-[60px] h-[50px] inline-block md:mx-0 mx-auto' src={CultOfMac} alt="CultOfMac" />
            </a>
            <a href="#0" target="_blank" className="md:mx-0 mx-auto">
              <img className='w-[180px] md:h-[60px] h-[50px] inline-block md:mx-0 mx-auto' src={NbcNews} alt="NbcNews" />
            </a>
          </div>
        </div>
      </section>

      {/* _____________ device easy as 1-2-3 _____________ */}
      <section id="three-step" className="bg-white text-center pt-[50px]">
        <div className="container">
          <h2 className="text-center md:mb-12 mb-8 font-bold !text-[32px] min-[991px]:max-w-full max-w-[650px] w-full mx-auto">SellYourMac makes cashing in your device easy as 1-2-3</h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 mb-5 sm:gap-4 gap-5">
            <div className="bg-[rgba(42,142,158,0.1)] lg:max-w-[350px] max-w-full w-full p-6 rounded-[20px] ml-auto">
              <div className="sm:h-[250px] flex items-end bg-white rounded-[10px] p-[23px]" >
                <img className="mx-auto mb-2.5 w-[230px]" src={getPaid} alt="" />
              </div>
              <h3 className="text-[28px] font-bold mb-5 leading-[1.3] mt-[20px]">1. Get a free quote </h3>
              <p className="font-medium min-h-[102px]">We make selling your Apple device easy. Simply enter your product details and get an instant offer directly from our site.</p>
            </div>
            <div className="bg-[rgba(42,142,158,0.1)] lg:max-w-[350px] max-w-full w-full p-6 rounded-[20px] m-auto">
              <div className="sm:h-[250px] flex items-end bg-white rounded-[10px] p-[23px]" >
                <img className="mx-auto mb-2.5" src={freeQuote} alt="" />
              </div>
              <h3 className="text-[28px] font-bold mb-5 leading-[1.3] mt-[20px]">2. Ship us your device</h3>
              <p className="font-medium min-h-[102px]">We provide the pre-paid shipping label once the details have been confirmed. Just pack up your device and ship.</p>
            </div>
            <div className="bg-[rgba(42,142,158,0.1)] lg:max-w-[350px] max-w-full w-full p-6 rounded-[20px] mr-auto">
              <div className="sm:h-[250px] flex items-end bg-white rounded-[10px] p-[23px]" >
                <img className="mx-auto mb-2.5" src={shipDevice} alt="" />
              </div>
              <h3 className="text-[28px] font-bold mb-5 leading-[1.3] mt-[20px]">3. Get paid fast!</h3>
              <p className="font-medium min-h-[102px]">As soon as your device arrives at our secure facility, we begin processing the order so you can get paid quickly.</p>
            </div>
          </div>
          <Link className="rounded-xl button px-5 bg-secondary text-white font-bold py-3.5 inline-flex mt-5 mb-12 leading-tight" to="/sell">
            Cash in your used Apple device now
          </Link>
        </div>
      </section>
      {/* main */}
      {/* Infographic */}
      <section className='infographic sm:pt-[4rem] pt-10 pb-10'>
        <div className='container'>
          <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-8 gap-5">
            <div className='bg-primary font-bold text-white rounded-[1rem] p-[40px] text-center'>
              <p className="text-[28px]">$67,400,576</p>
              <p className="roboto font-normal mt-[5px]">cash paid out for devices</p>
            </div>
            <a href="#0" className="bg-primary font-bold text-white rounded-[1rem] p-[40px] text-center">
              <p className="roboto font-normal mb-[5px]">Check out our new infographic</p>
              <p className="text-[28px] leading-snug">How Apple Makes It's Money</p>
            </a>
          </div>
        </div>
      </section>
      {/* _____________ faqs  ______________ */}
      <section className="faqs border-b border-[rgba(42,142,158,0.2)] pb-20 pt-10">
        <div className="container">
          <h2 className="text-[29px] leading-[1.25] tracking-[-0.05rem] font-bold text-[#333] text-center mb-[30px]">SellYourMac Frequently Asked Questions</h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="w-full flex flex-col gap-5">
              {items.map((item, index) => (
                <div key={index} className="bg-white md:rounded-2xl rounded-lg py-4 lg:px-8 px-4">
                  <button
                    onClick={() => toggle(index)}
                    className="cursor-pointer h-[35px] w-full flex justify-between items-center text-[#070707] bg-transparent border-transparent text-left text-[16px] font-normal leading-[1.4] roboto"
                  >
                    {item.title}
                    <span className="ps-6 text-secondary">{openIndex === index ? "-" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <div className="text-[13px] sm:mt-1 mt-2">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-5">
              {itemsSecond.map((item, index) => (
                <div key={index} className="bg-white rounded-[1rem] py-4 lg:px-8 px-4">
                  <button
                    onClick={() => toggleSecond(index)}
                    className="cursor-pointer h-[35px] w-full flex justify-between items-center text-[#070707] bg-transparent border-transparent text-left text-[16px] font-normal leading-[1.4] roboto"
                  >
                    {item.title}
                    <span className="ps-6 text-secondary">{openIndexSecond === index ? "-" : "+"}</span>
                  </button>
                  {openIndexSecond === index && (
                    <div className="text-[13px] sm:mt-1 mt-2">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* powered-by-people */}
      <section className='bg-white md:pt-20 pt-5 pb-10'>
        <div className='container'>
          <div className='flex xl:gap-x-8 md:gap-x-6 gap-y-8 md:max-w-[85%] max-w-full m-auto md:flex-nowrap flex-wrap'>
            <div className='md:w-[50%] w-full'>
              <h3 className="text-[32px] font-bold mb-[20px] leading-tight">SYM makes it fast, safe and easy to buy, sell, and service your Apple products</h3>
              <p className="text-[24px] font-bold mb-6">SellYourMac.com Offers</p>
              <div>
                <ul className='grid grid-cols-1 gap-x-[4rem] lg:mb-6'>
                  <li className='flex items-center mb-3'>
                    <img className='w-[28px] h-[28px] inline-block mr-[10px]' src={tik} alt="tik" />
                    <p>99% Customer Satisfaction</p>
                  </li>
                  <li className='flex items-center mb-3'>
                    <img className='w-[28px] h-[28px] inline-block mr-[10px]' src={tik} alt="tik" />
                    <p>Fast Payment: PayPal/Check</p>
                  </li>
                  <li className='flex items-center mb-3'>
                    <img className='w-[28px] h-[28px] inline-block mr-[10px]' src={tik} alt="tik" />
                    <p>100% Secure Data Wipe</p>
                  </li>
                  <li className='flex items-center mb-3'>
                    <img className='w-[28px] h-[28px] inline-block mr-[10px]' src={tik} alt="tik" />
                    <p>30 Day Offer Guarantee</p>
                  </li>
                  <li className='flex items-center mb-3'>
                    <img className='w-[28px] h-[28px] inline-block mr-[10px]' src={tik} alt="tik" />
                    <p>Free Return Shipping Label</p>
                  </li>
                  <li className='flex items-center mb-3'>
                    <img className='w-[28px] h-[28px] inline-block mr-[10px]' src={tik} alt="tik" />
                    <p>Packing Materials on Request*</p>
                  </li>
                </ul>
              </div>
              <button onClick={() => handleOpen("video-transcript")} className="rounded-xl mt-[15px] bg-secondary inline-block cursor-pointer text-white border border-transparent text-[16px] font-extrabold font-exo text-center no-underline h-[48px] leading-[48px] px-[20px]"> What to Expect Video </button>
            </div>
            <div className='sm:w-[50%] w-full mx-auto'>
              <img className='rounded-[20px]' src={symTeam} alt="" />
            </div>
          </div>
          <div className="robot text-[12px] font-medium">
            <hr className="mt-0" />
            <p className="mb-[10px] block">* Packing materials are only available for certain products.<a href="#packing-desc-ref" aria-label="Back to content">↵</a> </p>
            <p className="mb-[10px] block">We do not purchase devices that are locked, iCloud locked, under Device Management Software supervision, part of Apple’s DEP program, or have been reported stolen. It will be the seller's responsibility to pay for return shipping in the event the device cannot be unlocked and needs to be returned.</p>
            <p className="mb-[10px] block">All data will be 100% wiped as all systems will be restored to original factory settings.</p>
            <p className="block">We are able to match or beat most legitimate competitor's cash offers. Please check out the competition and you will see our offer is better! Sell to SYM and avoid paying 15% in eBay &amp; Paypal fees.</p>
          </div>
        </div>
        {openModal === "video-transcript" && (
          <div className="fixed inset-0 bg-[#000000cc] flex justify-center items-center z-40" onClick={handleClose}>
            <img src={ModalCloseIcon} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:flex hidden" onClick={handleClose} />
            <img src={Close} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:hidden flex bg-white" onClick={handleClose} />
            <div onClick={(e) => e.stopPropagation()} className="bg-white md:p-6 sm:p-10 pt-14 pb-6 px-6 md:max-w-[800px] md:w-[calc(100%-32px)] w-full overflow-auto md:max-h-[747px] h-full shadow-lg">
                <iframe width="100%" className="aspect-[16/9] object-contain mb-[20px] md:max-h-[423px]" src="https://player.vimeo.com/video/178641004?app_id=122963&byline=0&badge=0&portrait=0&title=0" frameborder="0"></iframe>
                <div class="text-sm roboto">
                  <strong>Video Transcript</strong>
                  <p className="mb-[20px]">Do you or your organization use Apple products? Then you probably have quite a few old iPhones, iPads, and Macs lying around, gathering dust. Why not turn them into cash from the comfort of your own couch?</p>
                  <p className="mb-[20px]">To start, tell us about the device you're looking to sell and receive an instant online quote. After confirming the quote, we'll email you a prepaid shipping label so you can mail us your device. Once received, we'll immediately perform a
                      secure data wipe to protect your privacy.</p>
                  <p className="mb-[20px]">Then you get paid via check, PayPal, or store credit. Your choice. SellYourMac-- SYMPLY hassle-free.</p>
                </div>
                <button
                    onClick={handleClose}
                    className="mt-5 px-4 py-2 text-sm bg-black text-white rounded-lg w-full cursor-pointer"
                >
                    Close Window
                </button>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Home