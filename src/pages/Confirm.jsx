import CheckIcon from "../assets/images/check-icon.svg";

const Confirm = () => {
  return (
    <>
      <section className='py-10 relative border-b border-[rgba(214,214,214,0.831)]'>
        <div className="container">
          <div className='flex items-start gap-8 md:flex-nowrap flex-wrap md:mb-[60px] mb-10'>
            <div className='space-y-5 w-full'>
              <h1 className="lg:text-3xl text-2xl font-bold leading-tight">Almost finished! Complete form to lock in your offer.</h1>
              <form className='roboto'>
                <fieldset>
                  <div className='flex items-center gap-4 w-full md:flex-nowrap flex-wrap'>
                    <div className='w-full'>
                      <label htmlFor="promo_code" className="text-sm font-semibold">Promo Code (Optional)</label>
                      <input type="text" className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm' />
                    </div>
                    <div className='w-full'>
                      <label htmlFor="serial_number" className="text-sm font-semibold">Serial Number (Optional)</label>
                      <input type="text" className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm' />
                    </div>
                  </div>
                  <hr className='!my-3.5' />

                  <div className='flex items-center gap-4 w-full md:flex-nowrap flex-wrap'>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">Company/Organization</label>
                      <input type="text" required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm placeholder:text-[#333]' placeholder="Only use if payment to be issued to an Organization instead of individual" />
                    </div>
                  </div>

                  <div className='flex items-center gap-4 w-full md:flex-nowrap flex-wrap'>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">First Name *</label>
                      <input type="text" required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm' />
                    </div>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">Last Name *</label>
                      <input type="text" required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm' />
                    </div>
                  </div>

                  <div className='flex items-center gap-4 w-full md:flex-nowrap flex-wrap'>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">Email Address *</label>
                      <input type="email" required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm' />
                    </div>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">Phone Number *</label>
                      <input type="tel" required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm' />
                    </div>
                  </div>

                  <div className='flex items-center gap-4 w-full md:flex-nowrap flex-wrap'>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">Address (Line 1) *</label>
                      <input type="text" required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm' />
                    </div>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">Address (Line 2) *</label>
                      <input type="text" required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm' />
                    </div>
                  </div>

                  <div className='flex items-center gap-4 w-full md:flex-nowrap flex-wrap'>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">City *</label>
                      <input type="text" required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm' />
                    </div>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">State *</label>
                      <select required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm appearance-none'>
                        <option disabled>-- Choose State --</option>
                        <optgroup label="Outside the United States">
                          <option value="OTHER">International</option>
                        </optgroup>
                        <optgroup label="Inside the United States">
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div className='flex items-center gap-4 w-full md:flex-nowrap flex-wrap'>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">Zip/Postal Code</label>
                      <input type="text" required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm' />
                    </div>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">Country *</label>
                      <select required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm appearance-none'>
                        <option value="US">United States</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                      </select>
                    </div>
                  </div>

                  <div className='flex items-center gap-4 w-full md:flex-nowrap flex-wrap'>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">
                        Preferred Payment *
                      </label>
                      <select required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm appearance-none'>
                        <option disabled defaultValue>-- Select Payment --</option>
                        <option value="Prepaid Mastercard">Virtual SYM Prepaid Mastercard® (Receive 5% Back on card at select merchants)*</option>
                        <option value="Paypal">PayPal (fastest, no fee)</option>
                        <option value="Check - Standard Mail">Check - Standard Mail ($19 fee)</option>
                        <option value="Check - Priority Shipping">Check - Priority Shipping (fast, $29 fee)</option>
                        <option value="Check - Overnight Shipping">Check - Overnight Shipping (faster, $59 fee)</option>
                      </select>
                    </div>
                    <div className='w-full'>
                      <label className="text-sm font-semibold">Subscribe to Emails *</label>
                      <select required className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded h-[50px] text-sm appearance-none'>
                        <option value="1" defaultValue>Receive email bonuses from SYM</option>
                        <option value="0">No thanks, I'm good for now</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <p className='text-[10px]'>Virtual card is issued by Pathward®, N.A., Member FDIC, pursuant to license by Mastercard<sup>®</sup> International Incorporated. Mastercard<sup>®</sup> and the circles design are registered trademarks of Mastercard<sup>®</sup> International Incorporated. No cash access or recurring payments. Can be used where Debit Mastercard<sup>®</sup> is accepted online, for phone/mail orders, or in stores that accept mobile wallet. Valid for up to 12 months. Funds do not expire and may be available after the expiration date, inactivity fee may apply. Terms and conditions apply.</p>
                  </div>

                  <div>
                    <span className='text-lg mt-5 block exo font-bold'>Additional Information:</span>
                    <span className='text-sm'>Please provide any additional information or product specific problems. Additional information will require a manual review, and can result in an adjustment to the quote generated on our website.</span>
                    <textarea rows="2" className='bg-white border border-[#d6d6d6] w-full mt-1 px-4 py-[7.5px] mb-3 focus:border-[#2a8e9e] focus:outline-none rounded min-h-32 text-sm appearance-none'></textarea>
                  </div>

                  <div>
                    <label className="text-bold text-sm font-bold">
                      <input type="checkbox" role="checkbox" required />
                      <strong className='mx-2'>Click here to confirm that you agree to the</strong>
                      <a href='#0' className='underline'>Packing & Shipping Liability Terms</a>
                    </label>
                  </div>

                  <div className='mt-5 flex items-center justify-between gap-4 md:flex-nowrap flex-wrap'>
                    <button type='button' className="rounded-2xl cursor-pointer text-lg p-3.5 font-bold text-white w-full bg-secondary hover:!bg-[#e4730a] transition-all duration-600 ease-in-out">
                      Sell My Device for $<u>0</u>
                    </button>
                    <button type='button' className="rounded-2xl cursor-pointer text-lg p-3.5 font-bold w-full border border-[#2a8e9e] text-[#2a8e9e]">
                      Modify Device Specs
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="xl:max-w-[479px] xl:w-full md:max-w-auto md:w-auto w-full bg-white p-[25px] border border-[rgba(42,142,158,0.2)] rounded-[1rem] sticky top-[122px]">
              <div>
                <div className='sm:p-6 text-center'>
                  <p className="text-[65px] font-extrabold text-[#e4730a] leading-tight">$3</p>
                  <p className='font-semibold sm:mb-5 mb-8 roboto'>for your iPhone</p>
                </div>
                <div className="sm:p-6">
                    <p className="text-lg font-bold mb-5 lg:text-nowrap leading-tight">Your Product Information:</p>
                    <p className="text-sm font-bold mb-5">iPhone 6s (16GB)</p>
                    <ul className='roboto text-sm space-y-1'>
                      <li>AT&T Carrier</li>
                      <li>Battery Holds Charge</li>
                      <li>Good Condition</li>
                      <li>100% Functional</li>
                      <li>Charger/Power Cord(s) Included</li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* offer section */}
      <section className="bg-white md:py-20 py-10">
        <div className="container">
          <h2 className="text-[29px] leading-[1.25] tracking-[-0.05rem] font-bold text-[#333] text-center mb-[30px]">SellYourMac.com Offers</h2>
          <div className="max-w-[1280px] w-full mx-auto">
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-x-[60px] gap-x-8 md:px-20 sm:px-10 roboto sm:mb-10 mb-5 border-b border-[rgba(214,214,214,0.831)] sm:pb-10 pb-5">
              <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 border-b border-[rgba(214,214,214,0.831)] flex-nowrap text-nowrap">
                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                99% Customer Satisfaction
              </div>
              <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 border-b border-[rgba(214,214,214,0.831)] flex-nowrap text-nowrap">
                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                100% Secure Data Wipe
              </div>
              <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 border-b border-[rgba(214,214,214,0.831)] flex-nowrap text-nowrap">
                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                Free Return Shipping Label
              </div>
              <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 text-nowrap xl:border-0 border-b border-[rgba(214,214,214,0.831)]">
                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                Fast Payment: PayPal/Check
              </div>
              <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 text-nowrap sm:border-0 border-b border-[rgba(214,214,214,0.831)]">
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
    </>
  )
}

export default Confirm
