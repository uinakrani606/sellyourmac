import symRetailBanner from '../assets/images/sym-retail-banner.jpg';

const MacSupport = () => {
    return (
        <>
            <section className='py-10 relative'>
                <div className="container">
                    <div className='flex items-start gap-8 md:flex-nowrap flex-wrap'>
                        <div className='space-y-5 roboto w-full'>
                            <div className='rounded-[20px] block overflow-hidden'>
                                <img src={symRetailBanner} alt="" />
                            </div>
                            <h1 className="text-[32px] font-bold leading-tight exo">SellYourMac Support</h1>
                            <p className='mb-[20px]'>SellYourMac.com provides unparalleled customer support for their products and services.</p>
                            <ul class="list">
                                <li className='mb-[10px]'>Our company has helped serve over 50,000 customers since 2006.</li>
                                <li className='mb-[10px]'>All products come with a minimum 30-day warranty and return period.</li>
                                <li className='mb-[10px]'>If there is any problem with your computer we will exchange it for another one with the same specs or provide a refund if we can't fix it or find a comparable computer for exchange.</li>
                                <li className='mb-[10px]'>As a customer, you receive email and phone support.</li>
                                <li className='mb-[10px]'>Reach us by using the built-in Live Help chat at the top-right of the website, or leave us a message if we are unavailable.</li>
                                <li className='mb-[10px]'>We can also be reached via email at info@sellyourmac.com. You will get a response as soon as humanly possible.</li>
                                <li className='mb-[10px]'>Phone support available @ 513-965-1144 during business hours M - F 10am-5pm EST.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MacSupport
