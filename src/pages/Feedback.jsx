import start from '../assets/images/review.png';

const Feedback = () => {

    const review = [
        {
            name: "Andrew says:",
            feedback: "Very professional! I would recommend this to anyone who is looking to receive top dollar for their used Mac. Keep up the great work!"
        },
        {
            name: "Adam says:",
            feedback: "I sold my 2012 MacBook Air. Wow, great experience! Very fast payment and they paid as quoted. I am very impressed. This was a much better experience than one of their competitors. I would certainly do more business with SYM!"
        },
        {
            name: "B. Taku says:",
            feedback: "It was a wonderful experience doing business with SellYourMac. SYM is indeed business minded. It took limited time frame (less than 10 days) for my check to arrived. Even when I was a little apprehensive, I got a call from the V.P. Director of Operations (Tyler King) who explained things to my understanding and voila, my check was in my mailcard the following day after the interaction. You rock T. King. Keep it up SYM."
        },
        {
            name: "Amanda Charette says:",
            feedback: "I was apprehensive to mail my iMac but the process was quick and I received the full amount quoted. I would use this service again!"
        },
        {
            name: "John says:",
            feedback: "Paid quickly - Check Gave me more than anyone else - Check Reliable - Check Did exactly what they said they would - Check I highly recommend SYM and would/will deal with them again."
        },
        {
            name: "David says:",
            feedback: "Overall very good experience. Will do it again. Thanks."
        },
        {
            name: "Danielle F says:",
            feedback: "I recently used this service and was very pleased. They were prompt and communicative. I received the full amount quoted for a 7-year-old computer and it was the best quote I was able to find."
        },
        {
            name: "Ying Zhang says:",
            feedback: "Very prompt service. I had a very easy time in communicating with SYM, they got back to me usually within a few hours for the few times I sent them questions. Also, I received payment of the device I sent in about a day or so afterward they got it in the mail. Will be looking back at SYM if I ever need to sell more APPLE devices."
        },
        {
            name: "Arnold Wexler, MD says:",
            feedback: "These guys are the ''ne plus ultra' to do business with. Highly recommended for all Apple resells."
        },
        {
            name: "robert o says:",
            feedback: "best price given by a wide margin."
        },
        {
            name: "Glenn Miller says:",
            feedback: "Folks at SYM are awesome in every step of their easy 4-step process. I've sold a number of my personal Apple items to them over the past 4-5 years--iPhones, iPads, iMac--and have been very happy every time. I'll definitely plan to do business with them in the future!"
        },
        {
            name: "Fran says:",
            feedback: "I was very pleased with the prompt service I received and the price paid for my iPhone 4S and old iMac which I needed to get rid of to make space for new models. I would recommend this service to anyone looking to sell or recycle old Apple equipment."
        },
        {
            name: "Lisa says:",
            feedback: "I found SYM online and after I read what they offered I plugged my information in and was pleased to find they'd buy a 7 year old MacBook Pro that was in physically great shape, but without a logic board and with the hard drive removed. I made some money and it's out of my home and not in an electronic junkyard somewhere! Their method of staying in touch was great and I received my money well before I expected. Free shipping and fast response. Highly recommend their service.ba87z"
        },
        {
            name: "Andrew says:",
            feedback: "I have sold 3 computers with SellYourMac.com and I must say, they offer a great service. Very easy to get a quote, they paid for the shipping of my items, and I feel secure in knowing that they wipe the computer clean. Not only that, but there was a potential issue with my computer where I would receive either $530 or $120. They could have easily said there was an issue and given me the lesser amount, but they performed their tests and I received the full $530. I definitely recommend if you plan on selling your mac."
        },
        {
            name: "Amy says:",
            feedback: "Very pleased with the professionalism and overall process. There was some confusion regarding the condition of my Mac, good vs fair. A staff member got in touch right away and was open to finding a suitable option that worked for both of us. I'd recommend this service to anyone"
        },
        {
            name: "Paul says:",
            feedback: "I sold my 2010 Mac Pro and these guys were great! There was an issue with the device getting damaged through shipping and they handled it very quickly. They followed their timetables perfectly and always responded quickly to any questions. I would definitely do business with them again and would recommend them to anyone who is looking to sell their Apple products."
        },
        {
            name: "Jim Grossman says:",
            feedback: "WOW Service was fast less then a week from start to finish. Honest trustworthy and quick to respond. Would highly recommend and use again. Price they gave me was fair and did not have to hassle with truing to sell my self. THANKS"
        },
        {
            name: "monica says:",
            feedback: "I just recycled my macbook and it was fast and easy. I sent them a few pictures and they sent me a prepaid label. Make sure you have it packed up good by UPS or Fed ex to insure it makes it there in one piece. My Mac got there in three days and three days later my Mac was inspected and payment was issued. Not bad, very fast and easy. If they see a problem with your device they will email you. They keep in touch with you every step of the way. Excellent service. Would recommend to everyone. Monica, TN"
        },
        {
            name: "Steve says:",
            feedback: "We wanted to sell our iPad 1 since it was not being used anymore. I checked a few buy back sites and SellYourMac offered the best price. The whole transaction worked perfectly. I received a check for the full quoted price 10 days after they received the iPad. I will definitely recommend and use SellYourMac again."
        },
        {
            name: "Ed D says:",
            feedback: "I just sold my two and a half year old 15” MBP to SYM, and everything went very smooth. The originally quoted price was honored after they reviewed everything, and payment by check came about a week or so later. Justin was great to work with when I had a couple of questions just before finalizing the transaction. The prepaid shipping was also a good deal. SYM is clearly a very professional organization, and I will use them again soon when I upgrade my second MBP."
        },
        {
            name: "Ceil Davis says:",
            feedback: "Was very happy when I found the laptop I wanted to replace my 8 yr old Mac Book Pro. I had been planning on doing this for over a year, but the timing was right and the laptop I wanted was in stock the day I stopped by to get some other information. So it was purchased. All the staff are most supportive and knowledgeable. Thanks guys."
        },
        {
            name: "Clay says:",
            feedback: "This company is a fantastic resource for those of us who upgrade our iOS and MacOS devices every year or two. They are fast, no-hassle and offer a very fair price and save the headaches involved with trying to sell your old device on any of the auction sites. I've probably used them close to ten times over the last three years and every transactions has been completely easy and painless."
        },
        {
            name: "Thomas McClara says:",
            feedback: "Very quick service, gave me a fair price for my computer and paid for shipping. I highly recommend them and would use them again. Thomas McClara"
        },
        {
            name: "Sue says:",
            feedback: "Highly recommend to everyone. My transaction was handled very efficiently with great communication along the way. How refreshing to find complete integrity and professionalism from start to finish."
        },
        {
            name: "Howard says:",
            feedback: "When I looked to selling my IPad, I searched the internet for a site that would meet my needs. Sellyourmac.com appeared to be the best. They proved this with a most professional and friendly operation. Emil response to my questions and keeping me informed of the status of my sale was quick and informative. I would recommend them to anyone interested in having the same feeling as I about the company."
        },
        {
            name: "Rachelle Lasco says:",
            feedback: "I was having issues with my iPhone display (basically, it went black with blue lines). After going to my cell phone provider and the apple store - I was told that my only option was to get a new phone. I really didn't want to purchase one since my contract is soon up and I was wanting to switch companies. I decided to try sell your mac to give it one last shot. I was so happy to find out that the display was something they could replace for my 4s and for a reasonable price! On top of that they had me in and out within the hour. While I was waiting, I was looking at some of the items they had for sale and was excited to see they had such great pricing. Also, I found to that all the staff that I encountered where super helpful and friendly. Sell Your Mac will not only be the first place that I go, but the only place."
        },
        {
            name: "Gina says:",
            feedback: "Absolutely the best way to recycle your old device. I've never had one issue with these guys. What they quote, is what you get. Thanks so much SYM!"
        },
        {
            name: "Walter says:",
            feedback: "Great experience. Received payment electronically in just 4 days!!! Shipped the iPhone to SYM on Monday, received payment on Thursday. Received email confirmations along the way. This is my second transaction with SYM and I can't recommend them enough. It's a pleasure doing business with you folks."
        },
        {
            name: "William Jones says:",
            feedback: "Great experience. Trustworthy, honest, and highly responsive. Highly recommended."
        },
        {
            name: "Jerry Bunn says:",
            feedback: "Service was fast and professional. They continually emailed me to keep me updated on what was happening. I would go back to them again, if I had another phone to sell."
        },
        {
            name: "Kevin K says:",
            feedback: "Selling a couple old iPhones to SellYourMac.com was a great experience! They communicated quickly, their instructions were clear, and it was so easy to send the phones with the FedEx labels they provided. Their emails were friendly and payment was prompt. I'm glad I found SellYourMac.com"
        },
        {
            name: "Robert Kern says:",
            feedback: "Honest company, true to their word and very efficient. Having done business with SYM for several years. Their competitors cannot match match them, no way."
        },
        {
            name: "Rik Tosun says:",
            feedback: "A very reputable company. All offers made to me were fair and ultimately honored. Excellent communication and rapid payment. Thanks!"
        },
        {
            name: "Vicky Stephens says:",
            feedback: "This company rocks! They are quick to respond with a fair quote and payment. As noted by others, they will upgrade your estimate as appropriate. Their consistent integrity is greatly appreciated and will keep me coming back as a customer. Highly recommended! :)"
        },
        {
            name: "Tony Kirkley says:",
            feedback: "This company SellYourMac.com is so AWESOME. I have used them several times over the years and have never been disappointed. They offer you a GREAT quote and dont go back on it. There service is OUT STANDING. I'm always recommending them to others. There HONEST, keep you informed, there FAST and never give you the run around. I like a company that you don't have a problem with. Anyway, you all keep up the great work. I will be a returning customer again."
        },
        {
            name: "Rachael says:",
            feedback: "I've had issues in the past selling things on eBay and Craigslist and was a little worried SYM was going to be no different. But the whole process was so painless and user friendly, and the rep I worked with was extremely friendly, honest, and transparent, that I would totally go this route again next time I sell old Mac products. Getting paid through PayPal super quickly was the cherry on top."
        },
        {
            name: "Cliff says:",
            feedback: "Selling my used MacBook Pro was a painless and simple procedure. I described my laptop and its condition and received a conditional price from SYM, which I believe was a fair price. After sending pictures of my computer, the original quote was further confirmed. Using the prepaid shipping label, I sent my MacBook off to SYM. In one week and four days, with an intervening three-day weekend, I had check in hand. I will use these people again!"
        },
        {
            name: "FrederickH says:",
            feedback: "I have made several sales to SellYourMac.com over the past several years and have never been disappointed. Their responses are very quick and the service is at the highest level I have ever experienced with any of the multiple online companies I do business with. Their prices are the best and fairest in the industry and they are extremely fast to pay the amount agreed to by both parties. I highly recommend this company to everyone including my family and friends."
        },
        {
            name: "Michael G says:",
            feedback: "SYM is the best! Quick payment, will use them again!"
        },
        {
            name: "Jim says:",
            feedback: "Friendly staff, excellent service, convenient location &amp; parking. I highly recommend."
        },
        {
            name: "Nikole says:",
            feedback: "Excellent customer service! Quick to respond to my questions, more than fair in their quote, and processed my selling of my macbook very quickly! Would recommend to anyone wanting to sell their mac! Thanks! :)"
        },
        {
            name: "James D says:",
            feedback: "Excellent experience. Very reasonable offer for my MacBook Air and good communication. Payment made in less that a week after being told it would be 1-2 weeks. My highest recommendation to this company."
        },
        {
            name: "donnie says:",
            feedback: "What can i say, these guys where awesome. Fast responses when you have questions, highest offer than other other site, and I got my payment in less than a week when I was told 1 to 2 weeks. And I was payed the amount I was quoted. No hidden fees or anything. Couldnt be happier with these guys. Keep up the good work"
        },
        {
            name: "Jim says:",
            feedback: "Great company to deal with. I sent my Macbook Pro to them from Canada and was paid by them like a week after the item was sent out! They offer me a great price for my item, paid quickly and there was good, courteous communication every step of the way. I would definitely recommend them."
        },
        {
            name: "Connie Rand says:",
            feedback: "I loved working with this company! They gave me a good estimate for my items, and even upgraded the estimate once they received them. They kept me informed, paid the shipping, and paid for the items as promised. I wouldn't hesitate to recommend them to others."
        },
        {
            name: "Sheri Kraft says:",
            feedback: "Amazingly fast from first email to payment. I am totally impressed! Thanks SYM!"
        },
        {
            name: "Mike says:",
            feedback: "SYM is the best... I would def use again!!!"
        },
        {
            name: "Blake says:",
            feedback: "Excellent service, that was very responsive throughout the entire process. Thank you Justin and thank you sellyourmac.com , I highly recommend your service."
        },
        {
            name: "Kathleen says:",
            feedback: "This is an outstanding company to work with. They work quickly and keep me informed every step of the way. I would recommend SYM to anyone needing this service!"
        },
        {
            name: "salvatore quattrocch says:",
            feedback: "awesome! reliable! fast! very professional businessmen. A+"
        },
        {
            name: "N Long says:",
            feedback: "I am very impressed. Shipped my iMAC in March,2013 which was in like-new condition and received the payment I was expecting in just a few days. I definitely recommend this company."
        },
        {
            name: "hugs313 says:",
            feedback: "This company is Great!! They gave quick responses to all my question they were helpful and really nice. I received my payment in full what they quoted me I would definitely use them again and refer people to them!"
        },
        {
            name: "Daniel Givens III says:",
            feedback: "I had a very good experience with SYM.The service was great the quote was the highest out there thank you SYM.I highly recommend anyone to do business with this seller A+++++."
        },
        {
            name: "Howard Spiegelman says:",
            feedback: "SYM is great! It’s provided first rate, consistently good, fast service to me over the past two years. I’ve used other companies in the past, including “Gazelle.” If you’re willing to provide to your own card, I believe SYM provides the best prices, best customer service, and consistent quick turnaround."
        },
        {
            name: "Donna Whittinghill says:",
            feedback: "Fantastic customer service. Smooth, easy process. Received my check quickly. I will use you again and recommend you to others. Thank you!"
        },
        {
            name: "Bruce Macdonald says:",
            feedback: "Like people before me I too was apprehensive when I packed up my 27' iMac and sent from Canada but all was fine and in a few days I got email that they received it and soon after I was told the check was in the mail. Very happy with the helpful service if need be I will not hesitate to use SYM or tell friends that I highly recommend and trust these people"
        },
        {
            name: "oren rosenbaum says:",
            feedback: "Incredible service. Very customer friendly, they talked me throughout the whole process. I will ABSOLUTELY come back or tell my friends to"
        },
        {
            name: "Naomi says:",
            feedback: "Excellent service for selling my Mac Display! Thank you. I highly recommend these people."
        },
        {
            name: "Lindsay Patterson says:",
            feedback: "I highly recommend this company/service as an outlet to get some $$ for old mac books. The process was smooth, easy, and they sent my check out NEXT DAY. Special shout out to Tyler King who gave me great service!"
        },
        {
            name: "Sean C. says:",
            feedback: "Outstanding company! I must confess I was apprehensive when I shipped off my MaBook Pro Retina 15' but the worries were completely unfounded. They stand behind their quotes and they thoroughly help you with every question ask. I will gladly do business with them again."
        },
        {
            name: "Bruce Bonbright says:",
            feedback: "Outstanding company! I must confess I was apprehensive when I shipped off my iMac but the worries were completely unfounded. This is a solid company. They stand behind their quotes and they thoroughly check out the computer and wipe the data. I received a check promptly and will definitely do business with them again. Their attention to detail and the way they check out the equipment makes me feel this would be an excellent source for used Macs - something I will definitely keep in mind!"
        },
        {
            name: "gc says:",
            feedback: "Great company, straight forward, no BS. I reviewed several options for selling my old macbook pro. After weeding out shady companies with ridiculous legal terms that were impossible to read, I settled on two that appeared to be trustworthy. SellYourMac won, and it's been a great experience. I'll definitely be using them again."
        },
        {
            name: "Robert Jones says:",
            feedback: "Truly a good experience. Advised of my product and condition and immediately received a quote. Sent my product in and received the money. No pain-no problems."
        },
        {
            name: "David R says:",
            feedback: "We purchased a new Macbook Air in the Summer 2012 and tried to adjust to it after being a Windows user forever. In November 2012, we decided we wanted to go back to Windows. We looked at the trade in programs at a retail store because they were local. The retail offer was too low. I checked online at a couple of sites and SYM beat all other offers by $100. I was nervous selling to any company I did not know. I checked the BBB website to confirm SYM was real and took the chance. Everything went great. I was fair in judging the condition of the laptop. I was worried that SYM may say that they found x and offer less money once they got the computer. This did not happen. I got the full amount of what was offered in the quote. Within 2 weeks of shipping the laptop, I had a check in the mail. To sum up: I got a honest transaction, a better price and a smooth process. Thank You. I will recommend you to others."
        },
        {
            name: "Jay says:",
            feedback: "As someone who does business with SYM frequently i can say it's truly a pleasure doing business! Professional and top quality service each and every time. Good value for old products and clear descriptions with good photos for listed items. I have been recommending SYM for a while now and will certainly continue to do so!"
        },
        {
            name: "TDS says:",
            feedback: "Fantastic Service! I have used another company in the past, but your service, communication and easy follow up far exceeded my expectations, and exceeded my previous experience. I will definitely be back!"
        },
        {
            name: "George Roberts says:",
            feedback: "Great service! I was very impressed with the speed and efficiency of the sale process. I am 100% satisfied, and will be a return customer."
        },
        {
            name: "Max &amp; Colleen says:",
            feedback: "Hi Brian, I wanted to thank you for the positive experience Colleen and I had with you and your staff on Friday. It was our initial encounter with you on Monday that motivated us to come back and make a purchase. You were very welcoming and attentive to our inquiries. We came away better informed and enjoyed the upbeat atmosphere of your company. Nick did a great job listening to our description of our needs, and found a product that was the right match for us. He has good people skills: making the effort to connect, helping us know more about the product, and having a sense of humor. We felt like we were being treated as valued customers, and that every effort was being taken to satisfy our needs. I've already told a friend about our experience and will be telling others. You'll probably be seeing us again soon. Keep up the good work!"
        },
        {
            name: "Robert Kern says:",
            feedback: "Excellent Company and Highly recommend. My two 4S's are the latest products purchased by Sell Your Mac. Every time they gave me a quote that's exactly what I received. I shopped their competitor to get the best price and their competitor came in much lower, almost an insult to my intelligence. Sell Your Mac is the best, fairest, and honest company to deal with."
        },
        {
            name: "Michelle C. says:",
            feedback: "Excited about the upcoming iPhone 5, I got an estimate from SellYourMac on my iPhone 4. It was so easy sending a few pictures and getting the prepaid envelope sent out. The turn around was very quick and I got my check in the mail 6 days after I shipped the phone off! Perfect timing to pay for my iPhone 5!! My husband was so impressed he is making me sell his 4S so he can upgrade as well. I would definitly recommend this to a friend!"
        },
        {
            name: "John Perry says:",
            feedback: "This firm is organized, efficient and does what they say they will do when they say they will do it. It is easier working with them selling an Apple product than it is buying an Apple product from my local Apple store."
        },
        {
            name: "Zack Meltzer says:",
            feedback: "Y'all are the absolute best! It's why I not only use your company every time a new apple goodie comes out, but also why I recommend you to everyone I can."
        },
        {
            name: "Tony Major says:",
            feedback: "Hi just received the Imac I purchased 7/30/12, GREAT!!! shipping packing and so far computer. You have made a retired guy very happy. Will leave feedback on Ebay in a few days after I use the Imac for awhile. Thank you for the sale price, that means alot to someone like me. Again Thank you"
        },
        {
            name: "Gary Landherr says:",
            feedback: "I have worked with SYM several times over the last couple years and their communication and service is the best. Thanks"
        },
        {
            name: "JD says:",
            feedback: "THANK YOU so much for a flawless transaction on a beautiful MacBook Pro! Excellent company to buy from, I would recommend in a heartbeat."
        },
        {
            name: "Karen says:",
            feedback: "I am very impressed with 'Sell Your Mac.' The staff kept in contact with me during the evaluation of my mac. They are very prompt in answering any question and very upfront about everything. My assessment of this business is: reliable, ethical, and dependable. I will not hesitate to use their services again, and I will recommend them to family and friends."
        },
        {
            name: "Warren says:",
            feedback: "Really a good deal. I received clear instructions and the SellYourMac group did exactly would they said they would."
        },
        {
            name: "Kurt says:",
            feedback: "This is the first time we have used Sell Your Mac, and it certainly will not be the last. These guys were excellent to deal with, professional and timely. They went above and beyond when my computer arrived damaged due to FEDEX shipping. They filed the claim, kept me informed and payment was never delayed. Excellent company, highly recommend."
        },
        {
            name: "Liz Bass says:",
            feedback: "This is the first time I have used SellYourMac and was surprised how easy it was. They are quick to respond to questions and sent my check as soon as they checked out my mini and replaced the internet connection card. The 3 easy steps are just that. I would recommend them to anyone and will remember to use them again."
        },
        {
            name: "Jim says:",
            feedback: "My wife had upgraded to a newer iPhone last summer which left her older iPhone 3G just sitting around gathering dust. I got a promotional email through MacWorld for sellyourmac. I decided to try it. It was easy. Just took a few pictures of the iPhone and sent them in and I received a quote followed by a prepaid mailer. That was it. I received the quoted payment in the mail yesterday. No hassles at all. So our dust gathering iPhone was converted into cash. I was a little disappointed though as I also have a G5 PPC iMac that I would just as soon get rid of. Unfortunately, sellyourmac will no longer take PPC macs. But, I would definitely recommend this service to my friends and would also consider buying used mac/iOS equipment from their ebay site. Jim"
        },
        {
            name: "Steve Reiss says:",
            feedback: "This is also my second time selling an iPad to Sellyourmac and the deal was as before, very fair and very easy to consummate. It's so nice to know that my immaculate older Apples are going to a dependable buyer thru the services of Brian, Tyler and the rest of their team. Nice going, guys! See you again soon when the new MacBook Pro comes out......and my wife gives me the thumbs up. Steve"
        },
        {
            name: "Marc Wilcox says:",
            feedback: "I have sold 2 laptops through this company and have had a positive experience. Appreciate the expediency of the response. Always pays fair market value. Thanks again"
        },
        {
            name: "Lorrie says:",
            feedback: "I've sold my Apple stuff to sellyourmac.com 3 times now and gotten the exact amount quoted every time. Very honest and reputable company. Will be selling them my iPhone 4 when the 5 comes out!"
        },
        {
            name: "Becky McElliott says:",
            feedback: "This is the 2nd time I have sold an 'I' device to this company. I was impressed at the professionalism and prompt response. They provided all the necessary instructions and kept me informed of the progress of the transaction. They also gave a better price than the Apple trade-in or other electronic recycle websites. I especially feel safe with the BBB approval on their advertisement. Definitely will use again."
        },
        {
            name: "steve says:",
            feedback: "First time I used this sit and it worked just as described I would definately use them again"
        },
        {
            name: "Joe Newton says:",
            feedback: "I always use 'Sell yourMac' every time I upgrade. I get a no hassle fair price, fast processing and fast payment."
        },
        {
            name: "Cherish says:",
            feedback: "The sellyourmac.com team was a pleasure to work with, the process was easy as pie, and they gave my more for my old, harddrive failing Macbook than I thought I would ever get (and about 7 times as much as Gazelle.com would have offered). I'd recommend it to anyone who need to get rid of their old Apple products and I'll certainly remember it for the future."
        },
        {
            name: "nicky says:",
            feedback: "i have used Sell Your Mac twice and have been satisfied both times. i was especially happy that they took an old mini. i had no problems with them at all."
        },
        {
            name: "Dominic Meece says:",
            feedback: "GREAT EXPIERIENCE BUYING FROM YOU GUYS. IM HAPPY WITH MY G5 iMac, It couldnt had been in better condition. Took No time to arrive and Im a happy Customer. Thank You Once Again!"
        },
        {
            name: "Dennis says:",
            feedback: "I've used other computer/smart phone resale services before and have had to either hassle with them or file complaints with the Better Business Bureau. I can say confidently that sellyourmac.com is an honest, reputable service with no hassle, fair and quick payment, and outstanding customer service. Highly recommended!"
        },
        {
            name: "Dawn says:",
            feedback: "This is the second time I have utilized sellyourmac and have been very pleased with the manner in which the transactions were handled. Sellyourmac were very responsive to my questions, paid the amounts quoted and paid promptly. It was a pleasure to deal with Sellyourmac and I will do so in the future"
        },
        {
            name: "Mike E says:",
            feedback: "Just sold my iPhone 4 and it was a smooth transaction. They answered all of my inquiries promptly and they paid me what they said they would. I'd definitely do business with them again."
        },
        {
            name: "C. Biondolillo says:",
            feedback: "I just sold 2 iPhones on sellyourmac.com and it was very easy, the quotes were very accurate, the communication was terrific and receiving my money through pay pal was a breeze. If I have any more Mac products I would use them for sure."
        },
        {
            name: "Al Z.. says:",
            feedback: "Very pleased with the customer service and follow-through, as promised. I would use this company again."
        },
        {
            name: "MacMentor says:",
            feedback: "I sold my MacPro to SellYourMac.com earlier this year and because it was such a smooth process, I contacted them for the sale of my iPhone 3. I got a check in both cases as promised. Last week, I sent them my wife's iPhone 3GS, too. I have recommended SellYourMac.com to others because of their consistent hassle-free transactions."
        },
        {
            name: "Q. Wilson says:",
            feedback: "This is my second interaction with these folks. They are completely trustworthy and provide excellent customer service. I sold my iPhone 4 for exactly what they quoted and got the check in a timely manner. I'll be back with more to sell in the future."
        },
        {
            name: "Larry J. Burton says:",
            feedback: "This was my first experience with 'Sell Your Mac' and it was a real pleasure. They are GREAT in the Transaction and Communication process from beginning to end! I recommend them strongly!"
        },
        {
            name: "Michael says:",
            feedback: "Very easy transaction. They do exactly what they say they will. I'll use this service again!"
        },
        {
            name: "Robin and Rob says:",
            feedback: "This is the second time we dealt with this company and it has truly been both great times. Very easy company to work with. We would certainly recommend them!!"
        },
        {
            name: "Fran says:",
            feedback: "WOW. I just received my payment for my IPHONE 4. They are fast! I am very pleased with these guys. Easy to do business with."
        },
    ];    

    return (
        <>
            <section className='py-10 relative'>
                <div className="container">
                    <div className='flex items-start gap-8 md:flex-nowrap flex-wrap'>
                        <div className='space-y-5 roboto w-full'>
                            <h1 className="text-[32px] font-bold leading-tight exo">Customer Feedback for SellYourMac</h1>
                            <div className='border border-[rgba(214,214,214,0.831372549)] rounded-[10px] block p-[25px] mt-10 mb-10 text-[#333] bg-white'>
                                <a href="#0" className='flex justify-center'>
                                    <img src={start} alt="" />
                                </a>
                            </div>
                            <div>
                                {review.map((user) => (
                                    <div className="bg-white mb-[25px] border border-[rgba(214,214,214,0.831372549)] rounded-[10px] block p-[25px]">
                                        <h3 className='text-[24px] font-semibold mb-5 exo'> {user.name}</h3>
                                        <p> {user.feedback}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feedback
