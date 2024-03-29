import { Link } from "react-router-dom";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <aside>
                <Link to="/" className='flex flex-col items-center'>
                    <h1 className="brandFont font-bold text-5xl text-primary">AA</h1>
                    <p className='font-bold brandFont -mt-2'>Alumni Association</p>
                </Link>
                <p className='mt-3 text-gray-300'>Alumni Association: Connecting Alumni, <br /> Shaping Futures: Your Link to Legacy and Opportunity.</p>
            </aside>
            <nav>
                <header className="brandFont text-xl font-bold">Userfull Link</header>
                <Link to="/" className="link link-hover text-gray-300 mt-5">Home</Link>
                <Link to="/committee" className="link link-hover text-gray-300">Committee</Link>
                <Link to="/directory" className="link link-hover text-gray-300">Directory</Link>
                <Link to="/career" className="link link-hover text-gray-300">Career</Link>
                <Link to="/about" className="link link-hover text-gray-300">About</Link>
            </nav>
            <nav>
                <header className="brandFont text-xl font-bold">Contact Now</header>
                <Link className="link link-hover text-gray-300 mt-5">555 4th 5t NW, Washington <br />
                    DC 20530, United States</Link>
                <Link className="link link-hover text-gray-300 mt-2">+88 01750 000 000</Link>

                <Link className="link link-hover text-gray-300 mb-2">+88 01750 000 000</Link>

                <Link className="link link-hover text-gray-300">info@gmail.com </Link>
                <Link className="link link-hover text-gray-300">info@gmail.com </Link>
            </nav>
            <nav>
                <header className="brandFont text-xl font-bold">Subscribe</header>
                <p className='text-gray-300 mt-5'>Subscribe for our latest & <br /> Articles. We Won’t Give You <br /> Spam Mails</p>
                <div className='relative flex items-center mt-3'>
                    <input type="text" placeholder='Email Address' className='px-4 py-3 rounded-md placeholder:text-xs placeholder:outline-none' />
                    <button className='bg-primary py-3 px-3 rounded-r-md absolute right-0'>
                        <IoPaperPlaneOutline className='h-5 w-5' />
                    </button>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;