import { Link } from "react-router-dom";

const Mission = () => {
    return (
        <section className="px-5">
            <div className="hero my-28">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img src="https://i.ibb.co/31CVPpx/alumni1.jpg" className="rounded-lg shadow-2xl lg:max-w-lg" />
                    <div>
                        <h1 className="text-5xl font-bold brandFont text-primary">Our Mission</h1>
                        <p className="py-6 font-medium">At our Alumni Association, our mission is clear: to foster a dynamic community where alumni from all walks of life can come together to support, inspire, and empower one another. We strive to nurture lifelong connections, promote professional development, and celebrate the achievements of our members. Through collaborative initiatives and meaningful engagement, we aim to create a legacy that enriches the lives of current and future alumni, while also making a positive impact on society as a whole. Join us as we embark on this journey of growth, learning, and camaraderie. Together, we can make a difference and leave a lasting legacy that echoes through generations.</p>
                        <Link to="/career" className="myBtnSec">Career</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;