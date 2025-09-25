import React, { useState } from "react";
import InfoIcon from "../assets/images/info-icon.svg";
import MacBookPro from "../assets/images/MacBook-Pro.webp";
import MacBookAir from "../assets/images/MacBook-Air.webp";
import MacBook from "../assets/images/MacBook.webp";
import MacMini from "../assets/images/Mac-Mini.webp";
import MacStudio from "../assets/images/Mac-Studio.webp";
import MacPro from "../assets/images/Mac-Pro.webp";
import iMac from "../assets/images/iMac.webp";
import iMacPro from "../assets/images/iMac-Pro.webp";
import AppleDisplay from "../assets/images/Apple-Display.webp";
import CheckIcon from "../assets/images/check-icon.svg";
import ModalCloseIcon from "../assets/images/modal-close.svg";
import Close from "../assets/images/close.svg";
import DeviceType from "../assets/images/device-type.webp";
import { Link } from "react-router-dom";

const products = [
    { id: "macbook-pro", img: MacBookPro, name: "MacBook Pro", cash: "$4450" },
    { id: "macbook-air", img: MacBookAir, name: "MacBook Air", cash: "$950" },
    { id: "mac-mini", img: MacMini, name: "Mac Mini", cash: "$1400" },
    { id: "mac-studio", img: MacStudio, name: "Mac Studio", cash: "$4100" },
    { id: "imac", img: iMac, name: "iMac", cash: "$1400" },
    { id: "imac-pro", img: iMacPro, name: "iMac Pro", cash: "$1600" },
    { id: "apple-display", img: AppleDisplay, name: "Apple Display", cash: "$2750" },
];

const Sell = () => {
    const [openAccordion, setOpenAccordion] = useState(1);
    const [currentStep, setCurrentStep] = useState(1);
    const [openModal, setOpenModal] = useState(null);

    const toggleAccordion = (index) => {
        if (index <= currentStep) {
            setOpenAccordion(openAccordion === index ? null : index);
        }
    };

    const handleOpen = (modalName) => {
        setOpenModal(modalName);
    };

    const handleClose = () => {
        setOpenModal(null);
    };

    return (
        <>
            <section className="py-10 border-b border-[rgba(42,142,158,0.2)]">
                <div className="container">
                    <div>
                        {/* Header */}
                        <div className="mb-6 flex justify-between sm:gap-4 gap-3 items-center sm:flex-nowrap flex-wrap">
                            <h1 className="font-bold md:!text-[32px] text-[23px] leading-tight md:text-nowrap">
                                Sell Your Used Apple Device
                            </h1>

                        </div>

                        {/* Step 1 Accordion */}
                        <section className="bg-white md:py-[30px] md:ps-[110px] py-[15px] md:pe-5 px-5 md:rounded-xl border border-[rgba(42,142,158,0.2)] md:m-0 md:mb-6 -mx-5 mb-[15px]">
                            <div
                                className="quote-accordion-header flex justify-between items-center"
                            >
                                <div className="flex items-center sm:gap-5 gap-3 relative md:start-[-70px]">
                                    <div className="bg-secondary text-white text-xl size-[50px] min-w-[50px] rounded-full text-center flex items-center justify-center">
                                        1
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <button
                                            type="button"
                                            className="text-xl font-bold text-[#070707] focus:outline-none text-start cursor-pointer leading-tight"
                                            onClick={() => toggleAccordion(1)}
                                        >
                                            Device Configuration
                                        </button>
                                        <img onClick={() => handleOpen("help")} src={InfoIcon} alt="Info icon" className="md:hidden cursor-pointer" />
                                    </div>
                                </div>
                                <button onClick={() => handleOpen("help")} className="md:flex items-center gap-2.5 cursor-pointer hidden">
                                    <span className="text-sm roboto flex">
                                        Need help configuring your device?
                                    </span>
                                    <img src={InfoIcon} alt="Info icon" />
                                </button>
                            </div>

                            {/* Accordion Content */}
                            {openAccordion === 1 && (
                                <div className="quote-accordion-content mt-4">
                                    <div className="flex items-center gap-2.5 cursor-pointer mb-6">
                                        <span className="font-semibold roboto flex">
                                            Select Your Product
                                        </span>
                                        <img onClick={() => handleOpen("product")} src={InfoIcon} alt="Info icon" className="cursor-pointer" />
                                    </div>
                                    <div className="grid grid-cols-1 min-[375px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6 gap-4 md:mb-0 mb-2">
                                        {products.map((item, idx) => (
                                            <Link to={`/sell/${item.id}`} key={idx}>
                                                <div className="bg-white transform transition-all duration-300 pb-6 shadow-[0_4px_6px_-1px_rgba(42,142,158,0.2),0_2px_4px_-1px_rgba(42,142,158,0)] rounded-[10px] flex flex-col items-center text-center">
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
                                                        Up to {item.cash}
                                                    </p> */}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* Step 2 Accordion */}
                        <section className={`md:py-[30px] md:ps-[110px] py-[15px] md:pe-5 px-5 md:rounded-xl border border-[rgba(42,142,158,0.2)] md:m-0 md:mb-6 -mx-5 mb-[15px] ${2 > currentStep ? "bg-[rgba(42,142,158,0.1)] cursor-not-allowed" : "bg-white"}`}>
                            <div
                                className="quote-accordion-header flex justify-between items-center"
                            >
                                <div className="flex items-center gap-5 relative md:start-[-70px]">
                                    <div className={`text-white text-xl size-[50px] min-w-[50px] rounded-full text-center flex items-center justify-center roboto ${2 > currentStep ? 'bg-transparent border border-[#2a8e9e] text-primary' : 'bg-secondary'} `}>
                                        2
                                    </div>
                                    <button
                                        type="button"
                                        className={`text-xl font-bold text-[#070707] focus:outline-none ${2 > currentStep ? 'cursor-not-allowed text-[#606060]' : 'cursor-pointer'}`}
                                        onClick={() => toggleAccordion(2)}
                                    >
                                        Functional Condition
                                    </button>
                                </div>
                            </div>

                            {openAccordion === 2 && (
                                <div className="quote-accordion-content mt-4">
                                    <p className="roboto text-sm text-[#333]">
                                        Here you will get your final quote.
                                    </p>
                                </div>
                            )}
                        </section>

                        {/* Step 3 Accordion */}
                        <section className={`md:py-[30px] md:ps-[110px] py-[15px] md:pe-5 px-5 md:rounded-xl border border-[rgba(42,142,158,0.2)] md:m-0 md:mb-6 -mx-5 mb-[15px] ${3 > currentStep ? "bg-[rgba(42,142,158,0.1)] cursor-not-allowed" : "bg-white"}`}>
                            <div
                                className="quote-accordion-header flex justify-between items-center"
                            >
                                <div className="flex items-center gap-5 relative md:start-[-70px]">
                                    <div className={`text-white text-xl size-[50px] min-w-[50px] rounded-full text-center flex items-center justify-center roboto ${3 > currentStep ? 'bg-transparent border border-[#2a8e9e] text-primary' : 'bg-secondary'} `}>
                                        3
                                    </div>
                                    <button
                                        type="button"
                                        className={`text-xl font-bold text-[#070707] focus:outline-none ${3 > currentStep ? 'cursor-not-allowed text-[#606060]' : 'cursor-pointer'}`}
                                        onClick={() => toggleAccordion(3)}
                                    >
                                        Cosmetic Condition
                                    </button>
                                </div>
                            </div>

                            {openAccordion === 3 && (
                                <div className="quote-accordion-content mt-4">
                                    <p className="roboto text-sm">
                                        Cosmetic Condition
                                    </p>
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </section>

            {/* offer section */}
            <section className="bg-white md:py-20 py-10">
                <div className="container">
                    <h2 className="text-[29px] leading-[1.25] tracking-[-0.05rem] font-bold text-[#333] text-center mb-[30px]">SellYourMac.com Offers</h2>
                    <div className="max-w-[1280px] w-full mx-auto">
                        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-x-[60px] gap-x-8 md:px-20 sm:px-10 roboto sm:mb-10 mb-5 border-b border-[rgba(42,142,158,0.2)] sm:pb-10 pb-5">
                            <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 border-b border-[rgba(42,142,158,0.2)] flex-nowrap text-nowrap">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                99% Customer Satisfaction
                            </div>
                            <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 border-b border-[rgba(42,142,158,0.2)] flex-nowrap text-nowrap">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                100% Secure Data Wipe
                            </div>
                            <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 border-b border-[rgba(42,142,158,0.2)] flex-nowrap text-nowrap">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                Free Return Shipping Label
                            </div>
                            <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 text-nowrap xl:border-0 border-b border-[rgba(42,142,158,0.2)]">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                Fast Payment: PayPal/Check
                            </div>
                            <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 text-nowrap sm:border-0 border-b border-[rgba(42,142,158,0.2)]">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                30 Day Offer Guarantee
                            </div>
                            <div id="packing-desc-ref" className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 text-nowrap">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                <p>
                                    Packing Materials on Request
                                    <a className="text-primary underline mx-0.5" href="#packing-desc">*</a>
                                </p>
                            </div>
                        </div>
                        <div className="robot text-[12px] font-medium">
                            <p id="packing-desc" className="mb-[10px] block">* Packing materials are only available for certain products.<a className="text-primary underline mx-0.5" href="#packing-desc-ref">↵</a> </p>
                            <p className="mb-[10px] block">We do not purchase devices that are locked, iCloud locked, under Device Management Software supervision, part of Apple’s DEP program, or have been reported stolen. It will be the seller's responsibility to pay for return shipping in the event the device cannot be unlocked and needs to be returned.</p>
                            <p className="mb-[10px] block">All data will be 100% wiped as all systems will be restored to original factory settings.</p>
                            <p className="block">We are able to match or beat most legitimate competitor's cash offers. Please check out the competition and you will see our offer is better! Sell to SYM and avoid paying 15% in eBay &amp; Paypal fees.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-10">
                <div className="container">
                    <div className="space-y-5">
                        <h2 className="mb-0 !text-[26px] font-bold">Apple Sell Back</h2>
                        <p className="roboto">
                            Selling an item like an Apple product through a local retailer or an auction site can be risky and inconvenient. To ensure that you get your time and money's worth, sell your Apple products back through SellYourMac. We are a company that is willing
                            to pay you a competitive price for your Apple products that is equal to or greater than our legitimate competitors. We make the process as easy and straightforward as possible. We will keep you informed on important things like shipment times
                            and payment processing.
                        </p>
                        <h3 className="mb-0 text-[22px] font-bold">Tell Us About Your Device</h3>
                        <p className="roboto">
                            Before selling your Apple device, you must give us some information about your product.
                        </p>
                        <p className="roboto">
                            Click on the drop-down menu and select your apple product. From here you will be prompted to make selections by starting with the product and moving on to the processor, hard drive capacity, and ram selections.
                        </p>
                        <p className="roboto">
                            Next, answer the questions about add-ons, the condition of the device, and its performance by clicking on the appropriate options. You also have the option of providing additional information that you feel may be relevant.
                        </p>
                        <p className="roboto">
                            If you add additional information, the quote we provide you on the next page is subject to change after a manual review. When you are satisfied that you entered all the information, click on <strong>Continue</strong> to go to the next page.
                        </p>
                        <h3 className="mb-0 text-[22px] font-bold">Receive Your Free Quote</h3>
                        <p className="roboto">
                            Our offer for your device as well as a model and condition description will be located in a blue box. A list of all the information you provided will be displayed. You can enter a promo code if you have one, once you are satisfied with our offer
                            and reviewed the information to ensure it is correct. Next, click on <strong>Let's do it</strong> and begin filling out your contact information.
                        </p>
                        <h3 className="mb-0 text-[22px] font-bold">Ship Us Your Device</h3>
                        <p className="roboto">
                            After accepting our cash offer, an email with all the information you need will be sent to you. Then, you will carefully pack your Apple product and send it to our Cincinnati, Ohio address.
                        </p>
                        <h3 className="mb-0 text-[22px] font-bold">Get Paid</h3>
                        <p className="roboto">
                            Your proximity from our Cincinnati location will depend on how quickly we will receive and inspect your device. Once we get your device, we will issue your payment in one to three days. If your payment preference is PayPal, you should receive
                            your payment instantly after your device checks out.
                        </p>
                        <hr className="sm:my-10 !my-8" />
                        <h2 className="mb-0 !text-[26px] font-bold">Sell Your Apple Products Back With Us</h2>
                        <p className="roboto">
                            If you want to sell your Apple products back hassle free, you have come to the right place. We offer a pleasant selling experience and outstanding customer service. SellYourMac has an A+ rating from the Better Business Bureau, and we were featured
                            in several publications, including MacWorld magazine, AppleTell.com, and iPhone Life.
                        </p>
                        <p className="roboto">
                            Sell your Apple devices with a reliable and reputable buyer like us and receive your free quote today!
                        </p>
                    </div>
                </div>
            </section>

            {/* Need help modal */}
            {openModal === "help" && (
                <div className="fixed inset-0 bg-[#000000cc] flex justify-center items-center z-40" onClick={handleClose}>
                    <img src={ModalCloseIcon} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:flex hidden" onClick={handleClose} />
                    <img src={Close} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:hidden flex" onClick={handleClose} />
                    <div onClick={(e) => e.stopPropagation()} className="bg-white md:p-6 sm:p-10 pt-14 pb-6 px-6 md:max-w-[800px] md:w-[calc(100%-32px)] w-full overflow-auto md:h-auto h-full shadow-lg">
                        <h2 className="text-[29px] font-bold mb-6">Need Assistance?</h2>
                        <p className="roboto mb-5">
                            <a href="mailto:quotes@sellyourmac.com?subject=Help with my SellYourMac Quote" className="font-black underline">
                                Send us an Email
                            </a> or speak to an Apple expert at
                            <b>844-735-5622</b>
                        </p>
                        <p className="roboto">
                            Click for information about configuring your device.
                        </p>
                        <button
                            onClick={handleClose}
                            className="mt-5 px-4 py-2 text-sm bg-secondary text-white rounded-lg w-full cursor-pointer"
                        >
                            Close Window
                        </button>
                    </div>
                </div>
            )}

            {/* Product Modal */}
            {openModal === "product" && (
                <div className="fixed inset-0 bg-[#000000cc] flex justify-center items-center z-40" onClick={handleClose}>
                    <img src={ModalCloseIcon} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:flex hidden" onClick={handleClose} />
                    <img src={Close} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:hidden flex" onClick={handleClose} />
                    <div onClick={(e) => e.stopPropagation()} className="bg-white md:p-6 sm:p-10 pt-14 pb-6 px-6 lg:max-w-[800px] md:max-w-[600px] md:max-h-[782px] overflow-auto h-full  md:w-[calc(100%-32px)] w-full shadow-lg">
                        <h2 className="!text-2xl font-bold mb-6">What type of apple device do I have?</h2>
                        <ol className="roboto list-decimal ps-5">
                            <li>Click on the Apple logo in the upper-left corner of your screen.</li>
                            <li>Click <strong>About This Mac</strong> and a pop-up will appear.</li>
                            <li>The <strong>device name</strong> is displayed below the operating system.</li>
                        </ol>
                        <img src={DeviceType} alt="What type of Apple device do I have?" />
                        <p className="text-center mb-3 roboto">
                            <b>Having trouble?</b> Email us at <a className="underline" href="mailto:quotes@sellyourmac.com?subject=Help on my SellYourMac Quote">quotes@sellyourmac.com</a>
                        </p>
                        <button
                            onClick={handleClose}
                            className="mt-5 px-4 py-2 text-sm bg-secondary text-white rounded-lg w-full cursor-pointer"
                        >
                            Close Window
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sell;
