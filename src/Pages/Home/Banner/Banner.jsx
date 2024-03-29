import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/Ldkx1LZ/alumni2.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-70"></div>
            <div className="hero-content text-center text-white">
                <div className="">
                    <h1 className="mb-7 text-5xl font-bold brandFont text-white max-w-md mx-auto"><span className="text-primary">We Are Proud</span> <br /> <span>Student of <span className="text-secondary">PCIU</span></span></h1>
                    <p className="mb-5 font-bold text-base">Where Memories Flourish and Connections Endure. Join us in celebrating the past, embracing the present, and building a vibrant future together. Discover lifelong friendships, professional networks, and endless opportunities for growth. Connect, engage, and make your mark with us today!</p>
                    <div className='relative flex items-center justify-center  mx-auto mt-8 gap-5'>
                        <Link className="myBtn" to="/login" >Join Us</Link>
                        <Link className="myBtnSec" to="/directory" >Our Alumni</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;