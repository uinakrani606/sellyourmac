import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const QuickLinks = () => {
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        if (value) {
            navigate(value);
        }
    };
    return (
        <>
            <div className="max-w-[250px] w-full bg-white p-[25px] border border-[rgba(42,142,158,0.2)] rounded-[1rem] sticky top-[122px] md:block hidden min-w-[250px]">
                <div>
                    <ul>
                        <li><h2 className="mb-5 font-bold !text-[18px]">Quick Links</h2></li>
                        <li className='text-primary text-sm py-1.5 roboto'>
                            <Link to="/">Home Page</Link>
                        </li>
                        <li className='text-primary text-sm py-1.5 roboto'>
                            <Link to="/how-works">How it Works</Link>
                        </li>
                        <li className='text-primary text-sm py-1.5 roboto'>
                            <Link to="/sell">Sell Your Mac</Link>
                        </li>
                        <li className="text-primary text-sm py-1.5 roboto">
                            <Link to="/about-sell-your-mac">Sell In Bulk</Link>
                        </li>
                        <li className="text-primary text-sm py-1.5 roboto">
                            <Link to="/apple-mac-business-solutions">Business Solutions</Link>
                        </li>
                        <li className="text-primary text-sm py-1.5 roboto">
                            <Link to="/Feedback">Feedback</Link>
                        </li>
                        <li className="text-primary text-sm py-1.5 roboto">
                            <Link to="#0">Apple Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full md:hidden block'>
                <h3 className="mb-5 font-bold text-lg text-center">Quick Links</h3>
                <select onChange={handleChange} className='className="focus:outline-none product-select appearance-none roboto text-black text-[12px] block pr-[30px] border border-gray-300 rounded h-12 px-4 py-2 w-full box-border shadow-none"'>
                    <option value="">-- Select an Option --</option>
                    <option value="/">Home</option>
                    <option value="/how-works">How it Works</option>
                    <option value="/about-sell-your-mac">Sell Your Mac</option>
                    <option value="/about-sell-your-mac">Sell In Bulk</option>
                    <option value="/apple-mac-business-solutions">Business Solutions</option>
                    <option value="/Feedback">Feedback</option>
                    <option value="#0">Apple Blog</option>
                </select>
            </div>
        </>
    )
}

export default QuickLinks
