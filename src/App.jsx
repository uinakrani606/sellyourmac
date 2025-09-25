import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import HowWorks from './pages/HowWorks';
import AboutSellYourMac from './pages/AboutSellYourMac';
import SellInBulk from './pages/SellInBulk';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import Sell from './pages/Sell';
import ProductDetails from './pages/ProductDetails';
import Confirm from './pages/Confirm';
import AppleMacBusinessSolutions from './pages/AppleMacBusinessSolutions';
import Partners from './pages/Partners';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import MacSupport from './pages/MacSupport';
import Feedback from './pages/Feedback';
import EmploymentAtSym from './pages/EmploymentAtSym';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-works" element={<HowWorks />} />
          <Route path="/about-sell-your-mac" element={<AboutSellYourMac />} />
          <Route path="/mac-bulk-buy-back" element={<SellInBulk />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apple-mac-business-solutions" element={<AppleMacBusinessSolutions />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/sell/:id" element={<ProductDetails />} />
          <Route path="/sell/confirm" element={<Confirm />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/mac-support" element={<MacSupport />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/employment-at-sym" element={<EmploymentAtSym />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
