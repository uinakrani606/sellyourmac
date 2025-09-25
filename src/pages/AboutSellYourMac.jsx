import AboutImg from '../assets/images/about.svg';
import Vector from '../assets/images/vector.svg';

const AboutSellYourMac = () => {
    return (
        <>
            <section className='py-10 relative'>
                <div className="container">
                    <div className='flex items-start gap-8 md:flex-nowrap flex-wrap'>
                        <div className='space-y-5'>
                            <h1 className="text-[32px] font-bold leading-tight">About SellYourMac</h1>
                            <h2 className='font-bold text-[29px]'>Who We Are, What We Do, Our US Mission</h2>
                            <div className='flex items-start gap-5 xl:flex-nowrap flex-wrap'>
                                <div className='space-y-5'>
                                    <p className='roboto'>
                                        SellYourMac.com is a privately owned reCommerce and IT Asset Transition Service Company located in Cincinnati, Ohio committed to reusing, repurposing and recycling used Apple products. SYM buys and sells used Apple computers, iPhones, iPads and accessories. It is the mission of SYM to help reduce the amount of e-waste hitting landfills and dumps, and help individuals, schools, businesses and other organizations offset the high costs of upgrading to newer electronic devices by purchasing their old ones. Because SYM deals solely with Apple products, SYM is more accurate than its competitors in assessing and pricing these products, enabling SYM to pay more than the competition in most cases.
                                    </p>
                                    <p className='roboto'>
                                        Products purchased by SYM include Apple MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac Mini, Cinema Display, iPhone, iPad, iPod, and Apple TV. SYM no longer purchases pre-Intel based Apple computers, however we will responsibly recycle these devices with the help of our <a className='text-primary' href="http://www.r2solutions.org" target="_blank" rel="noopener noreferrer">r2</a> and <a className='text-primary' href="http://e-stewards.org" target="_blank" rel="noopener noreferrer">e-Stewards</a> certified (zero-landfill) recycling partner, <a className='text-primary' href="http://www.cohenusa.com" target="_blank" rel="noopener noreferrer">Cohen USA</a>. Have something not listed that you wish to sell? Send us an email and we will let you know if we can pay you for your device!
                                    </p>
                                </div>
                                <img src={AboutImg} alt="About" className='mx-auto max-w-[250px] w-full'/>
                            </div>
                            <h2 className='font-bold text-[29px]'>Our Story</h2>
                            <p className='roboto'>
                                Founded by company President Brian Burke in 2006 and branded as SYM (SellYourMac.com) in 2009, SYM is positioning itself to become the world’s largest and most trusted purchaser of used Apple computers, iPhones and iPads.
                            </p>
                            <p className='roboto'>
                                SYM was conceived and launched from the basement of Brian’s home in 2006 when a slowing job market ignited Brian’s entrepreneurial spirit. Brian recognized the need for a service that would allow individuals to sell used gadgets in a hassle free manner to lower the cost of upgrading to newer technology. In an era where individuals are upgrading cell phones and computers every 16 to 18 months and new products are being introduced daily, a solution was born.
                            </p>
                            <p className='roboto'>
                                SYM has since grown to occupy an 8,000 sq. ft. facility in Blue Ash, Ohio, a suburb of Cincinnati. SYM has grown and built its reputation by exhibiting superior customer service and by offering top dollar payouts for used Apple products. SYM has helped more than 100,000 customers recoup value from their used devices, having paid out over $32,000,000 to date.
                            </p>
                            <div className='py-5'>
                                <img src={Vector} alt="vector Image" className='mx-auto'/>
                            </div>
                            <h2 className='font-bold text-[29px]'>Why Choose SYM?</h2>
                            <p className='roboto'>
                                SYM is the most visible organic Google Search site for selling Apple products, holds a <a className='text-primary' href="http://www.bbb.org/cincinnati/business-reviews/computers-used/sellyourmac-com-in-cincinnati-oh-90002239" target="_blank" rel="noopener noreferrer">Better Business Bureau (BBB) A+ Accreditation</a>, is an eBay Top Rated Plus Seller, and has a <a className='text-primary' href="http://myworld.ebay.com/isellimac/" target="_blank" rel="noopener noreferrer">Positive Feedback Score of 100%</a>. SYM also utilizes the services of <a className='text-primary' href="http://www.cohenusa.com" target="_blank" rel="noopener noreferrer">Cohen USA</a>, an <a className='text-primary' href="http://www.r2solutions.org" target="_blank" rel="noopener noreferrer">r2</a> and <a className='text-primary' href="http://e-stewards.org" target="_blank" rel="noopener noreferrer">e-Stewards</a> certified (zero landfill) electronics recycling company to dispose of all electronic waste.
                            </p>
                            <p className='roboto'>
                                SYM has been featured in many publications including MacWorld Magazine, MacLife Magazine, iBusiness Magazine, <a className='text-primary' href="http://www.technologytell.com/apple/" target="_blank" rel="noopener noreferrer">AppleTell.com</a>, <a className='text-primary' href="http://www.tuaw.com" target="_blank" rel="noopener noreferrer">Tuaw.com</a> (The Unofficial Apple Weblog), <a className='text-primary' href="http://www.imore.com/" target="_blank" rel="noopener noreferrer">iMore.com</a>, <a className='text-primary' href="http://www.macrumors.com" target="_blank" rel="noopener noreferrer">Macrumors.com</a>, iPhone Life, and Guide to Phone Apps magazine. NBC’s Channel 3 WKYC and ABC’s Channel 9 WCPO have spotlighted SYM as being a great place to resell used Apple products. We offer the highest level of customer service and do everything we can to make it easier for our customers to get the latest Apple devices!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSellYourMac
