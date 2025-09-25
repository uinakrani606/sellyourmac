import PhoneIcon from '../assets/images/phone-icon.svg';
import MailIcon from '../assets/images/mail-icon.svg';
import LocationIcon from '../assets/images/location-icon.svg';
import ClockIcon from '../assets/images/clock-icon.svg';

const Contact = () => {
    return (
        <>
            <section className='py-10 relative'>
                <div className="container">
                    <div className='flex items-start lg:gap-8 gap-4 md:flex-nowrap flex-wrap'>
                        <div className='w-full'>
                            <h1 className="text-[32px] font-bold leading-tight md:mb-16 mb-10 text-center">Contact SellYourMac</h1>
                            <div className='flex md:gap-14 gap-10 w-full flex-col'>
                                <div className='roboto'>
                                   <div className="grid sm:grid-cols-2 grid-cols-1  text-center relative sm:after:content-[''] sm:after:absolute sm:after:top-1/2 sm:after:start-1/2 sm:after:size-12 sm:after:bg-[#F7F9FA] sm:after:-translate-x-1/2 sm:after:-translate-y-1/2">
                                        <div className='sm:border-r border-[rgba(42,142,158,0.2)] p-4 border-b h-[191px] flex align-middle flex-col justify-center'>
                                            <img className='mb-2 mx-auto' src={MailIcon} alt="mail icon" />
                                            <p className='font-semibold pb-1 text-xl'>Email</p>
                                            <a className='text-primary block' href="mailto:info@sellyourmac.com">info@sellyourmac.com</a>
                                            <a className='text-primary block' href="mailto:quotes@sellyourmac.com">quotes@sellyourmac.com</a>
                                            <a className='text-primary block' href="mailto:payments@sellyourmac.com">payments@sellyourmac.com</a>
                                            <a className='text-primary block' href="mailto:store@sellyourmac.com">store@sellyourmac.com</a>
                                        </div>
                                        <div className='border-[rgba(42,142,158,0.2)] p-4 border-b h-[191px] flex align-middle flex-col justify-center'>
                                            <img className='mb-2 mx-auto' src={LocationIcon} alt="location icon" />
                                            <p className='font-semibold pb-1 text-xl'>Location</p>
                                            <address className='italic mb-5 text-primary max-w-96 mx-auto'>
                                                11101 Kenwood Rd.
                                                Cincinnati, OH 45242
                                                844-SELL-MAC (844-735-5622)
                                            </address>
                                        </div>
                                        <div className='sm:border-r border-[rgba(42,142,158,0.2)] p-4 h-[191px] flex align-middle flex-col justify-center sm:border-0 border-b'>
                                            <img className='mb-2 mx-auto' src={ClockIcon} alt="clock icon" />
                                            <p className='font-semibold pb-1 text-xl'>Working Hours</p>
                                            <p className='mb-5 text-lg text-primary'>Our office hours are Monday-Friday 10am-5pm EST</p>
                                        </div>
                                        <div className='p-4 h-[191px] flex align-middle flex-col justify-center'>
                                            <img className='mb-2 mx-auto' src={PhoneIcon} alt="phone icon" />
                                            <p className='font-semibold pb-1 text-xl'>Phone Number</p>
                                            <a className='text-primary block' href="tel:+18447355622">1-844-SELL-MAC</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <iframe className='border-0 shadow-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.9113564630793!2d-84.3766786235108!3d39.26757782477652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884053e01923ebeb%3A0xf298e610befd7c64!2s11101%20Kenwood%20Rd%2C%20Blue%20Ash%2C%20OH%2045242%2C%20USA!5e0!3m2!1sen!2sin!4v1756205644827!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
