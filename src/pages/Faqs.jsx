import React, { useState } from "react";

const items = [
    { 
        title: "1. How does the whole process work?",
        content: (
            <>
            First, submit your device’s specifications through our website and instantly receive a price quote when you answer the final question on the form. The quoted price will appear, along with the specs that you submitted. Click “Sell My Device For $XXX” to accept the quoted price, and then enter your personal details and product serial number on the Customer Details Form. Click “Sell My Device For $XXX” at the bottom of the Customer Details Form to submit your details. After you submit your quote and details, you will receive an email from us containing your quote information (and a request to submit your serial number if you haven't already). We will then email you back to confirm your quote and attach a prepaid shipping label. Please package your item securely, attach the label provided, and ship it to us. You must use the shipping label that we provide. When we receive your item, you will receive an email from us letting you know that we got it. We then wipe the drives clean, reload the operating system, test the functionality and finally confirm your device meets the specifications you originally listed. At this time we send an email letting you know that your payment is on the way.  We issue payment via company check, PayPal, or a virtual Prepaid Mastercard <sup>®</sup>
            </>
        )
    },
    { 
        title: "2. Do you buy locked or managed devices?",
        content: "We do not purchase devices that are iCloud locked, under Device Management Software supervision, part of Apple’s DEP program, or have been reported stolen. It will be the seller's responsibility to pay for return shipping in the event the device cannot be unlocked and needs to be returned."
    },
    { 
        title: "3. How long does it take to receive payment?",
        content: "We issue payment via company check, PayPal, or a virtual Prepaid Mastercard®. The amount of time it takes to receive payment depends on how far away you are from our location in Cincinnati, OH and what payment method you choose. Payment is usually issued within 3–5 business days of SYM receiving your item. If you choose to be paid by company check, USPS First Class Mail delivery can take up to 15 business days to arrive from the day payment is issued, however most mail is delivered sooner than 15 business days. PayPal payment is instant and will show up in your account the day it is issued, as long as your PayPal account is properly set up. Prepaid Mastercard payments can take up to 2 days to be delivered by email as a virtual card. Generally, it takes 2–5 days for SYM to receive your item after you ship it. Once SYM receives your item, you will receive an email letting you know that it has arrived at our facility. Processing of your device, which includes wiping the device for your security and performing our QA steps to verify the device matches the quote, will take approximately 2–5 business days. At this time, payment is issued if your item checks out and matches how it was quoted. If you requested PayPal payment, you will receive the funds instantly. If you requested Prepaid Mastercard, you will receive an email with virtual code within 2 business days with instructions to redeem your virtual card. If you requested a company check, it can take up to 15 business days from this point for you to receive the check via USPS First Class Mail. We strive to provide the fastest turnaround possible in order to get you paid quickly. In rare circumstances, your item may require additional testing and in this case we will notify you via email immediately and let you know the status of your item." 
    },
    {
        title: "4. Why should I use SYM and not another service?",
        content: "SYM offers the best customer service and the best payout prices. We are available day and night to answer your questions. We make the process of selling your Apple products as simple and as painless as possible, while keeping you informed via email every step of the way. You gain peace of mind by not having to worry about scammers on eBay or Craigslist! Our friendly, professional staff is here to make sure you are fully satisfied and paid fast. We have an A+ rating from the BBB and have been featured in numerous publications including MacWorld Magazine, MacLife Magazine, iBusiness Magazine, AppleTell.com, Tuaw.com (The Unofficial Apple Weblog), Macrumors.com, iPhone Life, and Guide to Phone Apps magazine. NBC’s Channel 3 WKYC and ABC’s Channel 9 WCPO have also spotlighted SYM as being a great place to resell used Apple devices. We do everything we can to make our customers' lives easier! "
    },
    { 
        title: "5. How do I know that SYM is not a scam?",
        content: (
            <>
            Our company has been in business since 2006 and branded as SYM (SellYourMac.com) since 2009. We have also been part of the OWC family since 2022! We are accredited with the Better Business Bureau and have an A+ rating. <a className="text-primary" href="http://www.bbb.org/cincinnati/business-reviews/computers-used/isellmac-com-in-loveland-oh-90002239/" target="_blank">Click here to see our BBB rating</a> We’ve also been featured on the <a className="text-primary" href="http://www.youtube.com/watch?v=4C8XcEdoxgM">local news in Cincinnati, Ohio</a> You can also <a className="text-primary" href="#0">click here to view an entire page dedicated to the transparency of our company!</a> We are reliable and deserve your trust!"
            </>
        )
    },
    { 
        title: "6. I'm nervous that I will send my Apple product off to you and not get paid. Convince me otherwise!",
        content: (
            <>
                We will send your payment via check, PayPal, or a virtual Prepaid Mastercard
                <sup>®</sup> as soon as we receive and test your device. Feel free to check out our customer feedback. We have an A+ rating with the BBB. <a className="text-primary" href="http://www.bbb.org/cincinnati/business-reviews/computers-used/isellmac-com-in-loveland-oh-90002239/" target="_blank">Click here to see our BBB Accreditation</a>. We’ve also been featured on the local news! <a className="text-primary" href="http://www.youtube.com/watch?v=4C8XcEdoxgM">See the ABC special here</a>. Call us at 513-965-1144 if you want to speak with someone directly—we’re happy to help answer your questions! 
            </>
        )
    },
    { 
        title: "7. Am I guaranteed to receive the payout amount I am quoted?",
        content: "As long as you accurately describe your item, yes. If the device we receive doesn’t match your original description, we’ll send a revised quote and explain why. If you agree, we’ll proceed and issue payment. If not, you can decline and request the item back—just cover return shipping."
    },
    { 
        title: "8. What happens if the item I am selling you is not up to the quality I specified? Do you guys contact me or just send it back?",
        content: (
            <>
            If your product arrives "not as described," we’ll email you to explain how it differs and send an updated quote. Most customers agree, as we aim to be fair. If you’re unsatisfied, we can return the item to you—just cover shipping." 
        </>
        )
    },
    { 
        title: "9. How long is my quote good for?",
        content: "Your quote is valid for 30 days. Your device must arrive at our facility within that time. If it will take longer, email us at quotes@sellyourmac.com to check if your quote needs to be revised."
    },
    { 
        title: "10. I have the shipping label, but I haven't shipped my item yet and the date on the label is a week old. Can I still use it for shipping?",
        content: "Yes, your label is good for 60 days!"
    },
    { 
        title: "11. Is my personal information safe that I submit through your site?",
        content: "Yes. We do not share or sell any customer information including email, phone number, or address with any other person or company."
    },
    { 
        title: "12. There is a problem with my LCD on my laptop and I don't see an option for that on the SYM quote page. What should I do?",
        content: "If there is a problem with your item that is not included as an option on the specification page, please describe the issue in the “Additional Information” box. The initial quote won’t reflect this, but we’ll follow up with a custom quote."
    },
    { 
        title: "13. Will you delete my contacts and photos when I sell you my iPhone, iPad or other Apple device?",
        content: "Yes, we fully wipe every device we receive. We restore all items to factory settings, including iPhones and iPads. You can also erase the device yourself before sending it in. For iOS devices: Back up your data, then go to Settings → General → Transfer or Reset → Erase All Content and Settings."
    },
    { 
        title: "14. Can I sell you my device if I live outside the U.S.?",
        content: "Yes. We buy devices worldwide, but only offer free shipping within the continental U.S. If you’re outside that area, you’ll need to cover shipping costs and email us the tracking info."
    },
    { 
        title: "15. I have multiple items to sell, what should I do?",
        content: "If you have 10 or fewer items, submit each one individually through our site. For more than 10, download our Bulk Buyback Spreadsheet, fill it out, and email it to bulk@sellyourmac.com. If you need help accessing the form, just email us."
    },
    { 
        title: "16. Will you buy my item if it is broken?",
        content: (
            <>
                Yes, we buy some devices for parts. On the quote form, select "does not power on" or "water damage" as needed, and describe any issues in the additional info box. We’ll follow up with a custom quote.
            </>
        )
    },
    { 
        title: "17. My Mac has a lot of expensive software loaded on it, shouldn't it be worth more?",
        content: "No, we do not place value on software because we wipe all devices. Selling software without a valid license is also illegal."
    },
    { 
        title: "18. How do I ship you my item?",
        content: "We’ll email you a prepaid shipping label (U.S. only). Pack your item securely—ideally using the original packaging and a secondary box. If using your own box, make sure to use bubble wrap and packing materials. Affix the label and drop it off at an official UPS or FedEx store, depending on your label. You’ll receive tracking updates and a confirmation when we receive and check in your item."
    },
    { 
        title: "19. Is my item insured when I ship it to you?",
        content: "Yes, we insure all shipments for at least $100. However, claims for damage from poor packaging may be denied by carriers. You're responsible for packing your item properly. If an item arrives damaged and isn’t covered by the carrier, we’ll revise your quote accordingly."
    },
    { 
        title: "20. What payment options do you offer?",
        content: (
            <>
                SYM issues payment via PayPal, Company Check, or a virtual Prepaid Mastercard <sup>®</sup>. PayPal arrives within 1 business day. Company checks can take up to 15 business days via USPS, but often arrive sooner. The virtual Prepaid Mastercard <sup>®</sup> will arrive within 2 business days, after receiving an email containing a virtual code and instructions to redeem the virtual prepaid card.
            </>
        )
    },
    { 
        title: "21. Do you offer expedited payment options?",
        content: (
            <>
                Yes! PayPal is instant once the payment has been issued. If you want a company check overnighted via FedEx or UPS, we can do that for a $40 fee. We also offer USPS Priority Mail delivery for a $10 fee. Prepaid Mastercard <sup>®</sup> is usually received within 2 business days, after receiving an email containing a virtual code and instructions to redeem the virtual prepaid card. Note: Overnight options may be delayed if shipped Thursday or Friday due to weekend carrier schedules.
            </>
        )
    },
    { 
        title: "22. I don't see my question here, how do I get an answer?",
        content: "Email us anytime at quotes@sellyourmac.com —we’re happy to help!"
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); // close if already open
    };

    return (
        <>
            <section className='py-10 relative'>
                <div className="container">
                    <div className='flex items-start gap-8 md:flex-nowrap flex-wrap'>
                        <div className='bg-white rounded-xl sm:p-[25px] p-4 border-[rgba(42,142,158,0.2)] border'>
                            <div>
                                <h1 className='text-[32px] font-bold leading-tight mb-5'>FAQS</h1>
                                <p className='sm:pb-10 pb-6 mb-6 sm:mb-10 roboto border-b border-[rgba(42,142,158,0.2)]'>
                                    We will gladly answer any of your questions about SellYourMac.com and the service we provide! Hopefully this FAQ page will answer all of your questions. If not, feel free to email us at info@sellyourmac.com and we will respond promptly!
                                </p>
                                <div className='roboto'>
                                    <p className='font-bold mb-5'>Table of Contents</p>
                                    <div className="w-full flex flex-col gap-2">
                                        {items.map((item, index) => (
                                            <div key={index} className="bg-[rgba(42,142,158,0.1)] rounded-lg p-4 cursor-pointer" onClick={() => toggle(index)}>
                                                <button
                                                    className="w-full flex justify-between items-center text-[#070707] bg-transparent border-transparent text-left text-[16px] font-normal leading-[1.4] roboto cursor-pointer"
                                                >
                                                    {item.title}
                                                    <span className="ps-6 text-primary">{openIndex === index ? "-" : "+"}</span>
                                                </button>
                                                {openIndex === index && (
                                                    <div className="text-sm mt-2 cursor-default">
                                                        {item.content}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs
